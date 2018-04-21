# timeproxy
[![npm version](https://badge.fury.io/js/timeproxy.svg)](https://badge.fury.io/js/timeproxy) [![Build Status](https://travis-ci.org/selbekk/timeproxy.svg?branch=master)](https://travis-ci.org/selbekk/timeproxy) [![Coverage Status](https://coveralls.io/repos/github/selbekk/timeproxy/badge.svg?branch=master)](https://coveralls.io/github/selbekk/timeproxy?branch=master) [![Y2K Compliant](https://img.shields.io/badge/%F0%9F%97%93-Y2K%20Compliant-bd6867.svg)]


> Simple library for time constants

Creating time constants can be a pain. You want to name them
after what they are, like `SESSION_TIMEOUT` or `MAX_REQUESTS`,
but you also want to make sure the code reflects how long of
a period it is. Meet `timeproxy`.

Using some quite clever ES2015 proxies, you can now have both.

## Usage

```bash
npm install timeproxy
```

`timeproxy` works by parsing the name of the "constant" you
specify and returning the amount of milliseconds you require. 

```ks
import tp from 'timeproxy';

const TIMEOUT_LIMIT = tp.FIVE_SECONDS;
const AGE_LIMIT = tp.ONE_WEEK_AND_SIX_DAYS;
```

There's support for seconds, minutes, hours, days and weeks. You can even write 
fractions!

Here's a few examples of what you can do: 

```js
import tp from 'timeproxy';

const REQUEST_TIMEOUT = tp.THIRTY_SECONDS;
const UPDATE_DELAY = tp.HALF_A_SECOND;
const COOKIE_EXPIRATION = tp.FOUR_WEEKS;
const IN_ALMOST_A_MINUTE = tp.IN_FIFTY_NINE_SECONDS;
```

I've [written a blog post](https://medium.com/@selbekk/timeproxy-a-library-for-making-readable-time-constants-5f6bdd9c598d) about this as well - please refer to it for more examples. 

## Contribute!

If there are features you'd like to see in this tiny library,
please let me know through an issue. If you feel up for it,
please create a pull request and I'll make sure to look at it
as soon as possible.
