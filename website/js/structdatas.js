/**
 * 此文件用于配置结构数据
 * @file
 * @author ying.ye 2019-12-31
 */

// 结构数据数组
const structDatas = [];

const kfName = "工程";
/**************** 页眉一级菜单 ****************/
const level1 = {
    n1: new Node("平台指引"),
    n2: new Node("教程"),
    n3: new Node("用户配置"),
    n4: new Node("采集"+kfName+"组态"),
    n5: new Node("计算"+kfName+"组态"),
    n6: new Node("客户端"+kfName+"组态"),
    n61: new Node("数据"+kfName+"组态"),
    n7: new Node("运维中心"),
    n8: new Node("常见问题"),
    n9: new Node("关于"),
    
};
structDatas.push(level1.n1, level1.n2, level1.n3, level1.n4, level1.n5,level1.n6,level1.n61,level1.n7,level1.n8,level1.n9);
// 生成第一级节点 id
for (let i = 0; i < structDatas.length; i++) {
    structDatas[i].id = i + 1 + "";
}

/**************** 页眉二级菜单 ****************/
// 如果页眉的二级菜单没有，那么只需创建一个空节点即可
const level2 = {
    /** 特性 */
    n1: new Node(),
    /** 教程 */
    n2: new Node(),
    /** 功能模块 */
    n3: new Node(),
    n4: new Node(),
    n50: new Node("业务计算介绍"),
    n5: new Node("业务计算教程"),
    n6: new Node("函数说明"),


    n69: new Node("客户端特性"),
    n7: new Node("客户端教程"),
    n70: new Node("工程配置"),
	n71: new Node("开发IDE"),
	n72: new Node("页面编辑器"),
	n73: new Node("基本图形模型编辑器"),
	n74: new Node("2D工艺流程图编辑器"),
	n75: new Node("3D工艺流程图编辑器"),
	n76: new Node("3D资源编辑器"),
	n77: new Node("自定义图标组件编辑器"),
    n8: new Node("函数"),
    n9: new Node("脚本"),
    n10: new Node("工程转化"),
    n11: new Node("手机"+kfName+""),
    n12: new Node("后台"),


    n13: new Node(),
    n14: new Node("用户配置常见问题"),
    n15: new Node("采集"+kfName+"常见问题"),
    n16: new Node("计算"+kfName+"常见问题"),
    n17: new Node("客户端"+kfName+"常见问题"),
    n18: new Node("运维中心常见问题"),
    n19: new Node("其它常见问题"),
    n20: new Node(),
    n21: new Node("数据源工程组管理"),
    n22: new Node("数据源访问工程组管理"),
    // n22: new Node("数据源访问工程管理"),


};
level1.n1.addChild(level2.n1);
level1.n2.addChild(level2.n2);
level1.n3.addChild(level2.n3);
level1.n4.addChild(level2.n4);
level1.n5.addChild(level2.n50,level2.n5,level2.n6);
level1.n6.addChild(level2.n69,level2.n7,level2.n70,level2.n71,level2.n72,level2.n73,level2.n74,level2.n75,level2.n76,level2.n77,level2.n8,level2.n9,level2.n10,level2.n11,level2.n12);
level1.n61.addChild(level2.n21,level2.n22);
level1.n7.addChild(level2.n13);
level1.n8.addChild(level2.n14,level2.n15,level2.n16,level2.n17,level2.n18,level2.n19);
level1.n9.addChild(level2.n20);

