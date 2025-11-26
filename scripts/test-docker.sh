#!/usr/bin/env bash

###############################################################################
# Script: test-docker.sh
#
# Description:
#   Runs tests against a Docker Compose environment. This script:
#   1. Builds and starts Docker containers
#   2. Waits for services to initialize
#   3. Executes Playwright tests
#   4. Ensures containers are cleaned up regardless of test outcome
#
# Platform Compatibility:
#   - Linux: Full support
#   - macOS: Full support
#   - Windows: Requires WSL or Git Bash with Docker Desktop
#
# Environment Variables:
#   CI              - If unset, loads .env file; if set, skips .env loading
#   TEST_DOCKER     - Set to 1 during test execution to control env vars
#   BUILDKIT_PROGRESS - (optional) Set to 'plain' for verbose Docker output
#
# Usage:
#   ./scripts/test-docker.sh
#
# Exit Codes:
#   0 - Tests passed
#   1 - Tests failed or Docker operations failed
#
###############################################################################

set -e  # Exit on any error

# Optional: Use plain Docker build progress for easier debugging
# Uncomment the line below for verbose Docker output
# export BUILDKIT_PROGRESS=plain

# Build arguments array for docker compose command
# Uses modern 'compose.yml' filename (Docker Compose v2+)
args=("-f" "compose.yml")

# Load .env file only in non-CI environments
# CI systems typically pass env vars through their platforms
if [ -z "${CI}" ]; then
  args+=("--env-file" ".env")
fi

# Add standard compose up flags
args+=("up" "--detach" "--build")

echo "Running: docker compose ${args[*]}"

# Start Docker Compose with error handling
if ! docker compose "${args[@]}"; then
  echo "Error: Failed to start Docker containers" >&2
  exit 1
fi

# Wait for container initialization and service stability
# 10 seconds is typically sufficient for most services to be ready
echo "Waiting 10 seconds for container services to initialize..."
sleep 10

# Set test environment marker for Playwright to use correct env vars
# This helps distinguish between local and Docker-based test environments
export TEST_DOCKER=1

# Run Playwright tests with error handling
# Ensures docker compose down is called regardless of test result
echo "Starting Playwright tests..."
if playwright test -c ../../../packages/utils/playwright.config.ts; then
  # Tests passed - clean exit with container cleanup
  echo "Tests passed. Cleaning up containers..."
  docker compose down
  exit 0
else
  # Tests failed - cleanup and exit with error code
  echo "Tests failed. Cleaning up containers..." >&2
  docker compose down
  exit 1
fi