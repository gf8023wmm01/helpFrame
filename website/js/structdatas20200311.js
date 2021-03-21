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
    n3: new Node("用户配置"),
    n4: new Node("采集APP组态"),
    n5: new Node("计算APP组态"),
    n6: new Node("客户端APP组态"),
    n7: new Node("运维中心"),
    n8: new Node("常见问题"),
    n9: new Node("关于"),
    
};
structDatas.push(level1.n1, level1.n2, level1.n3, level1.n4, level1.n5,level1.n6,level1.n7,level1.n8,level1.n9);
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
    n5: new Node("产品教程"),
    n6: new Node("函数说明"),
    n7: new Node("产品教程"),
    n8: new Node("功能模块"),
    n9: new Node("函数说明"),
    n10: new Node("脚本"),
    n11: new Node("工程转化"),
    n12: new Node("手机APP"),
    n13: new Node(),
    n14: new Node("用户配置常见问题"),
    n15: new Node("采集APP常见问题"),
    n16: new Node("计算APP常见问题"),
    n17: new Node("客户端APP常见问题"),
    n18: new Node("运维中心常见问题"),
    n19: new Node("其它常见问题"),
    n20: new Node(),
};
level1.n1.addChild(level2.n1);
level1.n2.addChild(level2.n2);
level1.n3.addChild(level2.n3);
level1.n4.addChild(level2.n4);
level1.n5.addChild(level2.n5,level2.n6);
level1.n6.addChild(level2.n7,level2.n8,level2.n9,level2.n10,level2.n11,level2.n12);
level1.n7.addChild(level2.n13);
level1.n8.addChild(level2.n14,level2.n15,level2.n16,level2.n17,level2.n18,level2.n19);
level1.n9.addChild(level2.n20);

