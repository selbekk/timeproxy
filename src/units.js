const units = {
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

export default units;
