---
layout: page
title: How to Edit This Website
permalink: /tutorial
hidden: yes
---
*See also: [Writing Your Character Sheet](/cloud-gate/help-sheet)*

- [Basics](#basics)
- [Setting Up GitHub](#setting-up-github)
    - [Final Notes](#final-notes)
- [Testing Locally](#testing-locally)
- [Editing Pages](#editing-pages)
  - [Blog Posts](#blog-posts)
  - [Creating Sub-pages](#creating-sub-pages)

## Basics

The Cult of Dave website is hosted through [GitHub Pages](https://pages.github.com). It runs on a static-site
generator called [Jekyll](https://jekyllrb.com), and hence the majority of webpages can be written using
[Markdown](https://www.markdownguide.org/basic-syntax).

This tutorial page will be everything you need to start editing the website and stop sending me text files full
of words to copy and paste.

## Setting Up GitHub

![Open with GitHub Desktop](/assets/img/tutorial/open-with-desktop.png){: .float-sm-end}

To begin editing the website, a GitHub account needs to be linked to the repository. First, create a GitHub account.
Then, DM me (Ed) with the username, and I will add it to the list of contributors (NOT YOU JOSEPH).

Next, install [GitHub Desktop](https://desktop.github.com). After installing, head to the
[respository page](https://github.com/cultofdave/cultofdave.github.io). The next step is to click the green 'Code'
button and select 'Open with GitHub Desktop' (see pictured).

Finally, your GitHub Desktop app should look similar to the one pictured.

![GitHub Desktop](/assets/img/tutorial/github-desktop.png){: .w-75 .position-relative .start-50 .translate-middle-x}

#### Final Notes

- The `main` branch of the GitHub repository is the one which will be hosted. If in doubt, make sure under `Current Branch`
  in the top bar it says `main`.
- To create a new branch, click `Current Branch` and click `New Branch`. This will create a seperate space of code
  which you can edit without affecting anything else, particularly useful for large edits.
- After making changes to the site, write a short description of your additions in the `Summary` box (pictured bottom-left
  of the GitHub Desktop window) and click `Commit to main` (or instead of `main` it might be another, created branch)
- To sync your local version of the site with the remote version, click `Fetch origin` or `Sync changes` in the top bar.
- If, after making changes, you check the site and it hasn't changed, go to [the repository's actions](https://github.com/cultofdave/cultofdave.github.io/actions)
  and check the last entry under `All workflows`. If green, the site has refreshed and the problem is with your changes.
  If yellow, you need to wait a bit longer for the site to regenerate. If red, the changes you've made have caused an
  issue with generation (contact me).

## Testing Locally

When making large changes, it can be useful to first test them locally before pushing the update to the website.

If you wish to test the site locally, you must set up Jekyll on your system. Instructions vary depending on system.
- [Jekyll on Windows](https://jekyllrb.com/docs/installation/windows/)
- [Jekyll on macOS](https://jekyllrb.com/docs/installation/macos/)
- [Jekyll on Ubuntu](https://jekyllrb.com/docs/installation/ubuntu/)
- [Jekyll on Other Linux](https://jekyllrb.com/docs/installation/other-linux/)

A general summary of steps:
1. Install Ruby+Devkit (sometimes preinstalled)
2. Execute `gem install bundler jekyll` in your Terminal/Command Prompt
3. Test to see if installed with `jekyll -v`

After setting up Jekyll (test in the command prompt is by typing `jekyll -v`) navigate to the local repository on your
system (eg `'Documents/GitHub/cultofdave.github.io'`), or click the `Current Repository` button, right click
`cultofdave.github.io` in the list, and select `Reveal in Finder` (`Open with Windows Explorer` or similar on Windows).

Open a Terminal/Command Prompt window and type `bundler exec jekyll s -l`. Assuming there are no errors (see pictured), open your
browser and enter `127.0.0.1:4000/` as your URL, you should see the website with your changes. When making more
changes, you will not need to restart Jekyll, your browser will refresh automatically (the only exception is when
changing `_config.yml` however that should never be necessary)

![Jekyll Running Successfully](/assets/img/tutorial/jekyll-running-successfully.png){: .position-relative .start-50 .translate-middle-x}

## Editing Pages

Webpage content is written in [Markdown](https://www.markdownguide.org/basic-syntax). Each game has a home page, and a page for each
character. Assuming `/` represents the directory or folder where your local copy of the repository is located, `_cloud-gate`
is the folder where all the Cloud Gate-related webpages are located. The characters in each game are located in a sub-folder called
`characters`, just to keep things neat and tidy, e.g. `/_cloud-gate/characters/jules-burnbright.md` is the character file for all
the content in Jules Burnbright's webpage.

If you want to look at an example, find this page (`/tutorial.md`) in the source code and have a gander.

The basic information is as follows:

<div class='row'>
<div class='col-md-6'>
~~~markdown
## <- creates a second level heading.
Use these, the first level is reserved for the page
title.
Any other text is just a paragraph.
- Putting a dash renders a list
- A second element in the list
[Link text here](/tutorial)
creates a link
![Alt text here](#)
creates an image (with # replaced by image path)
1. creates a numbered list
1. another number, still 1.
~~~
</div>
<div class='col-md-6'>
## <- creates a second level heading.
Use these, the first level is reserved for the page
title.
Any other text is just a paragraph.
- Putting a dash renders a list
- A second element in the list
[Link text here](/tutorial)
creates a link
![Alt text here](#)
creates an image (with # replaced by image path)
1. creates a numbered list
2. another number, still 1.  
</div>
</div>

Remeber, make sure to add any images you use to the right folder. All images should be located in `/assets/img/(game)`,
e.g. `/assets/img/cloud-gate/image.png`. If you like, you can create sub-folders for tidiness, e.g. `/assets/img/cloud-gate/jules-burnbright/image.png`.
Use this as the image path mentioned above.

### Blog Posts

Each character can have their own blog! First, create a new file in `/posts` and name it beginning
with the date and time in the following format `YY-MM-DD-title.yml`, e.g. `22-02-22-the-first-meeting.md`.
Next, at the top of the file, on the first two lines, write two dashes (`---`), and again on the
next two lines. Between them, write the following: `categories: game-name character-name`.
For example, Jules Burnbright would write `categories: cloud-gate jules-burnbright`.  
Finally, the beginning of your file should look like this:
```markdown
---
categories: cloud-gate jules-burnbright
---
```
Now, after the last three dashes, you can add all the things that you can add to a normal Markdown
file, and if you check your character page, you should see a new 'Blog' heading, and under that,
your character's blog post.

### Creating Sub-pages

Each game home-page can have a set of sub-pages. For example, the Cloud Gate home-page could have
an NPC sub-page. Creating a sub-page is simple.

Find the folder that contains the home-page you want to create a sub-page for. For example, the
Cloud Gate home-page, called `cloud-gate.md`, is in the `/_cloud-gate` folder. Create a new file,
in this folder and call it anything you want. For example, `npcs.md`.

Next, add the following to the top of your sub-page file;
~~~markdown
---
layout: game
title: {any title you like, or can be omitted entirely}
---
~~~

For example, the NPCs sub-page might look like this:

~~~markdown
---
layout: game
title: NPCs
---
~~~

After the second set of three dashes, you can use all normal Markdown techniques as outlined previously, and if you check the
Cloud Gate homepage, you should see that the navigation on the page is updated with your new sub-page.