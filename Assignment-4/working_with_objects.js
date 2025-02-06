const bookLibrary = {
    books: [
        { title: 'Harry Potter', author: 'JK Rowling', yearPublished: 2000 },
        { title: 'Geronimo Stilton', author: 'Elisabetta Dami', yearPublished: 2001 },
        { title: 'Agata Christie', author: 'Agata Christie', yearPublished: 2002 },
        { title: 'The Lord of the Rings', author: 'John Ronald Reuel Tolkien', yearPublished: 2003 }
           ],

    
    addBook(book) {
        this.books.push(book);
    },

    
    getBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    },

    
    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    },

    
    getAllBooks() {
        return this.books.map(book => book.title);
    }
};

// Example Usage:


bookLibrary.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 });
bookLibrary.addBook({ title: "1984", author: "George Orwell", yearPublished: 1949 });
bookLibrary.addBook({ title: "Animal Farm", author: "George Orwell", yearPublished: 1945 });


console.log(bookLibrary.getBooksByAuthor("JK Rowling"));  


bookLibrary.removeBook("1984"); 


console.log(bookLibrary.getAllBooks()); 