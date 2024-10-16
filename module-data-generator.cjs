// link do repozytorium: https://github.com/Krrio/FrameworkiFrontendowe

const fs = require('fs');
const path = require('path');

// FUNCTION TO GENERATE RANDOM ID

function generateId() {
    return Math.floor(Math.random() * 100000);
}

// FUNCTION TO GENERATE RANDOM RELEASE DATE (RANGE FROM 1900 TO 2023)

function generateRandomDate() {
    const year = Math.floor(Math.random() * (2023 - 2000 + 1)) + 2000;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
}

// LIST OF RANDOM AUTHORS

const authors = [
    "George Orwell",
    "Jane Austen",
    "F. Scott Fitzgerald",
    "Herman Melville",
    "Harper Lee",
    "J.K. Rowling",
    "Mark Twain"
];

// FUNCTION TO PICK A RANDOM AUTHOR

function getRandomAuthor() {
    return authors[Math.floor(Math.random() * authors.length)];
}

// READING THE FILE books.txt

fs.readFile(path.join(__dirname, 'books.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error('Błąd podczas odczytu pliku:', err);
        return;
    }

    // SPLITTING BOOKS INTO LINES

    const bookTitles = data.split('\n').filter(Boolean); // DELETING EMPTY LINES

    // CREATING AN ARRAY OF BOOK OBJECTS

    const books = bookTitles.map(title => ({
        id: generateId(),
        title: title.trim(),
        author: getRandomAuthor(),
        releaseDate: generateRandomDate()
    }));

    // WRITING TO THE FILE module-data.js

    const output = `module.exports = ${JSON.stringify(books, null, 2)};\n`;

    fs.writeFile(path.join(__dirname, 'module-data.js'), output, 'utf8', (err) => {
        if (err) {
            console.error('Błąd podczas zapisu pliku:', err);
            return;
        }
        console.log('Plik module-data.js został wygenerowany.');
    });
});
