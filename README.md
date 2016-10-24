# timeproxy

Not quite production ready yet, but will be very soon

> Simple library for time constants

Creating time constants can be a pain. You want to name them
after what they are, like `SESSION_TIMEOUT` or `MAX_REQUESTS`,
but you also want to make sure the code reflects how long of
a period it is. Meet `timeproxy`.

Using some quite clever ES2015 proxies, you can now have both.

## Usage

```bash
npm install timeproxy --save
```

```javascript
import tp from 'timeproxy';

const TIMEOUT_LIMIT = tp.FIVE_SECONDS;
const AGE_LIMIT = tp.ONE_WEEK_AND_SIX_DAYS;
```

Let me know if there are features you need I haven't
implemented yet.
