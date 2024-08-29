const URL="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

const quoteText = document.querySelector('#text');
const quoteAuthor = document.querySelector('#author');
const newQuoteButton = document.querySelector('#new-quote');
const copyQuoteButton = document.querySelector('#copy-quote');



async function randomQuote() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        quotes = data.quotes;
        displayRandomQuote();
    } catch (error) {
        console.error('Error random quote:', error);
    }
}


function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent =` "${randomQuote.quote}"`;
    quoteAuthor.textContent = `"${randomQuote.author}"`;
}


newQuoteButton.addEventListener('click', displayRandomQuote);

copyQuoteButton.addEventListener('click', () => {
    const quoteToCopy = `"${quoteText.textContent} ${quoteAuthor.textContent}"`;
    navigator.clipboard.writeText(quoteToCopy).then(() => {
        alert('Quote has been copied');
    }).catch((error) => {
        console.error('Error copy:', error);
    });
});

randomQuote()