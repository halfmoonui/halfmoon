# [Halfmoon](https://www.gethalfmoon.com)

> Front-end framework with a built-in dark mode, designed for rapidly building beautiful dashboards and product pages.

- **Designed specifically for building dashboards**—This means that a lot of importance is placed on components such as forms, navbars, sidebars, dropdowns, toasts, shortcuts, etc.
- **Buit-in dark mode**—Now all of your websites will automatically come with a dark mode.
- **Optional JS library**—Many of the components found in Halfmoon are built to work without JavaScript. However, the framework still comes with a powerful JavaScript library  with no extra dependencies, such as jQuery.
- **Bootstrap like classes**—The class names should be instantly familiar to anyone who has used Bootstrap.
- **Cross-browser compatibility**—Fully supports almost all the browsers under the sun, including really old ones like Internet Explorer 11.
- **Easily customizable**—The repo also contains a variables file (`halfmoon-variables.css`) where custom CSS properties (variables) are used in the code for things like colors, layout properties, etc. This makes it extremely easy to customize Halfmoon to your liking, as the use of modern CSS variables means that things like pre-processors are not needed.

To learn more, go to [the documentation](https://www.gethalfmoon.com/docs/introduction/).

## Quickstart

The quickest way to get started with Halfmoon is by using the CDN to include the following files:

```html
<!-- Halfmoon CSS -->
<link href="https://cdn.jsdelivr.net/gh/halfmoonui/halfmoon@1.0.1/css/halfmoon.min.css" rel="stylesheet" />

<!-- Halfmoon JS -->
<script src="https://cdn.jsdelivr.net/gh/halfmoonui/halfmoon@1.0.1/js/halfmoon.min.js"></script>
```

## Starter template

Given below is a basic starter template which you can use to jump right in:

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Meta tags -->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
  <meta name="viewport" content="width=device-width" />

  <!-- Favicon and title -->
  <link rel="icon" href="path/to/fav.png">
  <title>Starter template - Halfmoon</title>

  <!-- Halfmoon CSS -->
  <link href="https://cdn.jsdelivr.net/gh/halfmoonui/halfmoon@1.0.1/css/halfmoon.min.css" rel="stylesheet" />
</head>
<body>
  <!-- Page wrapper start -->
  <div class="page-wrapper">

    <!-- Content wrapper start -->
    <div class="content-wrapper">
      <div class="content">
      	<h1 class="content-title">Hello world!</h1>
      </div>
      <!--
        Add your page's main content here
        Examples:
        1. https://www.gethalfmoon.com/docs/content-and-cards/#building-a-page
        2. https://www.gethalfmoon.com/docs/grid-system/#building-a-dashboard
      -->
    </div>
    <!-- Content wrapper end -->

  </div>
  <!-- Page wrapper end -->

  <!-- Halfmoon JS -->
  <script src="https://cdn.jsdelivr.net/gh/halfmoonui/halfmoon@1.0.1/js/halfmoon.min.js"></script>
</body>
</html>
```

Please note you can use the [starter template generator](https://www.gethalfmoon.com/docs/page-building/#starter-template-generator) to generate boilerplates for your project.

## License

[MIT](https://www.gethalfmoon.com/license/)

## Copyright

Copyright 2020, Halfmoon UI