/**************** 侧栏三级菜单 ****************/
const level3 = {
    /**平台指引**/
    n0: new Node("简介","脚本/简介/简介.html1"),
    n1: new Node("产品概述"),
    n2: new Node("新手指引"),
    n3: new Node(),
    /**教程**/
    gjc1: new Node("用户配置的操作流程","功能模块/自定义图表组件编辑器/工具栏/ .html1"),
    gjc2: new Node("采集APP组态与客户端APP组态的交互","功能模块/自定义图表组件编辑器/工具栏/工具栏.html1"),
    gjc3: new Node("计算APP组态与客户端APP组态","功能模块/自定义图表组件编辑器/工具栏/工具栏.html1"),
    gjc4: new Node("。。。。","功能模块/自定义图表组件编辑器/工具栏/工具栏.html1"),
    /**用户配置**/
    yhpz0: new Node("简介","函数/简介/简介.html1"),
    yhpz1: new Node("超级管理员"),
    yhpz2: new Node("管理员"),
    yhpz3: new Node("普通用户"),
    yhpz4: new Node("典型应用"),
    /**采集APP组态**/
    cjzt0: new Node("简介","函数/简介/简介.html1"),
    cjzt1: new Node("授权管理"),
    cjzt2: new Node("工程管理"),
    cjzt3: new Node("组件管理"),
    cjzt4: new Node("部署管理"),
    cjzt5: new Node("ID管理"),
    cjzt6: new Node("诊断中心"), 
    /**计算APP组态——产品教程**/  
    cpjc1: new Node("系统功能说明","计算APP组态/系统功能说明/1/1.html"),
    cpjc2: new Node("登录开发系统客户端"),
    cpjc3: new Node("集成开发系统安全体系"),
    cpjc4: new Node("工程组管理"),
    cpjc5: new Node("工程管理"),
    cpjc6: new Node("数据词典"),
    cpjc7: new Node("数据源"),
    cpjc8: new Node("脚本管理及脚本功能"),
    cpjc9: new Node("脚本依赖"),
    cpjc10: new Node("计算APP实例"),
    cpjc11: new Node("软件开发性"),
    /**计算APP组态——函数说明**/
    hssm1: new Node("KingSCADA访问函数"),
    hssm2: new Node("KingHistorian访问函数"),
    hssm3: new Node("KingIOsever访问函数"),
    hssm4: new Node("关系库访问函数"),
    hssm5: new Node("系统函数"),
    /**客户端app组态-产品教程**/
    kpcj1: new Node("快速新建Oauth用户", "客户端APP组态/产品教程/第一周/02快速新建Oauth用户/02快速新建Oauth用户.html"),
    kpcj2: new Node("快速添加外部图片", "客户端APP组态/产品教程/第一周/07快速添加外部图片/07快速添加外部图片.html"),
    kpcj3: new Node("自定义查询关系库,显示到数据网格", "客户端APP组态/产品教程/第三周/55自定义查询关系库,显示到数据网格/55自定义查询关系库,显示到数据网格.html"),
    kpcj4: new Node("。。。"),
    /**客户端app组态-功能模块**/
    kpgm1: new Node("开发系统"),
    kpgm2: new Node("页面编辑器"),
    kpgm3: new Node("2D工艺流程图编辑器"),
    kpgm4: new Node("基本图形模型编辑器"),
    kpgm5: new Node("自定义图表组件编辑器"),
    /**客户端app组态-函数说明**/
    kphs1: new Node("用户操作函数"),
    kphs2: new Node("变量操作函数"),
    kphs3: new Node("页面操作函数"),
    kphs4: new Node("文件操作函数"),
    kphs5: new Node("数据库操作函数"),
    kphs6: new Node("其他函数"),
    kphs7: new Node("JavaScript常用函数"),
    /**客户端app组态-脚本**/
    kpjb1: new Node("脚本编辑器"),
    kpjb2: new Node("脚本环境"),
    kpjb3: new Node("脚本调试"),
    /**客户端app组态-工程转化**/
    kpgz1: new Node("转换步骤"),
    kpgz2: new Node("功能支持清单"),
    kpgz3: new Node("注意事项"),
    /**客户端app组态-工程转化**/
    sjapp1: new Node("工具及资源"),
    sjapp2: new Node("APP使用说明"),
    sjapp3: new Node("APP工程开发"),
    sjapp4: new Node("APP打包"),
    sjapp5: new Node("注意事项"),
    /**运维中心**/
    ywzx1: new Node("节点管理"),
    ywzx2: new Node("APP管理"),
    ywzx3: new Node("系统配置"),
    ywzx4: new Node("授权"),
    ywzx5: new Node("权限设置"),
    /**关于**/
    gy1: new Node("系统环境"),
    gy2: new Node("售后服务及承诺"),
    gy3: new Node("软件归属权"),
    gy4: new Node("版本更新记录"),

};
level2.n1.addChild(level3.n0,level3.n1,level3.n2); //平台指引
level2.n2.addChild(level3.gjc1,level3.gjc2,level3.gjc3,level3.gjc4);//教程
level2.n3.addChild(level3.yhpz0,level3.yhpz1,level3.yhpz2,level3.yhpz3,level3.yhpz4); //用户配置
level2.n4.addChild(level3.cjzt0,level3.cjzt1,level3.cjzt2,level3.cjzt3,level3.cjzt4,level3.cjzt5,level3.cjzt6);//采集APP组态
level2.n5.addChild(level3.cpjc1,level3.cpjc2,level3.cpjc3,level3.cpjc4,level3.cpjc5,level3.cpjc6,level3.cpjc7,level3.cpjc8,level3.cpjc9,level3.cpjc10,level3.cpjc11);//计算APP_产品教程
level2.n6.addChild(level3.hssm1,level3.hssm2,level3.hssm3,level3.hssm4,level3.hssm5);//计算APP_函数说明
level2.n7.addChild(level3.kpcj1,level3.kpcj2,level3.kpcj3,level3.kpcj4);
level2.n8.addChild(level3.kpgm1,level3.kpgm2,level3.kpgm3,level3.kpgm4,level3.kpgm5);
level2.n9.addChild(level3.kphs1,level3.kphs2,level3.kphs3,level3.kphs4,level3.kphs5,level3.kphs6,level3.kphs7);
level2.n10.addChild(level3.kpjb1,level3.kpjb2,level3.kpjb3);
level2.n11.addChild(level3.kpgz1,level3.kpgz2,level3.kpgz3);
level2.n12.addChild(level3.sjapp1,level3.sjapp2,level3.sjapp3,level3.sjapp4,level3.sjapp5);
level2.n13.addChild(level3.ywzx1,level3.ywzx2,level3.ywzx3,level3.ywzx4,level3.ywzx5);
level2.n20.addChild(level3.gy1,level3.gy2,level3.gy3,level3.gy4);

