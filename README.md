# [Halfmoon](https://www.gethalfmoon.com)

> Front-end framework with a built-in dark mode, designed for rapidly building beautiful dashboards and product pages.

- **Designed specifically for building dashboards**—This means that a lot of importance is placed on components such as forms, navbars, sidebars, dropdowns, toasts, shortcuts, etc.
- **Built-in dark mode**—Now all of your websites will automatically come with a dark mode.
- **Optional JS library**—Many of the components found in Halfmoon are built to work without JavaScript. However, the framework still comes with a powerful JavaScript library  with no extra dependencies, such as jQuery.
- **Bootstrap like classes**—The class names should be instantly familiar to anyone who has used Bootstrap.
- **Cross-browser compatibility**—Fully supports almost all the browsers under the sun, including really old ones like Internet Explorer 11.
- **Easily customizable**—The repo also contains a variables file (`halfmoon-variables.css`) where custom CSS properties (variables) are used in the code for things like colors, layout properties, etc. This makes it extremely easy to customize Halfmoon to your liking, as the use of modern CSS variables means that things like pre-processors are not needed.

To learn more, go to [the documentation](https://www.gethalfmoon.com/docs/introduction/).

## Quickstart

The quickest way to get started with Halfmoon is by using the CDN to include the following files:

```html
<!-- Halfmoon CSS -->
<link href="https://cdn.jsdelivr.net/gh/halfmoonui/halfmoon@1.0.3/css/halfmoon.min.css" rel="stylesheet" />

<!-- Halfmoon JS -->
<script src="https://cdn.jsdelivr.net/gh/halfmoonui/halfmoon@1.0.3/js/halfmoon.min.js"></script>
```

## Using npm

```
npm install halfmoon
```

After installation, the required CSS and JS file can be imported in the following way:

```javascript
// Include CSS file
require("halfmoon/css/halfmoon.min.css");

// Import JS library
var halfmoon = require("halfmoon");
```

Please note that this method requires manual initialization, that is, after the DOM is loaded, the following method needs to be called:

```javascript
// Call this method after the DOM has been loaded
halfmoon.onDOMContentLoaded();
```

This initializes all of the components that require JavaScript, such as dropdowns,, custom file inputs, shortcuts, etc. 

In this way, Halfmoon can be used with frameworks that use the virtual DOM, such as React and Vue. For instance, in the case of Vue, the `halfmoon.onDOMContentLoaded()` method would be called inside the `mounted()` hook of your component.

## Starter template generator

You can use the [starter template generator](https://www.gethalfmoon.com/docs/page-building/#starter-template-generator) to generate boilerplates for your project. The generator takes your settings and adds the appropriate classes and defines the required containers and elements.

Once again, we recommend reading [the documentation](https://www.gethalfmoon.com/docs/introduction/), as it contains a lot of examples to help you quickly build websites.

## License

[MIT](https://www.gethalfmoon.com/license/)

## Copyright

Copyright 2020, Halfmoon UI
