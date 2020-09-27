# Contributor Guidelines

Thanks for contributing to this project! Below is a set of guidelines for contributing to the [Ask EDD Project](https://github.com/hannahlivnat/Ask-EDD-Project) on GitHub. 

## Table of Contents

[Code of Conduct](#code-of-conduct)

[What Should I Know Before Contributing?](#what-to-know-before-contributing)

[How To Contribute](#how-to-contribute)

[Styleguide](#styleguide)

## Code of Conduct

### Our Pledge 

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards 

Examples of behavior that contributes to creating a positive environment include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting [Hannah Livnat](mailto:hannahlivnat@gmail.com). All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.

## What To Know Before Contributing

This project uses Next.js, Context, and Semantic UI. If you are unfamiliar with any of these, please review the docs below: 

* [Nextjs](https://nextjs.org/docs)
* [Context](https://reactjs.org/docs/context.html)
* [Semantic UI](https://react.semantic-ui.com/)

## How To Contribute

### Reporting Bugs

If you've found a bug in this repo, create an issue and provide the following information by filling in the bug reporting template on the issue page. 

* Use a clear, descriptive title to identify the bug
* Describe the exact steps which reproduct the problem in detail. 
* Provide specific examples to demonstrate the steps : link to file, code snippets, etc.
* Describe the behavior you observed after following steps and the problem with that behavior
* Explain what behavior you expected to see instead and why
* Include screenshots and animated gifs which clearly demonstrate the problem. 
* If the problem wasn't triggered by a specific action, describe what you were doing before the problem happened. 

### Make a Code Contribution

If you'd like to contribute, take a look at the [project board]() to select an issue that'd be a good fit for you. Go by level to select your issue. Example: do not select a level 3 issue when there are still level 2 issues on the To Do board. 

  * Beginner issues - issues that are accessible to beginners.
  * Help wanted issues - issues that are more involved than beginner issues

Shoot a message to [Hannah Livnat](https://www.linkedin.com/in/hannah-livnat/) to request to be added to that issue. After you've been added: 

1) Fork this repo
```
git clone https://github.com/hannahlivnat/Ask-EDD-Project.git
```

2) Branch off of the dev branch, following the branch naming convention: issue number-issue name

3) Make a pull request from your issue branch to this repo's dev branch and request a reviewer. 

### Pull Requests
Please follow these steps to have your contribution considered: 

1. Follow all instructions on submission template
2. Follow the code styleguide
3. After you submit, verify that all status checks are passing. If they are failing, please fix or comment a maintainer for help. 

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted. 

## Styleguide

### Git Commit Messages: 

* Use the present tense("Add feature" not "Added feature")
* Limit first line to 72 characters of less. 
* Reference issues and pull requests liberally after first line
* Consider starting commit message with emoji
  * :art: `:art:` improves format/structure of code
  * :racehorse:  `:racehorse:` improves performance
  * :memo: `:memo` documentation
  * :bug: `:bug:` fixes bug
  * :fire: `:fire:` removes code or files
  * :white_check_mark: `:white_check_mark:` adds tests
  * :green_heart: `:green_heart:` new code directly related to issue

### JavaScript Styleguide

All JavaScript code linted with [Prettier](https://prettier.io/).

For overall style guidelines, refers to [airbnb's react style guide](https://github.com/airbnb/javascript/tree/master/react).

* Use [function components](https://reactjs.org/docs/components-and-props.html#function-and-class-components) over class components when possible: 

  Use this: 
  ```
  function Example() {

  }
  ```
  Not this: 
  ```
  class Example extends React.Component {

  }
  ```
* When grouping children, use [React.Fragment](https://reactjs.org/docs/fragments.html), not nested divs

  Use this:
  ```
  <>
    <ChildA />
    <ChildB />
    <ChildC />
  </>
  ```
  Not this: 
  ```
  <div>
    <ChildA />
    <ChildB />
    <ChildC />
  </div>
  ```

### Testing Styleguide

Include thoughtfully-worded, well-structured tests in the './tests' folder.

* Treat 'describe' as a noun or situation. 
* Treat 'it' as a statement about state or how an operation changes state.

## Attribution

Code of Conduct is adapted from the Contributor Covenant, version 1.4, available at http://contributor-covenant.org/version/1/4Contribution.

Other Sections of Contribution Guidelines adapted from Atom's Contribution Guidelines, available at https://github.com/atom/atom/blob/master/CONTRIBUTING.md

React styleguide refers to Airbnb styleguide, available at https://github.com/airbnb/javascript/tree/master/react

