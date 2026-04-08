param(
  [Parameter(Mandatory = $false)]
  [string]$Message = ""
)

$ErrorActionPreference = "Stop"

function Assert-CommandExists([string]$cmd) {
  if (-not (Get-Command $cmd -ErrorAction SilentlyContinue)) {
    throw "Required command not found: $cmd. Please install it and ensure it's on PATH."
  }
}

Assert-CommandExists "git"

# Ensure we're in a git repo
& git rev-parse --is-inside-work-tree *> $null
if ($LASTEXITCODE -ne 0) {
  throw "This folder is not a git repository. Run this script from your repo root."
}

# Fetch current branch and ensure we have an origin remote
$branch = (& git branch --show-current).Trim()
if ([string]::IsNullOrWhiteSpace($branch)) {
  throw "Could not determine current branch. Are you in a detached HEAD state?"
}

& git remote get-url origin *> $null
if ($LASTEXITCODE -ne 0) {
  throw "Remote 'origin' is not configured. Run: git remote add origin <your-repo-url>"
}

# Stage everything (tracked + new files). Respects .gitignore
& git add -A

# If nothing to commit, still push (useful if you rebased or pulled)
$status = (& git status --porcelain)
if ([string]::IsNullOrWhiteSpace($status)) {
  Write-Host "No local changes to commit."
  Write-Host "Pushing current branch '$branch' to origin..."
  & git push origin $branch
  exit 0
}

if ([string]::IsNullOrWhiteSpace($Message)) {
  $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
  $Message = "Update site ($timestamp)"
}

Write-Host "Committing with message: $Message"
& git commit -m $Message

Write-Host "Pushing branch '$branch' to origin..."
& git push origin $branch

Write-Host "Done."
