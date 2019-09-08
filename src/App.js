import React, { useState, useEffect } from 'react';
import FilterFormView from './components/pages/filterForm';
import GetMake from './service/getMake';
import GetModel from './service/getModel';
import { useSelector } from 'react-redux'


const App = () => {
  const [markData, setMarkData] = useState();
  const [modelData, setModelData] = useState();
  const [error, setError] = useState();
  const selectedMark = useSelector(state => state.markSelectedID)


  useEffect(() => {
    if (markData) return
    GetMake().then(setMarkData).catch(setError)
  }, [])//mount

  useEffect(() => {
    if (selectedMark) {
      GetModel(selectedMark).then(setModelData).catch(setError)
    }
  }, [selectedMark])//update when selectedMark change


  if (error) {
    return <div>error</div>
  } else if (markData) {
    return (
      <div className="App">
        <FilterFormView markData={markData} modelData={modelData} />
      </div>
    );
  } else {
    return (
      <div>
        <p> loading... </p>
      </div>
    );//TODO:  create loading
  }

}

export default App;
