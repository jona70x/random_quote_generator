/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
"use strict";
// Array containing object quotes
const quotes = [
  {
    quote:
      "Just one small positive thought in the morning can change your whole day.",
    source: "Dalai Lama",
  },
  {
    quote:
      "When we strive to become better than we are, everything around us becomes better too.",
    source: "Paulo Coelho",
  },
  {
    quote: "Time takes it all, whether you want it to or not.",
    source: "Stephen King",
    citation: "The Green Mile",
    year: "1996",
  },
  {
    quote:
      "As he read, I feel in love the way you fall asleep: slowly, and then all at once.",
    source: "John Green",
    citation: "The Fault in Our Stars",
    year: "2012",
  },
  {
    quote: "Offering someone food, and secretly hoping, they don't want it.",
    source: "Unknown",
    citation: "Twitter",
    category: "Humor",
  },
  {
    quote: "Live, from New York, it's Saturday night!",
    source: "Saturday Night Live",
    category: "TV Show",
  },
  {
    quote: "Action is the foundational key to all success.",
    source: "Pablo Picasso",
  },
];
//function to generate a random number. Accepts an upper parameter to calculate number between 0 and upper(not included)
const generateRandomNumber = (upper) => Math.floor(Math.random() * upper);

//Function to generate random Color
const generateRandomColor = () =>
  `rgb(${generateRandomNumber(256)}, ${generateRandomNumber(
    256
  )}, ${generateRandomNumber(256)})`;

//Function that generates random quote
const getRandomQuote = function (quotesArray) {
  //using generateRandomNumber function with the length of the array
  const randomNumber = generateRandomNumber(quotesArray.length);
  return quotesArray[randomNumber];
};

//Function that prints quote
const printQuote = function () {
  const myQuote = getRandomQuote(quotes);

  //Variable to store alternative html
  let alternativeHTML = "";

  //Checking if object property exist
  if (myQuote["citation"]) {
    //concatinating alternative html
    alternativeHTML += `<span class="citation">${myQuote["citation"]}</span>`;
  }

  if (myQuote["year"]) {
    alternativeHTML += `<span class="year">${myQuote["year"]}</span>`;
  }

  if (myQuote["category"]) {
    alternativeHTML += `<span class="citation">${myQuote["category"]}</span>`;
  }

  //variable that contains html to be displayed
  const html = `
    <p class="quote">${myQuote.quote}</p>
    <p class="source">${myQuote.source}${alternativeHTML}</p>
  `;

  //setting the object content in the quote box.
  document.getElementById("quote-box").innerHTML = html;

  //setting the background color of the document with the style.backGroundColor property and the generateRandomColor function
  document.querySelector("body").style.backgroundColor = generateRandomColor();
};

//Time to print quote every 10 seconds
setInterval(printQuote, 10000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
