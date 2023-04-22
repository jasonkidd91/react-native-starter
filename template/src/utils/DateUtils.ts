import {
  format,
  parse,
  isToday,
  isYesterday,
  isSameWeek,
  isSameMonth,
  isSameYear,
} from 'date-fns';

// Predefined date formats
export const DATE_FORMATS = {
  SHORT_DATE: 'dd/MM/yyyy',
  MEDIUM_DATE: 'dd MMM yyyy',
  LONG_DATE: 'dd MMMM yyyy',
};

// Predefined date-time formats
export const DATE_TIME_FORMATS = {
  SHORT_DATE_TIME: 'dd/MM/yyyy HH:mm',
  MEDIUM_DATE_TIME: 'dd MMM yyyy HH:mm',
  LONG_DATE_TIME: 'dd MMMM yyyy HH:mm',
};

// Custom date display strings
export const DATE_DISPLAY_STRINGS = {
  TODAY: 'Today',
  YESTERDAY: 'Yesterday',
  THIS_WEEK: 'This week',
  THIS_MONTH: 'This month',
  THIS_YEAR: 'This year',
};

// Function to format a date with a given format
export const formatDate = (date: Date, formatString: string): string => {
  return format(date, formatString);
};

// Function to parse a date from a string with a given format
export const parseDate = (dateString: string, formatString: string): Date => {
  return parse(dateString, formatString, new Date());
};

// Function to display a relative date string
export const displayRelativeDate = (date: Date): string => {
  if (isToday(date)) {
    return DATE_DISPLAY_STRINGS.TODAY;
  } else if (isYesterday(date)) {
    return DATE_DISPLAY_STRINGS.YESTERDAY;
  } else if (isSameWeek(date, new Date())) {
    return DATE_DISPLAY_STRINGS.THIS_WEEK;
  } else if (isSameMonth(date, new Date())) {
    return DATE_DISPLAY_STRINGS.THIS_MONTH;
  } else if (isSameYear(date, new Date())) {
    return DATE_DISPLAY_STRINGS.THIS_YEAR;
  } else {
    return formatDate(date, DATE_FORMATS.MEDIUM_DATE);
  }
};
