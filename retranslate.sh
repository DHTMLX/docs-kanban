#!/bin/bash

# Translation Update Script
# Usage: ./update_translations.sh <repo_path> <source_folder> <target_folder> <revision>

set -e  # Exit on any error

# Check if required arguments are provided
if [ $# -ne 5 ]; then
    echo "Usage: $0 <repo_path> <source_folder> <target_folder> <revision> <prompt>"
    echo "  repo_path: Path to the git repository"
    echo "  source_folder: Source folder path relative to repo (e.g., 'docs/markdown')"
    echo "  target_folder: Target folder where processed results are stored"
    echo "  revision: Git revision to compare against (e.g., HEAD~1, commit_hash)"
    echo "  lang: target language"
    exit 1
fi

REPO_PATH="$1"
SOURCE_FOLDER="$2"
TARGET_FOLDER="$3"
REVISION="$4"
LANG="$5"

# Validate paths
if [ ! -d "$REPO_PATH" ]; then
    echo "Error: Repository path '$REPO_PATH' does not exist"
    exit 1
fi

if [ ! -d "$REPO_PATH/.git" ]; then
    echo "Error: '$REPO_PATH' is not a git repository"
    exit 1
fi

if [ ! -d "$TARGET_FOLDER" ]; then
    echo "Error: Target folder '$TARGET_FOLDER' does not exist"
    exit 1
fi

# Change to repository directory
cd "$REPO_PATH"

# Verify revision exists
if ! git rev-parse --verify "$REVISION" >/dev/null 2>&1; then
    echo "Error: Revision '$REVISION' does not exist in the repository"
    exit 1
fi

echo "Repository: $REPO_PATH"
echo "Source folder: $SOURCE_FOLDER"
echo "Target folder: $TARGET_FOLDER"
echo "Comparing against revision: $REVISION ($(git rev-parse --short $REVISION))"
echo "Current revision: $(git rev-parse --short HEAD)"
echo ""

# Get list of modified markdown files since the specified revision
echo "Finding modified markdown files since revision $REVISION..."
MODIFIED_FILES=$(git diff --name-only --diff-filter=AM "$REVISION" HEAD -- "$SOURCE_FOLDER" | grep '\.md$' || true)

if [ -z "$MODIFIED_FILES" ]; then
    echo "No modified markdown files found in '$SOURCE_FOLDER' since revision $REVISION"
    exit 0
fi

echo "Found modified markdown files:"
echo "$MODIFIED_FILES"
echo ""

# Process each modified file
while IFS= read -r file; do
    if [ -z "$file" ]; then
        continue
    fi
    
    echo "Processing: $file"
    
    # Extract filename without path
    filename=$(basename "$file")
    
    # Get original content from the specified revision
    echo "  Reading original content from revision $REVISION..."
    TEMP_PROMPT_ORIGINAL=$(git show "$REVISION:$file" 2>/dev/null || echo "")
    if [ -z "$TEMP_PROMPT_ORIGINAL" ]; then
        echo "  Warning: Could not get file content from revision $REVISION (file might be new)"
    fi
    
    # Get diff content
    echo "  Creating diff..."
    TEMP_PROMPT_DIFF=$(git diff "$REVISION" HEAD -- "$file" || echo "")
    
    # Find corresponding target file (processed result) and read its content
    # Remove source folder prefix and look for the file in target folder
    # Handle both cases: with and without trailing slash in SOURCE_FOLDER
    if [[ "$file" == "$SOURCE_FOLDER/"* ]]; then
        relative_path="${file#$SOURCE_FOLDER/}"
    else
        relative_path="${file#$SOURCE_FOLDER}"
        relative_path="${relative_path#/}"  # Remove leading slash if present
    fi
    target_file="$TARGET_FOLDER/$relative_path"
    
    echo "  Reading previous translation..."
    if [ -f "$target_file" ]; then
        TEMP_PROMPT_TRANSLATION=$(cat "$target_file")
        echo "  Found existing target file: $target_file"
    else
        TEMP_PROMPT_TRANSLATION=""
        echo "  Warning: Target file not found: $target_file"
        echo "  Creating directory structure..."
        mkdir -p "$(dirname "$target_file")"
        echo "  Attempt direct translation $file"
        result=$(cat $file | gptit complete --model gpt-4.1 --prompt translate-v1/en-$LANG)
        echo "$result" > "$target_file"
        continue
    fi
    
    # Export environment variables with content
    export TEMP_PROMPT_ORIGINAL
    export TEMP_PROMPT_TRANSLATION
    export TEMP_PROMPT_DIFF
    
    echo "Environment variables set with content:"
    echo "  TEMP_PROMPT_ORIGINAL (${#TEMP_PROMPT_ORIGINAL} characters)"
    echo "  TEMP_PROMPT_TRANSLATION (${#TEMP_PROMPT_TRANSLATION} characters)"
    echo "  TEMP_PROMPT_DIFF (${#TEMP_PROMPT_DIFF} characters)"
    echo ""
    
    result=$(gptit complete --prompt translate-v1/en-$LANG-update --model gpt-4.1 "")
    # Save the result to the target file
    if [ -n "$result" ]; then
        echo "$result" > "$target_file"
        echo "  result (${#result} characters)"
        echo "  Updated target file: $target_file"
    else
        echo "  Error: Processing returned empty result"
    fi
    
    # Clean up environment variables for security
    unset TEMP_PROMPT_ORIGINAL
    unset TEMP_PROMPT_TRANSLATION
    unset TEMP_PROMPT_DIFF
    
    echo ""
done <<< "$MODIFIED_FILES"

echo "Processing completed!"