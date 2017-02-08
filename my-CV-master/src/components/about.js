import React from 'react'
import Item from './item.js'

const About = () => {
    const aboutArray = [
        { class: 'iconfont icon-age', title: '年龄', desc: 21 },
        { class: 'iconfont icon-sex', title: '性别', desc: '男' },
        { class: 'iconfont icon-education', title: '学历', desc: '大专'},
        { class: 'iconfont icon-University', title: '毕业院校', desc: '武汉软件工程职业学院'},
        { class: 'iconfont icon-english', title: '专业', desc: '软件技术'},
        { class: 'iconfont icon-coordinate', title: '籍贯', desc: '湖北麻城'},
        { class: 'iconfont icon-experience', title: '工作经验', desc: '1年'},
        { class: 'iconfont icon-intention', title: '求职意向', desc: '前端开发'},
        { class: 'iconfont icon-state', title: '状态', desc: '求职中'}
        ]
    return (
        <div className="about-container">
            <h1 className="about-title">关于我</h1>
            <div className="about-content">
                {aboutArray.map((message) => <Item key={message.class} message={message} />)}
            </div>
        </div>
    )
}

export default About