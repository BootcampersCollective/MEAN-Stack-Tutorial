# This is a walk through of a git story using branching, merging, rolling back a commit, etc.
mkdir git-demo                  # create a new directory for a new project
cd git-demo
git init                        # create a repository
ls -a                           # see .git directory
echo Line 1 > file1             # create a file1
git add .                       # add the file to staging, or use 'git add -A''

# attach to remote on github
# **** Go to github.com and create a new public repository with a README.md ****
git remote add origin https://github.com/RefactorU/git-demo
git status
git pull origin master          # pull down the README.md
git status                      
git push origin master          # push up the file1

# continue developing
git commit -m "file1 Line 1initial commit" # commit the file in staging to the repo
echo Line 2 >> file1            # modify file1
echo Line a > file2             # create a file2
git add file2            # add the new file to staging
git commit -m "add file2 Line a"       # commit file2 to the repo
git log | cat                        # show the repo log  (cat to prevent more pagination)
git status                      # show the workspace status
git commit -m "file1 add Line2"     # fails, nothing in staging
git add file1                   # add the file to staging
git commit -m "file1 Line2"     # commit the file to the repo

# push everything up to github
git push origin master

# DISK CRASH - get it all back
cd ..
rm -rf git-demo
ls
git clone https://github.com/RefactorU/git-demo
cd git-demo
ls

# create and add some files
cat << END > file3
Line 1
Line 2
Line 3
Line 4
END
cat << END > file4
Line A
Line B
Line C
Line D
END
git add -A
git status                      # see the files in the staging area
git commit -m "add multiline file3 Lines 1-4 and file4 Lines A-D"
git log | cat
git log --all --graph --decorate # a more visual/pretty version of git log
git log --oneline --all --graph --decorate # a more brief version of the pretty logging

# show git diff
cat << END > file2             # change file2
Line A
END
git diff file2                  # diff the working file with the latest repo version
git add file2
git commit -m "change file2 Line A"
git diff file2                  # no diff

# show git tag
git tag -a v0.1 -m "files 1-4" # tag this spot

# push everything up to github
git push origin master

# make a mistake and check it in
cat << END >> file1
Line C
Line D
END
git add -A
git commit -m "file1 add Line C and D"

# push everything up to github
git push origin master

# create a test branch
git branch                      # shows only master branch
git branch test1                # create a test branch
get tag -a v1.0 -m "test 1"     # tag our commit as a milestone

# push the test1 branch to github
git push origin test1

# note that tag exists locally but not in github
git push origin v0.1   # tags are treated like branches.  you need to push a tag to have it go to github.



# back to development branch, create a couple of new files
git checkout master
cat << END > file5
Line 1
Line 2a
Line 3
END
git add file5
cat << END > file6
Line A
Line B
Line C
END
git status                          # a file tracked but not committed (file5) and a file not tracked (file6)
git add file6                       # track this last file
git commit -m "add file5 and file6" # check the files in

git push origin master

# test thinks they found a bug.  Go back and look at the previous version of file1.
cat file1                       # show the contents of the file
git log --oneline --all --graph --decorate  # show the log, look at commit # and tag
git checkout v0.1               # checkout before previous commit, again - the checkout is just like checking out a branch
cat file1                       # the file is reverted
git diff file1                  # but there is no diff with the repo
git log --oneline --all --graph --decorate  # but we can see that the head is still out there
git checkout master             # checkout head commit


# test has identified a bug in test1/file1
git checkout test1
cat file1
cat << END > file1  # 'fix' the bug
Line 1
Line 2
Line 3
Line 4
END
cat file1           # bug looks fixed

# let's throw a conflict in on a new file
cat << END > file5
Line 1
Line 2b
Line 3
END
# and throw a change in on another new file
cat << END > file6
Line A
Line C
Line D
END

git add -A
git commit -m "fix file1 in release and add file5 and file6"

git push origin test1           # push to the test1 branch

# create a release branch
git branch release1
git tag -a v1.1 -m "rel1"

git push origin release1            # push to the new release1

# go to development branch and merge the bug fix back in from test1 branch
git checkout master
ls
# file1 merges trivially, file6 merges automatically, but we have a conflict with file5
git merge test1 -m "merge test1 fix to file1 into master and add file5 and file6" 

cat file5       # see the merge conflict
# fix the merge conflict
cat << END > file5
Line 1
Line 2a
Line 2b
Line 3
END

ls

# finish the manual merge
git add -A
git commit -m "fix merge conflict in file5, Line 2a/2b"
git push origin master          # push changes to development master

git branch -a  # show all our branches, local and remote

# create another local branch
git branch hotfix

# create a new file on the master
cat << END > file7
Line A
Line B
Line C
Line D
END
git add -A
git commit -m "add file7"

cat << END > file8
Line A
Line B
Line C
Line D
END

# push the branch up to github
git push origin hotfix

git status  # see that we are 1 commit ahead of head and 1 file is untracked

git revert HEAD~ -m "revert the previous commit - add file7" # backout previous commit

ls
git checkout master
ls

git branch -a  # show all our branches, local and remote including hotfix
git branch -d hotfix
git branch -a  # show all our branches, local and remote, hotfix is gone locally, but still there remotely
# to delete a branch from github, push the deleted branch - referring to the branch with a colon
git push origin :hotfix  
Contact GitHub API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Status Help