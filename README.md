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
- Mac Mini (Late 2014)
- Processor: 2.6 GHz Intel Core i5 dual core
- Memory: 8 GB 1600 MHz DDR3

## Performance

Higher numbers are better.

<!-- <performance> -->
```
                      RUNTIME PERFORMANCE
                      ===================
                      friends
                   ✓ marko »    3,843 op/s (fastest)
                ✗ lisplate »    3,199 op/s (16.76% slower)
                    ✗ dust »      790 op/s (79.44% slower)

                      if-expression
                   ✓ marko »  366,843 op/s (fastest)
                     ✗ pug »  212,426 op/s (42.09% slower)
                ✗ lisplate »  166,688 op/s (54.56% slower)

                      projects-escaped
      ✓ marko (native-for) »   82,979 op/s (fastest)
                   ✗ marko »   81,068 op/s (2.30% slower)
                ✗ lisplate »   58,962 op/s (28.94% slower)
              ✗ handlebars »   47,597 op/s (42.64% slower)
                    ✗ dust »   33,400 op/s (59.75% slower)

                      projects-unescaped
      ✓ marko (native-for) »  363,371 op/s (fastest)
                   ✗ marko »  333,676 op/s (8.17% slower)
                ✗ lisplate »  217,753 op/s (40.07% slower)
              ✗ handlebars »  127,691 op/s (64.86% slower)
                    ✗ dust »   67,451 op/s (81.44% slower)

                      reverse-helper
                   ✓ marko »  425,353 op/s (fastest)
                ✗ lisplate »  317,831 op/s (25.28% slower)
                    ✗ dust »  217,333 op/s (48.91% slower)

                      search-results
                   ✓ marko »   34,101 op/s (fastest)
                ✗ lisplate »   21,002 op/s (38.41% slower)
                    ✗ dust »    8,936 op/s (73.80% slower)

                      simple-1
                   ✓ marko »  199,371 op/s (fastest)
                     ✗ pug »  186,787 op/s (6.31% slower)
                     ✗ dot »  177,709 op/s (10.87% slower)
                ✗ lisplate »  129,090 op/s (35.25% slower)
              ✗ handlebars »   96,208 op/s (51.74% slower)
                    ✗ dust »   72,654 op/s (63.56% slower)
                    ✗ swig »   64,940 op/s (67.43% slower)
                ✗ nunjucks »   28,990 op/s (85.46% slower)
                   ✗ react »    3,644 op/s (98.17% slower)

                      simple-2
                   ✓ marko »  314,099 op/s (fastest)
                ✗ lisplate »  181,295 op/s (42.28% slower)
                    ✗ dust »   84,060 op/s (73.24% slower)

                      ui-components
                   ✓ marko »   70,369 op/s (fastest)
                ✗ lisplate »   65,482 op/s (6.94% slower)
                   ✗ react »    3,178 op/s (95.48% slower)
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
                ✗ lisplate »   497 bytes gzipped    1252 bytes uncompressed
                                    5.43% larger              27.00% larger

                      if-expression
                   ✓ marko »   281 bytes gzipped     469 bytes uncompressed
                                      (smallest)                 (smallest)
                ✗ lisplate »   349 bytes gzipped     736 bytes uncompressed
                                   19.48% larger              36.28% larger
                     ✗ pug »  1197 bytes gzipped    2801 bytes uncompressed
                                   76.52% larger              83.26% larger

                      projects-escaped
                   ✓ marko »   247 bytes gzipped     379 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   262 bytes gzipped     563 bytes uncompressed
                                    5.73% larger              32.68% larger
      ✗ marko (native-for) »   271 bytes gzipped     407 bytes uncompressed
                                    8.86% larger               6.88% larger
                ✗ lisplate »   278 bytes gzipped     468 bytes uncompressed
                                   11.15% larger              19.02% larger
              ✗ handlebars »   553 bytes gzipped    1551 bytes uncompressed
                                   55.33% larger              75.56% larger

                      projects-unescaped
                   ✓ marko »   250 bytes gzipped     380 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     595 bytes uncompressed
                                    6.72% larger              36.13% larger
                ✗ lisplate »   272 bytes gzipped     451 bytes uncompressed
                                    8.09% larger              15.74% larger
      ✗ marko (native-for) »   275 bytes gzipped     408 bytes uncompressed
                                    9.09% larger               6.86% larger
              ✗ handlebars »   530 bytes gzipped    1573 bytes uncompressed
                                   52.83% larger              75.84% larger

                      reverse-helper
                    ✓ dust »   151 bytes gzipped     321 bytes uncompressed
                                      (smallest)              31.78% larger
                   ✗ marko »   167 bytes gzipped     219 bytes uncompressed
                                    9.58% larger                 (smallest)
                ✗ lisplate »   180 bytes gzipped     277 bytes uncompressed
                                   16.11% larger              20.94% larger

                      search-results
                   ✓ marko »   536 bytes gzipped    1189 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   545 bytes gzipped    1523 bytes uncompressed
                                    1.65% larger              21.93% larger
                ✗ lisplate »   569 bytes gzipped    1447 bytes uncompressed
                                    5.80% larger              17.83% larger

                      simple-1
                   ✓ marko »   251 bytes gzipped     369 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   255 bytes gzipped     493 bytes uncompressed
                                    1.57% larger              25.15% larger
                   ✗ react »   262 bytes gzipped     478 bytes uncompressed
                                    4.20% larger              22.80% larger
                ✗ lisplate »   272 bytes gzipped     507 bytes uncompressed
                                    7.72% larger              27.22% larger
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
                ✗ lisplate »   298 bytes gzipped     622 bytes uncompressed
                                   14.43% larger              22.19% larger

                      ui-components
                   ✓ marko »   179 bytes gzipped     219 bytes uncompressed
                                      (smallest)                 (smallest)
                   ✗ react »   204 bytes gzipped     310 bytes uncompressed
                                   12.25% larger              29.35% larger
                ✗ lisplate »   210 bytes gzipped     251 bytes uncompressed
                                   14.76% larger              12.75% larger
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
