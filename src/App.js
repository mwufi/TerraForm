import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

import './App.css';
import ListView from './ListView';
import Profile from './Profile';
import {fetchData} from './Api';

import {Route, Switch} from 'react-router-dom';

// This function creates a datapoint object, with
// the first row of the spreadsheet as its fields
function createObject(headers, arr) {
  let obj = {};
  headers.forEach((header, i) => {
    obj[header] = arr[i];
  });
  return obj;
}


function App() {


  const [data, setData] = useState([]);

  // update
  useEffect(() => {
    fetchData().then((ogData) =>{
      const headers = ogData.values.shift();
      setData(ogData.values.map(elem => createObject(headers, elem)));
      console.log('arr of arr: ', ogData.values);
    })
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Gforms view</h1>
        </header>
        <Switch>
          {/* default page */}
          <Route exact path='/' component = {() => <ListView items={data}/>}/>
          {/* matches `/user/:id` as well */}
          <Route path='/user' component = {Profile}/>
        </Switch>
      </div>
  );
}

export default App;
