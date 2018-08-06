import React from 'react';
import { Row, Col } from "antd"

export default class Header extends React.Component {
  state= {
    userName: '河畔一角'
  };
  render() {
    const { menuName, menuType } = this.props;
    return (
      <div className="header">
        <Row className="header-top">
          {
            menuType ? 
              <Col span="6" className="logo">
                <img src="/assets/logo-ant.svg" alt="" />
                <span>IMooc 通用管理系统</span>
              </Col> : ''
          }
          <Col span={menuType?18:24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
      </div>
    );
  }
}

