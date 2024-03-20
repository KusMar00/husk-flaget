const axios = require('axios');
const cheerio = require('cheerio');

type FlagDayType = {
  date: string;
  desc: string;
};

const scrape = async () => {
  // Request and parse HTML
  const response = await axios.get('https://www.justitsministeriet.dk/temaer/flagning/flagdage/');
  const selector = cheerio.load(response.data);

  // Split HTML table into array
  let dates = new Array<FlagDayType>();
  let curDate = { date: '', desc: '' };
  selector('td').each((index: number, element: cheerio.Element) => {
    if (index % 2 === 0) {
      curDate.date = selector(element).text().trim();
    } else {
      curDate.desc = selector(element).text().trim();
      dates.push(curDate);
      curDate = { date: '', desc: '' };
    }
  });

  console.log(dates);
  return dates;
};
