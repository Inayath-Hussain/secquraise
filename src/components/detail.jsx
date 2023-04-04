const Detail = ({ person: p }) => {
    const dateToString = (date, type) => {
        // const time = date.toDate()

        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: type,
            year: 'numeric'
        })
    }

    return (
        <div className="detail-container">
            <h2>{p.id}</h2>
            <h2>Person Detected</h2>

            <div className="details">
                <p>Name</p>
                <p>: {p.Name}</p>
                <p>Location</p>
                <p>: {p.Location}</p>
                <p>Date</p>
                <p>: {dateToString(p.Date, 'short')}</p>
                <p>Time</p>
                <p>: {p.Date.toLocaleTimeString('en-GB')}</p>
            </div>

            <div className="description">
                <p>Description:</p>
                <p>{p.Name} detected at {p.Location} on {dateToString(p.Date, 'long')}</p>
            </div>
        </div>
    );
}

export default Detail;