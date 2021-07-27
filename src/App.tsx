import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import store from './redux/store'
import Header from './components/Header/Header';
import  ScrollableTabsButtonAuto from './components/ScrollableTabsButtonAuto/ScrollableTabsButtonAuto';

function App() {
  return (
    <Provider store={store}>
    <div className="App">      
      <Header/>
      <ScrollableTabsButtonAuto/>
    </div>
    </Provider>
  );
}

export default App;
