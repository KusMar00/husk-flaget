import axios from 'axios';
import * as cheerio from 'cheerio';

// Type definitions for utility functions
export type FlagDayType = {
  date: Date;
  title: string;
  details: string;
};

// Constant definitions used in utility functions
const URL = 'https://www.justitsministeriet.dk/temaer/flagning/flagdage/';

const currentDate = new Date();

// Utility functions
const convertMonthToNumber = (month: string): number => {
  month = month.toLowerCase();
  switch (month) {
    case 'januar':
      return 0;
    case 'februar':
      return 1;
    case 'marts':
      return 2;
    case 'april':
      return 3;
    case 'maj':
      return 4;
    case 'juni':
      return 5;
    case 'juli':
      return 6;
    case 'august':
      return 7;
    case 'september':
      return 8;
    case 'oktober':
      return 9;
    case 'november':
      return 10;
    case 'december':
      return 11;
    default:
      return 0;
  }
};

const scrapeFlagFlyingDays = async () => {
  // Request and parse HTML
  const response = await axios.get(URL);
  const $ = cheerio.load(response.data);

  // Split HTML table into array
  let flagDayArray = new Array<FlagDayType>();
  // Here I assume that there are no other <tr> elements on the page
  $('tr').each((index, element) => {
    let currentFlagDay: FlagDayType = { date: new Date(), title: '', details: '' };
    $(element)
      .children('td')
      .each((childIndex, childElement) => {
        if (childIndex === 0) {
          // In this case we have the date text information
          const [date, month] = $(childElement).text().split('.');
          currentFlagDay.date = new Date(
            currentDate.getFullYear(),
            convertMonthToNumber(month.trim()),
            Number(date) + 1
          );
        } else {
          // Here we have the text description
          const [title, desc] = $(childElement).text().split('.');
          currentFlagDay.title = title;
          currentFlagDay.details = desc.trim();
        }
      });
    flagDayArray.push(currentFlagDay);
  });

  return flagDayArray;
};

// const scrapeFlagFlyingDaysAndSaveToFile = async () => {
//   const fs = require('fs');

//   const data = await scrapeFlagFlyingDays();

//   // Convert the array to JavaScript code
//   const jsContent = `export const flagDayArray = ${JSON.stringify(data)};`;

//   // Write JavaScript code to file
//   fs.writeFile('flagDays.js', jsContent, 'utf8', (err: Error) => {
//     if (err) {
//       console.error('Error writing file:', err);
//       return;
//     }
//     console.log('File has been saved successfully.');
//   });
// };

function dateDiffInDays(a: Date, b: Date): number {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

const getNextFlagDay = async (
  flagDayArray: Array<FlagDayType>,
  currentDate: Date
): Promise<[FlagDayType, number]> => {
  for (let i = 0; i < flagDayArray.length; i++) {
    const days = dateDiffInDays(currentDate, flagDayArray[i].date);
    if (days >= 0) {
      return [flagDayArray[i], days];
    }
  }
  throw Error("Couldn't find closest date");
};

const testUtils = async (): Promise<void> => {
  // Scrape
  const data = await scrapeFlagFlyingDays();

  // Find closest flag flying day
  const [flagDay, days] = await getNextFlagDay(data, new Date());
  console.log(`The next flag day is ${flagDay.title}!`);
  flagDay.details.length > 1 && console.log(flagDay.details);
  console.log(`In ${days} days`);
};

export const scrapeAndGetNextFlagDay = async (): Promise<{
  flagDay: FlagDayType;
  days: number;
  allDays: Array<FlagDayType>;
}> => {
  // Scrape
  const data = await scrapeFlagFlyingDays();

  // Find closest flag flying day
  const [flagDay, days] = await getNextFlagDay(data, new Date());

  return { flagDay: flagDay, days: days, allDays: data };
};
testUtils();