/**************** 第四级菜单 ****************/
const level4 = {
    
    //平台指引
   mcjs1: new Node("什么是KingFusion3.6", "特性/名词解释/开发系统/开发系统.html1"),
   mcjs2: new Node("产品构成", "特性/名词解释/页面编辑器/页面编辑器.html1"),
   mcjs3: new Node("产品特点", "特性/名词解释/工程转化/工程转化.html1"),
   mcjs4: new Node("操作流程总览"),
   mcjs5: new Node("权限说明", "特性/名词解释/权限/权限.html1"),
   //用户配置-超级管理员
   cjgly1: new Node("用户权限"),
   cjgly2: new Node("模块功能权限"),
   cjgly3: new Node("模块功能介绍"),
   cjgly4: new Node("模块功能"),
   //用户配置-管理员
   gly1: new Node("用户权限"),
   gly2: new Node("模块功能权限"),
   gly3: new Node("模块功能介绍"),
   gly4: new Node("模块功能"),
   //用户配置-管理员
   ptyh1: new Node("用户权限"),
   ptyh2: new Node("模块功能权限"),
   ptyh3: new Node("模块功能介绍"),
   ptyh4: new Node("模块功能"),
   //用户配置-典型应用
   dxyy1: new Node("典型行业应用场景","特性/名词解释/权限/权限.html1"),
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
    ksfw1: new Node("KingSCADA Tag值数据结构","计算APP组态/函数说明/1KingSCADA访问函数/1KingSCADA Tag值数据结构/KingSCADA Tag值数据结构.html"),
    ksfw2: new Node("查KingSCADA数据","计算APP组态/函数说明/1KingSCADA访问函数/2查询KingSCADA数据/查询KingSCADA数据.html"),
    ksfw3: new Node("修改KingSCADA数据","计算APP组态/函数说明/1KingSCADA访问函数/3修改KingSCADA数据/修改KingSCADA数据.html"),
    khfw1: new Node("KingHistorian Tag值数据结构","计算APP组态/函数说明/2KingHistorian访问函数/1KingHistorian Tag值数据结构/KingHistorian Tag值数据结构.html"),
    khfw2: new Node("向KingHistorian添加历史数据","计算APP组态/函数说明/2KingHistorian访问函数/2向KingHistorian添加历史数据/向KingHistorian添加历史数据.html"),
    khfw3: new Node("从KingHistorian查询历史数据","计算APP组态/函数说明/2KingHistorian访问函数/3从KingHistorian查询历史数据/从KingHistorian查询历史数据.html"),
    kiofw1: new Node("KingIOserver Tag值数据结构","计算APP组态/函数说明/3KingIOServer访问函数/1KingIOserver Tag值数据结构/KingIOserver Tag值数据结构.html"),
    kiofw2: new Node("查询KingIOserver数据","计算APP组态/函数说明/3KingIOServer访问函数/2查询KingIOserver数据/查询KingIOserver数据.html"),
    kiofw3: new Node("修改KingIOServer数据","计算APP组态/函数说明/3KingIOServer访问函数/3修改KingIOServer数据/修改KingIOServer数据.html"),
    gxkfw1: new Node("关系库查询","计算APP组态/函数说明/4关系库访问函数/1关系库查询/关系库查询.html"),
    gxkfw2: new Node("关系库操作","计算APP组态/函数说明/4关系库访问函数/2关系库操作/关系库操作.html"),
    xths1: new Node("事件触发","计算APP组态/函数说明/5系统函数/1事件触发/事件触发.html"),
    xths2: new Node("日志相关","计算APP组态/函数说明/5系统函数/2日志相关/日志相关.html"),
    xths3: new Node("错误码相关","计算APP组态/函数说明/5系统函数/3错误码相关/错误码相关.html"),
    xths4: new Node("数学函数","计算APP组态/函数说明/5系统函数/4数学函数/数学函数.html"),
    //运维中心_节点管理
    jdgl1: new Node("功能介绍"),
    jdgl2: new Node("添加操作步骤"),
    jdgl3: new Node("编辑操作步骤"),
    jdgl4: new Node("删除操作步骤"),
    //运维中心_APP管理
    appgl1: new Node("功能介绍"),
    appgl2: new Node("APP的添加操作步骤"),
    appgl3: new Node("APP编辑端口号操作等"),
    appgl4: new Node("APP编辑操作步骤"),
    appgl5: new Node("APP部署"),
    appgl6: new Node("APP撤销部署"),
    appgl7: new Node("APP启动"),
    appgl8: new Node("APP重启"),
    appgl9: new Node("APP停止"),
    appgl10: new Node("移动APP"),
    appgl11: new Node("APP删除"),
    appgl12: new Node("批量启动APP"),
    appgl13: new Node("批量停止APP"),
    appgl14: new Node("批量重启APP"),
    appgl15: new Node("批量部署APP"),
    appgl16: new Node("批量撤销部署APP"),
    appgl17: new Node("APP日志"),




  
};
level3.n1.addChild(level4.mcjs1,level4.mcjs2,level4.mcjs3);//平台指引/产品概述
level3.n2.addChild(level4.mcjs4, level4.mcjs5);
level3.yhpz1.addChild(level4.cjgly1,level4.cjgly2,level4.cjgly3,level4.cjgly4);
level3.yhpz2.addChild(level4.gly1,level4.gly2,level4.gly3,level4.gly4);
level3.yhpz3.addChild(level4.ptyh1,level4.ptyh2,level4.ptyh3,level4.ptyh4);
level3.yhpz4.addChild(level4.dxyy1);
//计算app产品教程
level3.cpjc2.addChild(level4.dlkf1,level4.dlkf2);
level3.cpjc3.addChild(level4.jckf1,level4.jckf2);
level3.cpjc4.addChild(level4.gczgl1,level4.gczgl2,level4.gczgl3,level4.gczgl4,level4.gczgl5,level4.gczgl6);
level3.cpjc5.addChild(level4.gcgl1,level4.gcgl2,level4.gcgl3,level4.gcgl4,level4.gcgl5,level4.gcgl6);
level3.cpjc6.addChild(level4.sjcd1,level4.sjcd2);
level3.cpjc7.addChild(level4.sjy1);
level3.cpjc8.addChild(level4.jbgl1,level4.jbgl2,level4.jbgl3,level4.jbgl4,level4.jbgl5,level4.jbgl6);
level3.cpjc9.addChild(level4.jbyl1,level4.jbyl2);
level3.cpjc10.addChild(level4.jssl1,level4.jssl2);
level3.cpjc11.addChild(level4.rjkf1,level4.rjkf2,level4.rjkf3,level4.rjkf4,level4.rjkf5,level4.rjkf6);
//计算app函数说明
level3.hssm1.addChild(level4.ksfw1,level4.ksfw2,level4.ksfw3);
level3.hssm2.addChild(level4.khfw1,level4.khfw2,level4.khfw3);
level3.hssm3.addChild(level4.kiofw1,level4.kiofw2,level4.kiofw3);
level3.hssm4.addChild(level4.gxkfw1,level4.gxkfw2);
level3.hssm5.addChild(level4.xths1,level4.xths2,level4.xths3,level4.xths4);
//运维中心节点管理
level3.ywzx1.addChild(level4.jdgl1,level4.jdgl2,level4.jdgl3,level4.jdgl4);
//运维中心app管理
level3.ywzx2.addChild(level4.appgl1,level4.appgl2,level4.appgl3,level4.appgl4,level4.appgl5,level4.appgl6,level4.appgl7,level4.appgl8,level4.appgl9,level4.appgl10,level4.appgl11,level4.appgl12,level4.appgl13,level4.appgl14,level4.appgl15,level4.appgl16,level4.appgl17);

