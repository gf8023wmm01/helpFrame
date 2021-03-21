/**
 * 主逻辑文件
 * @file
 * @author ying.ye 2020-01-15
 */
document.body.className = "layui-layout-body";

/***************** 后台布局 *****************/
const layoutAdmin = document.createElement("div");
layoutAdmin.setAttribute("class", "layui-layout layui-layout-admin");
document.body.appendChild(layoutAdmin);

/***************** 顶部区域 *****************/
const layuiHearder = document.createElement("div");
layuiHearder.setAttribute("class", "layui-header my-header");
layoutAdmin.appendChild(layuiHearder);

const layuiLogo = document.createElement("div");
layuiLogo.className = "layui-logo";
layuiLogo.innerText = config.headerText;
layuiHearder.appendChild(layuiLogo);

const layuiSearch = document.createElement("div");
layuiSearch.setAttribute("class", "layui-form component");
layuiHearder.appendChild(layuiSearch);

const layuiSelect = document.createElement("select");
layuiSelect.setAttribute("lay-search", "");
layuiSelect.setAttribute("lay-filter", "component");

layuiSearch.appendChild(layuiSelect);

const layoutTop = document.createElement("ul");
layoutTop.setAttribute("class", "layui-nav layui-layout-right");
layuiHearder.appendChild(layoutTop);

/***************** 侧栏区域 *****************/
const layuiSide = document.createElement("div");
layuiSide.setAttribute("class", "layui-side layui-bg-black");
layoutAdmin.appendChild(layuiSide);

const layuiSideScroll = document.createElement("div");
layuiSideScroll.className = "layui-side-scroll";
layuiSide.appendChild(layuiSideScroll);

const layuiNavTree = document.createElement("ul");
layuiNavTree.setAttribute("class", "layui-nav layui-nav-tree");
layuiSideScroll.appendChild(layuiNavTree);

/***************** 中心区域 *****************/
const layuiBody = document.createElement("div");
layuiBody.id = "layui-body"
layuiBody.setAttribute("class", "layui-body");
layoutAdmin.appendChild(layuiBody);

/***************** 底部区域 *****************/
const layuiFooter = document.createElement("div");
layuiFooter.className = "layui-footer";
layuiFooter.innerText = config.footerText;
layoutAdmin.appendChild(layuiFooter);

/***************** 回顶部 *****************/
const backToTopElement = document.createElement("div");
backToTopElement.innerText = "back to top";
backToTopElement.className = "back-to-top";
document.body.appendChild(backToTopElement);
backToTopElement.onclick = function () {
    backToTop();
}

/***************** 分享链接 *****************/
const shareElement = document.createElement("div");
shareElement.innerText = "share link";
shareElement.className = "back-to-top share";
document.body.appendChild(shareElement);
shareElement.onclick = function () {
    copy();
}

// 当前 node ID
let currentNodeId = config.firstPage;

// 遍历节点并生成搜索列表
for (let i = 0; i < structDatas.length; i++) {
    traverseNode(structDatas[i]);
}
// 生成搜索列表的 Html
let layuiSelectHtml = `<option value="">Search</option>`;
for (let i = 0; i < searchList.length; i++) {
    layuiSelectHtml += `<option value="${searchList[i].href}">${searchList[i].path}</option>`
}
layuiSelect.innerHTML = layuiSelectHtml;

// 创建顶部导航区内容
for (let i = 0; i < structDatas.length; i++) {
    createTopNav(structDatas[i], layoutTop);
}
// 判断是否为?n=1_1_1_1_1这种格式，如果是3-6级则直接绘制，否则重定向
if (/^\?n=[1-9]+(_[1-9][0-9]*){2,5}$/.test(window.location.search)) {
//if (/^\?n=[1-9]+[0-9]*(_[1-9][0-9]*){1,5}$/.test(window.location.search)) {
    // URL 中的搜索路径
    const searchPath = window.location.search.substr(3);
    currentNodeId = searchPath;
    // 创建左侧栏
    createLeftNav(currentNodeId);
    refreshNav(currentNodeId);
} else {
    // 创建左侧栏
    createLeftNav(currentNodeId);
    refreshNav(currentNodeId);
}
// 搜索框渲染
layui.form.render();
// 搜索框事件添加
layui.form.on('select(component)', function (data) {
    if (data.value !== "") {
        redirect(data.value); //得到被选中的值
    }
});

window.onresize = function () {
    iframeAdjust();
}