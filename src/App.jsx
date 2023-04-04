import { useState, useEffect, useContext, Fragment } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Detail from './components/detail';
import Events from './components/events';
import Header from './components/header'
import Image from './components/image';
import LeftBar from './components/leftbar';
import { dataContext } from './context/data';
import { db } from './firebase';
import './App.css'

function App() {
  const [selectedPerson, setSelectedPerson] = useState();
  const [locations, setLocations] = useState();
  const [genders, setGenders] = useState();
  const [selectedFilter, setSelectedFilter] = useState({ Location: [], Gender: [], Date: '' });
  const [range, setRange] = useState({ min: '', max: '' });
  const { data, setData } = useContext(dataContext);

  useEffect(() => {
    const unsub = async () => {
      let d = [];
      let loc = [];
      let gend = [];
      let mini;
      let maxi;
      const result = await getDocs(collection(db, 'data'))
      result.forEach((doc) => {
        let data = doc.data()
        data.Date = data.Date.toDate()
        d.push({ id: doc.id, ...data, Date: data.Date })

        if (loc.indexOf(data.Location) === -1) {
          loc.push(data.Location)
        }

        if (gend.indexOf(data.Gender) === -1) {
          gend.push(data.Gender)
        }

        if (mini === undefined || mini > data.Date) {
          mini = data.Date
        }

        if (maxi === undefined || maxi < data.Date) {
          maxi = data.Date
        }
      })

      setRange({ min: mini, max: maxi })
      setLocations(loc)
      setGenders(gend)
      setData(d)
      console.log(d)
      setSelectedPerson(d[0])

    }
    return () => {
      !data && unsub()
    }
  }, [])

  return (
    <div className="App">
      {data && selectedPerson && <Fragment>
        <Header selectedFilter={selectedFilter} />

        <div className='container'>
          <LeftBar />

          <Detail person={selectedPerson} />

          <Image person={selectedPerson} />

          <Events person={selectedPerson} setPerson={setSelectedPerson} selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter} locations={locations} genders={genders} range={range} />
        </div>
      </Fragment>}
    </div>
  )
}

export default App
