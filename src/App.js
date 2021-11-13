import './App.css';
import React, { useState, useEffect } from 'react'; 
import { Provider } from 'react-redux'; 
import store from './store'; 


const App = () => {



  return (
    <Provider store={store} >
      <div className="App">
        <header>
          <h1>
            SHOULD I LEAVE MY HOUSE TODAY?
          </h1>
        </header>
      </div>
    </Provider>
  );
}

export default App;
