# Date-fns and MomentJs Performance test

We are testing the performance of date-fns and momentJs against some basic operations of a dates library:

- Parsing a string to date object.
- Getting the day of the year.
- Manipulating a date, in this case we're adding one day to the current date.
- Displaying the date using the format 'YYYY-MM-DD'
- Query: using the isAfter operator.

## Usage

```
npm install
npm run bench
```

## Specs

The specs from the machine on which the tests were run:

```
$ node -v
v6.9.5

$ /usr/sbin/system_profiler SPHardwareDataType
Hardware Overview:

     Model Name: MacBook Pro
     Model Identifier: MacBookPro13,1
     Processor Name: Intel Core i7
     Processor Speed: 2.4 GHz
     Number of Processors: 1
     Total Number of Cores: 2
     L2 Cache (per Core): 256 KB
     L3 Cache: 4 MB
     Memory: 16 GB
```

## Results

Parse string in ISO format to date.
```
  2 tests completed.

  moment   x  28,827 ops/sec ±9.95% (75 runs sampled)
  date-fns x 365,774 ops/sec ±2.30% (85 runs sampled)

  Fastest is: date-fns
```

Get current day of year.
```
  2 tests completed.

  moment   x 149,711 ops/sec ±1.23% (89 runs sampled)
  date-fns x 644,809 ops/sec ±2.20% (82 runs sampled)

  Fastest is: date-fns
```

Manipulate the current date adding one day to it.
```
  2 tests completed.

  moment   x   394,877 ops/sec ±1.80% (87 runs sampled)
  date-fns x 1,674,981 ops/sec ±2.79% (83 runs sampled)

  Fastest is: date-fns
```

Display date using the format YYYY-MM-DD.
```
  2 tests completed.

  moment   x 300,595 ops/sec ±2.42% (79 runs sampled)
  date-fns x 221,146 ops/sec ±2.96% (81 runs sampled)

  Fastest is: moment

```

Compare two dates using the operator isAfter.
```
  2 tests completed.

  moment   x   274,728 ops/sec ±4.11% (82 runs sampled)
  date-fns x 2,187,090 ops/sec ±2.55% (84 runs sampled)

  Fastest is: date-fns
```

### Bundle sizes

Launch with `npm run bundle`.

```
Size moment 231.434KB
Size moment-no-locales 49.467KB
Size date-fns 30.387KB
```

Props to [@PepijnSenders](https://github.com/PepijnSenders) for inspiring this test and his awesome job on [The css-in-js battle](https://engineering.hellofresh.com/the-css-in-js-battle-89c34a7a83ea#.p98o1m3qz)
