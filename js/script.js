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
    tags: ['business', 'motivational']
  },
  {
    quote: 'When you can\'t find someone to follow, you have to find a way to lead by example.',
    source: 'Roxane Gay',
    citation: 'Bad Feminist',
    year: '2014',
    tags: ['motivational']
  },
  {
    quote: 'Business opportunities are like buses, there\'s always another one coming.',
    source: 'Richard Branson',
    tags: ['business', 'motivational']
  },
  {
    quote: 'It is a curious thought, but it is only when you see people looking ridiculous that you realize just how much you love them.',
    source: 'Agatha Christie',
    citation: 'An Autobiography',
    year: '1977',
    tags: ['life', 'books']
  },
  {
    quote: 'Hoping for the best, prepared for the worst, and unsurprised by anything in between.',
    source: 'Maya Angelou',
    citation: 'I Know Why the Caged Bird Sings',
    year: '1969',
    tags: ['life', 'books']
  },
  {
    quote: 'There is nothing sweeter in this sad world than the sound of someone you love calling your name.',
    source: 'Kate DiCamillo',
    citation: 'The Tale of Despereaux',
    year: '2003',
    tags: ['books', 'love', 'fiction']
  }
];


/**
 * Returns a random number between 0 and a set number
 * 
 * @param {number} num - The set number
 * @returns {number} The random number between 0 and set number
 */

const randomNumber = (num) => Math.floor(Math.random() * num);


/**
* Returns a random quote object from quotes array
*
* @param {array} arr - The array from which this function takes one random object
* @returns {object} The quote object
*/
let indexAlreadyChosen;

function getRandomQuote(arr){
  // console.log(`Index Already Chosen: ${indexAlreadyChosen}`);
  let index = randomNumber(arr.length);                       // Get a random number between [0;8) => [0;7] (the last index of quotes array)
  // console.log(`New index: ${index}`);                      // Test
  // console.log(arr[index]);                                 // Test
   // Do not display the same quote two times in a row
   while (index === indexAlreadyChosen) {
    index = randomNumber(arr.length);
    // console.log(`The new index from WHILE is: ${index}`);  // Test
  }
  indexAlreadyChosen = index;
  // console.log(`After WHILE:`);                             // Test
  // console.log(arr[index]);                                 // Test
  return arr[index];
}


/**
 * Takes one random quote object from quotes array and prints code in the quote-box
 */
function printQuote(){
  // Set random background color
  /* Idea taken from https://stackoverflow.com/questions/31089414/javascript-change-background-color-on-click
  * adapted so that the color is random
  */
  document.body.style.backgroundColor = `rgb(${randomNumber(256)},${randomNumber(256)},${randomNumber(256)})`;
  // Get random quote object
  const quoteObj = getRandomQuote(quotes);
  let htmlText = `<p class="quote">${quoteObj.quote}</p><p class="source">${quoteObj.source}`;
  // If there is a 'citation', 'year' or 'tags' property with a value assigned to it, append it
  if (typeof quoteObj.citation !== 'undefined') {
    htmlText += `<span class="citation">${quoteObj.citation}</span>`;
  }
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


// Timing function to print new quote to the page every 10 seconds
// Informations taken from https://developer.mozilla.org/en-US/docs/Web/API/setInterval
const repeatPrintQuote = setInterval(printQuote, 1000 * 10);
