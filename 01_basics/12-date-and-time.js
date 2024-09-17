// JavaScript Date Object - Comprehensive Guide

// Creating a Date Object
// ======================

// 1. Creating a Date with the Current Date and Time
let now = new Date();
console.log(now); // Output: Current date and time

// 2. Creating a Date with a Specific Date and Time
let specificDate = new Date('2023-09-12T15:30:00');
console.log(specificDate); // Output: Tue Sep 12 2023 15:30:00 GMT...

// 3. Creating a Date Using Individual Components (year, month, day, hour, minute, second, millisecond)
let dateFromComponents = new Date(2024, 8, 12, 15, 30, 0, 0); // Note: Month is 0-indexed (0 = January, 8 = September)
console.log(dateFromComponents); // Output: Thu Sep 12 2024 15:30:00 GMT...

// 4. Creating a Date from Milliseconds Since January 1, 1970
let fromMilliseconds = new Date(0); // 0 milliseconds after January 1, 1970
console.log(fromMilliseconds); // Output: Thu Jan 01 1970 00:00:00 GMT...

// Getting Components of a Date
// ============================

let exampleDate = new Date('2024-09-12T15:30:00');

console.log(exampleDate.getFullYear());    // Output: 2024 (Gets the year)
console.log(exampleDate.getMonth());       // Output: 8 (Gets the month, 0-indexed: 8 = September)
console.log(exampleDate.getDate());        // Output: 12 (Gets the day of the month)
console.log(exampleDate.getDay());         // Output: 4 (Gets the day of the week, 0 = Sunday, 4 = Thursday)
console.log(exampleDate.getHours());       // Output: 15 (Gets the hour)
console.log(exampleDate.getMinutes());     // Output: 30 (Gets the minutes)
console.log(exampleDate.getSeconds());     // Output: 0 (Gets the seconds)
console.log(exampleDate.getMilliseconds()); // Output: 0 (Gets the milliseconds)

// Setting Components of a Date
// ============================

let modifiableDate = new Date();

modifiableDate.setFullYear(2025); // Sets the year
console.log(modifiableDate); // Year is now 2025

modifiableDate.setMonth(11); // Sets the month to December (11 because it's 0-indexed)
console.log(modifiableDate); // Month is now December

modifiableDate.setDate(25); // Sets the day of the month
console.log(modifiableDate); // Day is now 25th

modifiableDate.setHours(10); // Sets the hour
console.log(modifiableDate); // Hour is now 10

modifiableDate.setMinutes(45); // Sets the minutes
console.log(modifiableDate); // Minutes are now 45

modifiableDate.setSeconds(30); // Sets the seconds
console.log(modifiableDate); // Seconds are now 30

modifiableDate.setMilliseconds(500); // Sets the milliseconds
console.log(modifiableDate); // Milliseconds are now 500

// Getting and Setting Time in Milliseconds
// ========================================

let timeDate = new Date();

console.log(timeDate.getTime()); // Output: Milliseconds since January 1, 1970

timeDate.setTime(1609459200000); // Sets the time to a specific point (January 1, 2021)
console.log(timeDate); // Output: Date set to January 1, 2021

// Date and Time String Representations
// =====================================

let dateStringExample = new Date();

console.log(dateStringExample.toDateString()); // Output: Thu Sep 12 2024 (Converts date to string format)
console.log(dateStringExample.toTimeString()); // Output: 15:30:00 GMT... (Converts time to string format)
console.log(dateStringExample.toISOString());  // Output: 2024-09-12T15:30:00.000Z (ISO standard format)
console.log(dateStringExample.toUTCString());  // Output: Thu, 12 Sep 2024 15:30:00 GMT (UTC format)
console.log(dateStringExample.toLocaleString()); // Output: 9/12/2024, 3:30:00 PM (Locale-specific format)
console.log(dateStringExample.toLocaleDateString()); // Output: 9/12/2024 (Locale-specific date format)
console.log(dateStringExample.toLocaleTimeString()); // Output: 3:30:00 PM (Locale-specific time format)

// Parsing Dates
// =============

let parsedDate = Date.parse('2024-09-12T15:30:00');
console.log(parsedDate); // Output: Milliseconds representation of the date

// Date Comparisons
// ================

let date1 = new Date('2024-09-12T15:30:00');
let date2 = new Date('2024-09-13T15:30:00');

console.log(date1 < date2); // Output: true (date1 is earlier than date2)
console.log(date1.getTime() === date2.getTime()); // Output: false (dates are not the same)

// Summary of Key Points
// =====================
// - Creating Dates: Use the Date constructor to create dates using different formats or from milliseconds since 1970.
// - Getting and Setting Components: getFullYear(), getMonth(), getDate(), etc., are used for retrieving date components, while setFullYear(), setMonth(), etc., modify them.
// - Time Manipulation: Use getTime() and setTime() to work with dates in terms of milliseconds since January 1, 1970.
// - Formatting Dates: Methods like toDateString(), toTimeString(), and toISOString() provide various formats of dates for display.
// - Parsing and Comparing: Date.parse() helps in converting date strings to milliseconds, and direct comparisons or getTime() can be used for comparing dates.

// The Date object is a powerful tool in JavaScript for handling dates and times, crucial for applications involving scheduling, timestamps, and time-related calculations.
