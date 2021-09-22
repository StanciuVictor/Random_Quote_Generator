/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


//Array containing 5 quote objects.
const quotes = [
  {
    quote: 'Believe you can and you\'re halfway there.',
    source: 'Theodore Roosevelt',       // the person or character who said it
    citation: 'Harvard',                // reference to the source of the quote (book, movie, song)
    year: '1905',                       // the year the quote originated.
    tags: ['motivational']              // list of categories
  },
  {
    quote: 'I would rather die of passion than of boredom.',
    source: 'Vincent van Gogh',
    year: '1884',
    tags: ['inspirational']
  },
  {
    quote: 'Eighty percent of success is showing up.',
    source: 'Woody Allen',
    year: '1982',
    tags: ['business','motivational']
  },
  {
    quote: 'When you can\'t find someone to follow, you have to find a way to lead by example.',
    source: 'Roxane Gay',
    citation: 'Bad Feminist',
    tags: ['motivational']
  },
  {
    quote: 'Business opportunities are like buses, there\'s always another one coming.',
    source: 'Richard Branson',
    tags: ['business', 'motivational']
  }
];
// console.log(quotes);    // Test to see if the quotes array is OK.


/**
 * Returns a random number between 0 and a set number
 * 
 * @param {number} num - The set number
 * @returns {number} The random number between 0 and set number
 */

let randomNumber = (num) => Math.floor(Math.random() * num);


/**
* Returns a random quote object from quotes array
*
* @param {array} arr - The array from which this function takes one random object
* @returns {object} The quote object
*/
function getRandomQuote(arr){
    let index = randomNumber(arr.length);     // Get a random number between [0;5) => [0;4] (the last index of quotes array)
  // console.log(`Index is: ${index}`);       // Test
    return arr[index];                        // Return random quote object
}


/**
 * Takes one random quote object from quotes array and prints code in the quote-box
 */
function printQuote(){
  // Set random background color
  document.body.style.backgroundColor = `rgb(${randomNumber(256)},${randomNumber(256)},${randomNumber(256)})`;
  // Get random quote object
  let quoteObj = getRandomQuote(quotes);
  // console.log(quoteObj);       // Test
  let htmlText = `<p class="quote">${quoteObj.quote}</p><p class="source">${quoteObj.source}`;
  // If there is a 'citation' property with a value assigned to it, append it
  if (typeof quoteObj.citation !== 'undefined') {
    htmlText += `<span class="citation">${quoteObj.citation}</span>`;
  }
  // If there is a 'year' property with a value assigned to it, append it
  if (typeof quoteObj.year !== 'undefined') {
    htmlText += `<span class="year">${quoteObj.year}</span>`;
  }
  if (typeof quoteObj.tags !== 'undefined') {
    htmlText += `<span class="tags">, ${quoteObj.tags.join(', ')}</span>`;
  }
  htmlText += `</p>`;
  document.getElementById('quote-box').innerHTML = htmlText;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);



