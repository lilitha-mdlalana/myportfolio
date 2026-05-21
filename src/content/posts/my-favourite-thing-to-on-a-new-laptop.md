---
title: 'My favorite thing to do on a new laptop'
description: 'The git alias and small quality-of-life tweaks that save me time every single day'
pubDate: '21 May 2026'
tags: ['tech', 'git', 'learning']
---

As a developer I've come to appreciate efficiency and little things that save me time. Whether it's a script, an alias, or a tiny workflow improvement that removes repetitive friction, those small optimizations add up quickly over time. Every new laptop starts with the same ritual: setting up my `.gitconfig`.

It's one of the first things I configure because Git is something I interact with every single day. A good setup means fewer keystrokes and less mental overhead. From simple aliases like `git st` for `git status`  to shortcuts that make branching, rebasing, and committing feel effortless, my `.gitconfig` has slowly become a collection of quality-of-life improvements I can't live without.


##### My favorite one

```bash
[alias]
newbranch = "!f() { \
    git checkout main && \
    git pull && \
    git checkout -b \"$1\"; \
}; f"%

```

The problem this solved was the constant repetition of creating branches from an outdated local main branch. I used to manually switch branches, pull the latest changes, and then create a new branch every single time I started work on a task. It’s a small process, but one that happens so often it becomes annoying surprisingly quickly.

Now I can simply run:

```bash
    git newbranch feature/auth-page
```

…and immediately start working from a fresh, up-to-date branch without thinking about the setup steps. It removes friction, reduces mistakes, and makes starting new work feel instant — which is exactly the kind of developer experience I love optimizing for.

### Others I can't live without:

```bash
[alias]
    co = checkout
    br = branch
    ci = commit
    st = status
    commit-empty = !echo 'git commit --allow-empty -m \"chore: Empty commit to re-trigger build\"' && git commit --allow-empty -m \"chore: Empty commit to re-trigger build\"
    delete-local-branches-already-merged-in-remote = !echo 'git branch --merged | egrep -i -v(main|master|develop|dev|staging|release)| xargs -r git branch -d' && git branch --merged | egrep -i -v '(main|master|develop|dev|staging|release)' | xargs -r git branch -d

```


### How does one create Git Aliases: 
There are 2 ways in which you can create git aliases. My favorite - editing the `.gitconfig` directly and adding the aliases in as we have done above.

Another way that you can add alias is by running these commands in your terminal:
```bash
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
$ git config --global alias.st status

```

---
Thanks for stopping by. <br/>
Logging out