import React, {
    Component
} from 'react';
import {
    Menu,
    Icon
} from 'antd';
import { NavLink } from 'react-router-dom'
import './index.less'

import MenuConfig from './../../config/menuConfig'

const SubMenu = Menu.SubMenu;
class NavLeft extends Component {

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    renderMenu =(data)=>{
        const MenuItem = Menu.Item;
        return data.map(item => {
            if(item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <MenuItem title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </MenuItem>
        })
    }
    render() {
        return ( 
            <div>
                    <div className="logo">
                        <img src="/assets/logo-ant.svg"/>
                        <h1>Imooc MS</h1>
                    </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default NavLeft