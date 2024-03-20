import axios from 'axios';
import * as cheerio from 'cheerio';

// Type definitions for utility functions
type FlagDayType = {
  date: Date;
  title: string;
  details: string;
};

// Constant definitions used in utility functions
const URL = 'https://www.justitsministeriet.dk/temaer/flagning/flagdage/';

const currentYear = new Date().getFullYear();

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
            currentYear,
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

  console.log(flagDayArray);
  return flagDayArray;
};

const saveScraperDataToFile = async () => {
  const fs = require('fs');

  const data = await scrapeFlagFlyingDays();

  // Convert the array to JavaScript code
  const jsContent = `export const flagDayArray = ${JSON.stringify(data)};`;

  // Write JavaScript code to file
  fs.writeFile('flagDays.js', jsContent, 'utf8', (err: Error) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File has been saved successfully.');
  });
};

saveScraperDataToFile();
