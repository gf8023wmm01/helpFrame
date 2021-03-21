/**
 * 此文件用于配置结构数据
 * @file
 * @author ying.ye 2019-12-31
 */

// 结构数据数组
const structDatas = [];
/**************** 页眉一级菜单 ****************/
const level1 = {
    n1: new Node("平台指引"),
    n2: new Node("教程"),
    n3: new Node("功能模块"),
    n4: new Node("函数"),
    n5: new Node("脚本"),
    n6: new Node("工程转化"),
    n7: new Node("手机APP"),
    n8: new Node("后台"),
    n9: new Node("常见问题"),
    n10: new Node("关于"),
    
};
structDatas.push(level1.n1, level1.n2, level1.n3, level1.n4, level1.n5, level1.n6, level1.n7, level1.n8, level1.n9, level1.n10);
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
    n3: new Node("开发系统"),
    n4: new Node("页面编辑器", "功能模块/页面编辑器/简介/简介.html"),
    n5: new Node("2D工艺流程图编辑器"),
    n6: new Node("基本图形模型编辑器"),
    n7: new Node("自定义图表组件编辑器"),
    /** 函数 */
    n8: new Node(),
    /** 脚本 */
    n9: new Node(),
    /** 工程转化 */
    n10: new Node(),
    /** 手机APP */
    n11: new Node(),
    /** 后台 */
    n12: new Node(),
    /** 常见问题 */
    n13: new Node(),
    /** 关于 */
    n14: new Node(),
};
level1.n1.addChild(level2.n1);
level1.n2.addChild(level2.n2);
level1.n3.addChild(level2.n3, level2.n4, level2.n5, level2.n6, level2.n7);
level1.n4.addChild(level2.n8);
level1.n5.addChild(level2.n9);
level1.n6.addChild(level2.n10);
level1.n7.addChild(level2.n11);
level1.n8.addChild(level2.n12);
level1.n9.addChild(level2.n13);
level1.n10.addChild(level2.n14);

