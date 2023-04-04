import { useContext, useEffect, useState } from "react";
import { dataContext } from "../context/data";
import dateRange from "../utilities/dateRange";

const Header = ({ selectedFilter: sF }) => {
    const { data } = useContext(dataContext);
    const [maleCount, setMaleCount] = useState(0);
    const [femaleCount, setFemaleCount] = useState(0);


    useEffect(() => {
        let m = 0;
        let f = 0;

        const filtered_data = data.filter(value => {
            if (sF.Location.length > 0 && sF.Location.indexOf(value.Location) === -1) { return false }
            if (sF.Gender.length > 0 && sF.Gender.indexOf(value.Gender) === -1) { return false }
            if (sF.Date !== '' && dateRange(value.Date) !== sF.Date) { return false }
            value.Gender === 'Male' ? m = m + 1 : f = f + 1
            return true
        })

        setMaleCount(m)
        setFemaleCount(f)
    }, [sF])


    return (
        <header>
            <h2>SECQURAISE</h2>
            <div className='search-container'>
                <input type="text" className='search' />
                <div className='entries-male'>{maleCount}</div>
                <div className='entries-female'>{femaleCount}</div>
            </div>
        </header>
    );
}

export default Header;