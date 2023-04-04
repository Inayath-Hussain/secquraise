import { useContext, useState } from "react";
import { dataContext } from "../context/data";
import dateRange from "../utilities/dateRange";

const Events = ({ person: p, setPerson, locations, genders, selectedFilter: sF, setSelectedFilter, range }) => {
    const { data } = useContext(dataContext);
    const [showFilter, setShowFilter] = useState(false);

    const dateToString = (date) => {
        const time = date.toLocaleTimeString('en-GB')

        return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getFullYear()}` + ' ' + time
    }

    const setFilter = (type, data) => {
        if (sF[type].indexOf(data) !== -1) {
            let f = sF[type].filter(value => value !== data)
            setSelectedFilter({ ...sF, [type]: f })
        }
        else {
            setSelectedFilter({ ...sF, [type]: [...sF[type], data] })
        }
    }

    const filter = () => {
        let filteredData = data;
        if (sF.Location.length === 0 && sF.Gender.length === 0 && sF.Date === '') {
            return data
        }
        sF.Location.length > 0 ? filteredData = filteredData.filter(value => sF.Location.indexOf(value.Location) !== -1) : null
        sF.Gender.length > 0 ? filteredData = filteredData.filter(value => sF.Gender.indexOf(value.Gender) !== -1) : null
        sF.Date ? filteredData = filteredData.filter(value => dateRange(value.Date) === sF.Date) : null
        if (filteredData.indexOf(p) === -1) {
            setPerson(filteredData[0])
        }
        return filteredData
    }

    const filtered_data = filter()

    return (
        <div className="events-section">
            <div className="events-container">
                <div className="events-header">
                    <h2>Events</h2>
                    <img onClick={() => setShowFilter(!showFilter)} src="/filter.png" width='50' height='50' alt="" />
                </div>

                {!showFilter ? <div className="events-grid">
                    {filtered_data.map(i => (
                        <div onClick={() => setPerson(i)} className={i.id === p.id ? "event event-selected" : "event"} key={i.id}>
                            <div className="event-xflex">
                                <p className="font-size">{i.id}: {i.Location}</p>
                                <p className="font-size">{dateToString(i.Date)}</p>
                            </div>
                            <p className="font-size">Person detected.</p>
                        </div>
                    ))}

                </div> :
                    <div className="filter-container">
                        <h2 style={{ margin: 0 }}>Filter By</h2>
                        <div className="filter-options-container">
                            <h3>Location :</h3>
                            <button onClick={() => setSelectedFilter({ ...sF, Location: [] })} className="filter-button filter-clear">clear</button>
                        </div>

                        <div className="filter-options-container">
                            {locations.map(i => (
                                <button onClick={() => setFilter('Location', i)} className={sF.Location.indexOf(i) !== -1 ? 'filter-button filter-selected' : 'filter-button'} key={i}>{i}</button>
                            ))}
                        </div>

                        <div className="filter-options-container">
                            <h3>Gender :</h3>
                            <button onClick={() => setSelectedFilter({ ...sF, Gender: [] })} className='filter-button filter-clear'>clear</button>
                        </div>
                        <div className="filter-options-container" style={{ justifyContent: 'flex-start' }}>
                            {genders.map(g => (
                                <button onClick={() => setFilter('Gender', g)} className={sF.Gender.indexOf(g) !== -1 ? 'filter-button filter-selected' : 'filter-button'}
                                    key={g} style={{ marginRight: '20px' }}>{g}</button>
                            ))}
                        </div>

                        <div className="filter-options-container">
                            <h3>Date :</h3>
                            <button onClick={() => setSelectedFilter({ ...sF, Date: '' })} className="filter-button filter-clear">clear</button>
                        </div>
                        <div className="filter-options-container">
                            <input min={dateRange(range.min)} max={dateRange(range.max)} value={sF.Date} onChange={(e) => setSelectedFilter({ ...sF, Date: e.target.value })} type="date" id="filter-date" />
                        </div>
                        <div className="clear-all">
                            <button onClick={() => setSelectedFilter({ Location: [], Gender: [], Date: '' })} style={{ backgroundColor: 'darkorange' }} className="filter-button filter-clear">Clear All</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Events;