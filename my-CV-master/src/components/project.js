import React from 'react'
import { Timeline, Modal } from 'antd'

export default class Project extends React.Component {
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
            src: e.currentTarget.getAttribute("data-src")  //兼容IE
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div className="project-container">
                <h1 className="project-title">项目经验</h1>
                <div className="project-content">
                    <Timeline pending={<a href="https://github.com/dinpanfei" target="_blank" className="item-title">更多项目内容尽在github（点击进入）</a>}>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    在线个人简历（2017.1 - 至今）
                                    <a className="item-link" href="https://github.com/dinpanfei" target="_blank">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        设计优雅，内容完善的静态单页面（SPA）简历页面，使用React、React Router、Ant Design等
                                        库和框架设计，语法采用ES6、ES7，运用webpack等模块打包工具进行编译打包。
                                    </div>
                                    <div className="item-img">
                                        <img src="http://120.77.171.143/my%20images/shouye-small.jpg"
                                            data-src="http://120.77.171.143/my%20images/shouye.jpg"
                                            onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    微信小程序--模仿猫眼电影（2017.1）
                                    <a className="item-link" href="https://github.com/dinpanfei/movie" target="_blank">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        具有猫眼电影官方小程序基本功能（受限于api，无订票、选座、登陆等功能）的微信小程序
                                        （早于微信小程序上线），界面设计合理，交互效果良好。
                                    </div>
                                    <div className="item-img">
                                        <img src="http://120.77.171.143/my%20images/maoyan1-small.png"
                                            data-src="http://120.77.171.143/my%20images/maoyan1.png"
                                            onClick={this.showModal} />
                                        <img src="http://120.77.171.143/my%20images/maoyan2-small.png"
                                            data-src="http://120.77.171.143/my%20images/maoyan2.png"
                                            onClick={this.showModal} />
                                        <img src="http://120.77.171.143/my%20images/maoyan3.png"
                                            data-src="http://120.77.171.143/my%20images/maoyan3.png"
                                            onClick={this.showModal} />
                                        <img src="http://120.77.171.143/my%20images/maoyan4-small.png"
                                            data-src="http://120.77.171.143/my%20images/maoyan4.png"
                                            onClick={this.showModal} />
                                        <img src="http://120.77.171.143/my%20images/maoyan5-small.png"
                                            data-src="http://120.77.171.143/my%20images/maoyan5.png"
                                            onClick={this.showModal} />
                                        <img src="http://120.77.171.143/my%20images/maoyan6-small.png"
                                            data-src="http://120.77.171.143/my%20images/maoyan6.png"
                                            onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    微信小程序--酷宝商城（2016.12）
                                    <a className="item-link" href="https://github.com/dinpanfei/shop" target="_blank">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        模仿爱拼宝宝app的商城项目（受限于api，功能比较简单），界面设计参照
                                        官方app，交互效果良好（未上线）。
                                    </div>
                                    <div className="item-img">
                                        <img src="http://120.77.171.143/my%20images/wx1.jpg"
                                            data-src="http://120.77.171.143/my%20images/wx1.jpg"
                                            onClick={this.showModal} />
                                        <img src="http://120.77.171.143/my%20images/wx2.jpg"
                                            data-src="http://120.77.171.143/my%20images/wx2.jpg"
                                            onClick={this.showModal} />
                                        <img src="http://120.77.171.143/my%20images/wx4.jpg"
                                            data-src="http://120.77.171.143/my%20images/wx4.jpg"
                                            onClick={this.showModal} />

                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    微信小程序--综合练习项目（2016.12）
                                    <a className="item-link" href="https://github.com/dinpanfei" target="_blank">
                                        <i className="iconfont icon-link"></i>源代码
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        运用小程序简单的音乐播放器，今日头条等，界面设计简洁，只是因为api的原因，很多都无法进行下去。
                                    </div>
                                    <div className="item-img">
                                        <img src="http://120.77.171.143/my%20images/music.jpg"
                                             data-src="http://120.77.171.143/my%20images/music.jpg"
                                             onClick={this.showModal} />
                                        <img src="http://120.77.171.143/my%20images/todaynews.jpg"
                                             data-src="http://120.77.171.143/my%20images/todaynews.jpg"
                                             onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>

                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    团队项目-尚宜家（2016.11--2017.1）
                                    {/*<a className="item-link" href="https://github.com/swhz/matlab-project" target="_blank">*/}
                                        {/*<i className="iconfont icon-link"></i>源代码*/}
                                    {/*</a>*/}
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        尚宜家是一个洗护O2O项目，运用移动web技术开发，功能涉及洗衣、洗鞋、奢侈品养护等， 用户可以通过移动终端（微信、APP）下单。（项目目前已下线）
                                    </div>
                                    <div className="item-img">
                                        <img src="http://120.77.171.143/my%20images/01.jpg"
                                            data-src="http://120.77.171.143/my%20images/01.jpg"
                                            style={{height:140,width:'auto'}}
                                            onClick={this.showModal} />
                                        <img src="http://120.77.171.143/my%20images/02.jpg"
                                            data-src="http://120.77.171.143/my%20images/02.jpg"
                                            style={{height:140,width:'auto'}}
                                            onClick={this.showModal} />
                                        <img src="http://120.77.171.143/my%20images/03.jpg"
                                            data-src="http://120.77.171.143/my%20images/03.jpg"
                                            style={{height:140,width:'auto'}}
                                            onClick={this.showModal} />
                                        <img src="http://120.77.171.143/my%20images/2选择社区.jpg"
                                            data-src="http://120.77.171.143/my%20images/2选择社区.jpg"
                                            style={{height:140,width:'auto'}}
                                            onClick={this.showModal} />
                                        <img src="http://120.77.171.143/my%20images/7个人中心.jpg"
                                             data-src="http://120.77.171.143/my%20images/7个人中心.jpg"
                                             style={{height:140,width:'auto'}}
                                             onClick={this.showModal} />
                                        <img src="http://120.77.171.143/my%20images/9订单管理.jpg"
                                             data-src="http://120.77.171.143/my%20images/9订单管理.jpg"
                                             style={{height:140,width:'auto'}}
                                             onClick={this.showModal} />
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>

                    </Timeline>
                </div>
                <Modal title="" footer="" width="80%"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}>
                    <div className="big-img">
                        <img src={this.state.src} style={{ maxWidth: '100%',maxHeight: '100%',width:'auto',height:'auto' }} />
                    </div>
                </Modal>
            </div>
        )
    }
}
