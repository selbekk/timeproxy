export const multipliers = {
    HUNDRED: 100,
    THOUSAND: 1000,
    MILLION: 1000000,
    BILLION: 1000000000,
};

export const numbers = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    ELEVEN: 11,
    TWELVE: 12,
    THIRTEEN: 13,
    FOURTEEN: 14,
    FIFTEEN: 15,
    SIXTEEN: 16,
    SEVENTEEN: 17,
    EIGHTEEN: 18,
    NINETEEN: 19,
    TWENTY: 20,
    THIRTY: 30,
    FOURTY: 40,
    FIFTY: 50,
    SIXTY: 60,
    SEVENTY: 70,
    EIGHTY: 80,
    NINETY: 90,
};

export const units = {
    SECONDS: 1000,
    MINUTES: 1000 * 60,
    HOURS: 1000 * 60 * 60,
    DAYS: 1000 * 60 * 60 * 24,
    WEEKS: 1000 * 60 * 60 * 24 * 7,
};

Object.assign(units, {
    SECOND: units.SECONDS,
    MINUTE: units.MINUTES,
    HOUR: units.HOURS,
    DAY: units.DAYS,
    WEEK: units.WEEKS,
});
