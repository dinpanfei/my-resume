import React from 'react'
import Item from './item.js'

const Skill = () => {
    const skillArray = [
        {class:'iconfont icon-html',title:'HTML',desc:'熟练运用HTML，掌握HTML5新特性(canvas，storage，media等)。'},
        {class:'iconfont icon-css',title:'CSS',desc:'熟练运用CSS，掌握CSS3新特性(动画，弹性布局，媒体查询等)。'},
        {class:'iconfont icon-javascript',title:'JS',desc:'熟练运用Javascript，掌握JS新标准ES6语法特性(类，箭头函数，解构赋值等)，了解函数式编程。'},
        {class:'iconfont icon-react',title:'React',desc:'熟悉React.js，了解Redux等react技术栈内容。'},
        {class:'iconfont icon-jquery',title:'jQuery',desc:'熟练运用jQuery，掌握jQuery UI、jQuery Mobile等。'},

        {class:'iconfont icon-xiaochengxu',title:'微信小程序',desc:'熟练运用微信小程序开发工具开发小程序项目。'},
        {class:'iconfont icon-frame',title:'前端框架和工具',desc:'掌握Bootstrap、MUI、WeUI等框架。熟练使用vscode、sublime、WebStorm、Dreamweaver等代码编辑器。'},
        // {class:'iconfont icon-tools',title:'前端工具',desc:'熟练使用vscode、sublime、WebStorm等代码编辑器，掌握PhotoShop、Dreamweaver、git等开发工具。'},
        {class:'iconfont icon-Programming',title:'其他编程语言',desc:'熟悉C#、MVC应用程序开发、SQL SERVER数据库，了解Node.js。'}
    ]
    return (
        <div className="skill-container">
            <h1 className="skill-title">擅长技术</h1>
            <div className="skill-content">
                {skillArray.map((message) => <Item key={message.class} message={message} />)}
            </div>
        </div>
    )
}

export default Skill