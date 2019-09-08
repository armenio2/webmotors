import React, { useState, useEffect } from 'react';
import FilterFormView from './components/pages/filterForm';
import GetMake from './service/getMake';
import GetModel from './service/getModel';
import GetVersion from './service/getVersion';
import { useSelector } from 'react-redux'

const App = () => {
  const [markData, setMarkData] = useState();
  const [modelData, setModelData] = useState();
  const [modelVersion, setModelVersion] = useState();
  const [error, setError] = useState();
  const selectedMark = useSelector(state => state.markSelectedID)
  const selectedModel = useSelector(state => state.modelSelectedID)
  const form = useSelector(state=> state)
  useEffect(() => {
    if (markData) return
    GetMake().then(setMarkData).catch(setError)
  }, [])//mount

  useEffect(() => {
    if (selectedMark) {
      GetModel(selectedMark).then(setModelData).catch(setError)
    }
  }, [selectedMark])//update when selectedMark change

  useEffect(() => {
    if (selectedModel) {
      GetVersion(selectedModel).then(setModelVersion).catch(setError)
    }
  }, [selectedModel])//update when modelVersion change


  if (error) {
    return <div>error</div>
  } else if (markData) {
    return (
      <div className="App">
        <FilterFormView markData={markData} modelData={modelData} versionData={modelVersion} storeState={form} />
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
