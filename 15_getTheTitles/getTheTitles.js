const getTheTitles = function(books) {

    const titlesArray = books.map( (book) => book.title )
    return titlesArray //Could skip creating a const and just return straight from map method.
};

// Do not edit below this line
module.exports = getTheTitles;
