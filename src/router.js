import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import DefaultLayout from './Layouts/DefaultLayout/DefaultLayout';
import AboutMe from '/Users/copper/.atom/react/base-syntax--assignment-solution/src/pages/AboutMe/AboutMe.js';
import Music from '/Users/copper/.atom/react/base-syntax--assignment-solution/src/pages/Music/Music.js';

export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={DefaultLayout}  exact />
                        <Route path="/AboutMe" component={AboutMe} />
                        <Route path="/Music" component={Music} />

                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
