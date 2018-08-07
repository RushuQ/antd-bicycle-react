import React from 'react';
import { Row, Col } from "antd"
import Util from "./../../util/util";
import axios from './../../axios'
import './index.less'

export default class Header extends React.Component {
  state= {
    userName: '河畔一角'
  };
  componentWillMount() {
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    },1000);
    this.getWeatherAPIData();
  }
  getWeatherAPIData = () => {
    let city = '广州';
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    axios.jsonp({
        url
      }).then(res => {
      console.log(res);
      if(res.status === 'success') {
        let data = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        })
        console.log(this.state.dayPictureUrl)
      }
    })
  }
  render() {
    const {menuType } = this.props;
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
            <a href="">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          < Col span = "4" className = "breadcrumb-title" >首页</Col>
          <Col span="20" className="weather">
            < span className = "date" > {
              this.state.sysTime
            } </span>
            <span className = "weather-img">
              < img src={this.state.dayPictureUrl} alt=''/>
            </span>
            < span className = "weather-detail" > {
                this.state.weather
              } </span>
          </Col>
        </Row>
      </div>
    );
  }
}

