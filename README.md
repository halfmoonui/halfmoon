# [Halfmoon](https://www.gethalfmoon.com)

> Front-end framework with a built-in dark mode and full customizability using CSS variables; great for building dashboards and tools.

- **Built-in dark mode**—Halfmoon comes with a built-in, toggleable dark mode, which is one of its most important and defining features.
- **Fully customizable using CSS variables**—The framework is built entirely using CSS variables (also known as CSS custom properties). There are close to *1,500 CSS variables*, which means that almost everything can be customized by overriding a property, making it very easy to theme Halfmoon to fit your brand. [Learn more about customization](https://www.gethalfmoon.com/docs/customize/).
- **Great for building dashboards and tools**—The components have a very standard look and feel to them, making them suitable for dashboards and tools. Moreover, a lot of importance is placed on components such as forms, navbars, sidebars, dropdowns, toasts, shortcuts, etc. and there are also *tons of utilities* available.
- **Optional JS library**—Many of the components found in Halfmoon are built to work without JavaScript. However, the framework still comes with a powerful JavaScript library with no extra dependencies, such as jQuery.
- **Bootstrap like classes**—The class names should be instantly familiar to anyone who has used Bootstrap.
- **Cross-browser compatibility**—Fully supports almost all the browsers under the sun, including really old ones like Internet Explorer 11.

To learn more, go to [the documentation](https://www.gethalfmoon.com/docs/introduction/).

## Quickstart

The quickest way to get started with Halfmoon is by using the CDN to include the following files:

```html
<!-- Halfmoon CSS -->
<link href="https://cdn.jsdelivr.net/npm/halfmoon@1.1.0/css/halfmoon-variables.min.css" rel="stylesheet" />
<!--
  Or,
  Use the following (no variables, supports IE11):
  <link href="https://cdn.jsdelivr.net/npm/halfmoon@1.1.0/css/halfmoon.min.css" rel="stylesheet" />
-->

<!-- Halfmoon JS -->
<script src="https://cdn.jsdelivr.net/npm/halfmoon@1.1.0/js/halfmoon.min.js"></script>
```

**Pleast note**, the JS file should be placed at the end of the `<body>` tag. Otherwise, some things may not work as expected. For example, using the `onclick="..."` event to call one of Halfmoon's built-in methods will not work **unless** the JS file is placed at the end of the `<body>` tag.

## Using npm

```
npm install halfmoon
```

After installation, the required CSS and JS file can be imported in the following way:

```javascript
// Include CSS file
require("halfmoon/css/halfmoon-variables.min.css");
/*
  Or,
  Include the following (no variables, supports IE11):
  require("halfmoon/css/halfmoon.min.css");
*/

// Import JS library
const halfmoon = require("halfmoon");
```

Please note that manual initialization is required for some components, that is, after the DOM is loaded, the following method needs to be called:

```javascript
// Call this method after the DOM has been loaded
halfmoon.onDOMContentLoaded();
```

This initializes all of the components that require JavaScript, such as dropdowns, custom file inputs, shortcuts, etc. 

In this way, Halfmoon can be used with frameworks that use the virtual DOM, such as React and Vue. For instance, in the case of Vue, the `halfmoon.onDOMContentLoaded()` method would be called inside the `mounted()` hook of your component.

## Using React

If you are using React to call the built-in methods, such as `halfmoon.toggleSidebar()`, please make sure the call is made in a way that binds the correct context. There are two ways to do this:

1.  Using an anonymous method: 

    ```html
    <button className="btn" type="button" onClick={() => halfmoon.toggleSidebar()}>
    ```

2.  Using `bind`:

    ```html
    <button className="btn" type="button" onClick={halfmoon.toggleSidebar.bind(halfmoon)}>
    ```

You can find more details in the [React documentation](https://reactjs.org/docs/faq-functions.html#why-is-binding-necessary-at-all).

## Starter template generator

You can use the [starter template generator](https://www.gethalfmoon.com/docs/page-building/#starter-template-generator) to generate boilerplates for your project. The generator takes your settings and adds the appropriate classes and defines the required containers and elements.

Once again, we recommend reading [the documentation](https://www.gethalfmoon.com/docs/introduction/), as it contains a lot of examples to help you quickly build websites.

## License

Halfmoon is licensed under the [MIT](https://www.gethalfmoon.com/license/) license.

## Copyright

Copyright 2020, Halfmoon UI
