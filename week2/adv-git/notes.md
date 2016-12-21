# GIT
Git is a source control management (SCM) system that serves to both back up your files as well as allow others to collaborate with you on the same files.

## Git Commands

### One time commands:
- git init  - initialize a local repository
- git remote add origin https://github.com/USER/REPO   - links the local repository with a repository on github.

**NOTE** you must first create that (empty) repository on github in order to link it to your local repository

### Everyday commands:
- git add -A  - add all files/directories to a staging area
- git commit -m "comment"   - commit the files in staging to the repository
- git push origin master    - push changes from the local to the github repository
- pull pull origin master   - pull changes from github to your local repository
- git status                - what not tracked, is in staging, is ready to commit
- git log                   - show all of the history of commits for the repository
- git log --oneline --all --graph --decorate      - a simpler, more graphical version of git log
- git diff FILENAME         - show the differences between the file on the file system and the most recent version in your local repository

### Occasional commands:
- git tag -a TAGNAME     - tag a commit with a special name/version number
- git checkout TAGNAME   - checkout the version of code as it was when the TAGNAME was applied
- git branch             - show all git branches
- git branch BRANCHNAME  - create a new branch named BRANCHNAME
- git checkout BRANCHNAME - move to the given branch
- git revert COMMIT# (or HEAD~, or whatver) revert to a previous version of the repository


## GIT Branching
Git defaults to the `master` branch.  This is the main line for the repository.

You can branch from the mainline `master` branch to create a copy of the repository as it is and work in the branch without affecting the master branch.

Typical reasons for a branch would include:

Long-term branches
- Master - live production code, MUST not break
- Develop - merges into master, SHOULD not break

Short-term branches
- feature/ - branch off develop, merge into develop
- bugfix/ - branch off develop, merge into develop
- hotfix/ - branch off master, merge into master