/**************** 侧栏三级菜单 ****************/
const level3 = {
    /**特性 */
    n1: new Node("简介", "特性/简介/简介.html"),
    n2: new Node("名词解释"),
    n3: new Node("特性"),
    /**开发系统 */
    n4: new Node("简介", "功能模块/开发系统/简介/简介.html"),
    n5: new Node("工具栏"),
    n6: new Node("页面管理"),
    n7: new Node("工程变量"),
    n8: new Node("权限管理"),
    n9: new Node("图形模型库"),
    n10: new Node("用户管理"),
    n11: new Node("数据源管理"),
    /**页面编辑器 */
    n12: new Node("简介", "功能模块/页面编辑器/简介/简介.html"),
    n13: new Node("菜单栏"),
    n14: new Node("工具栏", "功能模块/页面编辑器/工具栏/工具栏.html"),
    n15: new Node("工具箱"),
    n16: new Node("配置窗"),
    /**2D工艺流程图编辑器 */
    n17: new Node("简介", "功能模块/2D工艺流程图编辑器/简介/简介.html"),
    n18: new Node("菜单栏"),
    n19: new Node("工具栏", "功能模块/2D工艺流程图编辑器/工具栏/工具栏.html"),
    n20: new Node("工具箱"),
    n21: new Node("配置窗"),
    n64: new Node("动画连接"),
    /**图形模型编辑器 */
    n22: new Node("简介", "功能模块/基本图形模型编辑器/简介/简介.html"),
    n23: new Node("菜单栏"),
    n24: new Node("工具栏", "功能模块/基本图形模型编辑器/工具栏/工具栏.html"),
    n25: new Node("工具箱"),
    n26: new Node("配置窗"),
    /**自定义图表组件编辑器 */
    n27: new Node("简介", "功能模块/自定义图表组件编辑器/简介/介绍.html"),
    n28: new Node("菜单栏"),
    n29: new Node("工具栏", "功能模块/自定义图表组件编辑器/工具栏/工具栏.html"),
    n30: new Node("工具箱"),
    n31: new Node("配置窗"),
    /**函数 */
    n32_1: new Node("简介","函数/简介/简介.html"),
    n32: new Node("用户操作函数"),
    n33: new Node("变量操作函数"),
    n34: new Node("页面操作函数"),
    n35: new Node("文件操作函数"),
    n36: new Node("数据库操作函数"),
    n37: new Node("其他函数"),
    n38: new Node("JavaScript常用函数"),
    /**脚本 */
    n39_1: new Node("简介", "脚本/简介/简介.html"),
    n39: new Node("脚本编辑器"),
    n40: new Node("脚本环境"),
    n41: new Node("脚本调试", "脚本/脚本调试/脚本调试.html"),
    /**工程转化 */
    n42: new Node("简介", "工程转换/介绍/介绍.html"),
    n43: new Node("转换步骤", "工程转换/转换步骤/转换步骤.html"),
    n44: new Node("功能支持清单", "工程转换/功能支持清单/功能支持清单.html"),
    n45: new Node("注意事项", "工程转换/注意事项/注意事项.html"),
    /**手机APP */
    n46: new Node("简介","手机APP/简介/简介.html"),
    n46_1: new Node("工具或环境","手机APP/工具或环境/工具或环境.html"),
    n47: new Node("APP使用说明","手机APP/APP使用说明/APP使用说明.html"),
    n48: new Node("APP工程开发"),
    n49: new Node("APP打包"),
    n50: new Node("注意事项","手机APP/注意事项/注意事项.html"),
    /**后台 */
    n51: new Node("Http/Https协议配置", "后台/HttpHttps协议配置/快速切换http和https.html"),
    n52: new Node("工程目录简介"),
    /**常见问题 */
    n53: new Node("授权相关问题", "常见问题/授权相关问题/授权相关问题.html"),
    n54: new Node("开发服务方面的常见问题", "常见问题/开发服务方面的常见问题/开发服务方面的常见问题.html"),
    n55: new Node("运行服务方面的常见问题", "常见问题/运行服务方面的常见问题/运行服务方面的常见问题.html"),
    n56: new Node("开发画面的常见问题", "常见问题/开发画面的常见问题/开发画面的常见问题.html"),
    n57: new Node("运行画面的常见问题", "常见问题/运行画面的常见问题/运行画面的常见问题.html"),
    n58: new Node("应用KP定义的组件功能之外的问题", "常见问题/应用KP定义的组件功能之外的问题/应用KP定义的组件功能之外的问题.html"),
    n59: new Node("其他","常见问题/其他/其他.html"),
    /**关于 */
    n60: new Node("系统环境要求"),
    n61: new Node("售后服务及承诺", "关于/售后服务及承诺/售后服务及承诺.html"),
    n62: new Node("软件归属权", "关于/软件归属权/软件归属权.html"),
    n63: new Node("版本更新记录", "关于/版本更新记录/版本更新记录.html"),
    /**教程 */
    jc1: new Node("快速新建用户和配置权限", "教程/第一周/02快速新建用户和配置权限/02快速新建用户和配置权限.html"),
    jc2: new Node("快速搭建KP应用", "教程/第一周/03快速搭建KP应用/03快速搭建KP应用.html"),
    jc3: new Node("快速新建各类数据源", "教程/第一周/04快速新建各类数据源/04快速新建各类数据源.html"),
    jc4: new Node("快速将KS工程转化为KP工程", "教程/第一周/05快速将KS工程转化为KP工程/05快速将KS工程转化为KP工程.html"),
    jc5: new Node("快速读写实时数据(KS)", "教程/第一周/06快速读写实时数据(KS)/06快速读写实时数据(KS).html"),
    jc6: new Node("快速添加外部图片", "教程/第一周/07快速添加外部图片/07快速添加外部图片.html"),
    jc7: new Node("快速让小车动起来(动画连接)", "教程/第一周/08快速让小车动起来(动画连接)/08快速让小车动起来(动画连接).html"),
    jc8: new Node("快速使用图素和组合图素绘制工艺流程图", "教程/第一周/09快速使用图素和组合图素绘制工艺流程图/09快速使用图素和组合图素绘制工艺流程图.html"),
    jc9: new Node("快速展示实时和历史趋势曲线(KS)", "教程/第一周/10快速展示实时和历史趋势曲线(KS)/10快速展示实时和历史趋势曲线(KS).html"),
    jc10: new Node("快速复用图形模型", "教程/第一周/11快速复用图形模型/11快速复用图形模型.html"),
    jc11: new Node("快速复用图形模型、页面、工程", "教程/第一周/12快速复用图形模型、页面、工程/12快速复用图形模型、页面、工程.html"),
    jc12: new Node("快速切换HTTP和HTTPS", "教程/第一周/13快速切换HTTP和HTTPS/13快速切换HTTP和HTTPS.html"),
    jc13: new Node("快速自定义开发和运行服务的端口", "教程/第一周/14快速自定义开发和运行服务的端口/14快速自定义开发和运行服务的端口.html"),
    jc14: new Node("快速自定义运行态页面中元素的访问权限", "教程/第一周/15快速自定义运行态页面中元素的访问权限/15快速自定义运行态页面中元素的访问权限.html"),
    jc15: new Node("快速构建基本页面框架", "教程/第一周/16快速构建基本页面框架/16快速构建基本页面框架.html"),
    jc16: new Node("快速将图形对象进行水平排布", "教程/第一周/17快速将图形对象进行水平排布/17快速将图形对象进行水平排布.html"),
    jc17: new Node("快速自定义按钮样式（背景、图片、文本）", "教程/第一周/18快速自定义按钮样式（背景、图片、文本）/18快速自定义按钮样式（背景、图片、文本）.html"),
    jc18: new Node("树节点页面切换", "教程/第一周/19树节点页面切换/19树节点页面切换.html"),
    jc19: new Node("快速了解脚本编辑器", "教程/第二周/20快速了解脚本编辑器/20快速了解脚本编辑器.html"),
    jc20: new Node("获取标签条的文本值", "教程/第二周/21获取标签条的文本值/21获取标签条的文本值.html"),
    jc21: new Node("获取日期时间控件的值", "教程/第二周/22获取日期时间控件的值/22获取日期时间控件的值.html"),
    jc22: new Node("获取文本框的文本值", "教程/第二周/23获取文本框的文本值/23获取文本框的文本值.html"),
    jc23: new Node("获取组合框的值", "教程/第二周/24获取组合框的值/24获取组合框的值.html"),
    jc24: new Node("点击按钮为标签条赋值", "教程/第二周/25点击按钮为标签条赋值/25点击按钮为标签条赋值.html"),
    jc25: new Node("点击按钮为日期控件赋值", "教程/第二周/26点击按钮为日期控件赋值/26点击按钮为日期控件赋值.html"),
    jc26: new Node("点击按钮设置对话框的标题栏", "教程/第二周/27点击按钮设置对话框的标题栏/27点击按钮设置对话框的标题栏.html"),
    jc27: new Node("点击按钮为文本框赋值", "教程/第二周/28点击按钮为文本框赋值/28点击按钮为文本框赋值.html"),
    jc28: new Node("点击按钮1为按钮2赋值", "教程/第二周/29点击按钮1为按钮2赋值/29点击按钮1为按钮2赋值.html"),
    jc29: new Node("快速设置多行文本", "教程/第二周/30快速设置多行文本/30快速设置多行文本.html"),
    jc30: new Node("清空文本框", "教程/第二周/31清空文本框/31清空文本框.html"),
    jc31: new Node("快速灵活构建复杂的页面框架", "教程/第二周/32快速灵活构建复杂的页面框架/32快速灵活构建复杂的页面框架.html"),
    jc32: new Node("快速自定义水平布局样式", "教程/第二周/33快速自定义水平布局样式（背景、边框）/33快速自定义水平布局样式（背景、边框）.html"),
    jc33: new Node("多页面跳转和访问1", "教程/第二周/34多页面跳转和访问1——整个页面跳转/34多页面跳转和访问1——整个页面跳转.html"),
    jc34: new Node("多页面跳转和访问2", "教程/第二周/35多页面跳转和访问2——局部区域切换不同页面/35多页面跳转和访问2——局部区域切换不同页面.html"),
    jc35: new Node("多页面跳转和访问3", "教程/第二周/36多页面跳转和访问3——弹窗/36多页面跳转和访问3——弹窗.html"),
    jc36: new Node("多页面跳转和访问4", "教程/第二周/37多页面跳转和访问4——页面间数据交互/37多页面跳转和访问4——页面间数据交互.html"),
    jc37: new Node("多页面跳转和访问5", "教程/第二周/38多页面跳转和访问5——页面间图形对象的互相访问/38多页面跳转和访问5——页面间图形对象的互相访问.html"),
    jc38: new Node("点击水平按钮下拉菜单切换页面", "教程/第二周/39点击水平按钮下拉菜单切换页面/39点击水平按钮下拉菜单切换页面.html"),
    jc39: new Node("带有自定义复选框的树节点", "教程/第二周/40带有自定义复选框的树节点/40带有自定义复选框的树节点.html"),
    jc40: new Node("树节点添加图标", "教程/第二周/41树节点添加图标/41树节点添加图标.html"),
    jc41: new Node("快速制作可编辑的树", "教程/第二周/42快速制作可编辑的树/42快速制作可编辑的树.html"),
    jc42: new Node("动态更新树节点", "教程/第二周/43动态更新树节点/43动态更新树节点.html"),
    jc43: new Node("设置密码框", "教程/第三周/44设置密码框/44设置密码框.html"),
    jc44: new Node("修改KingPortal运行态登录背景", "教程/第三周/45修改KINGPORTAL运行态登录背景/45修改KINGPORTAL运行态登录背景.html"),
    jc45: new Node("自定义KP运行态登录页面1", "教程/第三周/46自定义KP运行态登录页面-基础/46自定义KP运行态登录页面-基础.html"),
    jc46: new Node("自定义KP运行态登录页面2", "教程/第三周/47自定义KP运行态登录页面-进阶/47自定义KP运行态登录页面-进阶.html"),
    jc47: new Node("手风琴的样式配置", "教程/第三周/48手风琴的样式配置/48手风琴的样式配置.html"),
    jc48: new Node("快速开发点击侧栏菜单节点切换页面", "教程/第三周/49快速开发点击侧栏菜单节点切换页面/49快速开发点击侧栏菜单节点切换页面.html"),
    jc49: new Node("快速动态更新侧栏菜单", "教程/第三周/50快速动态更新侧栏菜单/50快速动态更新侧栏菜单.html"),
    jc50: new Node("动态填充组合框", "教程/第三周/51动态填充组合框/51动态填充组合框.html"),
    jc51: new Node("快速使用数据网格展示", "教程/第三周/52快速使用数据网格展示/52快速使用数据网格展示.html"),
    jc52: new Node("快速在数据网格中追加一行数据", "教程/第三周/53快速在数据网格中追加一行数据/53快速在数据网格中追加一行数据.html"),
    jc53: new Node("点击按钮清空数据网格中数据", "教程/第三周/54点击按钮清空数据网格中数据/54点击按钮清空数据网格中数据.html"),
    jc54: new Node("自定义查询关系库,显示到数据网格", "教程/第三周/55自定义查询关系库,显示到数据网格/55自定义查询关系库,显示到数据网格.html"),
    jc55: new Node("数据网格单元格编辑", "教程/第三周/56数据网格单元格编辑/56数据网格单元格编辑.html"),
    jc56: new Node("数据网格行编辑", "教程/第三周/57数据网格行编辑/57数据网格行编辑.html"),
    jc57: new Node("数据网格导出到EXCEL", "教程/第三周/58数据网格导出到EXCEL/58数据网格导出到EXCEL.html"),
    jc58: new Node("数据网格合并单元格", "教程/第三周/59数据网格合并单元格/59数据网格合并单元格.html"),
    jc59: new Node("数据网格排序", "教程/第三周/60数据网格排序/60数据网格排序.html"),
    jc60: new Node("数据网格自定义工具条", "教程/第三周/61数据网格自定义工具条/61数据网格自定义工具条.html"),
    jc61: new Node("冻结数据网格某行", "教程/第三周/62冻结数据网格某行/62冻结数据网格某行.html"),
    jc62: new Node("用复选框选择数据网格中的某行", "教程/第三周/63用复选框选择数据网格中的某行/63用复选框选择数据网格中的某行.html"),
    jc63: new Node("复杂数据网格", "教程/第三周/64复杂数据网格(获取选中行的值)/64复杂数据网格(获取选中行的值).html"),
    jc64: new Node("数据网格打印", "教程/第三周/65数据网格打印/65数据网格打印.html"),
    jc65: new Node("复杂数据网格1", "教程/第三周/66复杂数据网格：基本样式设置/66复杂数据网格：基本样式设置.html"),
    jc66: new Node("复杂数据网格2", "教程/第三周/67复杂数据网格：单击某行样式、鼠标悬浮样式/67复杂数据网格：单击某行样式、鼠标悬浮样式.html"),
    jc67: new Node("接入KS报警信息", "教程/第四周/68接入KS报警信息(实时历史)/68接入KS报警信息(实时历史).html"),
    jc68: new Node("查询KS报警信息", "教程/第四周/69查询KS报警信息/69查询KS报警信息.html"),
    jc69: new Node("显示KS的实时事件记录", "教程/第四周/70显示KS的实时事件记录/70显示KS的实时事件记录.html"),
    jc70: new Node("自定义查询关系库,显示到趋势曲线", "教程/第四周/71自定义查询关系库,显示到趋势曲线/71自定义查询关系库,显示到趋势曲线.html"),
    jc71: new Node("饼图的常用方法1", "教程/第四周/72饼图的常用方法1：饼图控件（KS)/72饼图的常用方法1：饼图控件（KS).html"),
    jc72: new Node("柱状图的常用方法1", "教程/第四周/73柱状图的常用方法1：柱状图控件（KS)/73柱状图的常用方法1：柱状图控件（KS).html"),
    jc73: new Node("饼图的常用方法2", "教程/第四周/74饼图的常用方法2：饼图（ECHARTS)/74饼图的常用方法2：饼图（ECHARTS).html"),
    jc74: new Node("柱状图的常用方法2", "教程/第四周/75柱状图的常用方法1：自定义图表--柱状图（ECHARTS)/75柱状图的常用方法1：自定义图表--柱状图（ECHARTS).html"),
    jc75: new Node("自定义图表：折线图1", "教程/第四周/76自定义图表：折线图1--填充1条曲线、多条曲线/76自定义图表：折线图1--填充1条曲线、多条曲线.html"),
    jc76: new Node("自定义图表：折线图2", "教程/第四周/77自定义图表：折线图1——超过上限、下限显示不同的线条颜色、背景颜色/77自定义图表：折线图1——超过上限、下限显示不同的线条颜色、背景颜色.html"),
    jc77: new Node("XY曲线的基本使用方法", "教程/第四周/78XY曲线的基本使用方法/78XY曲线的基本使用方法.html"),
    jc78: new Node("趋势曲线的常用方法", "教程/第四周/79趋势曲线的常用方法/79趋势曲线的常用方法.html"),
    jc79: new Node("动态设置网页链接", "教程/第四周/80动态设置网页链接/80动态设置网页链接.html"),
    jc80: new Node("快速读写EXCEL文件", "教程/第四周/81快速读写EXCEL文件/81快速读写EXCEL文件.html"),
    jc81: new Node("查询KH历史数据", "教程/第四周/82查询KH历史数据/82查询KH历史数据.html"),
    jc82: new Node("查询KH实时数据", "教程/第四周/83查询KH实时数据/83查询KH实时数据.html"),
    jc83: new Node("快速加载GIS地图", "教程/第四周/84快速加载GIS地图/84快速加载GIS地图.html"),
    jc84: new Node("快速接入实时视频", "教程/第四周/85快速接入实时视频/85快速接入实时视频.html"),
    jc85: new Node("拖放树节点", "教程/第四周/86拖放树节点/86拖放树节点.html"),
    jc86: new Node("快速在手机APP上展示KP工程", "教程/第四周/87快速在手机APP上展示KP工程/87快速在手机APP上展示KP工程.html"),
    jc87: new Node("首页框架综合搭建", "教程/第四周/88首页框架综合搭建/88首页框架综合搭建.html"),
   

};
level2.n1.addChild(level3.n1, level3.n2, level3.n3); //特性
level2.n2.addChild(level3.jc1, level3.jc2, level3.jc3,level3.jc4, level3.jc5, level3.jc6,level3.jc7, level3.jc8, level3.jc9,level3.jc10, level3.jc11, level3.jc12,level3.jc13, level3.jc14, level3.jc15,level3.jc16, level3.jc17, level3.jc18);
level2.n2.addChild(level3.jc19, level3.jc20, level3.jc21,level3.jc22, level3.jc23, level3.jc24,level3.jc25, level3.jc26, level3.jc27,level3.jc28, level3.jc29, level3.jc30,level3.jc31, level3.jc32, level3.jc33,level3.jc34, level3.jc35, level3.jc36,level3.jc37, level3.jc38, level3.jc39,level3.jc40, level3.jc41,level3.jc42);
level2.n2.addChild(level3.jc43, level3.jc44, level3.jc45,level3.jc46, level3.jc47, level3.jc48,level3.jc49, level3.jc50, level3.jc51,level3.jc52, level3.jc53, level3.jc54,level3.jc55, level3.jc56, level3.jc57,level3.jc58, level3.jc59, level3.jc60,level3.jc61, level3.jc62, level3.jc63,level3.jc64, level3.jc65,level3.jc66);
level2.n2.addChild(level3.jc67, level3.jc68, level3.jc39,level3.jc70, level3.jc71, level3.jc72,level3.jc73, level3.jc74, level3.jc75,level3.jc76, level3.jc77, level3.jc78,level3.jc79, level3.jc80, level3.jc81,level3.jc82, level3.jc83, level3.jc84,level3.jc85, level3.jc86, level3.jc87);//教程
level2.n3.addChild(level3.n4, level3.n5, level3.n6, level3.n7, level3.n8, level3.n9, level3.n10, level3.n11); //开发系统
level2.n4.addChild(level3.n12, level3.n13, level3.n14, level3.n15, level3.n16); //页面编辑器
level2.n5.addChild(level3.n17, level3.n18, level3.n19, level3.n20, level3.n21, level3.n64); //2D工艺流程图编辑器
level2.n6.addChild(level3.n22, level3.n23, level3.n24, level3.n25, level3.n26); //基本图形模型编辑器
level2.n7.addChild(level3.n27, level3.n28, level3.n29, level3.n30, level3.n31); //自定义图表组件编辑器
level2.n8.addChild(level3.n32_1,level3.n32, level3.n33, level3.n34, level3.n35, level3.n36, level3.n37, level3.n38); //函数
level2.n9.addChild(level3.n39_1,level3.n39, level3.n40, level3.n41); //脚本
level2.n10.addChild(level3.n42, level3.n43, level3.n44, level3.n45); //工程转换
level2.n11.addChild(level3.n46,level3.n46_1, level3.n47, level3.n48, level3.n49, level3.n50); //手机APP
level2.n12.addChild(level3.n51, level3.n52); //后台
level2.n13.addChild(level3.n53, level3.n54, level3.n55, level3.n56, level3.n57, level3.n58, level3.n59); //常见问题
level2.n14.addChild(level3.n62,level3.n60, level3.n61,  level3.n63); //关于

