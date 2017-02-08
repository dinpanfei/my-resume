import React from 'react'
import { Modal } from 'antd'

export default class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            src: ''
        }
        this.showModal = this.showModal.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
   
    showModal(e) {
        this.setState({
            visible: true,
            src: e.currentTarget.getAttribute("data-src") //兼容IE
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }
    render() {
        return (
            <div className="contact-container">
                <h1 className="contact-title">联系我</h1>
                <div className="contact-content">
                    <div className="contact-main">

                        <div className="main-item" 
                        data-src="http://120.77.171.143/my%20images/wx.jpg"
                        onClick={this.showModal}>
                            <div className="item-icon">
                                <i className="iconfont icon-weixin"></i>
                            </div>
                            <div className="item-content">
                                微信:d15871387633
                            </div>
                        </div>
                        <div className="main-item" 
                        data-src="http://120.77.171.143/my%20images/qq.jpg"
                        onClick={this.showModal}>
                            <div className="item-icon">
                                <i className="iconfont icon-qq"></i>
                            </div>
                            <div className="item-content">
                                QQ:2678473238
                            </div>
                        </div>
                        <a href="https://mail.qq.com/cgi-bin/loginpage?autologin=n&errtype=1&clientuin=2678473238&param=&sp=&tfcont=22%20serialization%3A%3Aarchive%205%200%200%204%200%200%200%208%20authtype%201%204%209%20clientuin%2010%202678473238%206%20domain%206%20qq.com%202%20vm%203%20wsk&r=3dcaec6c3fdb61750cb257a9be6b03a8" target="_blank" className="main-item">
                            <div className="item-icon">
                                <i className="iconfont icon-email"></i>
                            </div>
                            <div className="item-content">
                                邮箱:2678473238@qq.com
                            </div>
                        </a>
                    </div>

                </div>
                 <Modal title="" footer="" width="30%"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}>
                    <div className="big-img">
                        <img src={this.state.src} style={{ maxWidth: '100%' }} />
                    </div>
                </Modal>
            </div>
        )
    }
}