/**************** 侧栏三级菜单 ****************/
const level3 = {
////////////////////////////////////////////////////kp
 /**特性 */
    n1: new Node("简介", "客户端APP组态/特性/简介/简介.html"),
    n2: new Node("名词解释"),
    n3: new Node("特性"),
    /**工程配置 */
    n4: new Node("简介", "客户端APP组态/功能模块/工程配置/简介/简介.html"),
    // n5: new Node("工具栏"),
    n6: new Node("页面管理"),
    n7: new Node("工程变量"),
    n8: new Node("安全对象（运行态权限）"),
    n9: new Node("图形模型库"),
    // n10: new Node("用户管理"),
    n10: new Node("工程管理"),
    n11: new Node("数据源管理"),
    n10_1: new Node("命令语言"),
    /**开发IDE */
    n3_11: new Node("简介", "客户端APP组态/功能模块/开发IDE/简介/简介.html"),
    n3_12: new Node("工具栏", "客户端APP组态/功能模块/开发IDE/工具栏"),
    n3_13: new Node("工程组管理", "客户端APP组态/功能模块/开发IDE/工程组管理"),
    n3_14: new Node("工程管理", "客户端APP组态/功能模块/开发IDE/工程管理"),
    n3_15: new Node("发布查询", "客户端APP组态/功能模块/开发IDE/发布查询/发布查询.html"),
    n3_16: new Node("权限设置（开发态权限）", "客户端APP组态/功能模块/开发IDE/权限设置"),
    /**页面编辑器 */
    n12: new Node("简介", "客户端APP组态/功能模块/页面编辑器/简介/简介.html"),
    n13: new Node("菜单栏"),
    n14: new Node("工具栏", "客户端APP组态/功能模块/页面编辑器/工具栏/工具栏.html"),
    n15: new Node("工具箱"),
    n16: new Node("配置窗"),
    /**2D工艺流程图编辑器 */
    n17: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/简介/简介.html"),
    n18: new Node("菜单栏"),
    n19: new Node("工具栏", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具栏/工具栏.html"),
    n20: new Node("工具箱"),
    n21: new Node("配置窗"),
    n64: new Node("动画连接"),
    /**3D工艺流程图编辑器 */
    D1: new Node("简介", "客户端APP组态/功能模块/3D工艺流程图编辑器/简介/简介.html"),
    D2: new Node("配置窗"),
    D3: new Node("动画连接"),
    /**3D编辑器 */
    D1_1: new Node("简介", "客户端APP组态/功能模块/3D编辑器/简介/简介.html"),
    D1_2: new Node("模型创建", "客户端APP组态/功能模块/3D编辑器/模型创建/模型创建.html"),
    D1_3: new Node("场景创建", "客户端APP组态/功能模块/3D编辑器/场景创建/场景创建.html"),
    /**图形模型编辑器 */
    n22: new Node("简介", "客户端APP组态/功能模块/基本图形模型编辑器/简介/简介.html"),
    n23: new Node("菜单栏"),
    n24: new Node("工具栏", "客户端APP组态/功能模块/基本图形模型编辑器/工具栏/工具栏.html"),
    n25: new Node("工具箱"),
    n26: new Node("配置窗"),
    /**自定义图表组件编辑器 */
    n27: new Node("简介", "客户端APP组态/功能模块/自定义图表组件编辑器/简介/介绍.html"),
    n28: new Node("菜单栏"),
    n29: new Node("工具栏", "客户端APP组态/功能模块/自定义图表组件编辑器/工具栏/工具栏.html"),
    n30: new Node("工具箱"),
    n31: new Node("配置窗"),
    /**函数 */
    n32_1: new Node("简介","客户端APP组态/函数/简介/简介.html"),
    n32: new Node("用户操作函数"),
    n33: new Node("变量操作函数"),
    n34: new Node("页面操作函数"),
    n35: new Node("文件操作函数"),
    n36: new Node("数据库操作函数"),
    n37: new Node("其他函数"),
    n38: new Node("JavaScript常用函数"),
    n66: new Node("动态创建函数"),
    /**脚本 */
    n39_1: new Node("简介", "客户端APP组态/脚本/简介/简介.html"),
    n39: new Node("脚本编辑器"),
    n40: new Node("脚本环境"),
    n41: new Node("脚本调试", "客户端APP组态/脚本/脚本调试/脚本调试.html"),
    /**工程转化 */
    n42: new Node("简介", "客户端APP组态/工程转换/介绍/介绍.html"),
    n43: new Node("转换步骤", "客户端APP组态/工程转换/转换步骤/转换步骤.html"),
    n44: new Node("功能支持清单", "客户端APP组态/工程转换/功能支持清单/功能支持清单.html"),
    n45: new Node("注意事项", "客户端APP组态/工程转换/注意事项/注意事项.html"),
    /**手机APP */
    n46: new Node("简介","客户端APP组态/手机APP/简介/简介.html"),
    n46_1: new Node("工具及资源","客户端APP组态/手机APP/工具及资源/工具及资源.html"),
    n47: new Node(""+kfName+"使用说明","客户端APP组态/手机APP/APP使用说明/APP使用说明.html"),
    n48: new Node(""+kfName+"工程开发"),
    n49: new Node(""+kfName+"打包"),
    n50: new Node("注意事项","客户端APP组态/手机APP/注意事项/注意事项.html"),
    /**后台 */
    // n51: new Node("Http/Https协议配置", "后台/HttpHttps协议配置/快速切换http和https.html"),
    // n52: new Node("工程目录简介"),
    n53: new Node("后台", "客户端APP组态/后台/后台.html"),
    /**常见问题 */
    n54: new Node("授权相关问题", "常见问题/客户端app常见问题/授权相关问题/授权相关问题.html"),
    // n55: new Node("开发服务方面的常见问题", "常见问题/开发服务方面的常见问题/开发服务方面的常见问题.html"),
    // n56: new Node("运行服务方面的常见问题", "常见问题/运行服务方面的常见问题/运行服务方面的常见问题.html"),
    n57: new Node("开发画面的常见问题", "常见问题/客户端app常见问题/开发画面的常见问题/开发画面的常见问题.html"),
    n58: new Node("运行画面的常见问题", "常见问题/客户端app常见问题/运行画面的常见问题/运行画面的常见问题.html"),
    n59: new Node("应用KP定义的组件功能之外的问题", "常见问题/客户端app常见问题/应用KP定义的组件功能之外的问题/应用KP定义的组件功能之外的问题.html"),
    n60: new Node("其他","常见问题/客户端app常见问题/其他/其他.html"),
    // n61: new Node("Oauth服务常见问题","常见问题/Oauth服务常见问题/Oauth服务常见问题.html"),
    /**关于 */
    n62: new Node("软件归属权", "客户端APP组态/关于/软件归属权/软件归属权.html"),
    n63: new Node("系统环境要求"),
    // n63: new Node("售后服务及承诺", "关于/售后服务及承诺/售后服务及承诺.html"),
    n64_64: new Node("售后服务及承诺", "客户端APP组态/关于/售后服务及承诺/售后服务及承诺.html"),
    n65: new Node("版本更新记录", "客户端APP组态/关于/版本更新记录/版本更新记录.html"),

    jc54: new Node("自定义查询关系库,显示到数据网格", "客户端APP组态/教程/第三周/55自定义查询关系库,显示到数据网格/55自定义查询关系库,显示到数据网格.html"),
    jc55: new Node("数据网格单元格编辑", "客户端APP组态/教程/第三周/56数据网格单元格编辑/56数据网格单元格编辑.html"),
    jc56: new Node("数据网格行编辑", "客户端APP组态/教程/第三周/57数据网格行编辑/57数据网格行编辑.html"),
    jc57: new Node("数据网格导出到EXCEL", "客户端APP组态/教程/第三周/58数据网格导出到Excel/58数据网格导出到Excel.html"),
    jc58: new Node("数据网格合并单元格", "客户端APP组态/教程/第三周/59数据网格合并单元格/59数据网格合并单元格.html"),
    jc59: new Node("数据网格排序", "客户端APP组态/教程/第三周/60数据网格排序/60数据网格排序.html"),
    jc60: new Node("数据网格自定义工具条", "客户端APP组态/教程/第三周/61数据网格自定义工具条/61数据网格自定义工具条.html"),
    jc61: new Node("冻结数据网格某行", "客户端APP组态/教程/第三周/62冻结数据网格某行/62冻结数据网格某行.html"),
    jc62: new Node("用复选框选择数据网格中的某行", "客户端APP组态/教程/第三周/63用复选框选择数据网格中的某行/63用复选框选择数据网格中的某行.html"),
    jc63: new Node("复杂数据网格", "客户端APP组态/教程/第三周/64复杂数据网格(获取选中行的值)/64复杂数据网格(获取选中行的值).html"),
    jc64: new Node("数据网格打印", "客户端APP组态/教程/第三周/65数据网格打印/65数据网格打印.html"),
    jc65: new Node("复杂数据网格1", "客户端APP组态/教程/第三周/66复杂数据网格：基本样式设置/66复杂数据网格：基本样式设置.html"),
    jc66: new Node("复杂数据网格2", "客户端APP组态/教程/第三周/67复杂数据网格：单击某行样式、鼠标悬浮样式/67复杂数据网格：单击某行样式、鼠标悬浮样式.html"),
        // jc67: new Node("接入KS报警信息", "教程/第四周/68接入KS报警信息(实时历史)/68接入KS报警信息(实时历史).html"),
    // jc68: new Node("查询KS报警信息", "教程/第四周/69查询KS报警信息/69查询KS报警信息.html"),
    // jc69: new Node("显示KS的实时事件记录", "教程/第四周/70显示KS的实时事件记录/70显示KS的实时事件记录.html"),
    jc70: new Node("自定义查询关系库,显示到趋势曲线", "客户端APP组态/教程/第四周/71自定义查询关系库,显示到趋势曲线/71自定义查询关系库,显示到趋势曲线.html"),
    // jc71: new Node("饼图的常用方法1", "教程/第四周/72饼图的常用方法1：饼图控件（KS)/72饼图的常用方法1：饼图控件（KS).html"),
    // jc72: new Node("柱状图的常用方法1", "教程/第四周/73柱状图的常用方法1：柱状图控件（KS)/73柱状图的常用方法1：柱状图控件（KS).html"),
    jc73: new Node("饼图的常用方法2", "客户端APP组态/教程/第四周/74饼图的常用方法2：饼图（echarts)/74饼图的常用方法2：饼图（echarts).html"),
    jc74: new Node("柱状图的常用方法2", "客户端APP组态/教程/第四周/75柱状图的常用方法1：自定义图表--柱状图（echarts)/75柱状图的常用方法1：自定义图表--柱状图（echarts).html"),
    jc75: new Node("自定义图表：折线图1", "客户端APP组态/教程/第四周/76自定义图表：折线图1--填充1条曲线、多条曲线/76自定义图表：折线图1--填充1条曲线、多条曲线.html"),
    jc76: new Node("自定义图表：折线图2", "客户端APP组态/教程/第四周/77自定义图表：折线图1——超过上限、下限显示不同的线条颜色、背景颜色/77自定义图表：折线图1——超过上限、下限显示不同的线条颜色、背景颜色.html"),
    jc77: new Node("XY曲线的基本使用方法", "客户端APP组态/教程/第四周/78xy曲线的基本使用方法/78xy曲线的基本使用方法.html"),
    jc78: new Node("趋势曲线的常用方法", "客户端APP组态/教程/第四周/79趋势曲线的常用方法/79趋势曲线的常用方法.html"),
    jc79: new Node("动态设置网页链接", "客户端APP组态/教程/第四周/80动态设置网页链接/80动态设置网页链接.html"),
    jc80: new Node("快速读写EXCEL文件", "客户端APP组态/教程/第四周/81快速读写Excel文件/81快速读写Excel文件.html"),
    // jc81: new Node("查询KH历史数据", "教程/第四周/82查询KH历史数据/82查询KH历史数据.html"),
    // jc82: new Node("查询KH实时数据", "教程/第四周/83查询KH实时数据/83查询KH实时数据.html"),
    // jc83: new Node("快速加载GIS地图", "教程/第四周/84快速加载GIS地图/84快速加载GIS地图.html"),
    jc84: new Node("快速接入实时视频", "客户端APP组态/教程/第四周/85快速接入实时视频/85快速接入实时视频.html"),
    jc85: new Node("拖放树节点", "客户端APP组态/教程/第四周/86拖放树节点/86拖放树节点.html"),
    jc86: new Node("快速在手机APP上展示KP工程", "客户端APP组态/教程/第四周/87快速在手机APP上展示KP工程/87快速在手机APP上展示KP工程.html"),
    jc87: new Node("首页框架综合搭建", "客户端APP组态/教程/第四周/88首页框架综合搭建/88首页框架综合搭建.html"),
    // jc88: new Node("KingIOServer实时数据存储到Redis", "教程/第四周/89KingIOServer实时数据存储到Redis/89KingIOServer实时数据存储到Redis.html"),
    // jc89: new Node("KingIOserver历史数据存储到TimescaleDB", "教程/第四周/90KingIOserver历史数据存储到TimescaleDB/90KingIOserver历史数据存储到TimescaleDB.html"),
    // jc90: new Node("KingSCADA实时数据存储到Redis", "教程/第四周/91KingSCADA实时数据存储到Redis/91KingSCADA实时数据存储到Redis功能.html"),
    // jc91: new Node("KingSCADA历史数据存储到TimescaleDB", "教程/第四周/92KingSCADA历史数据存储到TimescaleDB/92KingSCADA历史数据存储到TimescaleDB功能.html"),
    // jc92: new Node("KingView实时数据存储到redis功能", "教程/第四周/93KingView实时数据存储到redis功能/93KingView实时数据存储到redis功能.html"),

////////////////////////////////////////////////////kp


    /**平台指引**/
    kfn0: new Node("简介","平台指引/简介/简介.html"),
    kfn1: new Node("产品概述"),
    kfn2: new Node("新手指引"),
    kfn3: new Node(),
    /**教程**/
    gjc0: new Node("简介","教程/简介/简介.html"),
    gjc1: new Node("产品安装"),
    gjc2: new Node("快速进入开发和运维环境"),
    gjc3: new Node("2分钟完成用户配置","教程/2分钟完成用户配置/2分钟完成用户配置.html"),
    gjc4: new Node("3分钟完成业务计算数据到界面展示",'教程/3分钟完成业务计算数据到界面展示/3分钟完成业务计算数据到界面展示.html'),
    gjc5: new Node("5分钟完成数据采集到管控一体化平台"),
    gjc6: new Node("5分钟完成采集端数据接入管控一体化平台"),
    gjc7: new Node("5分钟完成组态软件数据接入管控一体化平台"),
    gjc8: new Node("5分钟完成Scada数据接入管控一体化平台"),

    /**用户配置**/
    yhpz0: new Node("简介","用户配置/简介/简介.html"),
    yhpz1: new Node("用户系统"),
    yhpz2: new Node("管理用户权限"),
    yhpz3: new Node("典型应用"),
    /**采集APP组态**/
    cjzt0: new Node("简介","采集APP组态/简介/简介.html"),
    cjzt1: new Node("工程管理"),
    cjzt2: new Node("驱动组件库","采集APP组态/驱动组件库/驱动组件库.html"),
    cjzt3: new Node("发布查询","采集APP组态/发布查询/发布查询.html"),
    cjzt4: new Node("权限设置","采集APP组态/权限设置/权限设置.html"),
    // cjzt5: new Node("ID管理"),
    // cjzt6: new Node("诊断中心"), 
    /**计算APP组态——产品介绍**/  
    jscpjs1:new Node("计算简介","计算APP组态/产品介绍/产品简介/产品简介.html"),
    jscpjs2:new Node("计算架构","计算APP组态/产品介绍/产品架构/产品架构.html"),
    jscpjs3:new Node("名词解释","计算APP组态/产品介绍/名词解释/名词解释.html"),




    /**计算APP组态——产品教程**/  
    cpjc1: new Node("系统功能说明","计算APP组态/系统功能说明/1/1.html"),
    cpjc2: new Node("登录开发系统客户端","计算APP组态/产品教程/登录开发系统客户端/登录开发系统客户端.html"),
    // cpjc3: new Node("集成开发系统安全体系"),
    cpjc4: new Node("工程组管理","计算APP组态/产品教程/数据计算App工程组管理/数据计算工程组管理.html"),
    cpjc5: new Node("工程管理","计算APP组态/产品教程/数据计算App工程管理/数据计算App工程管理.html"),
    cpjc6: new Node("数据词典","计算APP组态/产品教程/数据词典/数据词典.html"),
    cpjc7: new Node("数据源","计算APP组态/产品教程/数据源/数据源.html"),
    cpjc8: new Node("脚本管理及脚本功能","计算APP组态/产品教程/脚本管理及脚本功能/脚本管理及脚本功能.html"),
    cpjc9: new Node("脚本依赖","计算APP组态/产品教程/脚本依赖/脚本依赖.html"),
    cpjc10: new Node("数据计算工程发布查询","计算APP组态/产品教程/数据计算工程发布查询/数据计算工程发布查询.html"),
    cpjc11: new Node("数据计算工程权限设置","计算APP组态/产品教程/数据计算工程权限设置/数据计算工程权限设置.html"),
    cpjc12: new Node("软件开放性","计算APP组态/产品教程/软件开放性/软件开放性.html"),
    /**计算APP组态——函数说明**/
    hssm0: new Node("语法说明","计算APP组态/函数说明/语法说明/语法说明.html"),
    hssm1: new Node("SCADA访问函数"),
    hssm2: new Node("工业库访问函数"),
    hssm3: new Node("采集端访问函数"),
    hssm4: new Node("关系库访问函数"),
    hssm5: new Node("系统函数"),
    hssm6: new Node("redis访问函数"),
    hssm7: new Node("MongoDB访问函数","计算APP组态/函数说明/MongoDB操作/MongoDB操作.html"),

     /**数据源app组态**/
    sjygc0: new Node("简介","数据APP组态/简介/简介.html"),
    sjygc1: new Node("登陆开发系统客户端","数据APP组态/登录开发系统客户端/登录开发系统客户端.html"),
    sjygc2: new Node("数据源工程组管理","数据APP组态/数据源工程组管理/数据源工程组管理.html"),
    sjygc3: new Node("数据源工程管理","数据APP组态/数据源工程管理/数据源工程管理.html"),
    sjygc4: new Node("数据源工程开发","数据APP组态/数据源工程开发/数据源工程开发.html"),
    sjygc5: new Node("数据源工程发布查询","数据APP组态/数据源工程发布查询/数据源工程发布查询.html"),
    sjygc6: new Node("数据源工程权限设置","数据APP组态/数据源工程权限设置/数据源工程权限设置.html"),
    sjygc7: new Node("数据源访问工程组管理","数据APP组态/数据源访问工程组管理/数据源访问工程组管理.html"),
    sjygc8: new Node("数据源访问工程管理","数据APP组态/数据源访问工程管理/数据源访问工程管理.html"),
    sjygc9: new Node("数据源访问工程开发","数据APP组态/数据源访问工程开发/数据源访问工程开发.html"),
    sjygc10: new Node("数据源访问工程发布查询","数据APP组态/数据源访问工程发布查询/数据源访问工程发布查询.html"),
    sjygc11: new Node("数据源访问工程权限设置","数据APP组态/数据源访问工程权限设置/数据源访问工程权限设置.html"),

    /**运维中心**/
    ywzx1: new Node(""+kfName+"运行节点信息","运维中心/APP运行节点信息/APP运行节点信息.html"),
    ywzx2: new Node(""+kfName+"管理","运维中心/APP管理/APP管理.html"),
    ywzx3: new Node("负载均衡与代理","运维中心/负载均衡与代理/负载均衡与代理.html"),
    ywzx4: new Node("工程管理","运维中心/工程管理/工程管理.html"),
    ywzx5: new Node("执行程序库管理","运维中心/执行程序库管理/执行程序库管理.html"),
    ywzx6: new Node("镜像库管理","运维中心/镜像库管理/镜像库管理.html"),
    ywzx7: new Node("运维管理权限","运维中心/运维管理权限/运维管理权限.html"),
    ywzx8: new Node("配置","运维中心/配置/配置.html"),
    ywzx9: new Node("产品监视功能","运维中心/产品监视功能/产品监视功能.html"),
    ywzx10: new Node("日志","运维中心/产品监视功能/产品监视功能.html"),
    // ywzx8: new Node(" 镜像库"),
    /**关于**/
    gy1: new Node("系统环境","关于/系统环境/系统环境.html"),
    gy2: new Node("售后服务及承诺","关于/售后服务及承诺/售后服务及承诺.html"),
    gy3: new Node("软件归属权","关于/软件归属权/软件归属权.html"),
    gy4: new Node("版本更新记录","关于/版本更新记录/版本更新记录.html"),

};
level2.n1.addChild(level3.kfn0,level3.kfn1,level3.kfn2); //平台指引
level2.n2.addChild(level3.gjc0,level3.gjc1,level3.gjc2,level3.gjc3,level3.gjc4,level3.gjc5,level3.gjc6,level3.gjc7,level3.gjc8);//教程
level2.n3.addChild(level3.yhpz0,level3.yhpz1,level3.yhpz2); //用户配置
level2.n4.addChild(level3.cjzt0,level3.cjzt1,level3.cjzt2,level3.cjzt3,level3.cjzt4);//采集APP组态

level2.n50.addChild(level3.jscpjs1,level3.jscpjs2,level3.jscpjs3);
level2.n5.addChild(level3.cpjc1,level3.cpjc2,level3.cpjc4,level3.cpjc5,level3.cpjc6,level3.cpjc7,level3.cpjc8,level3.cpjc9,level3.cpjc10,level3.cpjc11,level3.cpjc12);//计算APP_产品教程
level2.n6.addChild(level3.hssm0,level3.hssm1,level3.hssm2,level3.hssm3,level3.hssm4,level3.hssm5,level3.hssm6,level3.hssm7);//计算APP_函数说明


/////////////////////////////////////////////////kp
level2.n69.addChild(level3.n1, level3.n2, level3.n3); //特性
level2.n7.addChild(level3.jc54,level3.jc55, level3.jc56, level3.jc57,level3.jc58, level3.jc59, level3.jc60,level3.jc61, level3.jc62, level3.jc63,level3.jc64, level3.jc65,level3.jc66);//教程
level2.n7.addChild(level3.jc70, level3.jc73, level3.jc74, level3.jc75,level3.jc76, level3.jc77, level3.jc78,level3.jc79, level3.jc80, level3.jc84,level3.jc85,level3.jc86,level3.jc87);//教程-第四周
level2.n70.addChild(level3.n4, level3.n6, level3.n11, level3.n7,  level3.n10, level3.n8, level3.n9, level3.n10_1); //工程配置
level2.n71.addChild(level3.n3_11, level3.n3_12,  level3.n3_13, level3.n3_14, level3.n3_15, level3.n3_16); //开发IDE
level2.n72.addChild(level3.n12, level3.n13, level3.n14, level3.n15, level3.n16); //页面编辑器
level2.n73.addChild(level3.n22, level3.n23, level3.n24, level3.n25, level3.n26); //基本图形模型编辑器

level2.n74.addChild(level3.n17, level3.n18, level3.n19, level3.n20, level3.n21, level3.n64); //2D工艺流程图编辑器
level2.n75.addChild(level3.D1, level3.D2, level3.D3); //3D工艺流程图编辑器
level2.n76.addChild(level3.D1_1, level3.D1_2, level3.D1_3); //3D编辑器



level2.n77.addChild(level3.n27, level3.n28, level3.n29, level3.n30, level3.n31); //自定义图表组件编辑器
level2.n8.addChild(level3.n32_1,level3.n32, level3.n33, level3.n34, level3.n35, level3.n36, level3.n66, level3.n37, level3.n38); //函数
level2.n9.addChild(level3.n39_1,level3.n39, level3.n40, level3.n41); //脚本
level2.n10.addChild(level3.n42, level3.n43, level3.n44, level3.n45); //工程转换
level2.n11.addChild(level3.n46,level3.n46_1, level3.n47, level3.n48, level3.n49, level3.n50); //手机APP
 level2.n12.addChild(level3.n53); //后台







///////////////////////////////////////////////////kp
level2.n13.addChild(level3.ywzx1,level3.ywzx2,level3.ywzx3,level3.ywzx4,level3.ywzx5,level3.ywzx6,level3.ywzx7,level3.ywzx8,level3.ywzx9,level3.ywzx10);
level2.n20.addChild(level3.gy1,level3.gy2,level3.gy4);
level2.n21.addChild(level3.sjygc0,level3.sjygc1,level3.sjygc2,level3.sjygc3,level3.sjygc4,level3.sjygc5,level3.sjygc6);
level2.n22.addChild(level3.sjygc7,level3.sjygc8,level3.sjygc9,level3.sjygc10,level3.sjygc11);
// level2.n22.addChild(level3.sjyfw0,level3.sjyfw1,level3.sjyfw2,level3.sjyfw3,level3.sjyfw4,level3.sjyfw5,level3.sjyfw6);


//常见问题
level2.n17.addChild(level3.n54,level3.n57,level3.n58,level3.n59,level3.n60);
/**************** 第四级菜单 ****************/
const level4 = {
	//////////////////////////////////////////////////////////kp
   mcjs1: new Node("开发IDE", "客户端APP组态/特性/名词解释/开发IDE/开发IDE.html"),
   mcjs2: new Node("页面编辑器", "客户端APP组态/特性/名词解释/页面编辑器/页面编辑器.html"),
   mcjs3: new Node("工程转化", "客户端APP组态/特性/名词解释/工程转化/工程转化.html"),
   mcjs4: new Node("数据源", "客户端APP组态/特性/名词解释/数据源/数据源.html"),
   mcjs5: new Node("权限", "客户端APP组态/特性/名词解释/权限/权限.html"),
   mcjs6: new Node("布局容器", "客户端APP组态/特性/名词解释/布局容器/布局容器.html"),
   mcjs7: new Node("2D工艺流程图 ", "客户端APP组态/特性/名词解释/2D工艺流程图/2D工艺流程图.html"),
   mcjs8: new Node("工程部署", "客户端APP组态/特性/名词解释/工程部署/工程部署.html"),
   mcjs9: new Node("开发者工具", "客户端APP组态/特性/名词解释/开发者工具/开发者工具.html"),
   mcjs10: new Node("3D工艺流程图 ", "客户端APP组态/特性/名词解释/3D工艺流程图/3D工艺流程图.html"),
   mcjs10: new Node("3D工艺流程图 ", "客户端APP组态/特性/名词解释/3D工艺流程图/3D工艺流程图.html"),
   mcjs11: new Node("3D资源编辑器 ", "客户端APP组态/特性/名词解释/3D编辑器/3D编辑器.html"),
   mcjs12: new Node("成员事件 ", "客户端APP组态/特性/名词解释/成员事件/成员事件.html"),
   tx1: new Node("自适应终端显示", "客户端APP组态/特性/特性/自适应终端显示/自适应终端显示.html"),
   tx2: new Node("2D/3D过程数据相融合", "客户端APP组态/特性/特性/2D3D过程数据相融合/2D3D过程数据相融合.html"),
   tx3: new Node("集成33种组件", "客户端APP组态/特性/特性/集成33种组件/集成33种组件.html"),
   tx4: new Node("支持Echars图表", "客户端APP组态/特性/特性/支持Echars图表/支持Echars图表.html"),
   tx5: new Node("复用KS工程", "客户端APP组态/特性/特性/复用KS工程/复用KS工程.html"),
   tx6: new Node("跨平台", "客户端APP组态/特性/特性/跨平台/跨平台.html"),
   tx7: new Node("高安全性 ", "客户端APP组态/特性/特性/高安全性/高安全性.html"),
   tx8: new Node("高集成性", "客户端APP组态/特性/特性/高集成性/高集成性.html"),
   tx9: new Node("多人同时开发", "客户端APP组态/特性/特性/多人同时开发/多人同时开发.html"),
   tx10: new Node("组态式"+kfName+"开发", "客户端APP组态/特性/特性/组态式APP开发/组态式APP开发.html"),
    /**开发IDE-工具栏 */
    a1: new Node("帮助", "客户端APP组态/功能模块/开发IDE/工具栏/帮助/帮助.html"),
    a2: new Node("主题", "客户端APP组态/功能模块/开发IDE/工具栏/主题/主题.html"),
    a3: new Node("退出", "客户端APP组态/功能模块/开发IDE/工具栏/退出/退出.html"),
    /**开发IDE-工程组管理 */
    cz1: new Node("简介", "客户端APP组态/功能模块/开发IDE/工程组管理/简介/简介.html"),
    cz2: new Node("工具栏", "客户端APP组态/功能模块/开发IDE/工程组管理/工具栏/工具栏.html"),
    /**开发IDE-工程管理 */
    cz3: new Node("简介", "客户端APP组态/功能模块/开发IDE/工程管理/简介/简介.html"),
    cz4: new Node("工具栏", "客户端APP组态/功能模块/开发IDE/工程管理/工具栏/工具栏.html"),
    /**开发IDE-权限设置（开发态权限） */
    cz5: new Node("简介", "客户端APP组态/功能模块/开发IDE/权限设置/简介/简介.html"),
    cz6: new Node("权限配置", "客户端APP组态/功能模块/开发IDE/权限设置/权限配置/权限配置.html"),
    /**工程配置-页面管理 */
    b1: new Node("简介", "客户端APP组态/功能模块/工程配置/页面管理/简介/简介.html"),
    b2: new Node("页面管理工具栏", "客户端APP组态/功能模块/工程配置/页面管理/页面管理工具栏/页面管理工具栏.html"),
    b3: new Node("页面组", "客户端APP组态/功能模块/工程配置/页面管理/页面组/页面组.html"),
    /**工程配置-工程变量 */
    c1: new Node("简介", "客户端APP组态/功能模块/工程配置/工程变量/简介/简介.html"),
    c2: new Node("工程变量工具栏", "客户端APP组态/功能模块/工程配置/工程变量/工程变量工具栏/工程变量工具栏.html"),
    c3: new Node("变量组", "客户端APP组态/功能模块/工程配置/工程变量/变量组/变量组.html"),
    /**工程配置-安全对象（运行态权限） */
    aq1: new Node("简介", "客户端APP组态/功能模块/工程配置/安全对象/简介/简介.html"),
    aq2: new Node("角色管理", "客户端APP组态/功能模块/工程配置/安全对象/角色管理/角色管理.html"),
    /**工程配置-图形模型库 */
    e1: new Node("简介", "客户端APP组态/功能模块/工程配置/图形模型库/简介/简介.html"),
    e2: new Node("图形模型库工具栏", "客户端APP组态/功能模块/工程配置/图形模型库/图形模型库工具栏/图形模型库工具栏.html"),
    e3: new Node("图形模型组", "客户端APP组态/功能模块/工程配置/图形模型库/图形模型库组/图形模型库组.html"),
    /**工程配置-工程管理 */
    f1: new Node("简介", "客户端APP组态/功能模块/工程配置/工程管理/简介/简介.html"),
    f2: new Node("工程管理工具栏", "客户端APP组态/功能模块/工程配置/工程管理/工程管理工具栏/工程管理工具栏.html"),
    // f3: new Node("工程组", "功能模块/工程配置/工程管理/工程组/工程组.html"),
    /**工程配置-数据源管理 */
    g1: new Node("简介", "客户端APP组态/功能模块/工程配置/数据源管理/简介/简介.html"),
    g2: new Node("数据源工具栏", "客户端APP组态/功能模块/工程配置/数据源管理/数据源工具栏/工具栏.html"),
    // g3: new Node("数据源", "功能模块/工程配置/数据源管理/数据源/Redis数据源/Redis数据源连接.html"),
    // g3: new Node("数据源"),
    /**工程配置-命令语言 */
    ml1: new Node("简介", "客户端APP组态/功能模块/工程配置/命令语言/简介/简介.html"),
    ml2: new Node("命令语言工具栏", "客户端APP组态/功能模块/工程配置/命令语言/命令语言工具栏/命令语言工具栏.html"),
    ml3: new Node("全局脚本"),
    /**页面编辑器-菜单栏 */
    h1: new Node("编辑", "客户端APP组态/功能模块/页面编辑器/菜单栏/编辑/编辑.html"),
    h2: new Node("绘制", "客户端APP组态/功能模块/页面编辑器/菜单栏/绘制/绘制.html"),
    h3: new Node("帮助", "客户端APP组态/功能模块/页面编辑器/菜单栏/帮助/帮助.html"),
    /**页面编辑器-工具箱 */
    i1: new Node("布局容器"),
    i2: new Node("流程图"),
    i3: new Node("UI组件"),
    i4: new Node("图表组件"),
    /**页面编辑器-配置窗 */
    j1: new Node("属性", "客户端APP组态/功能模块/页面编辑器/配置窗/属性/属性.html"),
    j2: new Node("连接"),
    j3: new Node("变量", "客户端APP组态/功能模块/页面编辑器/配置窗/变量/变量.html"),
    j4: new Node("自定义属性", "客户端APP组态/功能模块/页面编辑器/配置窗/自定义属性/自定义属性.html"),
    j5: new Node("对象", "客户端APP组态/功能模块/页面编辑器/配置窗/对象/对象.html"),
    /**2D工艺流程图编辑器-菜单栏 */
    k1: new Node("编辑", "客户端APP组态/功能模块/2D工艺流程图编辑器/菜单栏/编辑/编辑.html"),
    k2: new Node("绘制", "客户端APP组态/功能模块/2D工艺流程图编辑器/菜单栏/绘制/绘制.html"),
    k3: new Node("帮助", "客户端APP组态/功能模块/2D工艺流程图编辑器/菜单栏/帮助/帮助.html"),
    /**2D工艺流程图编辑器-工具箱 */
    l1: new Node("基本图素"),
    l2: new Node("组合图素"),
    l3: new Node("基本图形模型库"),
    /**2D工艺流程图编辑器-配置窗 */
    m1: new Node("属性", "客户端APP组态/功能模块/2D工艺流程图编辑器/配置窗/属性/属性.html"),
    m2: new Node("连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/配置窗/连接/连接.html"),
    m3: new Node("变量", "客户端APP组态/功能模块/2D工艺流程图编辑器/配置窗/变量/变量.html"),
    m4: new Node("自定义属性", "客户端APP组态/功能模块/2D工艺流程图编辑器/配置窗/自定义属性/自定义属性.html"),
    m5: new Node("对象", "客户端APP组态/功能模块/2D工艺流程图编辑器/配置窗/对象/对象.html"),
    /**2D工艺流程图编辑器-动画连接 */
    n1: new Node("基本", "客户端APP组态/功能模块/2D工艺流程图编辑器/动画连接/基本/基本.html"),
    n2: new Node("属性", "客户端APP组态/功能模块/2D工艺流程图编辑器/动画连接/属性/属性.html"),
    n3: new Node("缩放", "客户端APP组态/功能模块/2D工艺流程图编辑器/动画连接/缩放/缩放.html"),
    n4: new Node("移动", "客户端APP组态/功能模块/2D工艺流程图编辑器/动画连接/移动/移动.html"),
    n5: new Node("旋转", "客户端APP组态/功能模块/2D工艺流程图编辑器/动画连接/旋转/旋转.html"),
    n6: new Node("闪烁", "客户端APP组态/功能模块/2D工艺流程图编辑器/动画连接/闪烁/闪烁.html"),
    n7: new Node("值输入", "客户端APP组态/功能模块/2D工艺流程图编辑器/动画连接/值输入/值输入.html"),
    n8: new Node("值输出", "客户端APP组态/功能模块/2D工艺流程图编辑器/动画连接/值输出/值输出.html"),
    n9: new Node("鼠标", "客户端APP组态/功能模块/2D工艺流程图编辑器/动画连接/鼠标/鼠标.html"),
    /**3D工艺流程图编辑器-配置窗 */
    tp1: new Node("变量", "客户端APP组态/功能模块/3D工艺流程图编辑器/配置窗/变量/变量.html"),
    tp2: new Node("成员", "客户端APP组态/功能模块/3D工艺流程图编辑器/配置窗/成员/成员.html"),
    tp3: new Node("连接", "客户端APP组态/功能模块/3D工艺流程图编辑器/配置窗/连接/连接.html"),
    tp4: new Node("属性", "客户端APP组态/功能模块/3D工艺流程图编辑器/配置窗/属性/属性.html"),
    tp5: new Node("路径漫游", "客户端APP组态/功能模块/3D工艺流程图编辑器/配置窗/路径漫游/路径漫游.html"),
    /**3D工艺流程图编辑器-动画连接 */
    pt1: new Node("基本", "客户端APP组态/功能模块/3D工艺流程图编辑器/动画连接/基本/基本.html"),
    pt2: new Node("闪烁", "客户端APP组态/功能模块/3D工艺流程图编辑器/动画连接/闪烁/闪烁.html"),
    pt3: new Node("属性", "客户端APP组态/功能模块/3D工艺流程图编辑器/动画连接/属性/属性.html"),
    pt4: new Node("鼠标", "客户端APP组态/功能模块/3D工艺流程图编辑器/动画连接/鼠标/鼠标.html"),
    pt5: new Node("缩放", "客户端APP组态/功能模块/3D工艺流程图编辑器/动画连接/缩放/缩放.html"),
    pt6: new Node("旋转", "客户端APP组态/功能模块/3D工艺流程图编辑器/动画连接/旋转/旋转.html"),
    pt7: new Node("移动", "客户端APP组态/功能模块/3D工艺流程图编辑器/动画连接/移动/移动.html"),
    pt8: new Node("值输入", "客户端APP组态/功能模块/3D工艺流程图编辑器/动画连接/值输入/值输入.html"),
    /**基本图形模型编辑器-菜单栏 */
    o1: new Node("编辑", "客户端APP组态/功能模块/基本图形模型编辑器/菜单栏/编辑/编辑.html"),
    o2: new Node("绘制", "客户端APP组态/功能模块/基本图形模型编辑器/菜单栏/绘制/绘制.html"),
    o3: new Node("帮助", "客户端APP组态/功能模块/基本图形模型编辑器/菜单栏/帮助/帮助.html"),
    /**基本图形模型编辑器-工具箱 */
    p1: new Node("基本图素"),
    p2: new Node("组合图素"),
    /**基本图形模型编辑器-配置窗 */
    q1: new Node("属性", "客户端APP组态/功能模块/基本图形模型编辑器/配置窗/属性/属性.html"),
    q2: new Node("连接", "客户端APP组态/功能模块/基本图形模型编辑器/配置窗/连接/连接.html"),
    q3: new Node("变量", "客户端APP组态/功能模块/基本图形模型编辑器/配置窗/变量/变量.html"),
    q4: new Node("自定义属性", "客户端APP组态/功能模块/基本图形模型编辑器/配置窗/自定义属性/自定义属性.html"),
    q5: new Node("公开事件", "客户端APP组态/功能模块/基本图形模型编辑器/配置窗/公开事件/公开事件.html"),
    q6: new Node("对象", "客户端APP组态/功能模块/基本图形模型编辑器/配置窗/对象/对象.html"),
    /**自定义图表组件编辑器-菜单栏 */
    r1: new Node("编辑", "客户端APP组态/功能模块/自定义图表组件编辑器/菜单栏/编辑/编辑.html"),
    r2: new Node("绘制", "客户端APP组态/功能模块/自定义图表组件编辑器/菜单栏/绘制/绘制.html"),
    r3: new Node("帮助", "客户端APP组态/功能模块/自定义图表组件编辑器/菜单栏/帮助/帮助.html"),
    /**自定义图表组件编辑器-工具箱 */
    s1: new Node("自定义图表组件"),
    /**自定义图表组件编辑器-配置窗 */
    t1: new Node("属性", "客户端APP组态/功能模块/自定义图表组件编辑器/配置窗/属性/属性.html"),
    t2: new Node("连接", "客户端APP组态/功能模块/自定义图表组件编辑器/配置窗/连接/连接.html"),
    t3: new Node("变量", "客户端APP组态/功能模块/自定义图表组件编辑器/配置窗/变量/变量.html"),
    /**函数-用户操作函数 */
    u1: new Node("LogOn","客户端APP组态/函数/用户操作函数/LogOn/LogOn.html"),
    u2: new Node("Login","客户端APP组态/函数/用户操作函数/Login/Login.html"),
    u3: new Node("LogOff","客户端APP组态/函数/用户操作函数/LogOff/LogOff.html"),
    u4: new Node("ChangePassword","客户端APP组态/函数/用户操作函数/ChangePassword/ChangePassword.html"),
    u5: new Node("GetUserInfoContent","客户端APP组态/函数/用户操作函数/GetUserInfoContent/GetUserInfoContent.html"),
    u6: new Node("GetCurrentUser","客户端APP组态/函数/用户操作函数/GetCurrentUser/GetCurrentUser.html"),
    u7: new Node("Exit","客户端APP组态/函数/用户操作函数/Exit/Exit.html"),
    /**函数-变量操作函数 */
    v1: new Node("GetTagField","客户端APP组态/函数/变量操作函数/GetTagField/GetTagField.html"),
    v2: new Node("SetTagField","客户端APP组态/函数/变量操作函数/SetTagField/SetTagField.html"),
    v3: new Node("VarRefAddress","客户端APP组态/函数/变量操作函数/VarRefAddress/VarRefAddress.html"),
    v4: new Node("setTagValues","客户端APP组态/函数/变量操作函数/setTagValues/setTagValues.html"),
    /**函数-页面操作函数 */
    w1: new Node("ShowPicture","客户端APP组态/函数/页面操作函数/ShowPicture/ShowPicture.html"),
    w2: new Node("ClosePicture","客户端APP组态/函数/页面操作函数/ClosePicture/ClosePicture.html"),
    w3: new Node("GetCursorPosX","客户端APP组态/函数/页面操作函数/GetCursorPosX/GetCursorPosX.html"),
    w4: new Node("GetCursorPosY","客户端APP组态/函数/页面操作函数/GetCursorPosY/GetCursorPosY.html"),
    w5_1: new Node("ShowPage","客户端APP组态/函数/页面操作函数/ShowPage/ShowPage.html"),
    w5_2: new Node("ClosePage","客户端APP组态/函数/页面操作函数/ClosePage/ClosePage.html"),
    w5: new Node("HidePage","客户端APP组态/函数/页面操作函数/HidePage/HidePage.html"),
    /**函数-文件操作函数 */
    x1: new Node("UploadFiles","客户端APP组态/函数/文件操作函数/UploadFiles/UploadFiles.html"),
    x2: new Node("DownloadFiles","客户端APP组态/函数/文件操作函数/DownloadFiles/DownloadFiles.html"),
    x3: new Node("DeleteFiles","客户端APP组态/函数/文件操作函数/DeleteFiles/DeleteFiles.html"),
    x4: new Node("ExportToExcel","客户端APP组态/函数/文件操作函数/ExportToExcel/ExportToExcel.html"),
    x5: new Node("ImportByExcel","客户端APP组态/函数/文件操作函数/ImportByExcel/ImportByExcel.html"),
    x5_1: new Node("setFilePreviewUrl","客户端APP组态/函数/文件操作函数/setFilePreviewUrl/setFilePreviewUrl.html"),
    /**函数-数据库操作函数 */
    // y1: new Node("GetHistoryDatasKH351","函数/数据库操作函数/GetHistoryDatasKH351/GetHistoryDatasKH351.html"),
    y1: new Node("SQLExecute1","客户端APP组态/函数/数据库操作函数/SQLExecute1/SQLExecute1.html"),
    y2: new Node("SyncSQLExecute","客户端APP组态/函数/数据库操作函数/SyncSQLExecute/SyncSQLExecute.html"),
    y3: new Node("AsynQueryHistoryDatas","客户端APP组态/函数/数据库操作函数/AsynQueryHistoryDatas/AsynQueryHistoryDatas.html"),
    // y4: new Node("ExcutesqlNoSelect","函数/数据库操作函数/ExcutesqlNoSelect/ExcutesqlNoSelect.html"),
    /**函数-其他函数 */
    z1: new Node("Trace","客户端APP组态/函数/其他函数/Trace/Trace.html"),
    z2: new Node("StrToReal","客户端APP组态/函数/其他函数/StrToReal/StrToReal.html"),
    z3: new Node("StrFromInt","客户端APP组态/函数/其他函数/StrFromInt/StrFromInt.html"),
    z4: new Node("GetSystimeWeek","客户端APP组态/函数/其他函数/GetSystimeWeek/GetSystimeWeek.html"),
    z5: new Node("StrToInt","客户端APP组态/函数/其他函数/StrToInt/StrToInt.html"),
    z6: new Node("AckByTagName","客户端APP组态/函数/其他函数/AckByTagName/AckByTagName.html"),
    z7: new Node("AckByGroupName","客户端APP组态/函数/其他函数/AckByGroupName/AckByGroupName.html"),
    z8: new Node("ShowMessageBox","客户端APP组态/函数/其他函数/ShowMessageBox/ShowMessageBox.html"),
    z9: new Node("StrRight","客户端APP组态/函数/其他函数/StrRight/StrRight.html"),
    z10: new Node("KDBGetDataset1","客户端APP组态/函数/其他函数/KDBGetDataset1/KDBGetDataset1.html"),
    z11: new Node("KDBDisConnect","客户端APP组态/函数/其他函数/KDBDisConnect/KDBDisConnect.html"),
    z12: new Node("KDBGetDatasetRows","客户端APP组态/函数/其他函数/KDBGetDatasetRows/KDBGetDatasetRows.html"),
    z13: new Node("KDBGetCellValueByFieldId","客户端APP组态/函数/其他函数/KDBGetCellValueByFieldId/KDBGetCellValueByFieldId.html"),
    z14: new Node("KDBGetConnectID","客户端APP组态/函数/其他函数/KDBGetConnectID/KDBGetConnectID.html"),
    z15: new Node("第三方API接口","客户端APP组态/函数/其他函数/第三方API接口/第三方API接口.html"),
    z16: new Node("Print","客户端APP组态/函数/其他函数/Print/Print.html"),
    z17: new Node("动态设置动画连接","客户端APP组态/函数/其他函数/动态设置动画连接/动态设置动画连接.html"),
    z18: new Node("成员事件","客户端APP组态/函数/其他函数/成员事件/成员事件.html"),
    z19: new Node("邮件发送","客户端APP组态/函数/其他函数/邮件发送/邮件发送.html"),
    // z15: new Node("SetLayerVisibleByName","函数/其他函数/SetLayerVisibleByName/SetLayerVisibleByName.html"),
    /**函数-JavaScript常用函数 */
    // aa1: new Node("web worker","函数/JavaScript常用函数/web worker/web worker.html"),
    aa2: new Node("web sql","客户端APP组态/函数/JavaScript常用函数/web sql/web sql.html"),
    aa3: new Node("web存储","客户端APP组态/函数/JavaScript常用函数/web存储/web存储.html"),
    aa4: new Node("html对dom操作的函数"),
    aa5: new Node("ECMAScript函数"),
    /**函数-动态创建函数 */
    dt1: new Node("CreateGraphicObject","客户端APP组态/函数/动态创建函数/CreateGraphicObject/CreateGraphicObject.html"),
    dt2: new Node("CreateGraphicObjectByLayout","客户端APP组态/函数/动态创建函数/CreateGraphicObjectByLayout/CreateGraphicObjectByLayout.html"),
    dt3: new Node("CreateGraphicObjectByTwoDimensionalLayout","客户端APP组态/函数/动态创建函数/CreateGraphicObjectByTwoDimensionalLayout/CreateGraphicObjectByTwoDimensionalLayout.html"),
    dt4: new Node("DeleteGraphicObjectByName","客户端APP组态/函数/动态创建函数/DeleteGraphicObjectByName/DeleteGraphicObjectByName.html"),
    dt5: new Node("GetGraphicObjectAttributeByIndex","客户端APP组态/函数/动态创建函数/GetGraphicObjectAttributeByIndex/GetGraphicObjectAttributeByIndex.html"),
    dt6: new Node("GetGraphicObjectAttributeByName","客户端APP组态/函数/动态创建函数/GetGraphicObjectAttributeByName/GetGraphicObjectAttributeByName.html"),
    dt7: new Node("GetGraphicObjectByName","客户端APP组态/函数/动态创建函数/GetGraphicObjectByName/GetGraphicObjectByName.html"),
    dt8: new Node("GetGraphicObjectCount","客户端APP组态/函数/动态创建函数/GetGraphicObjectCount/GetGraphicObjectCount.html"),
    dt9: new Node("SetGraphicObjectAttributeByIndex","客户端APP组态/函数/动态创建函数/SetGraphicObjectAttributeByIndex/SetGraphicObjectAttributeByIndex.html"),
    dt10: new Node("SetGraphicObjectAttributeByName","客户端APP组态/函数/动态创建函数/SetGraphicObjectAttributeByName/SetGraphicObjectAttributeByName.html"),
    dt11: new Node("SetGraphicObjectPublicVariableValueByName","客户端APP组态/函数/动态创建函数/SetGraphicObjectPublicVariableValueByName/SetGraphicObjectPublicVariableValueByName.html"),
    /**脚本-脚本编辑器 */
    bb1: new Node("简介", "客户端APP组态/脚本/脚本编辑器/介绍/介绍.html"),
    bb2: new Node("菜单栏", "客户端APP组态/脚本/脚本编辑器/菜单栏/菜单栏.html"),
    bb3: new Node("辅助区", "客户端APP组态/脚本/脚本编辑器/辅助区/辅助区.html"),
    bb4: new Node("事件连接区", "客户端APP组态/脚本/脚本编辑器/事件连接区/事件连接区.html"),
    /**脚本-脚本环境 */
    cc1: new Node("页面编辑器", "客户端APP组态/脚本/脚本环境/页面编辑器/页面编辑器.html"),
    cc2: new Node("2D工艺流程图编辑器", "客户端APP组态/脚本/脚本环境/2D工艺流程图编辑器/2D工艺流程图编辑器.html"),
    cc3: new Node("基本图形模型编辑器", "客户端APP组态/脚本/脚本环境/基本图形模型编辑器/基本图形模型编辑器.html"),
    cc4: new Node("自定义图表组件编辑器", "客户端APP组态/脚本/脚本环境/自定义图表组件编辑器/自定义图表组件编辑器.html"),

    /**手机APP-APP工程开发 */
    ee1: new Node("工程组态","客户端APP组态/手机APP/APP工程开发/工程组态/工程组态.html"),
    ee2: new Node("工程调试","客户端APP组态/手机APP/APP工程开发/工程调试/工程调试.html"),
    ee3: new Node("常用函数","客户端APP组态/手机APP/APP工程开发/常用函数/常用函数.html"),
    ee4: new Node("第三方插件模块","客户端APP组态/手机APP/APP工程开发/第三方插件模块/第三方插件模块.html"),
    ee5: new Node("应用案例","客户端APP组态/手机APP/APP工程开发/应用案例/应用案例.html"),
    /**手机APP-APP打包 */
    ff1: new Node("本地打包","客户端APP组态/手机APP/APP打包/本地打包/本地打包.html"),
    ff2: new Node("云打包","客户端APP组态/手机APP/APP打包/云打包/云打包.html"),








    //////////////////////////////////////////////////////////kp
    //平台指引
   kfmcjs1: new Node("什么是管控一体化平", "特性/名词解释/开发系统/开发系统.html1"),
   kfmcjs2: new Node("产品构成", "平台指引/产品概述/产品构成/产品构成.html"),
   kfmcjs3: new Node("产品特点", "平台指引/产品概述/产品特点/产品特点.html"),
   kfmcjs4: new Node("操作流程总览"),
   kfmcjs41: new Node("典型应用案例"),
   kfmcjs5: new Node("权限说明","特性/名词解释/权限/权限.html1"),
   //教程——产品安装
   cpaz1: new Node("产品快速安装","教程/产品安装/产品快速安装/KF3.6环境准备及安装方法.html"),
   cpaz2: new Node("依赖服务安装","教程/产品安装/依赖服务安装/依赖服务安装.html"),
   cpaz3: new Node("第三方工具使用说明","教程/产品安装/第三方工具使用说明/第三方工具使用说明.html"),
   //教程——快速进入开发和运维环境
   kfhyw1: new Node("1分钟掌握开发流程","教程/快速进入开发和运维环境/1分钟掌握开发流程/1分钟掌握开发流程.html"),
   kfhyw2: new Node("1分钟掌握发布流程","教程/快速进入开发和运维环境/1分钟掌握发布流程/1分钟掌握发布流程.html"),
   kfhyw3: new Node("1分钟掌握启动流程","教程/快速进入开发和运维环境/1分钟掌握启动流程/1分钟掌握启动流程.html"),
   //教程——3分钟完成KF3.6数据采集到界面展示
   cjdjm1: new Node("2分钟完成管控一体化平台实时数据到界面展示"),
   cjdjm2: new Node("2分钟完成管控一体化平台历史数据采集到界面展示"),
   //教程——3分钟完成KF3.6数据采集到业务计算
   cjdjs1: new Node("3分钟完成管控一体化平台实时数据采集到界面展示",'教程/5分钟完成KF3.6数据采集到KF3.6平台/3分钟完成KingFusion3.6实时数据采集到界面展示/3分钟完成KingFusion3.6实时数据采集到界面展示.html'),
   cjdjs2: new Node("3分钟完成管控一体化平历史数据采集到界面展示",'教程/5分钟完成KF3.6数据采集到KF3.6平台/3分钟完成KingFusion3.6历史数据采集到界面展示/3分钟完成KingFusion3.6历史数据采集到界面展示.html'),
   cjdjs3: new Node("3分钟完成管控一体化平实时数据采集到业务计算",'教程/5分钟完成KF3.6数据采集到KF3.6平台/3分钟完成KingFusion3.6实时数据采集到业务计算/3分钟完成KingFusion3.6实时数据采集到业务计算.html'),
   cjdjs4: new Node("3分钟完成管控一体化平历史数据采集到业务计算",'教程/5分钟完成KF3.6数据采集到KF3.6平台/3分钟完成KingFusion3.6历史数据采集到业务计算/3分钟完成KingFusion3.6历史数据采集到业务计算.html'),
	//教程——5分钟完成KingIOServer数据接入KF3.6平台
   iodkf1: new Node("3分钟完成采集端实时数据采集到界面展示","教程/5分钟完成KingIOServer数据接入KF3.6平台/3分钟完成KingFusion3.6实时数据采集到界面展示/3分钟实现KingIOServer数据接入KingFusion3.6平台.html"),
   iodkf2: new Node("3分钟完成采集端历史数据采集到界面展示","教程/5分钟完成KingIOServer数据接入KF3.6平台/3分钟完成KingFusion3.6历史数据采集到界面展示/3分钟实现KingIOServer数据接入KingFusion3.6平台.html"),
   iodkf3: new Node("3分钟完成采集端实时数据采集到业务计算","教程/5分钟完成KingIOServer数据接入KF3.6平台/3分钟完成KingFusion3.6实时数据采集到业务计算/3分钟实现KingIOServer接入KingFusion3.6平台.html"),
   iodkf4: new Node("3分钟完成采集端历史数据采集到业务计算","教程/5分钟完成KingIOServer数据接入KF3.6平台/3分钟完成KingFusion3.6历史数据采集到业务计算/3分钟实现KingIOServer接入KingFusion3.6平台.html"),
	//教程——5分钟完成KingView数据接入KF3.6平台
   kvdkf1: new Node("3分钟完成组态软件实时数据采集到界面展示",'教程/5分钟完成KingView数据接入KF3.6平台/3分钟完成KingView实时数据采集到界面展示/3分钟完成KingView实时数据采集到界面展示.html'),
   kvdkf2: new Node("3分钟完成组态软件历史数据采集到界面展示",'教程/5分钟完成KingView数据接入KF3.6平台/3分钟完成KingView历史数据采集到界面展示/3分钟完成KingView历史数据采集到界面展示.html'),
   kvdkf3: new Node("3分钟完成组态软件实时数据采集到业务计算",'教程/5分钟完成KingView数据接入KF3.6平台/3分钟完成KingView实时数据采集到业务计算/3分钟完成KingView实时数据采集到业务计算.html'),
   kvdkf4: new Node("3分钟完成组态软件历史数据采集到业务计算",'教程/5分钟完成KingView数据接入KF3.6平台/3分钟完成KingView历史数据采集到业务计算/3分钟完成KingView历史数据采集到业务计算.html'),
	//教程——5分钟完成KingScada数据接入KF3.6平台
   ksdkf1: new Node("3分钟完成SCADA实时数据采集到界面展示",'教程/5分钟完成KingScada数据接入KF3.6平台/3分钟完成KingScada实时数据采集到界面展示.html'),
   ksdkf2: new Node("3分钟完成SCADA历史数据采集到界面展示",'教程/5分钟完成KingScada数据接入KF3.6平台/3分钟完成KingScada历史数据采集到界面展示.html'),
   ksdkf3: new Node("3分钟完成SCADA实时数据采集到业务计算",'教程/5分钟完成KingScada数据接入KF3.6平台/3分钟完成KingScada实时数据采集到业务计算.html'),
   ksdkf4: new Node("3分钟完成SCADA历史数据采集到业务计算",'教程/5分钟完成KingScada数据接入KF3.6平台/3分钟完成KingScada历史数据采集到业务计算.html'),




   //用户配置-用户系统
   cjgly1: new Node("用户组","用户配置/用户系统/用户组/用户组.html"),
   cjgly2: new Node("用户","用户配置/用户系统/用户/用户.html"),

   //用户配置-管理用户权限
   gly1: new Node("角色","用户配置/管理用户权限/角色/角色.html"),

   //用户配置-典型应用
   dxyy1: new Node("典型行业应用场景","特性/名词解释/权限/权限.html1"),
   //采集APP组态-工程管理
   cjgcgl1: new Node("工程组","采集APP组态/工程管理/工程组/工程组.html"),
   cjgcgl2: new Node("工程","采集APP组态/工程管理/工程/工程.html"),
   cjgcgl3: new Node("设备组和变量组","采集APP组态/工程管理/设备组和变量组/设备组和变量组.html"),
   cjgcgl4: new Node("设备","采集APP组态/工程管理/设备/设备.html"),
   cjgcgl5: new Node("变量","采集APP组态/工程管理/变量/变量.html"),
   cjgcgl6: new Node("网络配置","采集APP组态/工程管理/网络配置/网络配置.html"),
   cjgcgl7: new Node("数据存储配置","采集APP组态/工程管理/数据存储配置/数据存储配置.html"),
   cjgcgl8: new Node("数据转发配置","采集APP组态/工程管理/数据转发配置/数据转发配置.html"),
    //采集APP组态-驱动组件库
   cjqd1: new Node("安装驱动"),
   cjqd2: new Node("卸载驱动"),  
    //采集APP组态-权限设置
   cjqx1: new Node("增加角色"),
   cjqx2: new Node("编辑角色"),  
	cjqx3: new Node("删除角色"),  





   //计算APP组态_产品教程
   dlkf1: new Node("应用注册","计算APP组态/系统功能说明/2/2-1/2-1.html"),
   dlkf2: new Node("登录组态和开发系统","计算APP组态/系统功能说明/2/2-2/2-2.html"),
   jckf1: new Node("用户安全体系简介","计算APP组态/系统功能说明/3/3-1/3-1.html"),
   jckf2: new Node("安全体系操作及说明","计算APP组态/系统功能说明/3/3-2/3-2.html"),
   gczgl1: new Node("新建、删除工程组","计算APP组态/系统功能说明/4/4-1/4-1.html"),
   gczgl2: new Node("打开、关闭工程组","计算APP组态/系统功能说明/4/4-2/4-2.html"),
   gczgl3: new Node("导入、导出工程组","计算APP组态/系统功能说明/4/4-3/4-3.html"),
   gczgl4: new Node("发布工程组","计算APP组态/系统功能说明/4/4-4/4-4.html"),
   gczgl5: new Node("加密、解密工程组","计算APP组态/系统功能说明/4/4-5/4-5.html"),
   gczgl6: new Node("编辑工程组","计算APP组态/系统功能说明/4/4-6/4-6.html"),
   gcgl1: new Node("新建、删除工程","计算APP组态/系统功能说明/5/5-1/5-1.html"),
   gcgl2: new Node("导入、导出工程","计算APP组态/系统功能说明/5/5-2/5-2.html"),
   gcgl3: new Node("加密、解密工程","计算APP组态/系统功能说明/5/5-3/5-3.html"),
   gcgl4: new Node("运行、调试工程","计算APP组态/系统功能说明/5/5-4/5-4.html"),
   gcgl5: new Node("工程内查找","计算APP组态/系统功能说明/5/5-5/5-5.html"),
   gcgl6: new Node("编辑工程","计算APP组态/系统功能说明/5/5-6/5-6.html"),
   sjcd1: new Node("初始化参数","计算APP组态/系统功能说明/6/6-1/6-1.html"),
   sjcd2: new Node("全局变量","计算APP组态/系统功能说明/6/6-2/6-2.html"),
   sjy1: new Node("数据源管理","计算APP组态/系统功能说明/7/7-1/7-1.html"),
   jbgl1: new Node("周期性脚本","计算APP组态/系统功能说明/8/8-1/8-1.html"),
   jbgl2: new Node("数据改变事件脚本","计算APP组态/系统功能说明/8/8-2/8-2.html"),
   jbgl3: new Node("条件事件脚本","计算APP组态/系统功能说明/8/8-3/8-3.html"),
   jbgl4: new Node("自定义事件脚本","计算APP组态/系统功能说明/8/8-4/8-4.html"),
   jbgl5: new Node("请求式计算脚本","计算APP组态/系统功能说明/8/8-5/8-5.html"),
   jbgl6: new Node("自定义函数脚本","计算APP组态/系统功能说明/8/8-6/8-6.html"),
   jbyl1: new Node("普通依赖","计算APP组态/系统功能说明/9/9-1/9-1.html"),
   jbyl2: new Node("NPM依赖","计算APP组态/系统功能说明/9/9-2/9-2.html"),
   jssl1: new Node("工程和实例的关系","计算APP组态/系统功能说明/10/10-1/10-1.html"),
   jssl2: new Node("实例操作","计算APP组态/系统功能说明/10/10-2/10-2.html"),
   rjkf1: new Node("概述","计算APP组态/系统功能说明/11/11-1/11-1.html"),
   rjkf2: new Node("动态库调用函数","计算APP组态/系统功能说明/11/11-2/11-2.html"),
   rjkf3: new Node("Restful接口","计算APP组态/系统功能说明/11/11-3/11-3.html"),
   rjkf4: new Node("Redis库访问脚本实例","计算APP组态/系统功能说明/11/11-4/11-4.html"),
   rjkf5: new Node("TimeScaleDB访问脚本示例","计算APP组态/系统功能说明/11/11-5/11-5.html"),
   rjkf6: new Node("TDEngine访问脚本示例","计算APP组态/系统功能说明/11/11-6/11-6.html"),
    //计算APP组态_函数说明
    ksfw1: new Node("SCADA Tag值数据结构","计算APP组态/函数说明/KingSCADA访问函数/KingSCADA Tag值数据结构/KingSCADA Tag值数据结构.html"),
    ksfw2: new Node("查SCADA数据","计算APP组态/函数说明/KingSCADA访问函数/查询KingSCADA数据/查询KingSCADA数据.html"),
    ksfw3: new Node("修改SCADA数据","计算APP组态/函数说明/KingSCADA访问函数/修改KingSCADA数据/修改KingSCADA数据.html"),
    khfw1: new Node("工业库 Tag值数据结构","计算APP组态/函数说明/KingHistorian访问函数/KingHistorian Tag值数据结构/KingHistorian Tag值数据结构.html"),
    khfw2: new Node("向SCADA添加历史数据","计算APP组态/函数说明/KingHistorian访问函数/向KingHistorian添加历史数据/向KingHistorian添加历史数据.html"),
    khfw3: new Node("从SCADA查询历史数据","计算APP组态/函数说明/KingHistorian访问函数/从KingHistorian查询历史数据/从KingHistorian查询历史数据.html"),
    kiofw1: new Node("采集端 Tag值数据结构","计算APP组态/函数说明/KingIOServer访问函数/KingIOserver Tag值数据结构/KingIOserver Tag值数据结构.html"),
    kiofw2: new Node("查询采集端数据","计算APP组态/函数说明/KingIOServer访问函数/查询KingIOserver数据/查询KingIOserver数据.html"),
    kiofw3: new Node("修改采集端数据","计算APP组态/函数说明/KingIOServer访问函数/修改KingIOServer数据/修改KingIOServer数据.html"),
    gxkfw1: new Node("关系库查询","计算APP组态/函数说明/关系库访问函数/关系库查询/关系库查询.html"),
    gxkfw2: new Node("关系库操作","计算APP组态/函数说明/关系库访问函数/关系库操作/关系库操作.html"),
    xths1: new Node("日志相关","计算APP组态/函数说明/系统函数/日志相关/日志相关.html"),
    xths2: new Node("错误码","计算APP组态/函数说明/系统函数/错误码/错误码.html"),
    xths3: new Node("事件触发","计算APP组态/函数说明/系统函数/事件触发/事件触发.html"),
    xths4: new Node("数学函数","计算APP组态/函数说明/系统函数/数学函数/数学函数.html"),
    xths5: new Node("动态库调用","计算APP组态/函数说明/系统函数/动态库调用/动态库调用.html"),
    xths6: new Node("请求式计算","计算APP组态/函数说明/系统函数/请求式计算/请求式计算.html"),
    jsredis1: new Node("Redis操作","计算APP组态/函数说明/redis访问函数/Redis操作/Redis操作.html"),
    jsredis2: new Node("确认Key是否存在","计算APP组态/函数说明/redis访问函数/确认Key是否存在/确认Key是否存在.html"),
    //运维中心_节点管理
    jdgl1: new Node("功能介绍"),
    jdgl2: new Node("添加操作步骤"),
    jdgl3: new Node("编辑操作步骤"),
    jdgl4: new Node("删除操作步骤"),
    //运维中心_APP管理
    appgl1: new Node("功能介绍"),
    appgl2: new Node(""+kfName+"的添加操作步骤"),
    appgl3: new Node(""+kfName+"编辑端口号操作等"),
    appgl4: new Node(""+kfName+"编辑操作步骤"),
    appgl5: new Node(""+kfName+"部署"),
    appgl6: new Node(""+kfName+"撤销部署"),
    appgl7: new Node(""+kfName+"启动"),
    appgl8: new Node(""+kfName+"重启"),
    appgl9: new Node(""+kfName+"停止"),
    appgl10: new Node("移动"+kfName+""),
    appgl11: new Node(""+kfName+"删除"),
    appgl12: new Node("批量启动"+kfName+""),
    appgl13: new Node("批量停止"+kfName+""),
    appgl14: new Node("批量重启"+kfName+""),
    appgl15: new Node("批量部署"+kfName+""),
    appgl16: new Node("批量撤销部署"+kfName+""),
    appgl17: new Node(""+kfName+"日志"),



  
};
/////////////////////////////////////////////////////kp
level3.n2.addChild(level4.mcjs1, level4.mcjs2, level4.mcjs12, level4.mcjs3, level4.mcjs4, level4.mcjs5, level4.mcjs6, level4.mcjs7, level4.mcjs10, level4.mcjs11, level4.mcjs8, level4.mcjs9 );
level3.n3.addChild(level4.tx1, level4.tx2, level4.tx3, level4.tx4, level4.tx5, level4.tx6, level4.tx7, level4.tx8, level4.tx9, level4.tx10 );
level3.n3_12.addChild(level4.a1, level4.a2, level4.a3); /**开发IDE-工具栏 */
level3.n3_13.addChild(level4.cz1, level4.cz2); /**开发IDE-工程组管理 */
level3.n3_14.addChild(level4.cz3, level4.cz4); /**开发IDE-工程管理 */
level3.n3_16.addChild(level4.cz5, level4.cz6); /**开发IDE-权限设置（开发态权限） */
level3.n6.addChild(level4.b1, level4.b2, level4.b3); /**工程配置-页面管理 */
level3.n7.addChild(level4.c1, level4.c2, level4.c3); /**工程配置-变量管理 */
level3.n8.addChild(level4.aq1, level4.aq2); /**工程配置-安全对象（运行态权限） */
level3.n9.addChild(level4.e1, level4.e2, level4.e3); /**工程配置-图形模型库 */
level3.n10.addChild(level4.f1, level4.f2); /**工程配置-工程管理 */
level3.n11.addChild(level4.g1, level4.g2); /**工程配置-数据源管理 */
level3.n10_1.addChild(level4.ml1, level4.ml2, level4.ml3); /**工程配置-命令语言 */
level3.n13.addChild(level4.h1, level4.h2, level4.h3); /**页面编辑器-菜单栏 */
level3.n15.addChild(level4.i1, level4.i2, level4.i3, level4.i4); /**页面编辑器-工具箱 */
level3.n16.addChild(level4.j1, level4.j2, level4.j3, level4.j4, level4.j5); /**页面编辑器-配置窗 */
level3.n18.addChild(level4.k1, level4.k2, level4.k3); /**2D工艺流程图编辑器-菜单栏 */
level3.n20.addChild(level4.l1, level4.l2, level4.l3); /**2D工艺流程图编辑器-工具箱 */
level3.n21.addChild(level4.m1, level4.m2, level4.m3, level4.m4, level4.m5); /**2D工艺流程图编辑器-配置窗 */
level3.n64.addChild(level4.n1, level4.n2, level4.n3, level4.n4, level4.n5, level4.n6, level4.n7, level4.n8, level4.n9); /**2D工艺流程图编辑器-动画连接 */
level3.D2.addChild(level4.tp1, level4.tp2, level4.tp3, level4.tp4, level4.tp5); /**3D工艺流程图编辑器-配置窗 */
level3.D3.addChild(level4.pt1, level4.pt2, level4.pt3, level4.pt4, level4.pt5, level4.pt6, level4.pt7, level4.pt8); /**3D工艺流程图编辑器-动画连接 */
level3.n23.addChild(level4.o1, level4.o2, level4.o3); /**基本图形模型编辑器-菜单栏 */
level3.n25.addChild(level4.p1, level4.p2); /**基本图形模型编辑器-工具箱 */
level3.n26.addChild(level4.q1, level4.q2, level4.q3, level4.q4, level4.q5, level4.q6); /**基本图形模型编辑器-配置窗 */
level3.n28.addChild(level4.r1, level4.r2, level4.r3); /**自定义图表组件编辑器-菜单栏 */
level3.n30.addChild(level4.s1); /**自定义图表组件编辑器-菜单栏 */
level3.n31.addChild(level4.t1, level4.t2, level4.t3); /**自定义图表组件编辑器-菜单栏 */
level3.n32.addChild(level4.u1, level4.u2, level4.u3, level4.u4, level4.u5, level4.u6, level4.u7); /**函数-用户操作函数 */
level3.n33.addChild(level4.v1, level4.v2, level4.v4, level4.v3); /**函数-变量操作函数 */
level3.n34.addChild(level4.w1, level4.w2, level4.w3, level4.w4,level4.w5_1,level4.w5_2, level4.w5); /**函数-页面操作函数 */
level3.n35.addChild(level4.x1, level4.x2, level4.x3, level4.x4, level4.x5, level4.x5_1); /**函数-文件操作函数 */
level3.n36.addChild(level4.y1, level4.y2, level4.y3); /**函数-数据库操作函数 */
level3.n37.addChild(level4.z15, level4.z17, level4.z18, level4.z19, level4.z16, level4.z1, level4.z2, level4.z3, level4.z4, level4.z5, level4.z6, level4.z7, level4.z8, level4.z9, level4.z10, level4.z11, level4.z12, level4.z13, level4.z14); /**函数-其他函数  */
level3.n66.addChild(level4.dt1, level4.dt2, level4.dt3, level4.dt4, level4.dt5, level4.dt6, level4.dt7, level4.dt8, level4.dt9, level4.dt10, level4.dt11); /**函数-动态创建函数 */
level3.n38.addChild(level4.aa2, level4.aa3, level4.aa4, level4.aa5); /**函数-JavaScript常用函数 */
level3.n39.addChild(level4.bb1, level4.bb2, level4.bb3, level4.bb4); /**脚本-脚本编辑器 */
level3.n40.addChild(level4.cc1, level4.cc2, level4.cc3, level4.cc4); /**脚本-脚本环境 */
// level3.n46.addChild(level4.dd1, level4.dd2); /**手机APP-介绍 */
level3.n48.addChild(level4.ee1, level4.ee2, level4.ee3, level4.ee4, level4.ee5); /**手机APP-APP工程开发 */
level3.n49.addChild(level4.ff1, level4.ff2); /**手机APP-APP打包 */
//level3.n52.addChild(level4.hh1, level4.hh2); /**后台-工程目录 */
/////////////////////////////////////////////////////kp
//教程
level3.gjc1.addChild(level4.cpaz1,level4.cpaz2,level4.cpaz3);
level3.gjc2.addChild(level4.kfhyw1,level4.kfhyw2,level4.kfhyw3);
// level3.gjc4.addChild(level4.cjdjm1,level4.cjdjm2);
level3.gjc5.addChild(level4.cjdjs1,level4.cjdjs2,level4.cjdjs3,level4.cjdjs4);
level3.gjc6.addChild(level4.iodkf1,level4.iodkf2,level4.iodkf3,level4.iodkf4);
level3.gjc7.addChild(level4.kvdkf1,level4.kvdkf2,level4.kvdkf3,level4.kvdkf4);
level3.gjc8.addChild(level4.ksdkf1,level4.ksdkf2,level4.ksdkf3,level4.ksdkf4);
//
level3.kfn1.addChild(level4.kfmcjs2,level4.kfmcjs3);//平台指引/产品概述
level3.kfn2.addChild(level4.kfmcjs4);
level3.yhpz1.addChild(level4.cjgly1,level4.cjgly2);
level3.yhpz2.addChild(level4.gly1);
// level3.yhpz3.addChild(level4.ptyh1,level4.ptyh2,level4.ptyh3,level4.ptyh4);
level3.yhpz3.addChild(level4.dxyy1);
//采集APP组态
level3.cjzt1.addChild(level4.cjgcgl1,level4.cjgcgl2,level4.cjgcgl3,level4.cjgcgl4,level4.cjgcgl5,level4.cjgcgl6,level4.cjgcgl7,level4.cjgcgl8);
//计算app产品教程
// level3.cpjc2.addChild(level4.dlkf1,level4.dlkf2);
// level3.cpjc3.addChild(level4.jckf1,level4.jckf2);
// level3.cpjc4.addChild(level4.gczgl1,level4.gczgl2,level4.gczgl3,level4.gczgl4,level4.gczgl5,level4.gczgl6);
// level3.cpjc5.addChild(level4.gcgl1,level4.gcgl2,level4.gcgl3,level4.gcgl4,level4.gcgl5,level4.gcgl6);
// level3.cpjc6.addChild(level4.sjcd1,level4.sjcd2);
// level3.cpjc7.addChild(level4.sjy1);
// level3.cpjc8.addChild(level4.jbgl1,level4.jbgl2,level4.jbgl3,level4.jbgl4,level4.jbgl5,level4.jbgl6);
// level3.cpjc9.addChild(level4.jbyl1,level4.jbyl2);
// level3.cpjc10.addChild(level4.jssl1,level4.jssl2);
// level3.cpjc11.addChild(level4.rjkf1,level4.rjkf2,level4.rjkf3,level4.rjkf4,level4.rjkf5,level4.rjkf6);
//计算app函数说明
level3.hssm1.addChild(level4.ksfw1,level4.ksfw2,level4.ksfw3);
level3.hssm2.addChild(level4.khfw1,level4.khfw2,level4.khfw3);
level3.hssm3.addChild(level4.kiofw1,level4.kiofw2,level4.kiofw3);
level3.hssm4.addChild(level4.gxkfw1,level4.gxkfw2);
level3.hssm5.addChild(level4.xths1,level4.xths2,level4.xths3,level4.xths4,level4.xths5,level4.xths6);
level3.hssm6.addChild(level4.jsredis1,level4.jsredis2);



/**************** 第五级菜单 ****************/
const level5 = {
/////////////////////////////////////////////////////////////////kp
/**工程配置-命令语言-全局脚本 */
    lm1: new Node("系统脚本", "客户端APP组态/功能模块/工程配置/命令语言/全局脚本/系统脚本/系统脚本.html"),
    lm2: new Node("定时器脚本", "客户端APP组态/功能模块/工程配置/命令语言/全局脚本/定时器脚本/定时器脚本.html"),
    lm3: new Node("数据改变脚本", "客户端APP组态/功能模块/工程配置/命令语言/全局脚本/数据改变脚本/数据改变脚本.html"),
    lm4: new Node("事件脚本", "客户端APP组态/功能模块/工程配置/命令语言/全局脚本/事件脚本/事件脚本.html"),
    lm5: new Node("热键脚本", "客户端APP组态/功能模块/工程配置/命令语言/全局脚本/热键脚本/热键脚本.html"),
    lm6: new Node("自定义脚本", "客户端APP组态/功能模块/工程配置/命令语言/全局脚本/自定义脚本/自定义脚本.html"),
    /**页面编辑器--工具箱-布局容器 */
    c1: new Node("水平布局"),
    c2: new Node("垂直布局"),
    c3: new Node("手风琴"),
    c4: new Node("选项卡"),
    c5: new Node("停靠布局"),
    c6: new Node("表单布局"),
    c7: new Node("横向垫片"),
    c8: new Node("纵向垫片"),
    // c9: new Node("综合示例展示"),
    /**页面编辑器--工具箱-流程图 */
    d1: new Node("2D工艺流程图"),
    /**页面编辑器--工具箱-UI组件 */
    e1: new Node("微调器"),
    e2: new Node("链接按钮"),
    e3: new Node("组合框"),
    e4: new Node("日历"),
    e5: new Node("数字微调器"),
    e6: new Node("数字框"),
    e7: new Node("时间微调器"),
    e8: new Node("滑块"),
    e9: new Node("数据网格"),
    e10: new Node("属性网格"),
    e11: new Node("文本框"),
    e12: new Node("搜索框"),
    e13: new Node("日期"),
    e14: new Node("日期时间"),
    e15: new Node("菜单按钮"),
    e16: new Node("进度条"),
    e17: new Node("树"),
    e18: new Node("树形网络"),
    e19: new Node("文件框"),
    e20: new Node("分页"),
    e21: new Node("网页容器"),
    e22: new Node("提示框"),
    e23: new Node("Windows窗"),
    e24: new Node("对话框"),
    e25: new Node("标签条"),
    e26: new Node("富文本框"),
    e27: new Node("单选框"),
    e28: new Node("复选框"),
    e29: new Node("组合树"),
    e30: new Node("开关按钮"),
    e31: new Node("侧栏菜单"),
    e32: new Node("标签框"),
    e33: new Node("验证框"),
    /**页面编辑器--工具箱-图表组件 */
    f1: new Node("报警窗"),
    f2: new Node("事件窗"),
    f3: new Node("趋势曲线"),
    f4: new Node("柱状图"),
    f5: new Node("饼图"),
    f6: new Node("XY曲线"),
    f7: new Node("自定义图标组件"),
    /**页面编辑器--配置窗-连接 */
    g1: new Node("基本", "客户端APP组态/功能模块/页面编辑器/配置窗/连接/基本/基本.html"),
    g2: new Node("变量改变", "客户端APP组态/功能模块/页面编辑器/配置窗/连接/变量改变/变量改变.html"),
    g3: new Node("定时器", "客户端APP组态/功能模块/页面编辑器/配置窗/连接/定时器/定时器.html"),
    /**2D工艺流程图编辑器-工具箱-基本图素 */
    h1: new Node("直线"),
    h2: new Node("折线"),
    h3: new Node("矩形"),
    h4: new Node("圆角矩形"),
    h5: new Node("多边形"),
    h6: new Node("椭圆"),
    h7: new Node("弧线"),
    h8: new Node("扇形"),
    h9: new Node("弓形"),
    h10: new Node("文本"),
    h11: new Node("图片"),
    h12: new Node("立体管道"),
    h13: new Node("曲线"),
    h14: new Node("封闭曲线"),
    h15: new Node("贝塞尔曲线"),
    h16: new Node("封闭贝塞尔曲线"),
    /**2D工艺流程图编辑器-工具箱-组合图素 */
    i1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/组合图素/介绍/介绍.html"),
    i2: new Node("应用"),
    i3: new Node("创建", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/组合图素/创建/创建.html"),
    /**2D工艺流程图编辑器-工具箱-基本图形模型库 */
    j1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图形模型库/介绍/介绍.html"),
    j2: new Node("应用"),
    j3: new Node("创建", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图形模型库/创建/创建.html"),
    /**基本图形模型编辑器-工具箱-基本图素 */
    k1: new Node("简介", "客户端APP组态/功能模块/基本图形模型编辑器/工具箱/基本图素/介绍/介绍.html"),
    k2: new Node("属性配置", "客户端APP组态/功能模块/基本图形模型编辑器/工具箱/基本图素/属性配置/属性配置.html"),
    k3: new Node("动画连接", "客户端APP组态/功能模块/基本图形模型编辑器/工具箱/基本图素/动画连接/动画连接.html"),

    /**基本图形模型编辑器-工具箱-组合图素 */
    l1: new Node("简介", "客户端APP组态/功能模块/基本图形模型编辑器/工具箱/组合图素/介绍/介绍.html"),
    l2: new Node("应用"),
    l3: new Node("创建", "客户端APP组态/功能模块/基本图形模型编辑器/工具箱/组合图素/创建/创建.html"),
    /**自定义图表组件编辑器-工具箱-自定义图表组件 */
    m1: new Node("简介", "客户端APP组态/功能模块/自定义图表组件编辑器/工具箱/自定义图表组件/介绍/介绍.html"),
    m2: new Node("属性配置", "客户端APP组态/功能模块/自定义图表组件编辑器/工具箱/自定义图表组件/属性配置/属性配置.html"),
    m3: new Node("脚本方法", "客户端APP组态/功能模块/自定义图表组件编辑器/工具箱/自定义图表组件/脚本方法/脚本方法.html"),
    m4: new Node("创建添加", "客户端APP组态/功能模块/自定义图表组件编辑器/工具箱/自定义图表组件/创建添加/创建添加.html"),
    m5: new Node("具体案例", "客户端APP组态/功能模块/自定义图表组件编辑器/工具箱/自定义图表组件/具体案例/具体案例.html"),

    o8: new Node("Document","客户端APP组态/函数/JavaScript常用函数/html对dom操作的函数/Document/Document.html"),
    o9: new Node("Element","客户端APP组态/函数/JavaScript常用函数/html对dom操作的函数/Element/Element.html"),
    o10: new Node("Attribute","客户端APP组态/函数/JavaScript常用函数/html对dom操作的函数/Attribute/Attribute.html"),
    /**函数-JavaScript常用函数-ECMAScript函数 */
    o11: new Node("字符串","客户端APP组态/函数/JavaScript常用函数/ECMAScript函数/字符串/字符串.html"),
    o12: new Node("数学","客户端APP组态/函数/JavaScript常用函数/ECMAScript函数/数学/数学.html"),
    o13: new Node("日期时间","客户端APP组态/函数/JavaScript常用函数/ECMAScript函数/日期时间/日期时间.html"),
    o14: new Node("数组","客户端APP组态/函数/JavaScript常用函数/ECMAScript函数/数组/数组.html"),
    o15: new Node("正则表达式","客户端APP组态/函数/JavaScript常用函数/ECMAScript函数/正则表达式/正则表达式.html"),
    o16: new Node("全局","客户端APP组态/函数/JavaScript常用函数/ECMAScript函数/全局/全局.html"),
    o17: new Node("JSON","客户端APP组态/函数/JavaScript常用函数/ECMAScript函数/JSON/JSON.html"),
    o18: new Node("数字","客户端APP组态/函数/JavaScript常用函数/ECMAScript函数/数字/数字.html"),
    /**手机APP-APP打包-本地打包*/
    p19: new Node('Android',"客户端APP组态/手机APP/APP打包/本地打包/Android/Android.html"),
    p20: new Node('ios',"客户端APP组态/手机APP/APP打包/本地打包/ios/ios.html"),
    /**手机APP-APP打包-云打包*/
    p21: new Node('Android',"客户端APP组态/手机APP/APP打包/云打包/Android/Android.html"),
    p22: new Node('ios',"客户端APP组态/手机APP/APP打包/云打包/ios/ios.html"),
////////////////////////////////////////////////////////////////kp








    /**平台指引-新手指引-操作流程总览 */
    a1: new Node("概况总览", "平台指引/新手指引/操作流程总览/概况总览/概况总览.html"),
    a2: new Node("登录", "平台指引/新手指引/操作流程总览/登录/登录.html"),
    a3: new Node("用户配置", "平台指引/新手指引/操作流程总览/用户/用户.html"),
    a4: new Node("开发/发布工程","平台指引/新手指引/操作流程总览/开发环境/开发环境.html"),
    a5: new Node("运维工程","平台指引/新手指引/操作流程总览/运维中心/运维中心.html"),
    a6: new Node("运行工程","平台指引/新手指引/操作流程总览/运行工程/运行工程.html"),
    /**用户配置-超级管理员-用户权限 */
    cjyhqx1:new Node("用户权限介绍", "功能模块/开发系统/工具栏/文件/工程部署/工程部署.html1"),
    cjyhqx2:new Node("用户权限功能", "功能模块/开发系统/工具栏/文件/工程部署/工程部署.html1"),
    /**用户配置-超级管理员-模块功能权限 */
    cjmkgn1:new Node("模块功能介绍", "功能模块/开发系统/工具栏/文件/工程部署/工程部署.html1"),
    cjmkgn2:new Node("模块功能", "功能模块/开发系统/工具栏/文件/工程部署/工程部署.html1"),
    /**用户配置-管理员-用户权限 */
    glyhqx1:new Node("用户权限介绍", "功能模块/开发系统/工具栏/文件/工程部署/工程部署.html1"),
    glyhqx2:new Node("用户权限功能", "功能模块/开发系统/工具栏/文件/工程部署/工程部署.html1"),
    /**用户配置-管理员-模块功能权限 */
    glmkgn1:new Node("模块功能介绍", "功能模块/开发系统/工具栏/文件/工程部署/工程部署.html1"),
    glmkgn2:new Node("模块功能", "功能模块/开发系统/工具栏/文件/工程部署/工程部署.html1"),
    /**用户配置-普通用户-用户权限 */
    ptyhqx1:new Node("用户权限介绍", "功能模块/开发系统/工具栏/文件/工程部署/工程部署.html1"),
    ptyhqx2:new Node("用户权限功能", "功能模块/开发系统/工具栏/文件/工程部署/工程部署.html1"),
    /**用户配置-普通用户-模块功能权限 */
    ptmkgn1:new Node("模块功能介绍", "功能模块/开发系统/工具栏/文件/工程部署/工程部署.html1"),
    ptmkgn2:new Node("模块功能", "功能模块/开发系统/工具栏/文件/工程部署/工程部署.html1"),
 













};
////////////////////////////////////////////////////////////////kp
level4.ml3.addChild(level5.lm1, level5.lm2, level5.lm3, level5.lm4, level5.lm5, level5.lm6); /**工程配置-命令语言-全局脚本 */
level4.i1.addChild(level5.c1, level5.c2, level5.c3, level5.c4, level5.c5, level5.c6, level5.c7, level5.c8); /**页面编辑器-工具箱-布局容器 */
level4.i2.addChild(level5.d1); /**页面编辑器-工具箱-流程图 */
level4.i3.addChild(level5.e1, level5.e2, level5.e3, level5.e4, level5.e5, level5.e6, level5.e7, level5.e8, level5.e9, level5.e10,
level5.e11, level5.e12, level5.e13, level5.e14, level5.e15, level5.e16, level5.e17, level5.e18, level5.e19, level5.e20,
level5.e21, level5.e22, level5.e23, level5.e24, level5.e25, level5.e26, level5.e27, level5.e28, level5.e29, level5.e30,
level5.e31, level5.e32, level5.e33); /**页面编辑器-工具箱-UI组件 */
level4.i4.addChild(level5.f1, level5.f2, level5.f3, level5.f4, level5.f5, level5.f6, level5.f7); /**页面编辑器-工具箱-图表组件 */
level4.j2.addChild(level5.g1, level5.g2, level5.g3); /**页面编辑器-配置窗-连接 */
level4.l1.addChild(level5.h1, level5.h2, level5.h3, level5.h4, level5.h5, level5.h6, level5.h7, level5.h8, level5.h9, level5.h10,
level5.h11, level5.h12, level5.h13, level5.h14, level5.h15, level5.h16); /**2D工艺流程图编辑器-工具箱-基本图素 */
level4.l2.addChild(level5.i1, level5.i2, level5.i3); /**2D工艺流程图编辑器-工具箱-组合图素 */
level4.l3.addChild(level5.j1, level5.j2, level5.j3); /**2D工艺流程图编辑器-工具箱-基本图形模型库 */
level4.p1.addChild(level5.k1, level5.k2, level5.k3); /**基本图形模型编辑器-工具箱-基本图素 */
level4.p2.addChild(level5.l1, level5.l2, level5.l3); /**基本图形模型编辑器-工具箱-组合图素 */
level4.s1.addChild(level5.m1, level5.m2, level5.m3, level5.m4, level5.m5); /**自定义图表组件编辑器-工具箱-自定义图表组件 */
level4.aa4.addChild(level5.o8,level5.o9,level5.o10);
level4.aa5.addChild(level5.o11,level5.o12,level5.o13,level5.o14,level5.o15,level5.o16,level5.o17,level5.o18);
level4.ff1.addChild(level5.p19, level5.p20); /**"手机APP-APP打包-本地打包*/
level4.ff2.addChild(level5.p21, level5.p22);/**"手机APP-APP打包-云打包*/
///////////////////////////////////////////////////////////////kp
level4.kfmcjs4.addChild(level5.a1, level5.a2, level5.a3,level5.a4,level5.a5,level5.a6); /*平台指引-新手指引-操作流程总览 */


/**************** 第六级菜单 ****************/
const level6 = {
/////////////////////////////////////kp
 //布局容器
    bj1: new Node("简介", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/水平布局/简介/简介.html", true),
    bj2: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/水平布局/属性配置/属性配置.html", true),
    bj3: new Node("样式配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/水平布局/样式配置/样式配置.html", true),
    bj4: new Node("简介", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/垂直布局/简介/简介.html", true),
    bj5: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/垂直布局/属性配置/属性配置.html", true),
    bj6: new Node("样式配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/垂直布局/样式配置/样式配置.html", true),

    bj7: new Node("简介", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/手风琴/简介/简介.html", true),
    bj8: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/手风琴/属性配置/属性配置.html", true),
    bj9: new Node("详细配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/手风琴/详细配置/详细配置.html", true),
    bj10: new Node("样式配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/手风琴/样式配置/样式配置.html", true),

    bj11: new Node("简介", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/选项卡/简介/简介.html", true),
    bj12: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/选项卡/属性配置/属性配置.html", true),
    bj13: new Node("详细配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/选项卡/详细配置/详细配置.html", true),
    bj14: new Node("样式配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/选项卡/样式配置/样式配置.html", true),

    bj15: new Node("简介", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/停靠布局/简介/简介.html", true),
    bj16: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/停靠布局/属性配置/属性配置.html", true),
    bj17: new Node("详细配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/停靠布局/详细配置/详细配置.html", true),
    bj18: new Node("样式配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/停靠布局/样式配置/样式配置.html", true),

    bj19: new Node("简介", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/表单布局/简介/简介.html", true),
    bj20: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/表单布局/属性配置/属性配置.html", true),
    bj21: new Node("样式配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/表单布局/样式配置/样式配置.html", true),

    bj22: new Node("简介", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/横向垫片/简介/简介.html", true),
    bj23: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/横向垫片/属性配置/属性配置.html", true),

    bj24: new Node("简介", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/纵向垫片/简介/简介.html", true),
    bj25: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/布局容器/纵向垫片/属性配置/属性配置.html", true),

    lct1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/流程图/2D工艺流程图/2D工艺流程图/2D工艺流程图.html", true),
    lct2: new Node("GIS模块", "客户端APP组态/功能模块/页面编辑器/工具箱/流程图/2D工艺流程图/工艺流程图-GIS功能/工艺流程图—GIS功能.html", true),

    //UI组件
    //微调器
    UIa1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/微调器/微调器属性配置/微调器属性配置.html", true),
    UIa2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/微调器/微调器事件连接/微调器事件连接.html", true),
    UIa3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/微调器/微调器脚本属性/微调器脚本属性.html", true),
    //链接按钮
    UIb1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/链接按钮/链接按钮属性配置/链接按钮属性配置.html", true),
    UIb2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/链接按钮/链接按钮事件连接/链接按钮事件连接.html", true),
    UIb3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/链接按钮/链接按钮脚本属性/链接按钮脚本属性.html", true),
    //组合框
    UIc1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/组合框/组合框属性配置/组合框属性配置.html", true),
    UIc2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/组合框/组合框事件连接/组合框事件连接.html", true),
    UIc3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/组合框/组合框脚本属性/组合框脚本属性.html", true),
    UIc4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/组合框/组合框脚本方法/组合框脚本方法.html", true),
    //日历
    UId1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/日历/日历属性配置/日历属性配置.html", true),
    UId2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/日历/日历事件连接/日历事件连接.html", true),
    UId3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/日历/日历脚本属性/日历脚本属性.html", true),
    UId4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/日历/日历脚本方法/日历脚本方法.html", true),
    //数字微调器
    UIe1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/数字微调器/数字微调器属性配置/数字微调器属性配置.html", true),
    UIe2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/数字微调器/数字微调器事件连接/数字微调器事件连接.html", true),
    UIe3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/数字微调器/数字微调器脚本属性/数字微调器脚本属性.html", true),

    UIf1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/数字框/数字框属性配置/数字框属性配置.html", true),
    UIf2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/数字框/数字框事件连接/数字框事件连接.html", true),
    UIf3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/数字框/数字框脚本属性/数字框脚本属性.html", true),
    UIf4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/数字框/数字框脚本方法/数字框脚本方法.html", true),

    UIg1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/时间微调器/时间微调器属性配置/时间微调器属性配置.html", true),
    UIg2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/时间微调器/时间微调器事件连接/时间微调器事件连接.html", true),
    UIg3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/时间微调器/时间微调器脚本属性/时间微调器脚本属性.html", true),
    UIg4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/时间微调器/时间微调器脚本方法/时间微调器脚本方法.html", true),

    UIh1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/滑块/滑块属性配置/滑块属性配置.html", true),
    UIh2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/滑块/滑块事件连接/滑块事件连接.html", true),
    UIh3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/滑块/滑块脚本属性/滑块脚本属性.html", true),
    UIh4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/滑块/滑块脚本方法/滑块脚本方法.html", true),

    UIi1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/数据网格/数据网格属性配置/数据网格属性配置.html", true),
    UIi2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/数据网格/数据网格事件连接/数据网格事件连接.html", true),
    UIi3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/数据网格/数据网格脚本属性/数据网格脚本属性.html", true),
    UIi4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/数据网格/数据网格脚本方法/数据网格脚本方法.html", true),

    UIj1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/属性网格/属性网格属性配置/属性网格属性配置.html", true),
    UIj2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/属性网格/属性网格事件连接/属性网格事件连接.html", true),
    UIj3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/属性网格/属性网格脚本属性/属性网格脚本属性.html", true),
    UIj4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/属性网格/属性网格脚本方法/属性网格脚本方法.html", true),

    UIk1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/文本框/文本框属性配置/文本框属性配置.html", true),
    UIk2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/文本框/文本框事件连接/文本框事件连接.html", true),
    UIk3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/文本框/文本框脚本属性/文本框脚本属性.html", true),
    UIk4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/文本框/文本框脚本方法/文本框脚本方法.html", true),

    UIl1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/搜索框/搜索框属性配置/搜索框属性配置.html", true),
    UIl2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/搜索框/搜索框事件连接/搜索框事件连接.html", true),
    UIl3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/搜索框/搜索框脚本属性/搜索框脚本属性.html", true),
    UIl4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/搜索框/搜索框脚本方法/搜索框脚本方法.html", true),

    UIm1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/日期/日期属性配置/日期属性配置.html", true),
    UIm2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/日期/日期事件连接/日期事件连接.html", true),
    UIm3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/日期/日期脚本属性/日期脚本属性.html", true),
    UIm4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/日期/日期脚本方法/日期脚本方法.html", true),

    UIn1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/日期时间/日期时间属性配置/日期时间属性配置.html", true),
    UIn2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/日期时间/日期时间事件连接/日期时间事件连接.html", true),
    UIn3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/日期时间/日期时间脚本属性/日期时间脚本属性.html", true),
    UIn4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/日期时间/日期时间脚本方法/日期时间脚本方法.html", true),

    UIo1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/菜单按钮/菜单按钮属性配置/菜单按钮属性配置.html", true),
    UIo2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/菜单按钮/菜单按钮事件连接/菜单按钮事件连接.html", true),
    UIo3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/菜单按钮/菜单按钮脚本属性/菜单按钮脚本属性.html", true),
    UIo4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/菜单按钮/菜单按钮脚本方法/菜单按钮脚本方法.html", true),

    UIp1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/进度条/进度条属性配置/进度条属性配置.html", true),
    UIp2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/进度条/进度条事件连接/进度条事件连接.html", true),
    UIp3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/进度条/进度条脚本属性/进度条脚本属性.html", true),
    UIp4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/进度条/进度条脚本方法/进度条脚本方法.html", true),

    UIq1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/树/树属性配置/树属性配置.html", true),
    UIq2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/树/树事件连接/树事件连接.html", true),
    UIq3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/树/树脚本属性/树脚本属性.html", true),
    UIq4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/树/树脚本方法/树脚本方法.html", true),

    UIr1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/树形网格/树形网格属性配置/树形网格属性配置.html", true),
    UIr2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/树形网格/树形网格事件连接/树形网格事件连接.html", true),
    UIr3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/树形网格/树形网络脚本属性/树形网格脚本属性.html", true),
    UIr4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/树形网格/树形网络脚本方法/树形网格脚本方法.html", true),

    UIs1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/文件框/文件框属性配置/文件框属性配置.html", true),
    UIs2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/文件框/文件框事件连接/文件框事件连接.html", true),
    UIs3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/文件框/文件框脚本属性/文件框脚本属性.html", true),
    UIs4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/文件框/文件框脚本方法/文件框脚本方法.html", true),

    UIt1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/分页/分页属性配置/分页属性配置.html", true),
    UIt2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/分页/分页事件连接/分页事件连接.html", true),
    UIt3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/分页/分页脚本属性/分页脚本属性.html", true),
    UIt4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/分页/分页脚本方法/分页脚本方法.html", true),

    UIu1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/网页容器/网页容器属性配置/网页容器属性配置.html", true),
    UIu2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/网页容器/网页容器事件连接/网页容器事件连接.html", true),
    UIu3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/网页容器/网页容器脚本属性/网页容器脚本属性.html", true),
    UIu4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/网页容器/网页容器脚本方法/网页容器脚本方法.html", true),

    UIv1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/提示框/提示框属性配置/提示框属性配置.html", true),
    UIv2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/提示框/提示框事件连接/提示框事件连接.html", true),
    UIv3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/提示框/提示框脚本属性/提示框脚本属性.html", true),
    UIv4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/提示框/提示框脚本方法/提示框脚本方法.html", true),

    UIw1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/Windows窗/Windows窗属性配置/Windows窗属性配置.html", true),
    UIw2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/Windows窗/Windows窗事件连接/Windows窗事件连接.html", true),
    UIw3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/Windows窗/Windows窗脚本属性/Windows窗脚本属性.html", true),
    UIw4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/Windows窗/Windows窗脚本方法/Windows窗脚本方法.html", true),

    UIx1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/对话框/对话框属性配置/对话框属性配置.html", true),
    UIx2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/对话框/对话框事件连接/对话框事件连接.html", true),
    UIx3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/对话框/对话框脚本属性/对话框脚本属性.html", true),
    UIx4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/对话框/对话框脚本方法/对话框脚本方法.html", true),

    UIy1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/标签条/标签条属性配置/标签条属性配置.html", true),
    UIy2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/标签条/标签条事件连接/标签条事件连接.html", true),
    UIy3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/标签条/标签条脚本属性/标签条脚本属性.html", true),
    UIy4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/标签条/标签条脚本方法/标签条脚本方法.html", true),

    UIz1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/富文本框/富文本框属性配置/富文本框属性配置.html", true),
    UIz2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/富文本框/富文本框事件连接/富文本框事件连接.html", true),
    UIz3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/富文本框/富文本框脚本属性/富文本框脚本属性.html", true),
    UIz4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/富文本框/富文本框脚本方法/富文本框脚本方法.html", true),

    UIaa1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/单选框/单选框属性配置/单选框属性配置.html", true),
    UIaa2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/单选框/单选框事件连接/单选框事件连接.html", true),
    UIaa3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/单选框/单选框脚本属性/单选框脚本属性.html", true),
    UIaa4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/单选框/单选框脚本方法/单选框脚本方法.html", true),

    UIbb1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/复选框/复选框属性配置/复选框属性配置.html", true),
    UIbb2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/复选框/复选框事件连接/复选框事件连接.html", true),
    UIbb3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/复选框/复选框脚本属性/复选框脚本属性.html", true),
    UIbb4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/复选框/复选框脚本方法/复选框脚本方法.html", true),

    UIcc1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/组合树/属性配置/属性配置.html", true),
    UIcc2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/组合树/事件连接/事件连接.html", true),
    UIcc3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/组合树/脚本属性/脚本属性.html", true),
    UIcc4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/组合树/脚本方法/脚本方法.html", true),

    UIdd1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/开关按钮/属性配置/属性配置.html", true),
    UIdd2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/开关按钮/事件连接/事件连接.html", true),
    UIdd3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/开关按钮/脚本属性/脚本属性.html", true),
    UIdd4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/开关按钮/脚本方法/脚本方法.html", true),

    UIee1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/侧栏菜单/侧栏菜单属性配置/侧栏菜单属性配置.html", true),
    UIee2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/侧栏菜单/侧栏菜单事件连接/侧栏菜单事件连接.html", true),
    UIee3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/侧栏菜单/侧栏菜单脚本属性/侧栏菜单脚本属性.html", true),
    UIee4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/侧栏菜单/侧栏菜单脚本方法/侧栏菜单脚本方法.html", true),

    UIff1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/标签框/标签框属性配置/标签框属性配置.html", true),
    UIff2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/标签框/标签框事件连接/标签框事件连接.html", true),
    UIff3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/标签框/标签框脚本属性/标签框脚本属性.html", true),
    UIff4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/标签框/标签框脚本方法/标签框脚本方法.html", true),

    UIgg1: new Node("属性配置", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/验证框/验证框属性配置/验证框属性配置.html", true),
    // UIgg2: new Node("事件连接", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/验证框/验证框事件连接/验证框事件连接.html", true),
    UIgg3: new Node("脚本属性", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/验证框/验证框脚本属性/验证框脚本属性.html", true),
    // UIgg4: new Node("脚本方法", "客户端APP组态/功能模块/页面编辑器/工具箱/UI组件/验证框/验证框脚本方法/验证框脚本方法.html", true),

    //图表组件
    tb1: new Node("简介", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/报警窗/介绍/介绍.html", true),
    tb2: new Node("报警窗属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/报警窗/报警窗属性/报警窗属性.html", true),
    tb3: new Node("标题栏属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/报警窗/标题栏属性/标题栏属性.html", true),
    tb4: new Node("工具栏属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/报警窗/工具栏属性/工具栏属性.html", true),
    tb5: new Node("界面属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/报警窗/界面属性/界面属性.html", true),
    tb6: new Node("树形区属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/报警窗/树形区属性/树形区属性.html", true),

    tb8: new Node("事件", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/报警窗/事件/事件.html", true),
    tb9: new Node("方法", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/报警窗/方法/方法.html", true),

    tb10: new Node("简介", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/事件窗/介绍/介绍.html", true),
    tb11: new Node("事件窗属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/事件窗/事件窗属性/事件窗属性.html", true),
    tb12: new Node("标题栏属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/事件窗/标题栏属性/标题栏属性.html", true),
    tb13: new Node("工具栏属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/事件窗/工具栏属性/工具栏属性.html", true),
    tb14: new Node("界面属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/事件窗/界面属性/界面属性.html", true),
    tb15: new Node("树形区属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/事件窗/树形区属性/树形区属性.html", true),
    tb17: new Node("事件", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/事件窗/事件/事件.html", true),
    tb18: new Node("方法", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/事件窗/方法/方法.html", true),

    tb19: new Node("简介", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/趋势曲线/介绍/介绍.html", true),
    tb20: new Node("趋势曲线属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/趋势曲线/趋势曲线属性/趋势曲线属性.html", true),
    tb21: new Node("标题属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/趋势曲线/标题属性/标题属性.html", true),
    tb22: new Node("数据轴属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/趋势曲线/数据轴属性/数据轴属性.html", true),
    tb23: new Node("时间轴属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/趋势曲线/时间轴属性/时间轴属性.html", true),
    tb24: new Node("绘图区属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/趋势曲线/绘图区属性/绘图区属性.html", true),
    tb25: new Node("曲线属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/趋势曲线/曲线属性/曲线属性.html", true),
    tb26: new Node("图例属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/趋势曲线/图例属性/图例属性.html", true),
    tb27: new Node("方法", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/趋势曲线/方法/方法.html", true),

    tb28: new Node("简介", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/柱状图/介绍/介绍.html", true),
    tb29: new Node("柱状图属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/柱状图/柱状图属性/柱状图属性.html", true),
    tb30: new Node("标题属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/柱状图/标题属性/标题属性.html", true),
    tb31: new Node("数据轴属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/柱状图/数据轴属性/数据轴属性.html", true),
    tb32: new Node("系列轴属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/柱状图/系列轴属性/系列轴属性.html", true),
    tb33: new Node("绘图区属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/柱状图/绘图区属性/绘图区属性.html", true),
    tb34: new Node("系列属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/柱状图/系列属性/系列属性.html", true),
    tb35: new Node("图例属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/柱状图/图例属性/图例属性.html", true),
    tb36: new Node("方法", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/柱状图/方法/方法.html", true),

    tb37: new Node("简介", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/饼图/介绍/介绍.html", true),
    tb38: new Node("饼图属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/饼图/饼图属性/饼图属性.html", true),
    tb39: new Node("标题属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/饼图/标题属性/标题属性.html", true),
    tb40: new Node("绘图区属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/饼图/绘图区属性/绘图区属性.html", true),
    tb41: new Node("饼图区属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/饼图/饼图区属性/饼图区属性.html", true),
    tb42: new Node("图例属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/饼图/图例属性/图例属性.html", true),
    tb43: new Node("方法", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/饼图/方法/方法.html", true),

    tb44: new Node("简介", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/XY曲线/介绍/介绍.html", true),
    tb45: new Node("XY曲线属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/XY曲线/XY曲线属性/XY曲线属性.html", true),
    tb46: new Node("标题属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/XY曲线/标题属性/标题属性.html", true),
    tb47: new Node("数据轴属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/XY曲线/数据轴属性/数据轴属性.html", true),
    tb48: new Node("时间轴属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/XY曲线/时间轴属性/时间轴属性.html", true),
    tb49: new Node("绘图区属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/XY曲线/绘图区属性/绘图区属性.html", true),
    tb50: new Node("系列属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/XY曲线/系列属性/系列属性.html", true),
    tb51: new Node("图例属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/XY曲线/图例属性/图例属性.html", true),
    tb52: new Node("方法", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/XY曲线/方法/方法.html", true),

    tb53: new Node("简介", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/自定义图表组件/介绍/介绍.html", true),
    tb54: new Node("自定义图表组件属性", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/自定义图表组件/自定义图表组件属性/自定义图表组件属性.html", true),
    tb55: new Node("方法", "客户端APP组态/功能模块/页面编辑器/工具箱/图表组件/自定义图表组件/方法/方法.html", true),

    //基本图素

    tsa1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/直线/介绍/介绍.html", true),
    tsa2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/直线/属性配置/属性配置.html", true),
    tsa3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/直线/动画连接/动画连接.html", true),

    tsb1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/折线/介绍/介绍.html", true),
    tsb2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/折线/属性配置/属性配置.html", true),
    tsb3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/折线/动画连接/动画连接.html", true),

    tsc1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/矩形/介绍/介绍.html", true),
    tsc2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/矩形/属性配置/属性配置.html", true),
    tsc3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/矩形/动画连接/动画连接.html", true),

    tsd1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/圆角矩形/介绍/介绍.html", true),
    tsd2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/圆角矩形/属性配置/属性配置.html", true),
    tsd3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/圆角矩形/动画连接/动画连接.html", true),

    tse1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/多边形/介绍/介绍.html", true),
    tse2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/多边形/属性配置/属性配置.html", true),
    tse3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/多边形/动画连接/动画连接.html", true),

    tsf1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/椭圆/介绍/介绍.html", true),
    tsf2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/椭圆/属性配置/属性配置.html", true),
    tsf3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/椭圆/动画连接/动画连接.html", true),

    tsg1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/弧线/介绍/介绍.html", true),
    tsg2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/弧线/属性配置/属性配置.html", true),
    tsg3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/弧线/动画连接/动画连接.html", true),

    tsh1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/扇形/介绍/介绍.html", true),
    tsh2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/扇形/属性配置/属性配置.html", true),
    tsh3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/扇形/动画连接/动画连接.html", true),

    tsi1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/弓形/介绍/介绍.html", true),
    tsi2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/弓形/属性配置/属性配置.html", true),
    tsi3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/弓形/动画连接/动画连接.html", true),

    tsj1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/文本/介绍/介绍.html", true),
    tsj2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/文本/属性配置/属性配置.html", true),
    tsj3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/文本/动画连接/动画连接.html", true),

    tsk1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/图片/介绍/介绍.html", true),
    tsk2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/图片/属性配置/属性配置.html", true),
    tsk3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/图片/动画连接/动画连接.html", true),

    tsl1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/立体管道/介绍/介绍.html", true),
    tsl2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/立体管道/属性配置/属性配置.html", true),
    tsl3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/立体管道/动画连接/动画连接.html", true),

    tsm1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/曲线/介绍/介绍.html", true),
    tsm2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/曲线/属性配置/属性配置.html", true),
    tsm3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/曲线/动画连接/动画连接.html", true),

    tsn1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/封闭曲线/介绍/介绍.html", true),
    tsn2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/封闭曲线/属性配置/属性配置.html", true),
    tsn3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/封闭曲线/动画连接/动画连接.html", true),

    tso1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/贝塞尔曲线/介绍/介绍.html", true),
    tso2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/贝塞尔曲线/属性配置/属性配置.html", true),
    tso3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/贝塞尔曲线/动画连接/动画连接.html", true),

    tsp1: new Node("简介", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/封闭贝塞尔曲线/介绍/介绍.html", true),
    tsp2: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/封闭贝塞尔曲线/属性配置/属性配置.html", true),
    tsp3: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图素/封闭贝塞尔曲线/动画连接/动画连接.html", true),

    //组合图素

    zhts1: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/组合图素/应用/属性配置/属性配置.html", true),
    zhts2: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/组合图素/应用/动画连接/动画连接.html", true),

    zhts3: new Node("属性配置", "客户端APP组态/功能模块/基本图形模型编辑器/工具箱/组合图素/应用/属性配置/属性配置.html", true),
    zhts4: new Node("动画连接", "客户端APP组态/功能模块/基本图形模型编辑器/工具箱/组合图素/应用/动画连接/动画连接.html", true),

    //基本图形模型
    jbts1: new Node("属性配置", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图形模型库/应用/属性配置/属性配置.html", true),
    jbts2: new Node("动画连接", "客户端APP组态/功能模块/2D工艺流程图编辑器/工具箱/基本图形模型库/应用/动画连接/动画连接.html", true),

//////////////////////////////////kp






   
        
};
/////////////////////////////////////////kp
//布局容器
level5.c1.addChild(level6.bj1, level6.bj2, level6.bj3);
level5.c2.addChild(level6.bj4, level6.bj5, level6.bj6);
level5.c3.addChild(level6.bj7, level6.bj8, level6.bj9, level6.bj10);
level5.c4.addChild(level6.bj11, level6.bj12, level6.bj13, level6.bj14);
level5.c5.addChild(level6.bj15, level6.bj16, level6.bj17, level6.bj18);
level5.c6.addChild(level6.bj19, level6.bj20, level6.bj21);
level5.c7.addChild(level6.bj22, level6.bj23);
level5.c8.addChild(level6.bj24, level6.bj25);
//流程图
level5.d1.addChild(level6.lct1,level6.lct2);
//UI组件
level5.e1.addChild(level6.UIa1, level6.UIa2, level6.UIa3);
level5.e2.addChild(level6.UIb1, level6.UIb2, level6.UIb3);
level5.e3.addChild(level6.UIc1, level6.UIc2, level6.UIc3, level6.UIc4);
level5.e4.addChild(level6.UId1, level6.UId2, level6.UId3, level6.UId4);
level5.e5.addChild(level6.UIe1, level6.UIe2, level6.UIe3);
level5.e6.addChild(level6.UIf1, level6.UIf2, level6.UIf3);
level5.e7.addChild(level6.UIg1, level6.UIg2, level6.UIg3, level6.UIg4);
level5.e8.addChild(level6.UIh1, level6.UIh2, level6.UIh3);
level5.e9.addChild(level6.UIi1, level6.UIi2, level6.UIi3, level6.UIi4);
level5.e10.addChild(level6.UIj1, level6.UIj2, level6.UIj3, level6.UIj4);
level5.e11.addChild(level6.UIk1, level6.UIk2, level6.UIk3);
level5.e12.addChild(level6.UIl1, level6.UIl2, level6.UIl3, level6.UIl4);
level5.e13.addChild(level6.UIm1, level6.UIm2, level6.UIm3);
level5.e14.addChild(level6.UIn1, level6.UIn2, level6.UIn3);
level5.e15.addChild(level6.UIo1, level6.UIo2, level6.UIo3); //菜单按钮
level5.e16.addChild(level6.UIp1, level6.UIp2, level6.UIp3);
level5.e17.addChild(level6.UIq1, level6.UIq2, level6.UIq3, level6.UIq4);
level5.e18.addChild(level6.UIr1, level6.UIr2, level6.UIr3, level6.UIr4);
level5.e19.addChild(level6.UIs1, level6.UIs2, level6.UIs3, level6.UIs4);
level5.e20.addChild(level6.UIt1, level6.UIt2, level6.UIt3);
level5.e21.addChild(level6.UIu1, level6.UIu3); //网页容器
level5.e22.addChild(level6.UIv1, level6.UIv2, level6.UIv3);
level5.e23.addChild(level6.UIw1, level6.UIw2, level6.UIw3, level6.UIw4);
level5.e24.addChild(level6.UIx1, level6.UIx2, level6.UIx3, level6.UIx4);
level5.e25.addChild(level6.UIy1, level6.UIy2, level6.UIy3);
level5.e26.addChild(level6.UIz1, level6.UIz3, level6.UIz4); //富文本框
level5.e27.addChild(level6.UIaa1, level6.UIaa2, level6.UIaa3, level6.UIaa4);
level5.e28.addChild(level6.UIbb1, level6.UIbb2, level6.UIbb3, level6.UIbb4);
level5.e29.addChild(level6.UIcc1, level6.UIcc2, level6.UIcc3);
level5.e30.addChild(level6.UIdd1, level6.UIdd2, level6.UIdd3);
level5.e31.addChild(level6.UIee1, level6.UIee2, level6.UIee3);
level5.e32.addChild(level6.UIff1, level6.UIff2, level6.UIff3);
level5.e33.addChild(level6.UIgg1,  level6.UIgg3);

//图表组件
level5.f1.addChild(level6.tb1, level6.tb2, level6.tb3, level6.tb4, level6.tb5, level6.tb6, level6.tb8, level6.tb9);
level5.f2.addChild(level6.tb10, level6.tb11, level6.tb12, level6.tb13, level6.tb14, level6.tb15, level6.tb17, level6.tb18);
level5.f3.addChild(level6.tb19, level6.tb20, level6.tb21, level6.tb22, level6.tb23, level6.tb24, level6.tb25, level6.tb26, level6.tb27);
level5.f4.addChild(level6.tb28, level6.tb29, level6.tb30, level6.tb31, level6.tb32, level6.tb33, level6.tb34, level6.tb35, level6.tb36);
level5.f5.addChild(level6.tb37, level6.tb38, level6.tb39, level6.tb40, level6.tb41, level6.tb42, level6.tb43);
level5.f6.addChild(level6.tb44, level6.tb45, level6.tb46, level6.tb47, level6.tb48, level6.tb49, level6.tb50, level6.tb51, level6.tb52);
level5.f7.addChild(level6.tb53, level6.tb54, level6.tb55);

//基本图素
level5.h1.addChild(level6.tsa1, level6.tsa2, level6.tsa3);
level5.h2.addChild(level6.tsb1, level6.tsb2, level6.tsb3);
level5.h3.addChild(level6.tsc1, level6.tsc2, level6.tsc3);
level5.h4.addChild(level6.tsd1, level6.tsd2, level6.tsd3);
level5.h5.addChild(level6.tse1, level6.tse2, level6.tse3);
level5.h6.addChild(level6.tsf1, level6.tsf2, level6.tsf3);
level5.h7.addChild(level6.tsg1, level6.tsg2, level6.tsg3);
level5.h8.addChild(level6.tsh1, level6.tsh2, level6.tsh3);
level5.h9.addChild(level6.tsi1, level6.tsi2, level6.tsi3);
level5.h10.addChild(level6.tsj1, level6.tsj2, level6.tsj3);
level5.h11.addChild(level6.tsk1, level6.tsk2, level6.tsk3);
level5.h12.addChild(level6.tsl1, level6.tsl2, level6.tsl3);
level5.h13.addChild(level6.tsm1, level6.tsm2, level6.tsm3);
level5.h14.addChild(level6.tsn1, level6.tsn2, level6.tsn3);
level5.h15.addChild(level6.tso1, level6.tso2, level6.tso3);
level5.h16.addChild(level6.tsp1, level6.tsp2, level6.tsp3);

//组合图素
level5.i2.addChild(level6.zhts1, level6.zhts2);
level5.l2.addChild(level6.zhts3, level6.zhts4);

//基本图形模型j
level5.j2.addChild(level6.jbts1, level6.jbts2);
/////////////////////////////////////////kp
// *************** 第七级菜单 ***************
// const level7 = {

  
// };
