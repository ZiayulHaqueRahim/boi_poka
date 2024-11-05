import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books,setBooks] = useState([]);

        useEffect(() =>{
            fetch('../../../public/booksData.json')
            .then(res => res.json())
            .then(data =>setBooks(data))
            
        },[])

  

    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <p>Total Books: {books.length}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    books.map(book =><Book key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default Books;

//data load
// 1. state declare to the state
//3. useEffect to handle external source
//4. fetch to get data
//5.load to state