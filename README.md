# Halfmoon development branch

> This is the development branch for the Halfmoon framework, which contains the latest changes and updates. For the last stable release, see the [main branch](https://github.com/halfmoonui/halfmoon/) of the repo.

The only files that will be worked on are `halfmoon-variables.css` and `halfmoon.js`. Once they are ready for a new release, the other files will be generated (i.e. minified and variables flattened), and then this branch will be merged with the main one. Not everything listed below will be worked on for the **next** major update (`v1.2.0`). Anything left out will be pushed to the update after that one.

**Please note**, writing and updating the official documentation website requires time and polish. So for the time being, as new components and features are being added, I will create examples illustrating how they can be used on Codepen. That should hopefully tie everything over until the official release and documentation update. You can find the links to the Codepens below, next to the list items.

**UPDATE 03/02/2020** Range, number input, password show/hide toggles have been added. 

## New features and components

- [ ] Styled lists (unordered and ordered)
- [x] Range - [How to use](https://codepen.io/tahmid-hm-dev/pen/VwmLOxE)
- [x] Number input - [How to use](https://codepen.io/tahmid-hm-dev/pen/ExNjzQw)
- [x] Password show/hide toggle - [How to use](https://codepen.io/tahmid-hm-dev/pen/XWNbwEa)
- [ ] Form validator
- [ ] Tabs (also called navs)
- [ ] List group
- [ ] Spinners
- [ ] High contrast mode (issue https://github.com/halfmoonui/halfmoon/issues/27)
- [ ] User preferred scale
- [ ] Date-time picker
- [ ] Better select and multi-select
- [ ] Data table

## Minor updates and bug fixes

- [ ] Update the color system to use HSL representations (HSL colors are human friendly, so the new system will make it a breeze to update palletes if necessary)
- [ ] Update buttons (and inputs) to use padding, instead of fixed height (this should fix browser discrepancies in the appearance of buttons)
- [ ] Fix the issue that causes the sidebar and overlay to appear for a moment before disappearing during page load on small screens (i.e. mobile phones)
- [ ] Fix the `position` styles on the `<html>`, `<body>` and other major containers (this should fix some minor scroll issues)
- [ ] Fix "aggressive" transitions on dropdown menus and tooltips
- [ ] Improve the design of disabled checkboxes, radio buttons, and switches
- [ ] Scroll shadow utilities
- [ ] Transition utilities

The above list is missing a few other tiny bugs and issues that will be fixed.

## Updates to the documentation

- [ ] Pages for the new components and features
- [ ] Accessibility improvements in the examples
- [ ] Comparison pages with other popular frameworks
- [ ] Pages for helping users integrate Halfmoon with React, Angular, Vue, and so on (as of right now, the documentation is sparse in this regard)
