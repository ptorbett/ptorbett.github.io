---
title: Developer CLI Tool
date: 2024-01-20
featured: true
problem: Repetitive development tasks slowed down the team's daily workflow
solution: Built a unified CLI with commands for common dev operations
result: Saved ~30 minutes per developer per day on routine tasks
tags:
  - developer-tools
  - rust
  - cli
---

# Developer CLI Tool

A command-line tool that streamlines common development tasks and enforces team conventions.

## The Problem

Our development workflow involved many repetitive tasks:
- Spinning up local services with the right environment
- Running database migrations and seeding test data
- Deploying to staging environments
- Checking PR status and running pre-merge checks

Developers were spending significant time on these routine operations, often with inconsistent approaches.

## The Solution

I created a unified CLI tool (written in Rust for speed) that handles:

### Local Development

```bash
dev up                 # Start all local services
dev db migrate         # Run pending migrations
dev db seed            # Load test data
dev logs api           # Stream logs from a service
```

### Deployment

```bash
dev deploy staging     # Deploy current branch to staging
dev deploy status      # Check deployment status
dev rollback staging   # Quick rollback if needed
```

### Code Quality

```bash
dev check              # Run lints, tests, type checks
dev pr create          # Create PR with template
dev pr status          # Check CI status
```

## Key Features

1. **Shell completions** for bash, zsh, and fish
2. **Configuration file** for project-specific customization
3. **Parallel execution** where possible for speed
4. **Clear error messages** with suggested fixes

## Implementation Details

Built with Rust using:
- `clap` for argument parsing
- `tokio` for async operations
- `indicatif` for progress bars
- `dialoguer` for interactive prompts

The tool integrates with:
- Docker Compose for local services
- Kubernetes for deployment
- GitHub API for PR operations
- PostgreSQL for database management

## Results

- **~30 minutes saved** per developer per day
- **Consistent environments** across the team
- **Fewer "works on my machine"** issues
- **Better adoption** of code quality practices

## Lessons Learned

- Invest in good error messages early
- Shell completions dramatically improve UX
- Making the right thing easy beats documentation
