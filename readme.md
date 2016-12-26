# Analog-Garage

Static frontend template for Analog Garage.

## Features
* [Jekyll](https://github.com/jekyll/jekyll)
* [Tachyons](https://github.com/tachyons-css/tachyons)
* [Chart.js](https://github.com/chartjs/Chart.js)
* [PostCSS](https://github.com/postcss/postcss)
* [BrowserSync](https://github.com/BrowserSync/browser-sync)
* [Gulp](https://github.com/gulpjs/gulp)


## Install

```
$ git clone https://github.com/mds/analog.git
$ bundle install
$ npm install
```

Dev server: `Gulp Dev`
Build static site: ` Gulp Publish `

## Dependencies

Package | Version
:---|:---:
[chart.js](https://www.npmjs.com/package/chart.js) | ^2.4.0
[autoprefixer](https://www.npmjs.com/package/autoprefixer) | ^6.5.4
[browser-sync](https://www.npmjs.com/package/browser-sync) | ^2.17.5
[css](https://www.npmjs.com/package/css) | ^2.2.1
[cssnano](https://www.npmjs.com/package/cssnano) | ^3.8.1
[gulp](https://www.npmjs.com/package/gulp) | ^3.9.1
[gulp-concat](https://www.npmjs.com/package/gulp-concat) | ^2.6.1
[gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano) | ^2.1.2
[gulp-include](https://www.npmjs.com/package/gulp-include) | ^2.3.1
[gulp-postcss](https://www.npmjs.com/package/gulp-postcss) | ^6.2.0
[gulp-run](https://www.npmjs.com/package/gulp-run) | ^1.7.1
[gulp-sass](https://www.npmjs.com/package/gulp-sass) | ^2.3.2
[gulp-shell](https://www.npmjs.com/package/gulp-shell) | ^0.5.2
[gulp-watch](https://www.npmjs.com/package/gulp-watch) | ^4.3.11
[lodash](https://www.npmjs.com/package/lodash) | ^4.16.4
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9
[postcss-css-variables](https://www.npmjs.com/package/postcss-css-variables) | ^0.6.0
[postcss-custom-media](https://www.npmjs.com/package/postcss-custom-media) | ^5.0.1
[postcss-import](https://www.npmjs.com/package/postcss-import) | ^9.0.0
[run-sequence](https://www.npmjs.com/package/run-sequence) | ^1.2.2



## Structure

#### Components

````
_includes/
|- components/
|  |- alerts.html________________________________ # Alerts Notifications Component
|  |- asset-pin.html_____________________________ # Asset Pin Component
|  |- asset.html_________________________________ # Asset Component
|  |- camera-activity.html_______________________ # Camera Activity Component
|  |- camera-list.html___________________________ # Camera List Component
|  |- camera-single.html_________________________ # Camera With Chart Component
|  |- group-map-grid.html________________________ # Group Map No Image Component
|  |- group.html_________________________________ # Group Component
|  |- hotspots.html______________________________ # Hot Spots Component
|  |- input-with-desc.html_______________________ # Input With Description Component
|  |- input.html_________________________________ # Input Component
|  |- modal-video.html___________________________ # Modal Video Component
|  |- modal.html_________________________________ # Modal Component
|  |- notification.html__________________________ # Notification Global Component
|  |- notifications.html_________________________ # Notifications List Normal Component
|  |- textarea-with-desc.html____________________ # Textarea With Description Component
|  |- textarea.html______________________________ # Textarea Component
|  |- tooltip-above.html_________________________ # Tooltip Above Component
|  |- tooltip-below.html_________________________ # Tooltip Below Component
|
|- layout/
|  |- breadcrumbs.html___________________________ # UI Breadcrumbs
|  |- footer.html________________________________ # UI Footer
|  |- head.html__________________________________ # HTML Head
|  |- header.html________________________________ # UI Header
````

#### Stylesheets

````
css/
|- main.css _____________________________________ # UI Styles & Overrides
|
|- tachyons/
|  |- _background-position.css __________________ # Tachyons - Background Position Module
|  |- _background-size.css ______________________ # Tachyons - Background Size Module
|  |- _border-colors.css ________________________ # Tachyons - Border Colors Module
|  |- _border-radius.css ________________________ # Tachyons - Border Radius Module
|  |- _border-style.css _________________________ # Tachyons - Border Style Module
|  |- _border-widths.css ________________________ # Tachyons - Border Widths Module
|  |- _borders.css ______________________________ # Tachyons - Borders Module
|  |- _box-shadow.css ___________________________ # Tachyons - Box Shadow Module
|  |- _box-sizing.css ___________________________ # Tachyons - Box Sizing Module
|  |- _clears.css _______________________________ # Tachyons - Clears Module
|  |- _code.css _________________________________ # Tachyons - Code Module
|  |- _colors.css _______________________________ # Tachyons - Colors Module
|  |- _coordinates.css __________________________ # Tachyons - Coordinates Module
|  |- _debug-children.css _______________________ # Tachyons - Debug Children Module
|  |- _debug-grid.css ___________________________ # Tachyons - Debug Grid Module
|  |- _debug.css ________________________________ # Tachyons - Debug Module
|  |- _display.css ______________________________ # Tachyons - Display Module
|  |- _flexbox.css ______________________________ # Tachyons - Flexbox Module
|  |- _floats.css _______________________________ # Tachyons - Floats Module
|  |- _font-family.css __________________________ # Tachyons - Font Family Module
|  |- _font-style.css ___________________________ # Tachyons - Font Style Module
|  |- _font-weight.css __________________________ # Tachyons - Font Weight Module
|  |- _forms.css ________________________________ # Tachyons - Forms Module
|  |- _heights.css ______________________________ # Tachyons - Heights Module
|  |- _hovers.css _______________________________ # Tachyons - Hovers Module
|  |- _images.css _______________________________ # Tachyons - Images Module
|  |- _letter-spacing.css _______________________ # Tachyons - Letter Spacing Module
|  |- _line-height.css __________________________ # Tachyons - Line Height Module
|  |- _links.css ________________________________ # Tachyons - Links Module
|  |- _lists.css ________________________________ # Tachyons - Lists Module
|  |- _max-widths.css ___________________________ # Tachyons - Max Widths Module
|  |- _media-queries.css ________________________ # Tachyons - Media Queries Module
|  |- _module-template.css ______________________ # Tachyons - Module Template Module
|  |- _normalize.css ____________________________ # Tachyons - Normalize Module
|  |- _opacity.css ______________________________ # Tachyons - Opacity Module
|  |- _outlines.css _____________________________ # Tachyons - Outlines Module
|  |- _overflow.css _____________________________ # Tachyons - Overflow Module
|  |- _position.css _____________________________ # Tachyons - Position Module
|  |- _skins-pseudo.css _________________________ # Tachyons - Skins Pseudo Module
|  |- _skins.css ________________________________ # Tachyons - Skins Module (Brand Colors
|  |- _spacing.css ______________________________ # Tachyons - Spacing Module
|  |- _styles.css _______________________________ # Tachyons - Styles Module
|  |- _tables.css _______________________________ # Tachyons - Tables Module
|  |- _text-align.css ___________________________ # Tachyons - Text-align Module
|  |- _text-decoration.css ______________________ # Tachyons - Text-decoration Module
|  |- _text-transform.css _______________________ # Tachyons - Text-transform Module
|  |- _type-scale.css ___________________________ # Tachyons - Type Scale Module
|  |- _typography.css ___________________________ # Tachyons - Typography Module
|  |- _utilities.css ____________________________ # Tachyons - Utilities Module
|  |- _vertical-align.css _______________________ # Tachyons - Vertical Align Module
|  |- _visibility.css ___________________________ # Tachyons - Visibility Module
|  |- _white-space.css __________________________ # Tachyons - White Space Module
|  |- _widths.css _______________________________ # Tachyons - Widths Module
|  |- _word-break.css ___________________________ # Tachyons - Word-Break Module
|  |- _z-index.css ______________________________ # Tachyons - Z-Index Module
|  |- tachyons.css ______________________________ # Tachyons - All Modules Minified
````

### Javascript

````
js/
|- jquery.min.js ____________________________ #
|- chance.min.js ____________________________ # - Generates random data
|- chart.js _________________________________ # - Charts
|- fastclick.js _____________________________ # - Speed up mobile links
|- site.js __________________________________ # - UI functions
````
