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
import Messages from './pages/ui/messages'
import Notification from './pages/ui/notification'  
import Carousels from './pages/ui/carousel'
import Gallery from './pages/ui/gallery'
import Tabs from './pages/ui/tabs'

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
                                    <Route path='/ui/loadings' component={Loading}/>
                                    <Route path='/ui/modals' component={Modals}/>
                                    <Route path='/ui/messages' component={Messages}/>
                                    <Route path='/ui/notification' component={Notification}/>
                                    <Route path='/ui/carousels' component={Carousels}/>
                                    <Route path='/ui/gallery' component={Gallery}/>
                                    <Route path='/ui/tabs' component={Tabs}/> 
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