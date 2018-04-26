import tp from '../src';

const MILLISECOND = 1;
const SECOND = 1000 * MILLISECOND;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

describe('properties without units', () => {
    it('returns correct with just numbers', () => {
        expect(tp.ZERO).toBe(0);
        expect(tp.ONE).toBe(1);
        expect(tp.NINE).toBe(9);
        expect(tp.THIRTEEN).toBe(13);
    });

    it('throws an error if number is unparseable', () => {
        expect(() => tp.SOME_UNKNOWN_VARIABLE)
            .toThrow(/Could not parse expression/);
    });
});

describe('properties with units', () => {
    it('returns correct with milliseconds', () => {
        expect(tp.ONE_MILLISECOND).toBe(1 * MILLISECOND);
        expect(tp.NINE_HUNDRED_MILLISECONDS).toBe(900 * MILLISECOND);
        expect(tp.NINETY_THOUSAND_MILLISECONDS).toBe(90000 * MILLISECOND);
    });

    it('returns correct with seconds', () => {
        expect(tp.TWO_SECONDS).toBe(2 * SECOND);
        expect(tp.THIRTY_SECONDS).toBe(30 * SECOND);
        expect(tp.HUNDRED_SECONDS).toBe(100 * SECOND);
    });

    it('returns correct with minutes', () => {
        expect(tp.THREE_MINUTES).toBe(3 * MINUTE);
        expect(tp.FIFTEEN_MINUTES).toBe(15 * MINUTE);
        expect(tp.HUNDRED_MINUTES).toBe(100 * MINUTE);
    });

    it('returns correct with hours', () => {
        expect(tp.ONE_HOURS).toBe(1 * HOUR);
        expect(tp.FOUR_HOURS).toBe(4 * HOUR);
        expect(tp.FOURTY_HOURS).toBe(40 * HOUR);
    });

    it('returns correct with days', () => {
        expect(tp.SEVEN_DAYS).toBe(7 * DAY);
        expect(tp.SEVENTEEN_DAYS).toBe(17 * DAY);
        expect(tp.EIGHTY_DAYS).toBe(80 * DAY);
    });

    it('returns correct with weeks', () => {
        expect(tp.FIVE_WEEKS).toBe(5 * WEEK);
        expect(tp.FIFTEEN_WEEKS).toBe(15 * WEEK);
        expect(tp.FIFTY_WEEKS).toBe(50 * WEEK);
    });
});

describe('properties with combined numbers', () => {
    it('works with two numbers', () => {
        expect(tp.TWENTY_FIVE_SECONDS).toBe(25 * SECOND);
    });

    it('works with several numbers', () => {
        expect(tp.TWO_HUNDRED_TWENTY_FIVE_SECONDS).toBe(225 * SECOND);
    });

    it('ignores the AND term', () => {
        expect(tp.HUNDRED_AND_THIRTY_TWO).toBe(132);
        expect(tp.HUNDRED_AND_THIRTY_TWO_SECONDS).toBe(132 * SECOND);
    });
});

describe('properties with combined units', () => {
    it('works with two units', () => {
        expect(tp.TWO_MINUTES_AND_THREE_SECONDS).toBe(2 * MINUTE + 3 * SECOND);
        expect(tp.NINETY_HOURS_FOUR).toBe(90 * HOUR + 4);
    });

    it('works witn several units', () => {
        expect(tp.ONE_HOURS_TWO_MINUTES_THREE_SECONDS).toBe(HOUR + 2 * MINUTE + 3 * SECOND);
        expect(tp.NINE_WEEKS_TWELVE_DAYS_SEVEN_MINUTES_AND_HALF_A_SECOND).toBe(WEEK * 9 + DAY * 12 + MINUTE * 7 + 500);
    });
});

describe('properties with single unit', () => {
    it('works with single unit', () => {
        expect(tp.ONE_SECOND).toBe(SECOND);
        expect(tp.ONE_MINUTE).toBe(MINUTE);
        expect(tp.ONE_HOUR).toBe(HOUR);
        expect(tp.ONE_DAY).toBe(DAY);
        expect(tp.ONE_WEEK).toBe(WEEK);
    });
});

