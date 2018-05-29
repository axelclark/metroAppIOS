# How to contribute

I'm really glad you're reading this, because contributions are very welcome.  This is my first React-Native app so any recommended improvements are appreciated.  Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved!

We currently use the [Issue Tracker](https://github.com/axelclark/metroAppIOS/issues) to track and discuss bugs, features, and any other topics related to the project.

## Pull Requests
Good pull requests - patches, improvements, new features - are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

**IMPORTANT**: By submitting a patch, you agree that your work will be licensed under the license used by the project.

If you have any large pull request in mind (e.g. implementing features, refactoring code, etc), **please ask first** otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

Please adhere to the coding conventions in the project (indentation, accurate comments, etc.) and don't forget to add your own tests and documentation. When working with git, we recommend the following process in order to craft an excellent pull request:

1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork, and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/metroAppIOS
   # Navigate to the newly cloned directory
   cd metroAppIOS
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/axelclark/metroAppIOS
   ```

2. Verify project runs on your machine.

    ```bash
    yarn install
    yarn start
    ```

3. If you cloned a while ago, get the latest changes from upstream, and update your fork:

   ```bash
   git checkout master
   git pull upstream master
   git push
   ```

4. Create a new topic branch (off of `master`) to contain your feature, change, or fix.  

    **IMPORTANT**: Making changes in `master` is discouraged. You should always keep your 
    local `master` in sync with upstream `master` and make your changes in topic branches.

   ```bash
   git checkout -b <topic-branch-name>
   ```

5. When feature is complete and tests pass, stage the changes.

    ```bash
    git add --all
    ```

6. When you've staged the changes, commit them.

    ```bash
    git status
    git commit --verbose
    ```

7. Write a [good commit message]. Example format:

    ```bash
    Present-tense summary under 50 characters

    * More information about commit (under 72 characters).
    * More information about commit (under 72 characters).
    * Closes #XX
    ```

8. If you've created more than one commit, [use `git rebase` interactively](https://help.github.com/articles/about-git-rebase/) to squash them into cohesive commits with good messages:

    ```bash
    git rebase -i origin/master
    ```

9. Make sure all the tests are still passing.

    ```bash
    yarn test
    ```

10. Push your topic branch up to your fork:

    ```bash
    git push origin <topic-branch-name>
    ```

11. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description.

12. If you haven't updated your pull request for a while, you should consider rebasing on master and resolving any conflicts.

    **IMPORTANT**: _Never ever_ merge upstream `master` into your branches. You should always 
    `git rebase` on `master` to bring your changes up to date when necessary.  See below.

    ```bash
    git checkout master
    git pull upstream master
    git checkout <your-topic-branch>
    git rebase master
    ```

## Code Conventions

We use [Ebert](https://ebertapp.io/github/axelclark/metroAppIOS) to automate code reviews for each pull request.  We're still working on getting the rules updated for the project and React, so don't worry about the comments at the moment.

## Testing

Testing is something we will be adding soon!

Thanks,
Axel
