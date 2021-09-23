import React from 'react'
import {Auth} from "./pages/Auth"
import './styles/style.scss'
import {PasswordRecovery} from "./pages/PasswordRecovery"
import {Registration} from "./pages/Registration"
import { Route, Switch } from 'react-router-dom'
import {PersonArea} from "./pages/PersonArea"


function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path={'/'} render={() => <Auth/>}/>
            <Route exact path={'/registration'} render={() => <Registration/>}/>
            <Route exact path={'/recovery'} render={() => <PasswordRecovery/>}/>
            <Route exact path={'/cabinet'} render={() => <PersonArea/>}/>
        </Switch>
    </div>
  );
}

export default App;