describe('properties with fraction units', () => {
    it('works with halves', () => {
        expect(tp.ONE_HALF_SECOND).toBe(500);
        expect(tp.HALF_A_SECOND).toBe(500);
        expect(tp.THREE_HALVES).toBe(1.5);
    });
    it('works with thirds', () => {
        expect(tp.A_THIRD_DAY).toBe(HOUR * 8);
        expect(tp.A_THIRD).toBe(1/3);
    });
    it('works with quarters', () => {
        expect(tp.THREE_QUARTERS_HOUR).toBe(HOUR / 4 * 3);
        expect(tp.A_QUARTER_DAY).toBe(HOUR * 6);
    });
});

describe('properties with a and an', () => {
    it('counts for one', () => {
        expect(tp.A_SECOND).toBe(SECOND);
        expect(tp.AN_HOUR).toBe(HOUR);
    });
    it('doesnt judge you for not knowing grammer', () => {
        expect(tp.AN_SECOND).toBe(SECOND);
        expect(tp.A_HOUR).toBe(HOUR);
    });
    it('see what I did there?', () => {});
});

describe('properties with of', () => {
    it('reads better, but doesn\'t cause trouble', () => {
        expect(tp.HALF_OF_A_MINUTE).toBe(MINUTE / 2);
        expect(tp.THIRTY_OF_SECONDS).toBe(SECOND * 30);
        expect(tp.A_QUARTER_OF_AN_HOUR).toBe(MINUTE * 15);
    });
});

describe('properties that are relative in time', () => {
    it('works with past', () => {
        const now = Date.now();
        Date.now = jest.fn(() => now);

        expect(tp.AN_HOUR_AGO).toBe(now - HOUR);
        expect(tp.A_MINUTE_THIRTY_SECONDS_AGO).toBe(now - (MINUTE + 30 * SECOND));
    });
    it('works with future', () => {
        const now = Date.now();
        Date.now = jest.fn(() => now);

        expect(tp.IN_AN_HOUR).toBe(now + HOUR);
        expect(tp.IN_A_WEEK_AND_SIX_DAYS).toBe(now + (WEEK) + (DAY * 6));
    });
});

describe('edge cases', () => {
    it('works with any case', () => {
        expect(tp.one_second).toBe(SECOND);
        expect(tp.one_Week).toBe(WEEK);
        expect(tp.ONE_hour).toBe(HOUR);
        expect(tp.OnE_DaY).toBe(DAY);
    });

    it('works with several multipliers back to back', () => {
        expect(tp.HUNDRED_THOUSAND_SECONDS).toBe(100 * 1000 * SECOND);
    });
});

describe('tagged template literal', () => {
    it('works with underscores', () => {
        expect(tp`one_second`).toBe(SECOND);
        expect(tp`ONE_WEEK`).toBe(WEEK);
    });
    it('works with spaces', () => {
        expect(tp`one second`).toBe(SECOND);
        expect(tp`ONE WEEK`).toBe(WEEK);
    });
    it('works with hyphens', () => {
        expect(tp`one-second`).toBe(SECOND);
        expect(tp`ONE-WEEK`).toBe(WEEK);
    });
    it('works with a mix of approaches', () => {
        expect(tp`ONE-WEEK_AND seven minutes`).toBe(WEEK + (MINUTE * 7));
    });

    it('works with arguments', () => {
        const sixty = 60;
        expect(tp`1 day ${60} minutes and ${30} seconds`)
            .toBe(DAY + (MINUTE * 60) + (30 * SECOND));
    });
});

describe('numerics', () => {
    it('works with proxies', () => {
        expect(tp.A_MINUTE_20_SECONDS).toBe(MINUTE + (20 * 1000));
    });
    it('works with tagged template literals', () => {
        expect(tp`a minute 60 seconds`).toBe(2 * MINUTE);
        expect(tp`1 minute 60 seconds`).toBe(2 * MINUTE);
        expect(tp`1 minute .5 seconds`).toBe(MINUTE + 500);
    });
});

describe('alternative usage', () => {
    it('works when being called as a function', () => {
        expect(tp(`a minute 45`)).toBe(MINUTE + 45);
        expect(tp(`a minute ${45}`)).toBe(MINUTE + 45);
    });
});
