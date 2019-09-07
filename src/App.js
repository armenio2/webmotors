import React, { useState, useEffect } from 'react';
import FilterFormView from './components/pages/filterForm';
import GetMake from './service/getMake';

const App = () => {

  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    if (data) return
    GetMake().then(setData).catch(setError)
  }, [])

  if (error) {
    return <div>error</div>
  } else if (data) {
    return (
      <div className="App">
        <FilterFormView data={data} />
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
