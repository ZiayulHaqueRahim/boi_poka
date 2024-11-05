import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    const { bookId: currebtBookId, image,author, review,bookName, category, tags, publisher, yearOfPublishing,totalPages, rating } = book;

    return (
        

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-row justify-between lg:flex-row">
                    <div className="px-5 py-20 h-[1000px] rounded-3xl bg-slate-200">
                        <img
                            src={image}
                            className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl font-bold">{bookName}</h1><br/>
                        <h1 className="text-2xl font-bold text-gray-600">By:{author}</h1>
                        <p className="text-xl text-gray-400">{category}</p><br/>
                        <p > {review}</p><br/>
                        <p>Tags:
                            {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs 4 text-green-400 px-2 py-1 rounded-sm">{tag}</button>)
                            }
                        </p>
                        <div className="flex flex-col gap-1">
                            <p className="text-xl text-gray-500">Number of Pages:       {totalPages}</p>
                            <p className="text-xl text-gray-500"> Publisher:        {publisher}</p>
                            <p className="text-xl text-gray-500">Year of publishing:        {yearOfPublishing}</p>
                            <p className="text-xl text-gray-500">rating:           {rating} </p>
                        </div>
                        <div className="flex flex-row gap-6">
                            <button className="btn btn-success mr-4 btn-outline">Read</button>
                            <button className="btn btn-success btn-outline">WishList</button>
                        </div>


                    </div>
                </div>
            </div>
    );
};

export default BookDetails;