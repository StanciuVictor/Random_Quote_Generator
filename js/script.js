/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
quotes = [
  {
    quote: '"Believe you can and you\'re halfway there."',
    source: 'Theodore Roosevelt',       // the person or character who said it
    citation: 'Harvard',                // reference to the source of the quote (book, movie, song)
    year: '1905'                        // the year the quote originated.
  },
  {
    quote: '"I would rather die of passion than of boredom."',
    source: 'Vincent van Gogh',
    year: '1884'
  },
  {
    quote: '"Eighty percent of success is showing up."',
    source: 'Woody Allen',
    year: '1982'
  },
  {
    quote: '"You can never cross the ocean until you have the courage to lose sight of the shore."',
    source: 'Christopher Columbus'
  },
  {
    quote: '"Go confidently in the direction of your dreams. Live the life you have imagined."',
    source: 'Henry David Thoreau'
  }
];
// console.log(quotes);    // Test to see if the quotes array is OK.

/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr){
  let index = Math.floor((Math.random() * (arr.length)));    // Get a random number between [0;5) => [0;4] (the last index of quotes array)
  // console.log(`Index is: ${index}`);                      // Test
  return arr[index];
}

/***
 * `printQuote` function
***/
function printQuote(){
  quoteObj = getRandomQuote(quotes);
  htmlText = `<p class="quote">${quoteObj.quote}</p><p class="source">${quoteObj.source}`;
  // console.log(quoteObj);
  if (typeof quoteObj.citation !== 'undefined') {
    htmlText += `<span class="citation">${quoteObj.citation}</span>`;
  }
  if (typeof quoteObj.year !== 'undefined') {
    htmlText += `<span class="year">${quoteObj.year}</span>`;
  }
  htmlText += `</p>`;
  return htmlText;
}

document.getElementById('quote-box').innerHTML = printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);






