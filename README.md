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
    <link href="path/to/halfmoon.min.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, world!</h1>
 
    <!-- Bootstrap JS bundle with Popper -->
    <script src="path/to/bootstrap.bundle.min.js"></script>
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
