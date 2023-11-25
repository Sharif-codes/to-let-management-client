
const Coupons = () => {
    return (
        <div className="card w-72 bg-primary text-primary-content animate-pulse">
            <div className="card-body">
                <h2 className="card-title">15% Discount</h2>
                <p> Description- If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions flex items-center">
                    <div>Code: <span className="text-red-500">GUL01</span></div>
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Coupons;