/**************** 第四级菜单 ****************/
const level4 = {
    
    
   mcjs1: new Node("开发系统", "特性/名词解释/开发系统/开发系统.html"),
   mcjs2: new Node("页面编辑器", "特性/名词解释/页面编辑器/页面编辑器.html"),
   mcjs3: new Node("工程转化", "特性/名词解释/工程转化/工程转化.html"),
   mcjs4: new Node("数据源", "特性/名词解释/数据源/数据源.html"),
   mcjs5: new Node("权限", "特性/名词解释/权限/权限.html"),
   mcjs6: new Node("布局容器", "特性/名词解释/布局容器/布局容器.html"),
   mcjs7: new Node("2D工艺流程图 ", "特性/名词解释/2D工艺流程图/2D工艺流程图.html"),
   mcjs8: new Node("工程部署", "特性/名词解释/工程部署/工程部署.html"),
   mcjs9: new Node("开发者工具", "特性/名词解释/开发者工具/开发者工具.html"),
   tx1: new Node("自适应终端显示", "特性/特性/自适应终端显示/自适应终端显示.html"),
   tx2: new Node("2D/3D过程数据相融合", "特性/特性/2D3D过程数据相融合/2D3D过程数据相融合.html"),
   tx3: new Node("集成33种组件", "特性/特性/集成33种组件/集成33种组件.html"),
   tx4: new Node("支持Echars图表", "特性/特性/支持ECHARS图表/支持ECHARS图表.html"),
   tx5: new Node("复用KS工程", "特性/特性/复用KS工程/复用KS工程.html"),
   tx6: new Node("跨平台", "特性/特性/跨平台/跨平台.html"),
   tx7: new Node("高安全性 ", "特性/特性/高安全性/高安全性.html"),
   tx8: new Node("高集成性", "特性/特性/高集成性/高集成性.html"),
   tx9: new Node("多人同时开发", "特性/特性/多人同时开发/多人同时开发.html"),
   tx10: new Node("组态式APP开发", "特性/特性/组态式APP开发/组态式APP开发.html"),
    /**开发系统-工具栏 */
    a1: new Node("文件"),
    a2: new Node("帮助", "功能模块/开发系统/工具栏/帮助/帮助.html"),
    a3: new Node("详情/大图标", "功能模块/开发系统/工具栏/详情_大图标/详情_大图标.html"),
    a4: new Node("搜索和替换", "功能模块/开发系统/工具栏/搜索和替换/搜索和替换.html"),
    a5: new Node("二维码", "功能模块/开发系统/工具栏/二维码/二维码.html"),
    a6: new Node("主题", "功能模块/开发系统/工具栏/主题/主题.html"),
    a7: new Node("退出", "功能模块/开发系统/工具栏/退出/退出.html"),
    /**开发系统-页面管理 */
    b1: new Node("简介", "功能模块/开发系统/页面管理/简介/简介.html"),
    b2: new Node("页面管理工具栏", "功能模块/开发系统/页面管理/页面管理工具栏/页面管理工具栏.html"),
    b3: new Node("页面组", "功能模块/开发系统/页面管理/页面组/页面组.html"),
    /**开发系统-工程变量 */
    c1: new Node("简介", "功能模块/开发系统/工程变量/简介/简介.html"),
    c2: new Node("工程变量工具栏", "功能模块/开发系统/工程变量/工程变量工具栏/工程变量工具栏.html"),
    c3: new Node("变量组", "功能模块/开发系统/工程变量/变量组/变量组.html"),
    /**开发系统-权限管理 */
    d1: new Node("简介", "功能模块/开发系统/权限管理/简介/简介.html"),
    d2: new Node("权限管理工具栏", "功能模块/开发系统/权限管理/权限管理工具栏/工具栏.html"),
    /**开发系统-图形模型库 */
    e1: new Node("简介", "功能模块/开发系统/图形模型库/简介/简介.html"),
    e2: new Node("图形模型库工具栏", "功能模块/开发系统/图形模型库/图形模型库工具栏/图形模型库工具栏.html"),
    e3: new Node("图形模型库组", "功能模块/开发系统/图形模型库/图形模型库组/图形模型库组.html"),
    /**开发系统-用户管理 */
    f1: new Node("简介", "功能模块/开发系统/用户管理/简介/简介.html"),
    f2: new Node("用户管理工具栏", "功能模块/开发系统/用户管理/用户管理工具栏/工具栏.html"),
    f3: new Node("用户组", "功能模块/开发系统/用户管理/用户组/用户组.html"),
    /**开发系统-数据源管理 */
    g1: new Node("简介", "功能模块/开发系统/数据源管理/简介/简介.html"),
    g2: new Node("数据源工具栏", "功能模块/开发系统/数据源管理/数据源工具栏/工具栏.html"),
    g3: new Node("数据源"),
    /**页面编辑器-菜单栏 */
    h1: new Node("编辑", "功能模块/页面编辑器/菜单栏/编辑/编辑.html"),
    h2: new Node("绘制", "功能模块/页面编辑器/菜单栏/绘制/绘制.html"),
    h3: new Node("帮助", "功能模块/页面编辑器/菜单栏/帮助/帮助.html"),
    /**页面编辑器-工具箱 */
    i1: new Node("布局容器"),
    i2: new Node("流程图"),
    i3: new Node("UI组件"),
    i4: new Node("图表组件"),
    /**页面编辑器-配置窗 */
    j1: new Node("属性", "功能模块/页面编辑器/配置窗/属性/属性.html"),
    j2: new Node("连接"),
    j3: new Node("变量", "功能模块/页面编辑器/配置窗/变量/变量.html"),
    j4: new Node("自定义属性", "功能模块/页面编辑器/配置窗/自定义属性/自定义属性.html"),
    j5: new Node("对象", "功能模块/页面编辑器/配置窗/对象/对象.html"),
    /**2D工艺流程图编辑器-菜单栏 */
    k1: new Node("编辑", "功能模块/2D工艺流程图编辑器/菜单栏/编辑/编辑.html"),
    k2: new Node("绘制", "功能模块/2D工艺流程图编辑器/菜单栏/绘制/绘制.html"),
    k3: new Node("帮助", "功能模块/2D工艺流程图编辑器/菜单栏/帮助/帮助.html"),
    /**2D工艺流程图编辑器-工具箱 */
    l1: new Node("基本图素"),
    l2: new Node("组合图素"),
    l3: new Node("基本图形模型库"),
    /**2D工艺流程图编辑器-配置窗 */
    m1: new Node("属性", "功能模块/2D工艺流程图编辑器/配置窗/属性/属性.html"),
    m2: new Node("连接", "功能模块/2D工艺流程图编辑器/配置窗/连接/连接.html"),
    m3: new Node("变量", "功能模块/2D工艺流程图编辑器/配置窗/变量/变量.html"),
    m4: new Node("自定义属性", "功能模块/2D工艺流程图编辑器/配置窗/自定义属性/自定义属性.html"),
    m5: new Node("对象", "功能模块/2D工艺流程图编辑器/配置窗/对象/对象.html"),
    /**2D工艺流程图编辑器-动画连接 */
    n1: new Node("基本", "功能模块/2D工艺流程图编辑器/动画连接/基本/基本.html"),
    n2: new Node("属性", "功能模块/2D工艺流程图编辑器/动画连接/属性/属性.html"),
    n3: new Node("缩放", "功能模块/2D工艺流程图编辑器/动画连接/缩放/缩放.html"),
    n4: new Node("移动", "功能模块/2D工艺流程图编辑器/动画连接/移动/移动.html"),
    n5: new Node("旋转", "功能模块/2D工艺流程图编辑器/动画连接/旋转/旋转.html"),
    n6: new Node("闪烁", "功能模块/2D工艺流程图编辑器/动画连接/闪烁/闪烁.html"),
    n7: new Node("值输入", "功能模块/2D工艺流程图编辑器/动画连接/值输入/值输入.html"),
    n8: new Node("值输出", "功能模块/2D工艺流程图编辑器/动画连接/值输出/值输出.html"),
    n9: new Node("鼠标", "功能模块/2D工艺流程图编辑器/动画连接/鼠标/鼠标.html"),
    /**基本图形模型编辑器-菜单栏 */
    o1: new Node("编辑", "功能模块/基本图形模型编辑器/菜单栏/编辑/编辑.html"),
    o2: new Node("绘制", "功能模块/基本图形模型编辑器/菜单栏/绘制/绘制.html"),
    o3: new Node("帮助", "功能模块/基本图形模型编辑器/菜单栏/帮助/帮助.html"),
    /**基本图形模型编辑器-工具箱 */
    p1: new Node("基本图素"),
    p2: new Node("组合图素"),
    /**基本图形模型编辑器-配置窗 */
    q1: new Node("属性", "功能模块/基本图形模型编辑器/配置窗/属性/属性.html"),
    q2: new Node("连接", "功能模块/基本图形模型编辑器/配置窗/连接/连接.html"),
    q3: new Node("变量", "功能模块/基本图形模型编辑器/配置窗/变量/变量.html"),
    q4: new Node("自定义属性", "功能模块/基本图形模型编辑器/配置窗/自定义属性/自定义属性.html"),
    q5: new Node("公开事件", "功能模块/基本图形模型编辑器/配置窗/公开事件/公开事件.html"),
    q6: new Node("对象", "功能模块/基本图形模型编辑器/配置窗/对象/对象.html"),
    /**自定义图表组件编辑器-菜单栏 */
    r1: new Node("编辑", "功能模块/自定义图表组件编辑器/菜单栏/编辑/编辑.html"),
    r2: new Node("绘制", "功能模块/自定义图表组件编辑器/菜单栏/绘制/绘制.html"),
    r3: new Node("帮助", "功能模块/自定义图表组件编辑器/菜单栏/帮助/帮助.html"),
    /**自定义图表组件编辑器-工具箱 */
    s1: new Node("自定义图表组件"),
    /**自定义图表组件编辑器-配置窗 */
    t1: new Node("属性", "功能模块/自定义图表组件编辑器/配置窗/属性/属性.html"),
    t2: new Node("连接", "功能模块/自定义图表组件编辑器/配置窗/连接/连接.html"),
    t3: new Node("变量", "功能模块/自定义图表组件编辑器/配置窗/变量/变量.html"),
    /**函数-用户操作函数 */
    u1: new Node("LogOn","函数/用户操作函数/LogOn/LogOn.html"),
    u2: new Node("Login","函数/用户操作函数/Login/Login.html"),
    u3: new Node("LogOff","函数/用户操作函数/LogOff/LogOff.html"),
    u4: new Node("ChangePassword","函数/用户操作函数/ChangePassword/ChangePassword.html"),
    u5: new Node("GetUserInfoContent","函数/用户操作函数/GetUserInfoContent/GetUserInfoContent.html"),
    u6: new Node("GetCurrentUser","函数/用户操作函数/GetCurrentUser/GetCurrentUser.html"),
    u7: new Node("Exit","函数/用户操作函数/Exit/Exit.html"),
    /**函数-变量操作函数 */
    v1: new Node("GetTagField","函数/变量操作函数/GetTagField/GetTagField.html"),
    v2: new Node("SetTagField","函数/变量操作函数/SetTagField/SetTagField.html"),
    v3: new Node("VarRefAddress","函数/变量操作函数/VarRefAddress/VarRefAddress.html"),
    /**函数-页面操作函数 */
    w1: new Node("ShowPicture","函数/页面操作函数/ShowPicture/ShowPicture.html"),
    w2: new Node("ClosePicture","函数/页面操作函数/ClosePicture/ClosePicture.html"),
    w3: new Node("GetCursorPosX","函数/页面操作函数/GetCursorPosX/GetCursorPosX.html"),
    w4: new Node("GetCursorPosY","函数/页面操作函数/GetCursorPosY/GetCursorPosY.html"),
    w5: new Node("HidePage","函数/页面操作函数/HidePage/HidePage.html"),
    /**函数-文件操作函数 */
    x1: new Node("UploadFiles","函数/文件操作函数/UploadFiles/UploadFiles.html"),
    x2: new Node("DownloadFiles","函数/文件操作函数/DownloadFiles/DownloadFiles.html"),
    x3: new Node("DeleteFiles","函数/文件操作函数/DeleteFiles/DeleteFiles.html"),
    x4: new Node("ExportToExcel","函数/文件操作函数/ExportToExcel/ExportToExcel.html"),
    x5: new Node("ImportByExcel","函数/文件操作函数/ImportByExcel/ImportByExcel.html"),
    /**函数-数据库操作函数 */
    y1: new Node("GetHistoryDatasKH351","函数/数据库操作函数/GetHistoryDatasKH351/GetHistoryDatasKH351.html"),
    y2: new Node("GetRealDatasKH351","函数/数据库操作函数/GetRealDatasKH351/GetRealDatasKH351.html"),
    y3: new Node("ExcutesqlSelect","函数/数据库操作函数/ExcutesqlSelect/ExcutesqlSelect.html"),
    y4: new Node("ExcutesqlNoSelect","函数/数据库操作函数/ExcutesqlNoSelect/ExcutesqlNoSelect.html"),
    /**函数-其他函数 */
    z1: new Node("Trace","函数/其他函数/Trace/Trace.html"),
    z2: new Node("StrToReal","函数/其他函数/StrToReal/StrToReal.html"),
    z3: new Node("StrFromInt","函数/其他函数/StrFromInt/StrFromInt.html"),
    z4: new Node("GetSystimeWeek","函数/其他函数/GetSystimeWeek/GetSystimeWeek.html"),
    z5: new Node("StrToInt","函数/其他函数/StrToInt/StrToInt.html"),
    z6: new Node("AckByTagName","函数/其他函数/AckByTagName/AckByTagName.html"),
    z7: new Node("AckByGroupName","函数/其他函数/AckByGroupName/AckByGroupName.html"),
    z8: new Node("ShowMessageBox","函数/其他函数/ShowMessageBox/ShowMessageBox.html"),
    z9: new Node("StrRight","函数/其他函数/StrRight/StrRight.html"),
    z10: new Node("KDBGetDataset1","函数/其他函数/KDBGetDataset1/KDBGetDataset1.html"),
    z11: new Node("KDBDisConnect","函数/其他函数/KDBDisConnect/KDBDisConnect.html"),
    z12: new Node("KDBGetDatasetRows","函数/其他函数/KDBGetDatasetRows/KDBGetDatasetRows.html"),
    z13: new Node("KDBGetCellValueByFieldId","函数/其他函数/KDBGetCellValueByFieldId/KDBGetCellValueByFieldId.html"),
    z14: new Node("KDBGetConnectID","函数/其他函数/KDBGetConnectID/KDBGetConnectID.html"),
    // z15: new Node("SetLayerVisibleByName","函数/其他函数/SetLayerVisibleByName/SetLayerVisibleByName.html"),
    // z16: new Node("SetLayerVisibleByIndex","函数/其他函数/SetLayerVisibleByIndex/SetLayerVisibleByIndex.html"),
    /**函数-JavaScript常用函数 */
    // aa1: new Node("web worker","函数/JavaScript常用函数/web worker/web worker.html"),
    aa2: new Node("web sql","函数/JavaScript常用函数/web sql/web sql.html"),
    aa3: new Node("web存储","函数/JavaScript常用函数/web存储/web存储.html"),
    aa4: new Node("html对dom操作的函数"),
    aa5: new Node("ECMAScript函数"),
    /**脚本-脚本编辑器 */
    bb1: new Node("简介", "脚本/脚本编辑器/介绍/介绍.html"),
    bb2: new Node("菜单栏", "脚本/脚本编辑器/菜单栏/菜单栏.html"),
    bb3: new Node("辅助区", "脚本/脚本编辑器/辅助区/辅助区.html"),
    bb4: new Node("事件连接区", "脚本/脚本编辑器/事件连接区/事件连接区.html"),
    /**脚本-脚本环境 */
    cc1: new Node("页面编辑器", "脚本/脚本环境/页面编辑器/页面编辑器.html"),
    cc2: new Node("2D工艺流程图编辑器", "脚本/脚本环境/2D工艺流程图编辑器/2D工艺流程图编辑器.html"),
    cc3: new Node("基本图形模型编辑器", "脚本/脚本环境/基本图形模型编辑器/基本图形模型编辑器.html"),
    cc4: new Node("自定义图表组件编辑器", "脚本/脚本环境/自定义图表组件编辑器/自定义图表组件编辑器.html"),
    // cc5: new Node("this使用说明"),
    /**手机APP-介绍 */
    // dd1: new Node("简介","手机APP/简介/简介.html"),
    // dd2: new Node("工具或环境","手机APP/工具或环境/工具或环境.html"),
    /**手机APP-APP工程开发 */
    ee1: new Node("工程组态","手机APP/APP工程开发/工程组态/工程组态.html"),
    ee2: new Node("工程调试","手机APP/APP工程开发/工程调试/工程调试.html"),
    ee3: new Node("常用函数","手机APP/APP工程开发/常用函数/常用函数.html"),
    ee4: new Node("第三方插件模块","手机APP/APP工程开发/第三方插件模块/第三方插件模块.html"),
    ee5: new Node("应用案例","手机APP/APP工程开发/应用案例/应用案例.html"),
    /**手机APP-APP打包 */
    ff1: new Node("本地打包","手机APP/APP打包/本地打包/本地打包.html"),
    ff2: new Node("云打包","手机APP/APP打包/云打包/云打包.html"),
    /**关于-系统环境要求 */
    gg1: new Node("开发环境","关于/系统环境要求/开发环境/开发环境.html"),
    gg2: new Node("运行环境","关于/系统环境要求/运行环境/运行环境.html"),
    /**后台-工程目录 */
    hh1: new Node("一级目录", "后台/工程目录简介/一级目录/一级目录.html"),
    hh2: new Node("二级目录", "后台/工程目录简介/二级目录/二级目录.html"),
};
level3.n2.addChild(level4.mcjs1, level4.mcjs2, level4.mcjs3, level4.mcjs4, level4.mcjs5, level4.mcjs6, level4.mcjs7, level4.mcjs8, level4.mcjs9 );
level3.n3.addChild(level4.tx1, level4.tx2, level4.tx3, level4.tx4, level4.tx5, level4.tx6, level4.tx7, level4.tx8, level4.tx9, level4.tx10 );
level3.n5.addChild(level4.a1, level4.a2, level4.a3, level4.a4, level4.a5, level4.a6, level4.a7); /**开发系统-工具栏 */
level3.n6.addChild(level4.b1, level4.b2, level4.b3); /**开发系统-页面管理 */
level3.n7.addChild(level4.c1, level4.c2, level4.c3); /**开发系统-变量管理 */
level3.n8.addChild(level4.d1, level4.d2); /**开发系统-权限管理 */
level3.n9.addChild(level4.e1, level4.e2, level4.e3); /**开发系统-图形模型库 */
level3.n10.addChild(level4.f1, level4.f2, level4.f3); /**开发系统-用户管理 */
level3.n11.addChild(level4.g1, level4.g2, level4.g3); /**开发系统-数据源管理 */
level3.n13.addChild(level4.h1, level4.h2, level4.h3); /**页面编辑器-菜单栏 */
level3.n15.addChild(level4.i1, level4.i2, level4.i3, level4.i4); /**页面编辑器-工具箱 */
level3.n16.addChild(level4.j1, level4.j2, level4.j3, level4.j4, level4.j5); /**页面编辑器-配置窗 */
level3.n18.addChild(level4.k1, level4.k2, level4.k3); /**2D工艺流程图编辑器-菜单栏 */
level3.n20.addChild(level4.l1, level4.l2, level4.l3); /**2D工艺流程图编辑器-工具箱 */
level3.n21.addChild(level4.m1, level4.m2, level4.m3, level4.m4, level4.m5); /**2D工艺流程图编辑器-配置窗 */
level3.n64.addChild(level4.n1, level4.n2, level4.n3, level4.n4, level4.n5, level4.n6, level4.n7, level4.n8, level4.n9); /**2D工艺流程图编辑器-动画连接 */
level3.n23.addChild(level4.o1, level4.o2, level4.o3); /**基本图形模型编辑器-菜单栏 */
level3.n25.addChild(level4.p1, level4.p2); /**基本图形模型编辑器-工具箱 */
level3.n26.addChild(level4.q1, level4.q2, level4.q3, level4.q4, level4.q5, level4.q6); /**基本图形模型编辑器-配置窗 */
level3.n28.addChild(level4.r1, level4.r2, level4.r3); /**自定义图表组件编辑器-菜单栏 */
level3.n30.addChild(level4.s1); /**自定义图表组件编辑器-菜单栏 */
level3.n31.addChild(level4.t1, level4.t2, level4.t3); /**自定义图表组件编辑器-菜单栏 */
level3.n32.addChild(level4.u1, level4.u2, level4.u3, level4.u4, level4.u5, level4.u6, level4.u7); /**函数-用户操作函数 */
level3.n33.addChild(level4.v1, level4.v2, level4.v3); /**函数-变量操作函数 */
level3.n34.addChild(level4.w1, level4.w2, level4.w3, level4.w4, level4.w5); /**函数-页面操作函数 */
level3.n35.addChild(level4.x1, level4.x2, level4.x3, level4.x4, level4.x5); /**函数-文件操作函数 */
level3.n36.addChild(level4.y1, level4.y2, level4.y3, level4.y4); /**函数-数据库操作函数 */
level3.n37.addChild(level4.z1, level4.z2, level4.z3, level4.z4, level4.z5, level4.z6, level4.z7, level4.z8, level4.z9, level4.z10, level4.z11, level4.z12, level4.z13, level4.z14); /**函数-其他函数  */
level3.n38.addChild(level4.aa2, level4.aa3, level4.aa4, level4.aa5); /**函数-JavaScript常用函数 */
level3.n39.addChild(level4.bb1, level4.bb2, level4.bb3, level4.bb4); /**脚本-脚本编辑器 */
level3.n40.addChild(level4.cc1, level4.cc2, level4.cc3, level4.cc4); /**脚本-脚本环境 */
// level3.n46.addChild(level4.dd1, level4.dd2); /**手机APP-介绍 */
level3.n48.addChild(level4.ee1, level4.ee2, level4.ee3, level4.ee4, level4.ee5); /**手机APP-APP工程开发 */
level3.n49.addChild(level4.ff1, level4.ff2); /**手机APP-APP打包 */
level3.n52.addChild(level4.hh1, level4.hh2); /**后台-工程目录 */
level3.n60.addChild(level4.gg1, level4.gg2); /**关于-系统环境要求 */
/**************** 第五级菜单 ****************/
const level5 = {
    /**开发系统-工具栏-文件 */
    a1: new Node("工程部署", "功能模块/开发系统/工具栏/文件/工程部署/工程部署.html"),
    a2: new Node("设置", "功能模块/开发系统/工具栏/文件/设置/设置.html"),
    a3: new Node("组合图素", "功能模块/开发系统/工具栏/文件/组合图素/组合图素.html"),
    /**开发系统-数据源管理-数据源 */
    b1: new Node("KS", "功能模块/开发系统/数据源管理/数据源/KS数据源/KS数据源连接.html"),
    b2: new Node("KIO", "功能模块/开发系统/数据源管理/数据源/KIO数据源/KIO数据源连接.html"),
    b3: new Node("OPCUA", "功能模块/开发系统/数据源管理/数据源/OPCUA数据源/OPCUA数据源连接.html"),
    b4: new Node("MYSQL", "功能模块/开发系统/数据源管理/数据源/MYSQL数据源/MYSQL数据源连接.html"),
    b5: new Node("SQLSERVER", "功能模块/开发系统/数据源管理/数据源/SQLSERVER数据源/SQLSERVER数据源连接.html"),
    b6: new Node("ORCL", "功能模块/开发系统/数据源管理/数据源/ORCL数据源/ORCL数据源连接.html"),
    b7: new Node("KH", "功能模块/开发系统/数据源管理/数据源/KH数据源/KH数据源连接.html"),
    b8: new Node("DM", "功能模块/开发系统/数据源管理/数据源/DM数据源/DM数据源连接.html"),
    b9: new Node("PG", "功能模块/开发系统/数据源管理/数据源/PG数据源/PG数据源连接.html"),
    b10: new Node("EXECL", "功能模块/开发系统/数据源管理/数据源/EXECL数据源/EXECL数据源连接.html"),
    /**页面编辑器--工具箱-布局容器 */
    c1: new Node("水平布局"),
    c2: new Node("垂直布局"),
    c3: new Node("手风琴"),
    c4: new Node("选项卡"),
    c5: new Node("停靠布局"),
    c6: new Node("表单布局"),
    c7: new Node("横向垫片"),
    c8: new Node("纵向垫片"),
    c9: new Node("综合示例展示"),
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
    g1: new Node("基本", "功能模块/页面编辑器/配置窗/连接/基本/基本.html"),
    g2: new Node("变量改变", "功能模块/页面编辑器/配置窗/连接/变量改变/变量改变.html"),
    g3: new Node("定时器", "功能模块/页面编辑器/配置窗/连接/定时器/定时器.html"),
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
    i1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/组合图素/介绍/介绍.html"),
    i2: new Node("应用"),
    i3: new Node("创建", "功能模块/2D工艺流程图编辑器/工具箱/组合图素/创建/创建.html"),
    /**2D工艺流程图编辑器-工具箱-基本图形模型库 */
    j1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图形模型库/介绍/介绍.html"),
    j2: new Node("应用"),
    j3: new Node("创建", "功能模块/2D工艺流程图编辑器/工具箱/基本图形模型库/创建/创建.html"),
    /**基本图形模型编辑器-工具箱-基本图素 */
    k1: new Node("简介", "功能模块/基本图形模型编辑器/工具箱/基本图素/介绍/介绍.html"),
    k2: new Node("属性配置", "功能模块/基本图形模型编辑器/工具箱/基本图素/属性配置/属性配置.html"),
    k3: new Node("动画连接", "功能模块/基本图形模型编辑器/工具箱/基本图素/动画连接/动画连接.html"),

    /**基本图形模型编辑器-工具箱-组合图素 */
    l1: new Node("简介", "功能模块/基本图形模型编辑器/工具箱/组合图素/介绍/介绍.html"),
    l2: new Node("应用"),
    l3: new Node("创建", "功能模块/基本图形模型编辑器/工具箱/组合图素/创建/创建.html"),
    /**自定义图表组件编辑器-工具箱-自定义图表组件 */
    m1: new Node("简介", "功能模块/自定义图表组件编辑器/工具箱/自定义图表组件/介绍/介绍.html"),
    m2: new Node("属性配置", "功能模块/自定义图表组件编辑器/工具箱/自定义图表组件/属性配置/属性配置.html"),
    m3: new Node("脚本方法", "功能模块/自定义图表组件编辑器/工具箱/自定义图表组件/脚本方法/脚本方法.html"),
    m4: new Node("创建添加", "功能模块/自定义图表组件编辑器/工具箱/自定义图表组件/创建添加/创建添加.html"),
    m5: new Node("具体案例", "功能模块/自定义图表组件编辑器/工具箱/自定义图表组件/具体案例/具体案例.html"),
    // /**函数-JavaScript常用函数-web worker */
    // o1: new Node("postMessage"),
    // o2: new Node("onMessage"),
    // /**函数-JavaScript常用函数-web sql */
    // o3: new Node("openDatabase","函数/JavaScript常用函数/web sql/openDatabase/openDatabase.html"),
    // o4: new Node("transaction","函数/JavaScript常用函数/web sql/transaction/transaction.html"),
    // o5: new Node("executeSql","函数/JavaScript常用函数/web sql/executeSql/executeSql.html"),
    // /**函数-JavaScript常用函数-web存储 */
    // o6: new Node("localStorage"),
    // o7: new Node("sessionStorage"),
    /**函数-JavaScript常用函数-html对dom操作的函数 */
    o8: new Node("Document","函数/JavaScript常用函数/html对dom操作的函数/Document/Document.html"),
    o9: new Node("Element","函数/JavaScript常用函数/html对dom操作的函数/Element/Element.html"),
    o10: new Node("Attribute","函数/JavaScript常用函数/html对dom操作的函数/Attribute/Attribute.html"),
    /**函数-JavaScript常用函数-ECMAScript函数 */
    o11: new Node("字符串","函数/JavaScript常用函数/ECMAScript函数/字符串/字符串.html"),
    o12: new Node("数学","函数/JavaScript常用函数/ECMAScript函数/数学/数学.html"),
    o13: new Node("日期时间","函数/JavaScript常用函数/ECMAScript函数/日期时间/日期时间.html"),
    o14: new Node("数组","函数/JavaScript常用函数/ECMAScript函数/数组/数组.html"),
    o15: new Node("正则表达式","函数/JavaScript常用函数/ECMAScript函数/正则表达式/正则表达式.html"),
    o16: new Node("全局","函数/JavaScript常用函数/ECMAScript函数/全局/全局.html"),
    o17: new Node("JSON","函数/JavaScript常用函数/ECMAScript函数/JSON/JSON.html"),
    o18: new Node("数字","函数/JavaScript常用函数/ECMAScript函数/数字/数字.html"),

};
level4.a1.addChild(level5.a1, level5.a2, level5.a3); /**开发系统-工具栏-文件 */
level4.g3.addChild(level5.b1, level5.b2, level5.b3, level5.b4, level5.b5, level5.b6, level5.b7, level5.b8, level5.b9, level5.b10); /**开发系统-数据源管理-数据源 */
level4.i1.addChild(level5.c1, level5.c2, level5.c3, level5.c4, level5.c5, level5.c6, level5.c7, level5.c8, level5.c9); /**页面编辑器-工具箱-布局容器 */
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
// level4.aa1.addChild(level5.o1,level5.o2);/**函数-JavaScript常用函数-web worker */
// level4.aa2.addChild(level5.o3,level5.o4,level5.o5);/**函数-JavaScript常用函数-web sql */
// level4.aa3.addChild(level5.o6,level5.o7);/**函数-JavaScript常用函数-web存储 */
level4.aa4.addChild(level5.o8,level5.o9,level5.o10);
level4.aa5.addChild(level5.o11,level5.o12,level5.o13,level5.o14,level5.o15,level5.o16,level5.o17,level5.o18);
/**************** 第六级菜单 ****************/
const level6 = {
    //布局容器
    bj1: new Node("简介", "功能模块/页面编辑器/工具箱/布局容器/水平布局/简介/简介.html", true),
    bj2: new Node("属性配置", "功能模块/页面编辑器/工具箱/布局容器/水平布局/属性配置/属性配置.html", true),
    bj3: new Node("样式配置", "功能模块/页面编辑器/工具箱/布局容器/水平布局/样式配置/样式配置.html", true),
    bj4: new Node("简介", "功能模块/页面编辑器/工具箱/布局容器/垂直布局/简介/简介.html", true),
    bj5: new Node("属性配置", "功能模块/页面编辑器/工具箱/布局容器/垂直布局/属性配置/属性配置.html", true),
    bj6: new Node("样式配置", "功能模块/页面编辑器/工具箱/布局容器/垂直布局/样式配置/样式配置.html", true),

    bj7: new Node("简介", "功能模块/页面编辑器/工具箱/布局容器/手风琴/简介/简介.html", true),
    bj8: new Node("属性配置", "功能模块/页面编辑器/工具箱/布局容器/手风琴/属性配置/属性配置.html", true),
    bj9: new Node("详细配置", "功能模块/页面编辑器/工具箱/布局容器/手风琴/详细配置/详细配置.html", true),
    bj10: new Node("样式配置", "功能模块/页面编辑器/工具箱/布局容器/手风琴/样式配置/样式配置.html", true),

    bj11: new Node("简介", "功能模块/页面编辑器/工具箱/布局容器/选项卡/简介/简介.html", true),
    bj12: new Node("属性配置", "功能模块/页面编辑器/工具箱/布局容器/选项卡/属性配置/属性配置.html", true),
    bj13: new Node("详细配置", "功能模块/页面编辑器/工具箱/布局容器/选项卡/详细配置/详细配置.html", true),
    bj14: new Node("样式配置", "功能模块/页面编辑器/工具箱/布局容器/选项卡/样式配置/样式配置.html", true),

    bj15: new Node("简介", "功能模块/页面编辑器/工具箱/布局容器/停靠布局/简介/简介.html", true),
    bj16: new Node("属性配置", "功能模块/页面编辑器/工具箱/布局容器/停靠布局/属性配置/属性配置.html", true),
    bj17: new Node("详细配置", "功能模块/页面编辑器/工具箱/布局容器/停靠布局/详细配置/详细配置.html", true),
    bj18: new Node("样式配置", "功能模块/页面编辑器/工具箱/布局容器/停靠布局/样式配置/样式配置.html", true),

    bj19: new Node("简介", "功能模块/页面编辑器/工具箱/布局容器/表单布局/简介/简介.html", true),
    bj20: new Node("属性配置", "功能模块/页面编辑器/工具箱/布局容器/表单布局/属性配置/属性配置.html", true),
    bj21: new Node("样式配置", "功能模块/页面编辑器/工具箱/布局容器/表单布局/样式配置/样式配置.html", true),

    bj22: new Node("简介", "功能模块/页面编辑器/工具箱/布局容器/横向垫片/简介/简介.html", true),
    bj23: new Node("属性配置", "功能模块/页面编辑器/工具箱/布局容器/横向垫片/属性配置/属性配置.html", true),

    bj24: new Node("简介", "功能模块/页面编辑器/工具箱/布局容器/纵向垫片/简介/简介.html", true),
    bj25: new Node("属性配置", "功能模块/页面编辑器/工具箱/布局容器/纵向垫片/属性配置/属性配置.html", true),

    lct1: new Node("属性配置", "功能模块/页面编辑器/工具箱/流程图/2D工艺流程图/2D工艺流程图/2D工艺流程图.html", true),
    lct2: new Node("GIS模块", "功能模块/页面编辑器/工具箱/流程图/2D工艺流程图/工艺流程图-GIS功能/工艺流程图—GIS功能.html", true),

    //UI组件
    //微调器
    UIa1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/微调器/微调器属性配置/微调器属性配置.html", true),
    UIa2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/微调器/微调器事件连接/微调器事件连接.html", true),
    UIa3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/微调器/微调器脚本属性/微调器脚本属性.html", true),
    //链接按钮
    UIb1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/链接按钮/链接按钮属性配置/链接按钮属性配置.html", true),
    UIb2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/链接按钮/链接按钮事件连接/链接按钮事件连接.html", true),
    UIb3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/链接按钮/链接按钮脚本属性/链接按钮脚本属性.html", true),
    //组合框
    UIc1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/组合框/组合框属性配置/组合框属性配置.html", true),
    UIc2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/组合框/组合框事件连接/组合框事件连接.html", true),
    UIc3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/组合框/组合框脚本属性/组合框脚本属性.html", true),
    UIc4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/组合框/组合框脚本方法/组合框脚本方法.html", true),
    //日历
    UId1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/日历/日历属性配置/日历属性配置.html", true),
    UId2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/日历/日历事件连接/日历事件连接.html", true),
    UId3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/日历/日历脚本属性/日历脚本属性.html", true),
    UId4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/日历/日历脚本方法/日历脚本方法.html", true),
    //数字微调器
    UIe1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/数字微调器/数字微调器属性配置/数字微调器属性配置.html", true),
    UIe2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/数字微调器/数字微调器事件连接/数字微调器事件连接.html", true),
    UIe3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/数字微调器/数字微调器脚本属性/数字微调器脚本属性.html", true),

    UIf1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/数字框/数字框属性配置/数字框属性配置.html", true),
    UIf2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/数字框/数字框事件连接/数字框事件连接.html", true),
    UIf3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/数字框/数字框脚本属性/数字框脚本属性.html", true),
    UIf4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/数字框/数字框脚本方法/数字框脚本方法.html", true),

    UIg1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/时间微调器/时间微调器属性配置/时间微调器属性配置.html", true),
    UIg2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/时间微调器/时间微调器事件连接/时间微调器事件连接.html", true),
    UIg3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/时间微调器/时间微调器脚本属性/时间微调器脚本属性.html", true),
    UIg4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/时间微调器/时间微调器脚本方法/时间微调器脚本方法.html", true),

    UIh1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/滑块/滑块属性配置/滑块属性配置.html", true),
    UIh2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/滑块/滑块事件连接/滑块事件连接.html", true),
    UIh3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/滑块/滑块脚本属性/滑块脚本属性.html", true),
    UIh4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/滑块/滑块脚本方法/滑块脚本方法.html", true),

    UIi1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/数据网格/数据网格属性配置/数据网格属性配置.html", true),
    UIi2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/数据网格/数据网格事件连接/数据网格事件连接.html", true),
    UIi3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/数据网格/数据网格脚本属性/数据网格脚本属性.html", true),
    UIi4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/数据网格/数据网格脚本方法/数据网格脚本方法.html", true),

    UIj1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/属性网格/属性网格属性配置/属性网格属性配置.html", true),
    UIj2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/属性网格/属性网格事件连接/属性网格事件连接.html", true),
    UIj3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/属性网格/属性网格脚本属性/属性网格脚本属性.html", true),
    UIj4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/属性网格/属性网格脚本方法/属性网格脚本方法.html", true),

    UIk1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/文本框/文本框属性配置/文本框属性配置.html", true),
    UIk2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/文本框/文本框事件连接/文本框事件连接.html", true),
    UIk3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/文本框/文本框脚本属性/文本框脚本属性.html", true),
    UIk4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/文本框/文本框脚本方法/文本框脚本方法.html", true),

    UIl1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/搜索框/搜索框属性配置/搜索框属性配置.html", true),
    UIl2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/搜索框/搜索框事件连接/搜索框事件连接.html", true),
    UIl3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/搜索框/搜索框脚本属性/搜索框脚本属性.html", true),
    UIl4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/搜索框/搜索框脚本方法/搜索框脚本方法.html", true),

    UIm1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/日期/日期属性配置/日期属性配置.html", true),
    UIm2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/日期/日期事件连接/日期事件连接.html", true),
    UIm3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/日期/日期脚本属性/日期脚本属性.html", true),
    UIm4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/日期/日期脚本方法/日期脚本方法.html", true),

    UIn1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/日期时间/日期时间属性配置/日期时间属性配置.html", true),
    UIn2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/日期时间/日期时间事件连接/日期时间事件连接.html", true),
    UIn3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/日期时间/日期时间脚本属性/日期时间脚本属性.html", true),
    UIn4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/日期时间/日期时间脚本方法/日期时间脚本方法.html", true),

    UIo1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/菜单按钮/菜单按钮属性配置/菜单按钮属性配置.html", true),
    UIo2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/菜单按钮/菜单按钮事件连接/菜单按钮事件连接.html", true),
    UIo3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/菜单按钮/菜单按钮脚本属性/菜单按钮脚本属性.html", true),
    UIo4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/菜单按钮/菜单按钮脚本方法/菜单按钮脚本方法.html", true),

    UIp1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/进度条/进度条属性配置/进度条属性配置.html", true),
    UIp2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/进度条/进度条事件连接/进度条事件连接.html", true),
    UIp3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/进度条/进度条脚本属性/进度条脚本属性.html", true),
    UIp4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/进度条/进度条脚本方法/进度条脚本方法.html", true),

    UIq1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/树/树属性配置/树属性配置.html", true),
    UIq2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/树/树事件连接/树事件连接.html", true),
    UIq3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/树/树脚本属性/树脚本属性.html", true),
    UIq4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/树/树脚本方法/树脚本方法.html", true),

    UIr1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/树形网格/树形网格属性配置/树形网格属性配置.html", true),
    UIr2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/树形网格/树形网格事件连接/树形网格事件连接.html", true),
    UIr3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/树形网格/树形网络脚本属性/树形网格脚本属性.html", true),
    UIr4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/树形网格/树形网络脚本方法/树形网格脚本方法.html", true),

    UIs1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/文件框/文件框属性配置/文件框属性配置.html", true),
    UIs2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/文件框/文件框事件连接/文件框事件连接.html", true),
    UIs3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/文件框/文件框脚本属性/文件框脚本属性.html", true),
    UIs4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/文件框/文件框脚本方法/文件框脚本方法.html", true),

    UIt1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/分页/分页属性配置/分页属性配置.html", true),
    UIt2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/分页/分页事件连接/分页事件连接.html", true),
    UIt3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/分页/分页脚本属性/分页脚本属性.html", true),
    UIt4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/分页/分页脚本方法/分页脚本方法.html", true),

    UIu1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/网页容器/网页容器属性配置/网页容器属性配置.html", true),
    UIu2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/网页容器/网页容器事件连接/网页容器事件连接.html", true),
    UIu3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/网页容器/网页容器脚本属性/网页容器脚本属性.html", true),
    UIu4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/网页容器/网页容器脚本方法/网页容器脚本方法.html", true),

    UIv1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/提示框/提示框属性配置/提示框属性配置.html", true),
    UIv2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/提示框/提示框事件连接/提示框事件连接.html", true),
    UIv3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/提示框/提示框脚本属性/提示框脚本属性.html", true),
    UIv4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/提示框/提示框脚本方法/提示框脚本方法.html", true),

    UIw1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/Windows窗/Windows窗属性配置/Windows窗属性配置.html", true),
    UIw2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/Windows窗/Windows窗事件连接/Windows窗事件连接.html", true),
    UIw3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/Windows窗/Windows窗脚本属性/Windows窗脚本属性.html", true),
    UIw4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/Windows窗/Windows窗脚本方法/Windows窗脚本方法.html", true),

    UIx1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/对话框/对话框属性配置/对话框属性配置.html", true),
    UIx2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/对话框/对话框事件连接/对话框事件连接.html", true),
    UIx3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/对话框/对话框脚本属性/对话框脚本属性.html", true),
    UIx4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/对话框/对话框脚本方法/对话框脚本方法.html", true),

    UIy1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/标签条/标签条属性配置/标签条属性配置.html", true),
    UIy2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/标签条/标签条事件连接/标签条事件连接.html", true),
    UIy3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/标签条/标签条脚本属性/标签条脚本属性.html", true),
    UIy4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/标签条/标签条脚本方法/标签条脚本方法.html", true),

    UIz1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/富文本框/富文本框属性配置/富文本框属性配置.html", true),
    UIz2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/富文本框/富文本框事件连接/富文本框事件连接.html", true),
    UIz3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/富文本框/富文本框脚本属性/富文本框脚本属性.html", true),
    UIz4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/富文本框/富文本框脚本方法/富文本框脚本方法.html", true),

    UIaa1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/单选框/单选框属性配置/单选框属性配置.html", true),
    UIaa2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/单选框/单选框事件连接/单选框事件连接.html", true),
    UIaa3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/单选框/单选框脚本属性/单选框脚本属性.html", true),
    UIaa4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/单选框/单选框脚本方法/单选框脚本方法.html", true),

    UIbb1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/复选框/复选框属性配置/复选框属性配置.html", true),
    UIbb2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/复选框/复选框事件连接/复选框事件连接.html", true),
    UIbb3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/复选框/复选框脚本属性/复选框脚本属性.html", true),
    UIbb4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/复选框/复选框脚本方法/复选框脚本方法.html", true),

    UIcc1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/组合树/属性配置/属性配置.html", true),
    UIcc2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/组合树/事件连接/事件连接.html", true),
    UIcc3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/组合树/脚本属性/脚本属性.html", true),
    UIcc4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/组合树/脚本方法/脚本方法.html", true),

    UIdd1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/开关按钮/属性配置/属性配置.html", true),
    UIdd2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/开关按钮/事件连接/事件连接.html", true),
    UIdd3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/开关按钮/脚本属性/脚本属性.html", true),
    UIdd4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/开关按钮/脚本方法/脚本方法.html", true),

    UIee1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/侧栏菜单/侧栏菜单属性配置/侧栏菜单属性配置.html", true),
    UIee2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/侧栏菜单/侧栏菜单事件连接/侧栏菜单事件连接.html", true),
    UIee3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/侧栏菜单/侧栏菜单脚本属性/侧栏菜单脚本属性.html", true),
    UIee4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/侧栏菜单/侧栏菜单脚本方法/侧栏菜单脚本方法.html", true),

    UIff1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/标签框/标签框属性配置/标签框属性配置.html", true),
    UIff2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/标签框/标签框事件连接/标签框事件连接.html", true),
    UIff3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/标签框/标签框脚本属性/标签框脚本属性.html", true),
    UIff4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/标签框/标签框脚本方法/标签框脚本方法.html", true),

    UIgg1: new Node("属性配置", "功能模块/页面编辑器/工具箱/UI组件/验证框/验证框属性配置/验证框属性配置.html", true),
    // UIgg2: new Node("事件连接", "功能模块/页面编辑器/工具箱/UI组件/验证框/验证框事件连接/验证框事件连接.html", true),
    UIgg3: new Node("脚本属性", "功能模块/页面编辑器/工具箱/UI组件/验证框/验证框脚本属性/验证框脚本属性.html", true),
    // UIgg4: new Node("脚本方法", "功能模块/页面编辑器/工具箱/UI组件/验证框/验证框脚本方法/验证框脚本方法.html", true),

    //图表组件
    tb1: new Node("简介", "功能模块/页面编辑器/工具箱/图表组件/报警窗/介绍/介绍.html", true),
    tb2: new Node("报警窗属性", "功能模块/页面编辑器/工具箱/图表组件/报警窗/报警窗属性/报警窗属性.html", true),
    tb3: new Node("标题栏属性", "功能模块/页面编辑器/工具箱/图表组件/报警窗/标题栏属性/标题栏属性.html", true),
    tb4: new Node("工具栏属性", "功能模块/页面编辑器/工具箱/图表组件/报警窗/工具栏属性/工具栏属性.html", true),
    tb5: new Node("界面属性", "功能模块/页面编辑器/工具箱/图表组件/报警窗/界面属性/界面属性.html", true),
    tb6: new Node("树形区属性", "功能模块/页面编辑器/工具箱/图表组件/报警窗/树形区属性/树形区属性.html", true),

    tb8: new Node("事件", "功能模块/页面编辑器/工具箱/图表组件/报警窗/事件/事件.html", true),
    tb9: new Node("方法", "功能模块/页面编辑器/工具箱/图表组件/报警窗/方法/方法.html", true),

    tb10: new Node("简介", "功能模块/页面编辑器/工具箱/图表组件/事件窗/介绍/介绍.html", true),
    tb11: new Node("事件窗属性", "功能模块/页面编辑器/工具箱/图表组件/事件窗/事件窗属性/事件窗属性.html", true),
    tb12: new Node("标题栏属性", "功能模块/页面编辑器/工具箱/图表组件/事件窗/标题栏属性/标题栏属性.html", true),
    tb13: new Node("工具栏属性", "功能模块/页面编辑器/工具箱/图表组件/事件窗/工具栏属性/工具栏属性.html", true),
    tb14: new Node("界面属性", "功能模块/页面编辑器/工具箱/图表组件/事件窗/界面属性/界面属性.html", true),
    tb15: new Node("树形区属性", "功能模块/页面编辑器/工具箱/图表组件/事件窗/树形区属性/树形区属性.html", true),
    tb17: new Node("事件", "功能模块/页面编辑器/工具箱/图表组件/事件窗/事件/事件.html", true),
    tb18: new Node("方法", "功能模块/页面编辑器/工具箱/图表组件/事件窗/方法/方法.html", true),

    tb19: new Node("简介", "功能模块/页面编辑器/工具箱/图表组件/趋势曲线/介绍/介绍.html", true),
    tb20: new Node("趋势曲线属性", "功能模块/页面编辑器/工具箱/图表组件/趋势曲线/趋势曲线属性/趋势曲线属性.html", true),
    tb21: new Node("标题属性", "功能模块/页面编辑器/工具箱/图表组件/趋势曲线/标题属性/标题属性.html", true),
    tb22: new Node("数据轴属性", "功能模块/页面编辑器/工具箱/图表组件/趋势曲线/数据轴属性/数据轴属性.html", true),
    tb23: new Node("时间轴属性", "功能模块/页面编辑器/工具箱/图表组件/趋势曲线/时间轴属性/时间轴属性.html", true),
    tb24: new Node("绘图区属性", "功能模块/页面编辑器/工具箱/图表组件/趋势曲线/绘图区属性/绘图区属性.html", true),
    tb25: new Node("曲线属性", "功能模块/页面编辑器/工具箱/图表组件/趋势曲线/曲线属性/曲线属性.html", true),
    tb26: new Node("图例属性", "功能模块/页面编辑器/工具箱/图表组件/趋势曲线/图例属性/图例属性.html", true),
    tb27: new Node("方法", "功能模块/页面编辑器/工具箱/图表组件/趋势曲线/方法/方法.html", true),

    tb28: new Node("简介", "功能模块/页面编辑器/工具箱/图表组件/柱状图/介绍/介绍.html", true),
    tb29: new Node("柱状图属性", "功能模块/页面编辑器/工具箱/图表组件/柱状图/柱状图属性/柱状图属性.html", true),
    tb30: new Node("标题属性", "功能模块/页面编辑器/工具箱/图表组件/柱状图/标题属性/标题属性.html", true),
    tb31: new Node("数据轴属性", "功能模块/页面编辑器/工具箱/图表组件/柱状图/数据轴属性/数据轴属性.html", true),
    tb32: new Node("系列轴属性", "功能模块/页面编辑器/工具箱/图表组件/柱状图/系列轴属性/系列轴属性.html", true),
    tb33: new Node("绘图区属性", "功能模块/页面编辑器/工具箱/图表组件/柱状图/绘图区属性/绘图区属性.html", true),
    tb34: new Node("系列属性", "功能模块/页面编辑器/工具箱/图表组件/柱状图/系列属性/系列属性.html", true),
    tb35: new Node("图例属性", "功能模块/页面编辑器/工具箱/图表组件/柱状图/图例属性/图例属性.html", true),
    tb36: new Node("方法", "功能模块/页面编辑器/工具箱/图表组件/柱状图/方法/方法.html", true),

    tb37: new Node("简介", "功能模块/页面编辑器/工具箱/图表组件/饼图/介绍/介绍.html", true),
    tb38: new Node("饼图属性", "功能模块/页面编辑器/工具箱/图表组件/饼图/饼图属性/饼图属性.html", true),
    tb39: new Node("标题属性", "功能模块/页面编辑器/工具箱/图表组件/饼图/标题属性/标题属性.html", true),
    tb40: new Node("绘图区属性", "功能模块/页面编辑器/工具箱/图表组件/饼图/绘图区属性/绘图区属性.html", true),
    tb41: new Node("饼图区属性", "功能模块/页面编辑器/工具箱/图表组件/饼图/饼图区属性/饼图区属性.html", true),
    tb42: new Node("图例属性", "功能模块/页面编辑器/工具箱/图表组件/饼图/图例属性/图例属性.html", true),
    tb43: new Node("方法", "功能模块/页面编辑器/工具箱/图表组件/饼图/方法/方法.html", true),

    tb44: new Node("简介", "功能模块/页面编辑器/工具箱/图表组件/XY曲线/介绍/介绍.html", true),
    tb45: new Node("XY曲线属性", "功能模块/页面编辑器/工具箱/图表组件/XY曲线/XY曲线属性/XY曲线属性.html", true),
    tb46: new Node("标题属性", "功能模块/页面编辑器/工具箱/图表组件/XY曲线/标题属性/标题属性.html", true),
    tb47: new Node("数据轴属性", "功能模块/页面编辑器/工具箱/图表组件/XY曲线/数据轴属性/数据轴属性.html", true),
    tb48: new Node("时间轴属性", "功能模块/页面编辑器/工具箱/图表组件/XY曲线/时间轴属性/时间轴属性.html", true),
    tb49: new Node("绘图区属性", "功能模块/页面编辑器/工具箱/图表组件/XY曲线/绘图区属性/绘图区属性.html", true),
    tb50: new Node("系列属性", "功能模块/页面编辑器/工具箱/图表组件/XY曲线/系列属性/系列属性.html", true),
    tb51: new Node("图例属性", "功能模块/页面编辑器/工具箱/图表组件/XY曲线/图例属性/图例属性.html", true),
    tb52: new Node("方法", "功能模块/页面编辑器/工具箱/图表组件/XY曲线/方法/方法.html", true),

    tb53: new Node("简介", "功能模块/页面编辑器/工具箱/图表组件/自定义图表组件/介绍/介绍.html", true),
    tb54: new Node("自定义图表组件属性", "功能模块/页面编辑器/工具箱/图表组件/自定义图表组件/自定义图表组件属性/自定义图表组件属性.html", true),
    tb55: new Node("方法", "功能模块/页面编辑器/工具箱/图表组件/自定义图表组件/方法/方法.html", true),

    //基本图素

    tsa1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/直线/介绍/介绍.html", true),
    tsa2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/直线/属性配置/属性配置.html", true),
    tsa3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/直线/动画连接/动画连接.html", true),

    tsb1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/折线/介绍/介绍.html", true),
    tsb2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/折线/属性配置/属性配置.html", true),
    tsb3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/折线/动画连接/动画连接.html", true),

    tsc1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/矩形/介绍/介绍.html", true),
    tsc2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/矩形/属性配置/属性配置.html", true),
    tsc3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/矩形/动画连接/动画连接.html", true),

    tsd1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/圆角矩形/介绍/介绍.html", true),
    tsd2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/圆角矩形/属性配置/属性配置.html", true),
    tsd3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/圆角矩形/动画连接/动画连接.html", true),

    tse1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/多边形/介绍/介绍.html", true),
    tse2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/多边形/属性配置/属性配置.html", true),
    tse3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/多边形/动画连接/动画连接.html", true),

    tsf1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/椭圆/介绍/介绍.html", true),
    tsf2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/椭圆/属性配置/属性配置.html", true),
    tsf3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/椭圆/动画连接/动画连接.html", true),

    tsg1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/弧线/介绍/介绍.html", true),
    tsg2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/弧线/属性配置/属性配置.html", true),
    tsg3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/弧线/动画连接/动画连接.html", true),

    tsh1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/扇形/介绍/介绍.html", true),
    tsh2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/扇形/属性配置/属性配置.html", true),
    tsh3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/扇形/动画连接/动画连接.html", true),

    tsi1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/弓形/介绍/介绍.html", true),
    tsi2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/弓形/属性配置/属性配置.html", true),
    tsi3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/弓形/动画连接/动画连接.html", true),

    tsj1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/文本/介绍/介绍.html", true),
    tsj2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/文本/属性配置/属性配置.html", true),
    tsj3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/文本/动画连接/动画连接.html", true),

    tsk1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/图片/介绍/介绍.html", true),
    tsk2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/图片/属性配置/属性配置.html", true),
    tsk3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/图片/动画连接/动画连接.html", true),

    tsl1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/立体管道/介绍/介绍.html", true),
    tsl2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/立体管道/属性配置/属性配置.html", true),
    tsl3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/立体管道/动画连接/动画连接.html", true),

    tsm1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/曲线/介绍/介绍.html", true),
    tsm2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/曲线/属性配置/属性配置.html", true),
    tsm3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/曲线/动画连接/动画连接.html", true),

    tsn1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/封闭曲线/介绍/介绍.html", true),
    tsn2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/封闭曲线/属性配置/属性配置.html", true),
    tsn3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/封闭曲线/动画连接/动画连接.html", true),

    tso1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/贝塞尔曲线/介绍/介绍.html", true),
    tso2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/贝塞尔曲线/属性配置/属性配置.html", true),
    tso3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/贝塞尔曲线/动画连接/动画连接.html", true),

    tsp1: new Node("简介", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/封闭贝塞尔曲线/介绍/介绍.html", true),
    tsp2: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/封闭贝塞尔曲线/属性配置/属性配置.html", true),
    tsp3: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图素/封闭贝塞尔曲线/动画连接/动画连接.html", true),

    //组合图素

    zhts1: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/组合图素/应用/属性配置/属性配置.html", true),
    zhts2: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/组合图素/应用/动画连接/动画连接.html", true),

    zhts3: new Node("属性配置", "功能模块/基本图形模型编辑器/工具箱/组合图素/应用/属性配置/属性配置.html", true),
    zhts4: new Node("动画连接", "功能模块/基本图形模型编辑器/工具箱/组合图素/应用/动画连接/动画连接.html", true),

    //基本图形模型
    jbts1: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图形模型库/应用/属性配置/属性配置.html", true),
    jbts2: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图形模型库/应用/动画连接/动画连接.html", true),


   
        
};
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
/**************** 第四级菜单 ****************/
// 可能是侧栏菜单也可能是 Tab 菜单
// const n1_1_2_1 = new Node("开发系统", filePath + "aaa.html");
// n1_1_2.addChild(n1_1_2_1);

// const n1_1_2_2 = new Node("页面编辑器", filePath + "aaa.html");
// n1_1_2.addChild(n1_1_2_2);

// const n1_1_2_3 = new Node("工程转化", filePath + "aaa.html");
// n1_1_2.addChild(n1_1_2_3);

// const n1_1_2_4 = new Node("数据源", filePath + "aaa.html");
// n1_1_2.addChild(n1_1_2_4);


// const n1_1_3_1 = new Node("组态式APP开发", filePath + "aaa.html");
// n1_1_3.addChild(n1_1_3_1);

// const n1_1_3_2 = new Node("2D/3D/GIS过程数据相融合", filePath + "aaa.html");
// n1_1_3.addChild(n1_1_3_2);

// const n1_1_3_3 = new Node("集成40+种组件", filePath + "aaa.html");
// n1_1_3.addChild(n1_1_3_3);

// const n1_1_3_4 = new Node("支持ECharts图表", filePath + "aaa.html");
// n1_1_3.addChild(n1_1_3_4);

/**************** 第五级菜单 ****************/
// 可能是侧栏菜单也可能是 Tab 菜单
// const n1_1_2_1_1 = new Node("水平布局", filePath + "aaa.html");
// n1_1_2_1.addChild(n1_1_2_1_1);

// const n1_1_2_1_2 = new Node("水平布局2", filePath + "aaa.html");
// n1_1_2_2.addChild(n1_1_2_1_2);

// /**************** 第六级菜单 ****************/
// // Tab 菜单
// const n1_1_2_1_2_1 = new Node("属性", filePath + "aaa.html", true);
// n1_1_2_1_2.addChild(n1_1_2_1_2_1);
// const n1_1_2_1_2_2 = new Node("方法", filePath + "bbb.html", true);
// n1_1_2_1_2.addChild(n1_1_2_1_2_2);
