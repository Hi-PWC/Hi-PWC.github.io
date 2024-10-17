var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "彭伟程",
    sex: "男",
    age: "21",
    phone: "18314131539",
    email: "hi.pwc.email@gmail.com",
    address: "云南昆明",
    qq: "204357479",
    log: "爱你所爱，行你所行",
    excpect_work: "嵌入式开发",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "明天不一定会更好，但要坚信更好的明天一定会来。",
        "要做的事情总找得出时间和机会，不愿意做的事情也总能找得出借口。",
        "Gor For It!",
        "有智者立长志，无志者长立志。",
        "那些过去的眼泪终将风干在记忆里。",
        "真相，是为了剿灭幻想。",
        "我欲将心向明月，奈何明月照沟渠。",
        "春风得意马蹄疾，一日看尽长安花。",
        "天凉好个秋！",
        "老骥伏枥，志在千里。烈士暮年，壮心不已。",
        "老当益壮，宁移白首之心。穷且益坚，不坠青云之志。",
        "我们必须拿我们所有的， 去换我们所没有的",
        "蒹葭苍苍，白露为霜；所谓伊人，在水一方。",
        "数风流人物，还看今朝！"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "青青子衿，悠悠我心<br>" +
             "但为君故，沉吟至今<br>" +
             "哈鲁哇，我叫彭伟程，大理大学在读本科生<br>" +
             "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>哈鲁哇，我叫彭伟程，大理大学在读本科生</p>" +
        "<p>我对嵌入式开发和PCB电路制作拥有较多经验，希望可以为贵公司实现对应的开发岗位以及技术能力</p>" +
        "<p>十分期待与您的联系!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["Java", 80, "red"],
        ["GoLang", 77, "blue"],
        ["SQL", 75, "#1abc9c"],
        ["HTML5", 67, "rgba(0,0,0)"],
        ["CSS3", 60, "yellow"],
        ["JavaScript", 70, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>操作系统、计算机网络等编程基础知识良好。</li>" +
        "     <li>熟练掌握Java基础。</li>" +
        "     <li>熟悉JavaIO、多线程、集合等基础框架。</li>" +
        "     <li>了解JVM原理。</li>" +
        "     <li>熟悉Go语言开发基本知识。</li>" +
        "     <li>熟悉SQL语句编写以及调优。</li>" +
        "     <li>熟悉基本Linux命令操作。</li>" +
        "     <li>熟悉Spring、ibatis、struts等框架的使用，了解其原理与机制。</li>" +
        "     <li>熟悉缓存、消息等机制。</li>" +
        "     <li>了解分布式系统的设计与应用。</li>" +
        "     <li>熟悉HTML、CSS、JavaScript以及相应前端知识。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/pro-1.png", "https://blog.csdn.net/qq_33591173?type=blog/", "CSDN", "我在这里发表了一些我自己的解决方案<br>持续更新"],
        ["./images/pro-2.png", "https://user.qzone.qq.com/204357479/311/1074_0b53i4wgwdacieap3hhj5btdaryenmqaevca", "XYZ轴CNC写字机", "使用Arduino CNC开发的一个XYZ机器<br>2024/10/16"],
        ["./images/pro-3.png", "https://user.qzone.qq.com/204357479/311/1074_0b53i4wgwdacieap3hhj5btdaryenmqaevca", "VFD真空荧光管时钟", "自己设计PCB，编写程序"],
        ["./images/pro-4.png", "https://user.qzone.qq.com/204357479/311/1074_0b53i4wgwdacieap3hhj5btdaryenmqaevca", "基于ROS和生成式Ai的四足机器人", "自己设计PCB，编写程序"],
        ["./images/pro-5.png", "https://user.qzone.qq.com/204357479/311/1074_0b53i4wgwdacieap3hhj5btdaryenmqaevca", "ESP32四足机器人控制板", "自己设计PCB，编写程序"],
        ["./images/pro-6.png", "https://user.qzone.qq.com/204357479/311/1074_0b53i4wgwdacieap3hhj5btdaryenmqaevca", "机器视觉识别车牌", "编写程序"],
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"],
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2022年", "第十二届蓝桥杯嵌入式开发省二等奖", "大二下学期，我参与第十二届蓝桥杯，这是我第一次接触电赛赛项"],
        ["2023年", "云南省职业院校技能大赛嵌入式开发省一等奖", "在大三的上学期，参加了该技能大赛，获得了省一等奖"],
        ["2023年", "云南省计算机大赛一等奖", "大二下学期，参加了计算机设计大赛，获得了省一等奖"],
        ["2023年", "港澳地区暨全国大学生计算机设计大赛省二等奖", "这年我去到了广东，澳门参加了这项比赛，获得了省二等奖"]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "https://leetcode-cn.com/u/happysnaker/", "我的力扣主页"],
        ["./svg/github.svg", "https://github.com/happysnaker", "我的GitHub主页"],
        ["./svg/博客.svg", "http://1.15.234.109:8000", "我的个人博客"],
        ["./svg/掘金.svg", "https://juejin.cn/user/3853167638625000", "我的掘金主页"],
        ["./svg/知乎.svg", "https://www.zhihu.com/people/tian-xia-you-dao-81", "我的知乎主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}
