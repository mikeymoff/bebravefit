import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dropin from './components/pages/Dropin';
import './App.css';

const App = () => 
    <Router>
      <div>
        <Route exact path="/" component={Dropin}/>  
      </div>
    </Router>;

export default App;