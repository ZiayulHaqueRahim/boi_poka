import { useEffect, useState } from "react";

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
            <p>{books.length}</p>
        </div>
    );
};

export default Books;

//data load
// 1. state declare to the state
//3. useEffect to handle external source
//4. fetch to get data
//5.load to state