# GitHub Scripts and Automation

This directory contains scripts and documentation for GitHub Actions automation in the Orionrobots repository.

## Features

### Automated Docker Image PR Comments

When a Pull Request modifies files that affect the base Docker image (such as `Dockerfile`, `package.json`, `package-lock.json`, or workflow files), the CI system automatically:

1. **Detects changes** to base image related files
2. **Builds and pushes** a Docker image tagged with the PR number to `ghcr.io/orionrobots/orionrobots-site.base:${PR_NUMBER}`
3. **Comments on the PR** with a direct link to the newly built Docker image

#### How it works

The automation is implemented in `.github/workflows/on_pr_test.yaml`:

- **Detection**: The `detect_base_image_changes` job uses `tj-actions/changed-files` to detect changes to base image files
- **Build**: If changes are detected, the `build_site` job builds and pushes the image with the PR number as tag
- **Comment**: The `comment_docker_image` job creates or updates a comment on the PR with the image details

#### Benefits

- **Easy access**: Reviewers and team members can quickly find and use the Docker image built for a specific PR
- **No searching**: No need to dig through workflow logs or GitHub Package registry
- **Idempotent**: Comments are updated rather than duplicated when the image is rebuilt
- **Clear instructions**: The comment includes copy-paste commands for using the image

#### Comment format

The automated comment includes:
- Direct link to the Docker image
- Instructions for pulling and running the image
- Usage examples for local development
- Clear indication that the comment is automatically managed

#### Permissions and fork compatibility

- **Internal PRs**: Full functionality with automatic image building and commenting
- **Forks**: May have limited access to push images depending on repository settings
- **Security**: Uses minimal required permissions (`pull-requests: write` for commenting)

### Scripts

- `new_post.sh`: Script for creating new blog posts with proper folder structure
- `staging/`: Configuration files for staging environment setup

## Maintenance

The Docker image commenting system is self-maintaining and requires no manual intervention. If issues arise:

1. Check the workflow logs in GitHub Actions
2. Verify that the GitHub token has appropriate permissions
3. Ensure the base image build completed successfully before the comment job runs