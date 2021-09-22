/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


//Array containing 5 quote objects.
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

/**
* Returns a random quote object from quotes array
*
* @param {array} arr - The array from which this function takes one random object
* @returns {object} The quote object
*/
function getRandomQuote(arr){
    let index = Math.floor((Math.random() * (arr.length)));   // Get a random number between [0;5) => [0;4] (the last index of quotes array)
  // console.log(`Index is: ${index}`);                       // Test
    return arr[index];                                        // Return random quote object
}

/**
 * Takes one random quote object from quotes array and generates html code
 * 
 * @returns {string} The html code needed to print the quote, source, citation and year.
 */
function printQuote(){
  quoteObj = getRandomQuote(quotes);
  // console.log(quoteObj);       // Test
  htmlText = `<p class="quote">${quoteObj.quote}</p><p class="source">${quoteObj.source}`;
  // If there is a citation property with a value assigned to it, append it
  if (typeof quoteObj.citation !== 'undefined') {
    htmlText += `<span class="citation">${quoteObj.citation}</span>`;
  }
  // If there is a year property with a value assigned to it, append it
  if (typeof quoteObj.year !== 'undefined') {
    htmlText += `<span class="year">${quoteObj.year}</span>`;
  }
  htmlText += `</p>`;
  return htmlText;
}

// print the html code in the quote-box
document.getElementById('quote-box').innerHTML = printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);






