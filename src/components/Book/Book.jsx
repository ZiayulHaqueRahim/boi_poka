import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category } = book;
    return (
        <div className="card bg-base-100 w-96 shadow-xl p-6 rounded-2xl ">
            <figure className="bg-gray-400 py-8 rounded-xl">
                <img
                    className="h-[165px] bg"
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <div className="flex justify-center gap-2">
                    {
                        tags.map((tag, index) => <button key={index} className="btn btn-xs 4 text-green-400 px-2 py-1 rounded-sm">{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By:{author}</p>
                <div className="divider divider-neutral"></div>
                <Link to={`/books/${bookId}`}>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge ">
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Book;