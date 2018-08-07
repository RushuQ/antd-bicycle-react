/*
 * @Author: CRS
 * @Date: 2018-08-04 09:57:40
 * @LastEditors: CRS
 * @LastEditTime: 2018-08-04 10:09:36
 * @Description: 路由集
 */

import React from "react";
import {
    HashRouter,
    Switch,
    Route
} from "react-router-dom";
import App from './App'
import Admin from './admin';
import Home from './pages/home'
import Buttons from './pages/ui/button'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loading'
import Notification from './pages/ui/notification'

export default class ERouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/' render={() => (
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home}/>
                                    <Route path='/ui/buttons' component={Buttons}/>
                                    <Route path='/ui/modals' component={Modals}/>
                                </Switch>
                            </Admin>
                        )}>
                        </Route>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}