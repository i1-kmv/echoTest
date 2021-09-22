import React from 'react'
import {Auth} from "./Pages/Auth"
import './styles/style.scss'
import {PasswordRecovery} from "./Pages/PasswordRecovery";
import {Registration} from "./Pages/Registration";
import { Route } from 'react-router-dom';
import {PersonArea} from "./Pages/PersonArea";


function App() {
  return (
    <div className="App">
     <Route exact path={'/'} render={() => <Auth/>}/>
     <Route exact path={'/registration'} render={() => <Registration/>}/>
     <Route exact path={'/recovery'} render={() => <PasswordRecovery/>}/>
     <Route exact path={'/cabinet'} render={() => <PersonArea/>}/>
    </div>
  );
}

export default App;
