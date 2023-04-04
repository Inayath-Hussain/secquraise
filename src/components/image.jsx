const Image = ({ person: p }) => {
    return (
        <div className="image-section">
            <h2>{p.Gender}</h2>
            <div className="image-container">
                <img className="image" src={p.image} alt="" />

            </div>
        </div>
    );
}

export default Image;