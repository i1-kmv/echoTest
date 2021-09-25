import React from 'react'
import {Auth} from "./pages/Auth"
import './styles/style.scss'
import {PasswordRecovery} from "./pages/PasswordRecovery"
import {Registration} from "./pages/Registration"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {PersonArea} from "./pages/PersonArea"


function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} render={() => <Auth/>}/>
                    <Route path={'/registration'} render={() => <Registration/>}/>
                    <Route path={'/recovery'} render={() => <PasswordRecovery/>}/>
                    <Route path={'/cabinet'} render={() => <PersonArea/>}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
