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

- Node.js v6.2.0
- MacBook Mini (Late 2014)
- OSX 10.10.5
- Processor: 2.6 GHz Intel Core i5
- Memory: 8 GB 1600 MHz DDR3

## Performance

Higher numbers are better.

<!-- <performance> -->
```
                      RUNTIME PERFORMANCE
                      ===================
                      friends
                   ✓ marko »    3,873 op/s (fastest)
                ✗ lisplate »    1,907 op/s (50.76% slower)
                    ✗ dust »      778 op/s (79.91% slower)

                      if-expression
                   ✓ marko »  352,448 op/s (fastest)
                     ✗ pug »  208,744 op/s (40.77% slower)
                ✗ lisplate »  144,565 op/s (58.98% slower)

                      projects-escaped
      ✓ marko (native-for) »   83,506 op/s (fastest)
                   ✗ marko »   72,298 op/s (13.42% slower)
                ✗ lisplate »   50,150 op/s (39.94% slower)
              ✗ handlebars »   41,653 op/s (50.12% slower)
                    ✗ dust »   32,729 op/s (60.81% slower)

                      projects-unescaped
      ✓ marko (native-for) »  361,364 op/s (fastest)
                   ✗ marko »  337,788 op/s (6.52% slower)
              ✗ handlebars »  131,089 op/s (63.72% slower)
                ✗ lisplate »  126,023 op/s (65.13% slower)
                    ✗ dust »   70,054 op/s (80.61% slower)

                      reverse-helper
                   ✓ marko »  414,272 op/s (fastest)
                    ✗ dust »  224,419 op/s (45.83% slower)
                ✗ lisplate »  205,142 op/s (50.48% slower)

                      search-results
                   ✓ marko »   33,888 op/s (fastest)
                ✗ lisplate »   16,842 op/s (50.30% slower)
                    ✗ dust »    8,980 op/s (73.50% slower)

                      simple-1
                   ✓ marko »  200,844 op/s (fastest)
                     ✗ pug »  189,414 op/s (5.69% slower)
                     ✗ dot »  175,816 op/s (12.46% slower)
              ✗ handlebars »   98,864 op/s (50.78% slower)
                ✗ lisplate »   92,798 op/s (53.80% slower)
                    ✗ dust »   73,643 op/s (63.33% slower)
                    ✗ swig »   67,505 op/s (66.39% slower)
                ✗ nunjucks »   29,432 op/s (85.35% slower)
                   ✗ react »    3,754 op/s (98.13% slower)

                      simple-2
                   ✓ marko »  294,916 op/s (fastest)
                ✗ lisplate »  138,210 op/s (53.14% slower)
                    ✗ dust »   86,137 op/s (70.79% slower)

                      ui-components
                   ✓ marko »   71,076 op/s (fastest)
                ✗ lisplate »   17,275 op/s (75.70% slower)
                   ✗ react »    3,190 op/s (95.51% slower)
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
                ✗ lisplate »   489 bytes gzipped    1191 bytes uncompressed
                                    3.89% larger              23.26% larger

                      if-expression
                   ✓ marko »   281 bytes gzipped     469 bytes uncompressed
                                      (smallest)                 (smallest)
                ✗ lisplate »   336 bytes gzipped     667 bytes uncompressed
                                   16.37% larger              29.69% larger
                     ✗ pug »  1195 bytes gzipped    2801 bytes uncompressed
                                   76.49% larger              83.26% larger

                      projects-escaped
                   ✓ marko »   247 bytes gzipped     379 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   262 bytes gzipped     563 bytes uncompressed
                                    5.73% larger              32.68% larger
                ✗ lisplate »   262 bytes gzipped     440 bytes uncompressed
                                    5.73% larger              13.86% larger
      ✗ marko (native-for) »   271 bytes gzipped     407 bytes uncompressed
                                    8.86% larger               6.88% larger
              ✗ handlebars »   553 bytes gzipped    1551 bytes uncompressed
                                   55.33% larger              75.56% larger

                      projects-unescaped
                   ✓ marko »   250 bytes gzipped     380 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     595 bytes uncompressed
                                    6.72% larger              36.13% larger
                ✗ lisplate »   268 bytes gzipped     449 bytes uncompressed
                                    6.72% larger              15.37% larger
      ✗ marko (native-for) »   275 bytes gzipped     408 bytes uncompressed
                                    9.09% larger               6.86% larger
              ✗ handlebars »   530 bytes gzipped    1573 bytes uncompressed
                                   52.83% larger              75.84% larger

                      reverse-helper
                    ✓ dust »   151 bytes gzipped     321 bytes uncompressed
                                      (smallest)              31.78% larger
                ✗ lisplate »   161 bytes gzipped     252 bytes uncompressed
                                    6.21% larger              13.10% larger
                   ✗ marko »   167 bytes gzipped     219 bytes uncompressed
                                    9.58% larger                 (smallest)

                      search-results
                   ✓ marko »   536 bytes gzipped    1189 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   545 bytes gzipped    1523 bytes uncompressed
                                    1.65% larger              21.93% larger
                ✗ lisplate »   556 bytes gzipped    1388 bytes uncompressed
                                    3.60% larger              14.34% larger

                      simple-1
                   ✓ marko »   251 bytes gzipped     369 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   254 bytes gzipped     491 bytes uncompressed
                                    1.18% larger              24.85% larger
                ✗ lisplate »   259 bytes gzipped     460 bytes uncompressed
                                    3.09% larger              19.78% larger
                   ✗ react »   262 bytes gzipped     478 bytes uncompressed
                                    4.20% larger              22.80% larger
                     ✗ dot »   362 bytes gzipped     559 bytes uncompressed
                                   30.66% larger              33.99% larger
              ✗ handlebars »   431 bytes gzipped     877 bytes uncompressed
                                   41.76% larger              57.92% larger
                ✗ nunjucks »   465 bytes gzipped     991 bytes uncompressed
                                   46.02% larger              62.76% larger
                    ✗ swig »   558 bytes gzipped    2636 bytes uncompressed
                                   55.02% larger              86.00% larger
                     ✗ pug »   786 bytes gzipped    1508 bytes uncompressed
                                   68.07% larger              75.53% larger

                      simple-2
                   ✓ marko »   255 bytes gzipped     484 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     648 bytes uncompressed
                                    4.85% larger              25.31% larger
                ✗ lisplate »   283 bytes gzipped     594 bytes uncompressed
                                    9.89% larger              18.52% larger

                      ui-components
                   ✓ marko »   179 bytes gzipped     219 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ react »   204 bytes gzipped     310 bytes uncompressed
                                   12.25% larger              29.35% larger
                ✗ lisplate »   210 bytes gzipped     270 bytes uncompressed
                                   14.76% larger              18.89% larger
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
