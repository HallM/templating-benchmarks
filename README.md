templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating engines under Node.js. The following templating engine modules are currently integrated:

Template | Syntax | Streaming | Asynchronous | Auto-escape
---- | ---- | ---- | ---- | ----
[dustjs-linkedin](https://github.com/linkedin/dustjs) | Text | ✔ | ✔ | ✔
[doT](https://github.com/olado/doT) | Text | ✖ | ✖ | ✖
[handlebars](https://github.com/wycats/handlebars.js) | Text | ✖ | ✖ | ✔
[pug](https://github.com/pugjs/pug) | Short-hand HTML | ✖ | ✖ | ✔
[marko](https://github.com/marko-js/marko) | HTML/Concise HTML | ✔ | ✔ | ✔
[nunjucks](http://mozilla.github.io/nunjucks/) | Text | ✖ | ✔ | ✖
[react](https://facebook.github.io/react/)<sup>1</sup> | JSX | ✖ | ✖ | ✔
[swig](http://mozilla.github.io/nunjucks/) | Text | ✖ | ✖ | ✔
[lisplate](https://github.com/HallM/Lisplate) | Text | ✖ | ✔ | ✔

NOTE 1: While React is not a "templating engine", it is commonly used to render HTML on the server so it has been included in this benchmark.

# Table of Contents

- [Run Benchmarks](#run-benchmarks)
- [Current Results](#current-results)
	- [Performance](#performance)
	- [Compiled Size](#compiled-size)
- [Client-side Runtime Sizes](#client-side-runtime-sizes)
	- [Marko](#marko)
	- [Dust](#dust)
- [Contribute](#contribute)
	- [Adding a New Comparison Group](#adding-a-new-comparison-group)
	- [Adding a New Template Engine](#adding-a-new-template-engine)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Run Benchmarks

1. Clone this repository
2. `npm install`
3. `npm test` (or `make`)

# Current Results

The following results were collected with the following setup:

- Node.js v6.2.2
- MacBook Air (Mid 2012)
- Processor: 1.8 GHz Intel Core i5
- Memory: 4 GB 1600 MHz DDR3

## Performance

Higher numbers are better.

<!-- <performance> -->
```
                      RUNTIME PERFORMANCE
                      ===================
                      friends
                   ✓ marko »    2,857 op/s (fastest)
                ✗ lisplate »    1,556 op/s (45.54% slower)
                    ✗ dust »      450 op/s (84.25% slower)

                      if-expression
                   ✓ marko »  174,290 op/s (fastest)
                     ✗ pug »  107,024 op/s (38.59% slower)
                ✗ lisplate »  100,207 op/s (42.51% slower)

                      projects-escaped
      ✓ marko (native-for) »   48,513 op/s (fastest)
                   ✗ marko »   46,692 op/s (3.75% slower)
                ✗ lisplate »   32,334 op/s (33.35% slower)
              ✗ handlebars »   23,785 op/s (50.97% slower)
                    ✗ dust »   14,703 op/s (69.69% slower)

                      projects-unescaped
      ✓ marko (native-for) »  189,790 op/s (fastest)
                   ✗ marko »  177,828 op/s (6.30% slower)
                ✗ lisplate »  113,746 op/s (40.07% slower)
              ✗ handlebars »   70,960 op/s (62.61% slower)
                    ✗ dust »   36,667 op/s (80.68% slower)

                      reverse-helper
                   ✓ marko »  206,055 op/s (fastest)
                ✗ lisplate »  143,766 op/s (30.23% slower)
                    ✗ dust »   83,525 op/s (59.46% slower)

                      search-results
                   ✓ marko »   23,597 op/s (fastest)
                ✗ lisplate »   13,924 op/s (40.99% slower)
                    ✗ dust »    5,316 op/s (77.47% slower)

                      simple-1
                   ✓ marko »  102,568 op/s (fastest)
                     ✗ dot »   97,373 op/s (5.06% slower)
                     ✗ pug »   94,193 op/s (8.17% slower)
                ✗ lisplate »   73,616 op/s (28.23% slower)
              ✗ handlebars »   51,042 op/s (50.24% slower)
                    ✗ swig »   39,920 op/s (61.08% slower)
                    ✗ dust »   32,762 op/s (68.06% slower)
                ✗ nunjucks »   18,712 op/s (81.76% slower)
                   ✗ react »    2,051 op/s (98.00% slower)

                      simple-2
                   ✓ marko »  149,886 op/s (fastest)
                ✗ lisplate »  102,882 op/s (31.36% slower)
                    ✗ dust »   42,437 op/s (71.69% slower)

                      ui-components
                   ✓ marko »   29,619 op/s (fastest)
                ✗ lisplate »    7,290 op/s (75.39% slower)
                   ✗ react »    1,808 op/s (93.90% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
                   ✓ marko »   470 bytes gzipped     914 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   489 bytes gzipped    1387 bytes uncompressed
                                    3.89% larger              34.10% larger
                ✗ lisplate »   499 bytes gzipped    1254 bytes uncompressed
                                    5.81% larger              27.11% larger

                      if-expression
                   ✓ marko »   281 bytes gzipped     469 bytes uncompressed
                                      (smallest)                 (smallest)
                ✗ lisplate »   343 bytes gzipped     718 bytes uncompressed
                                   18.08% larger              34.68% larger
                     ✗ pug »  1197 bytes gzipped    2801 bytes uncompressed
                                   76.52% larger              83.26% larger

                      projects-escaped
                   ✓ marko »   247 bytes gzipped     379 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   262 bytes gzipped     563 bytes uncompressed
                                    5.73% larger              32.68% larger
      ✗ marko (native-for) »   271 bytes gzipped     407 bytes uncompressed
                                    8.86% larger               6.88% larger
                ✗ lisplate »   279 bytes gzipped     470 bytes uncompressed
                                   11.47% larger              19.36% larger
              ✗ handlebars »   553 bytes gzipped    1551 bytes uncompressed
                                   55.33% larger              75.56% larger

                      projects-unescaped
                   ✓ marko »   250 bytes gzipped     380 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     595 bytes uncompressed
                                    6.72% larger              36.13% larger
                ✗ lisplate »   272 bytes gzipped     453 bytes uncompressed
                                    8.09% larger              16.11% larger
      ✗ marko (native-for) »   275 bytes gzipped     408 bytes uncompressed
                                    9.09% larger               6.86% larger
              ✗ handlebars »   530 bytes gzipped    1573 bytes uncompressed
                                   52.83% larger              75.84% larger

                      reverse-helper
                    ✓ dust »   151 bytes gzipped     321 bytes uncompressed
                                      (smallest)              31.78% larger
                   ✗ marko »   167 bytes gzipped     219 bytes uncompressed
                                    9.58% larger                 (smallest)
                ✗ lisplate »   182 bytes gzipped     279 bytes uncompressed
                                   17.03% larger              21.51% larger

                      search-results
                   ✓ marko »   536 bytes gzipped    1189 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   545 bytes gzipped    1523 bytes uncompressed
                                    1.65% larger              21.93% larger
                ✗ lisplate »   571 bytes gzipped    1449 bytes uncompressed
                                    6.13% larger              17.94% larger

                      simple-1
                   ✓ marko »   251 bytes gzipped     369 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   255 bytes gzipped     493 bytes uncompressed
                                    1.57% larger              25.15% larger
                   ✗ react »   262 bytes gzipped     478 bytes uncompressed
                                    4.20% larger              22.80% larger
                ✗ lisplate »   274 bytes gzipped     509 bytes uncompressed
                                    8.39% larger              27.50% larger
                     ✗ dot »   362 bytes gzipped     559 bytes uncompressed
                                   30.66% larger              33.99% larger
              ✗ handlebars »   434 bytes gzipped     880 bytes uncompressed
                                   42.17% larger              58.07% larger
                ✗ nunjucks »   466 bytes gzipped     991 bytes uncompressed
                                   46.14% larger              62.76% larger
                    ✗ swig »   558 bytes gzipped    2636 bytes uncompressed
                                   55.02% larger              86.00% larger
                     ✗ pug »   788 bytes gzipped    1508 bytes uncompressed
                                   68.15% larger              75.53% larger

                      simple-2
                   ✓ marko »   255 bytes gzipped     484 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     648 bytes uncompressed
                                    4.85% larger              25.31% larger
                ✗ lisplate »   300 bytes gzipped     624 bytes uncompressed
                                   15.00% larger              22.44% larger

                      ui-components
                   ✓ marko »   179 bytes gzipped     219 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ react »   204 bytes gzipped     310 bytes uncompressed
                                   12.25% larger              29.35% larger
                ✗ lisplate »   225 bytes gzipped     281 bytes uncompressed
                                   20.44% larger              22.06% larger
```
<!-- </size> -->

# Client-side Runtime Sizes

Below are the approximate runtime sizes for each engine (lower numbers are better):

## Marko

| Modules        | Size |
| ------------- |:-------------:| -----:|
| `marko` | ~1.2KB gzipped (2.7KB uncompressed) |
| `marko` +<br>`async-writer` + <br>`raptor-xml/util` | ~2.33KB gzipped (6.3KB uncompressed) |

_NOTE:_ Sizes are approximate because overhead associated with the CommonJS module loader varies. Size based on code as of April 7, 2014.

## Dust

| Modules        | Size |
| ------------- |:-------------:| -----:|
| `dust-core` | 3.41KB gzipped (10.07KB uncompressed) |
| `dust-core` +<br>`dust-helpers` | 4.7KB gzipped (14.2KB uncompressed) |

_NOTE:_ Size based on code as of April 7, 2014.

# Contribute

## Adding a New Comparison Group

Each comparison group should contain a data file (either `data.json` or `data.js`) and a set of templates to compare. The file extension of the template will be used to determine which engine should be used. If the data file has the `.js` extension then it should be a JavaScript module that exports the data. A sample directory structure is shown below:

```
templates
    ├── group1
    │   ├── data.js
    │   ├── template.dust
    │   └── template.marko
    ├── group2
    │   ├── data.json
    │   ├── template.dust
    │   └── template.marko
    ├── group3
    │   ├── data.json
    │   ├── template.dust
    │   ├── template.native-for.marko
    │   └── template.marko
    └── group4
        ├── data.json
        ├── template.dust
        └── template.marko
```

## Adding a New Template Engine

To register a new templating engine, simply create a new module under the `engines` directory and it will automatically be loaded. See existing engine modules for supported methods and properties.

Pull Requests welcome!
