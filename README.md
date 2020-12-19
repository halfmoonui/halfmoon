# Halfmoon development branch

> This is the development branch for the Halfmoon framework, which contains the latest changes and updates. For the last stable release, see the [main branch](https://github.com/halfmoonui/halfmoon/) of the repo.

The only files that will be worked on are `halfmoon-variables.css` and `halfmoon.js`. Once they are ready for a new release, the other files will be generated (i.e. minified and variables flattened), and then this branch will be merged with the main one.

Please note, not everything listed below will be worked on for the **next** major update (`v1.2.0`). Anything left out will be pushed to the update after that one.

## New features and components

- [ ] Styled lists (unordered and ordered)
- [ ] Range slider
- [ ] Number input
- [ ] Password show/hide toggle
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
