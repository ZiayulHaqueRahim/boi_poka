import bannerImage from '../../assets/books.jpg'



const BAnner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                <img
                    src={bannerImage}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div  className='  flex flex-col gap-8'>
                    <h1 className="text-5xl font-bold">Boi  Poka<br/> Rocking News!</h1>
                   
                    <button className="btn btn-outline px-14 ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BAnner;