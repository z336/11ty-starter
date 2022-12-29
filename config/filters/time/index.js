const { DateTime } = require("luxon");

// Format Dates
const readableDate = (date) => {
  return DateTime.fromJSDate(date, { zone: "utc" }).toFormat("LLL dd, yyyy");
};
const htmlDateString = (date) => {
  return DateTime.fromJSDate(date, { zone: "utc" }).toFormat("yyyy-LL-dd");
};

const getFullYear = () => {
  const year = new Date().getFullYear();
  return year;
};

module.exports = {
  readableDate,
  htmlDateString,
  getFullYear,
};
