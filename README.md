# [Halfmoon v2](https://www.gethalfmoon.com)

![Halfmoon cover image](https://res.cloudinary.com/halfmoon-ui/image/upload/v1691920748/open-graph/og-image_hiacw3.png)

> Highly customizable, drop-in Bootstrap replacement.

Halfmoon is a highly customizable, drop-in Bootstrap replacement. It comes with three built-in core themes, with dark mode support for all themes and components. Build beautiful and responsive websites and applications.

To learn more, please read [the documentation](https://www.gethalfmoon.com/docs/introduction/).

## JavaScript

We implement no JavaScript on our own, therefore, there is no  `halfmoon.js`  (or anything similar). Instead we rely entirely on  `bootstrap.bundle.js`, which you can  [download from Bootstrap's website](https://getbootstrap.com/docs/5.3/getting-started/download/). This means that you can replace  `bootstrap.css`  with  `halfmoon.css`  on your website, and everything should work exactly as expected.

This also means that you can use any of the Bootstrap component libraries for popular JS frameworks such as React, Vue, Angular, Svelte, etc.

## Starter template

Here's a starter template to help you quickly get started with Halfmoon.

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
 
    <title>Starter template - Halfmoon</title>
 
    <!-- Halfmoon CSS -->
    <link href="https://cdn.jsdelivr.net/npm/halfmoon@2.0.2/css/halfmoon.min.css" rel="stylesheet" integrity="sha256-RjeFzczeuZHCyS+Gvz+kleETzBF/o84ZRHukze/yv6o=" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
 
    <!-- Option 1: Bootstrap JS bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha256-CDOy6cOibCWEdsRiZuaHf8dSGGJRYuBGC+mjoJimHGw=" crossorigin="anonymous"></script>
 
    <!-- Option 2: Separate Popper and Bootstrap JS
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha256-whL0tQWoY1Ku1iskqPFvmZ+CHsvmRWx/PIoEvIeWh4I=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha256-3gQJhtmj7YnV1fmtbVcnAV6eI4ws0Tr48bVZCThtCGQ=" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```

## Using npm

```
npm install halfmoon
```

Once the package has been installed, you can simply import the CSS file:

```javascript
// Import Halfmoon CSS
import "halfmoon/css/halfmoon.min.css";
```

## License

Halfmoon is [licensed under MIT](https://www.gethalfmoon.com/license/).

## Copyright

© Copyright 2023, Tahmid Khan
