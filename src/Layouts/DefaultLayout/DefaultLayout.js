import React, {Component} from 'react';
import HeadNav from '/Users/copper/.atom/react/base-syntax--assignment-solution/src/Layouts/HeadNav/HeadNav.js';
import './DefaultLayout.less';
import AboutMe from '../../pages/AboutMe/AboutMe';
import {Route} from 'react-router-dom';

export default class DefaultLayout extends Component{
  render(){
    return (
      <div id="DefaultLayout">
                <HeadNav match={this.props.match} location={this.props.location} history={this.props.history} />
                <div className="content-wrap">
                    <Route  path={this.props.match.url+'/AboutMe'} component={AboutMe}  />

                </div>

            </div>
    )
  }
}