/**************** 第五级菜单 ****************/
const level5 = {
    /**平台指引-新手指引-操作流程总览 */
    a1: new Node("概况总览", "功能模块/开发系统/工具栏/文件/工程部署/工程部署.html1"),
    a2: new Node("登录", "功能模块/开发系统/工具栏/文件/设置/设置.html1"),
    a3: new Node("用户", "功能模块/开发系统/工具栏/文件/组合图素/组合图素.html1"),
    a4: new Node("开发环境","功能模块/开发系统/工具栏/文件/组合图素/组合图素.html1"),
    a5: new Node("运维中心","功能模块/开发系统/工具栏/文件/组合图素/组合图素.html1"),
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
level4.mcjs4.addChild(level5.a1, level5.a2, level5.a3,level5.a4,level5.a5); /*平台指引-新手指引-操作流程总览 */
// level4.cjgly1.addChild(level5.cjyhqx1,level5.cjyhqx2);//用户配置-超级管理员-用户权限
// level4.cjgly2.addChild(level5.cjmkgn1,level5.cjmkgn2);//用户配置-超级管理员-模块功能权限
// level4.gly1.addChild(level5.glyhqx1,level5.glyhqx2);//用户配置-管理员-用户权限
// level4.gly2.addChild(level5.glmkgn1,level5.glmkgn2);//用户配置-管理员-模块功能权限
// level4.ptyh1.addChild(level5.ptyhqx1,level5.ptyhqx2);//用户配置-普通用户-用户权限
// level4.ptyh2.addChild(level5.ptmkgn1,level5.ptmkgn2);//用户配置-普通用户-模块功能权限
















/**************** 第六级菜单 ****************/
const level6 = {
 
    // //基本图形模型
    // jbts1: new Node("属性配置", "功能模块/2D工艺流程图编辑器/工具箱/基本图形模型库/应用/属性配置/属性配置.html1", true),
    // jbts2: new Node("动画连接", "功能模块/2D工艺流程图编辑器/工具箱/基本图形模型库/应用/动画连接/动画连接.html1", true),


   
        
};
// //布局容器
// level5.c1.addChild(level6.bj1, level6.bj2, level6.bj3);
// level5.c2.addChild(level6.bj4, level6.bj5, level6.bj6);
// level5.c3.addChild(level6.bj7, level6.bj8, level6.bj9, level6.bj10);
// level5.c4.addChild(level6.bj11, level6.bj12, level6.bj13, level6.bj14);
// level5.c5.addChild(level6.bj15, level6.bj16, level6.bj17, level6.bj18);
// level5.c6.addChild(level6.bj19, level6.bj20, level6.bj21);
// level5.c7.addChild(level6.bj22, level6.bj23);
// level5.c8.addChild(level6.bj24, level6.bj25);

/**************** 第四级菜单 ****************/
// 可能是侧栏菜单也可能是 Tab 菜单
// const n1_1_2_1 = new Node("开发系统", filePath + "aaa.html1");
// n1_1_2.addChild(n1_1_2_1);

// const n1_1_2_2 = new Node("页面编辑器", filePath + "aaa.html1");
// n1_1_2.addChild(n1_1_2_2);

// const n1_1_2_3 = new Node("工程转化", filePath + "aaa.html1");
// n1_1_2.addChild(n1_1_2_3);

// const n1_1_2_4 = new Node("数据源", filePath + "aaa.html1");
// n1_1_2.addChild(n1_1_2_4);


// const n1_1_3_1 = new Node("组态式APP开发", filePath + "aaa.html1");
// n1_1_3.addChild(n1_1_3_1);

// const n1_1_3_2 = new Node("2D/3D/GIS过程数据相融合", filePath + "aaa.html1");
// n1_1_3.addChild(n1_1_3_2);

// const n1_1_3_3 = new Node("集成40+种组件", filePath + "aaa.html1");
// n1_1_3.addChild(n1_1_3_3);

// const n1_1_3_4 = new Node("支持ECharts图表", filePath + "aaa.html1");
// n1_1_3.addChild(n1_1_3_4);

/**************** 第五级菜单 ****************/
// 可能是侧栏菜单也可能是 Tab 菜单
// const n1_1_2_1_1 = new Node("水平布局", filePath + "aaa.html1");
// n1_1_2_1.addChild(n1_1_2_1_1);

// const n1_1_2_1_2 = new Node("水平布局2", filePath + "aaa.html1");
// n1_1_2_2.addChild(n1_1_2_1_2);

// /**************** 第六级菜单 ****************/
// // Tab 菜单
// const n1_1_2_1_2_1 = new Node("属性", filePath + "aaa.html1", true);
// n1_1_2_1_2.addChild(n1_1_2_1_2_1);
// const n1_1_2_1_2_2 = new Node("方法", filePath + "bbb.html1", true);
// n1_1_2_1_2.addChild(n1_1_2_1_2_2);
