import React from 'react'
import {Card,Row,Col, Modal} from 'antd'
import './ui.less'
export default class Carousels extends React.Component{
    state = {}
    openGallery =(img)=>{
        this.setState({
            visible: true,
            currentImg: '/gallery/' + img
        })
    }
    render(){
        const imgs = [
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png'],
            ['16.png', '17.png', '18.png', '19.png', '20.png'],
            ['21.png', '22.png', '23.png', '24.png', '25.png']
        ]
        const { Meta } = Card;
        const imglists = imgs.map(list => list.map((item) => 
            <Card style={{marginBottom: 10}}
                    cover={<img alt='' src={'/gallery/'+item}/>}
                    onClick={()=>this.openGallery(item)}
                    key={item}
                >
                <Meta
                    title="Europe Street beat"
                    description="北京欢迎你"
                />
            </Card>    
        ))
        return (
            <div className="card-wrap">
                <Row gutter={10}>
                    <Col md={5}>{imglists[0]}</Col>
                    <Col md={5}>{imglists[1]}</Col>
                    <Col md={5}>{imglists[2]}</Col>                    
                    <Col md={5}>{imglists[3]}</Col>
                    <Col md={4}>{imglists[4]}</Col>
                </Row>
                <Modal
                    width={300}
                    height={500}
                    visible={this.state.visible}
                    title="图片画廊"
                    onCancel={()=>{
                        this.setState({
                            visible: false
                        })
                    }}
                    footer={null}
                >
                    {<img alt='' src={this.state.currentImg} style={{width: '100%'}}/>}
                </Modal>
            </div>
        );
    }
}