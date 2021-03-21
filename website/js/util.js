/**
 * 工具函数文件
 * @file
 * @author ying.ye 2020-01-15
 */

/**
 * 根据节点 ID 获取节点
 * @param {String} nodeId 节点 ID
 * @returns {Node | undefined}
 */
function getNodeByID(nodeId) {
    let indexArr = nodeId.split("_");
    let node;
    for (let i = 0; i < indexArr.length; i++) {
        if (i === 0) {
            node = structDatas[+indexArr[i] - 1];
        } else {
            node = node.children[+indexArr[i] - 1];
        }
    }
    return node;
}

/**
 * 根据节点 ID 进行重定向
 * @param {String} nodeId 节点 ID
 * @returns {undefined}
 */
function redirect(nodeId) {
    window.location.href = window.location.origin + window.location.pathname + "?n=" + urlFill(nodeId);
}

/**
 * 补全 URL
 * @returns {String} 新节点 ID
 */
function urlFill(nodeId) {
    let nodeLevel = nodeId.split("_").length;
    let newNodeId;
    if (nodeLevel === 1) {
        newNodeId = nodeId + "_1_1";
    } else if (nodeLevel === 2) {
        newNodeId = nodeId + "_1";
    } else {
        newNodeId = nodeId
    }
    return newNodeId;
}

/**
 * 回顶部方法
 * @returns {undefined}
 */
function backToTop() {
    let thisTabArr = document.getElementsByClassName("layui-tab-item layui-show");
    let thisTab;
    if (thisTabArr.length > 0) {
        thisTab = thisTabArr[0];
        let iframe = thisTab.getElementsByTagName("iframe");
        iframe[0].contentWindow.document.body.scrollIntoView(true);
    } else {
        let iframe = layuiBody.getElementsByTagName("iframe");
        iframe[0].contentWindow.document.body.scrollIntoView(true);
    }
}

// 搜索列表
const searchList = [];
/**
 * 遍历节点，辅助搜索功能
 * @param {Node} node 节点 
 * @param {String | undefined} path 路径
 */
function traverseNode(node, path) {
    if (path === undefined) {
        for (let i = 0; i < node.children.length; i++) {
            traverseNode(node.children[i], node.name);
        }
    } else {
        if (node.children.length !== 0) {
            if (node.children[0].isTab) {
                searchList.push({
                    "path": path + ">" + node.name,
                    "href": node.id,
                });
            } else {
                for (let i = 0; i < node.children.length; i++) {
                    if (node.name === "") {
                        traverseNode(node.children[i], path);
                    } else {
                        traverseNode(node.children[i], path + ">" + node.name);
                    }
                }
            }
        } else {
            searchList.push({
                "path": path + ">" + node.name,
                "href": node.id,
            });
        }
    }
}

/**
 * 根据数据创建顶部导航栏
 * @param {Node} node 节点
 * @param {DOM} parentElement 父元素
 * @returns {undefined}
 */
function createTopNav(node, parentElement) {
    if (node.level === 1) {
        // 第一级，属于页眉
        // 生成自己
        let tempElement = document.createElement('li');
        tempElement.className = "layui-nav-item";
        // tempElement.innerHTML = `<a href="javascript: redirect('${node.id}')">${node.name}</a>`;
        // tempElement.innerHTML = `<a href="?n=${urlFill(node.id)}">${node.name}</a>`;
        tempElement.innerHTML = `<a href="javascript: refreshNav('${node.id}')">${node.name}</a>`;
        parentElement.appendChild(tempElement);
        // 生成子
        if (node.isHaveChildren()) {
            let tempElementChild;
            if (node.children[0].name !== "") {
                // 第二级名称不为空，代表有内容
                tempElement.innerHTML = `<a href="javascript:;">${node.name}</a>`;
                tempElementChild = document.createElement('dl');
                tempElementChild.className = "layui-nav-child";
                tempElement.appendChild(tempElementChild);
            } else {
                tempElementChild = tempElement;
            }
            for (let i = 0; i < node.children.length; i++) {
                createTopNav(node.children[i], tempElementChild);
            }
        }
    } else if (node.level === 2) {
        // 第二级，比较特殊，可以有内容，也可以没有内容，属于页眉
        if (node.name !== "") {
            // 第二级名称不为空，代表有内容
            let tempElement = document.createElement('dd');
            let name = node.name;
            // tempElement.innerHTML = `<a href="javascript:redirect('${node.id}')">${node.name}</a>`;
            // tempElement.innerHTML = `<a href="?n=${urlFill(node.id)}">${node.name}</a>`;
            tempElement.innerHTML = `<a href="javascript: refreshNav('${node.id}')">${node.name}</a>`;
            parentElement.appendChild(tempElement);
        }
        if (node.isHaveChildren()) {
            for (let i = 0; i < node.children.level; i++) {
                let tempElement = document.createElement('li');
                tempElement.className = "layui-nav-item";
                let name = node.children[i].name;
                // tempElement.innerHTML = `<a href="javascript:redirect(${node.id})">${node.name}</a>`;
                // tempElement.innerHTML = `<a href="?n=${urlFill(node.id)}">${node.name}</a>`;
                tempElement.innerHTML = `<a href="javascript: refreshNav('${node.id}')">${node.name}</a>`;
                parentElement.appendChild(tempElement);
                createTopNav(node.children[i], tempElement);
            }
        }
    }
}

/**
 * 通过一级或二级导航栏点击，创建左侧导航栏
 * @param {String} nodeId 节点 ID
 * @returns {undefined}
 */
function createLeftNav(nodeId) {
    let topNodeId;
    if(nodeId.length<3){
       topNodeId = nodeId.substr(0, 3); 
   }else{
        var len = nodeId.split("_")[1].length
        if(len===2){
            topNodeId = nodeId.substr(0, 4);
         }else{
             topNodeId = nodeId.substr(0, 3);
        } 
   }
    let node = getNodeByID(topNodeId);
    if (node === undefined) {
            node = getNodeByID(config.firstPage);
    }
    if (node.level === 1) {
        node = node.children[0];
    }
    layuiNavTree.innerHTML = "";
    let expandFlag = false;
    for (let i = 0; i < node.children.length; i++) {
        if (nodeId.split("_")[2] == i + 1) {
            expandFlag = true;
        } else {
            expandFlag = false;
        }
        createHtmlForLeftNav(node.children[i], layuiNavTree, expandFlag);
    }

    function createHtmlForLeftNav(node, parentElement, expandFlag) {
        let tempElement;
        if (node.level === 3) {
            // 第三级侧栏
            tempElement = document.createElement('li');
            if (expandFlag) {
                tempElement.setAttribute("class", "layui-nav-item layui-nav-itemed");
            } else {
                tempElement.className = "layui-nav-item";
            }
        } else if (node.level >= 4 && !node.isTab) {
            tempElement = document.createElement('dd');
            if (expandFlag) {
                tempElement.setAttribute("class", "layui-nav-itemed");
            }
        }

        parentElement.appendChild(tempElement);
        // tempElement.innerHTML = `<a href="javascript: redirect('${node.id}')">${node.name}</a>`;
        // tempElement.innerHTML = `<a href="?n=${urlFill(node.id)}">${node.name}</a>`;
        tempElement.innerHTML = `<a title="${node.name}" href="javascript: refreshNav('${node.id}')">${node.name}</a>`;
        if (node.isHaveChildren()) {
            // 有子，生成子
            let tempElementChild;
            if (!node.children[0].isTab) {
                // 子级不为 Tab 继续循环查找下一级
                tempElement.innerHTML = `<a title="${node.name}" href="javascript:;">${node.name}</a>`;
                tempElementChild = document.createElement('dl');
                tempElementChild.className = "layui-nav-child";
                tempElement.appendChild(tempElementChild);
                let tempExpandFlag = false;
                for (let i = 0; i < node.children.length; i++) {
                    if (currentNodeId.indexOf(node.children[i].id) !== -1) {
                        tempExpandFlag = true;
                    } else {
                        tempExpandFlag = false;
                    }
                    createHtmlForLeftNav(node.children[i], tempElementChild, tempExpandFlag);
                }
            }
        }
    }
    layui.element.render();
}

/**
 * 创建中心区域
 * @param {String} nodeId 节点ID
 */
function createBody(nodeId) {
    let node = getNodeByID(nodeId);
    layuiBody.innerHTML = "";
    if (node.children.length !== 0) {
        if (!node.children[0].isTab) {
            // 如果有子但是不是 Tab 就什么也不干
            return;
        }
        // 中心区带 Tab
        // 创建 Tab 区
        const layuiTab = document.createElement("div");
        layuiTab.setAttribute("class", "layui-tab layui-tab-brief");
        layuiBody.appendChild(layuiTab);

        // 创建 Tab Title 区
        const layuiTabTitle = document.createElement("ul");
        layuiTabTitle.className = "layui-tab-title";
        layuiTab.appendChild(layuiTabTitle);

        // 创建 Tab Content 区
        const layuiTabContent = document.createElement("div");
        layuiTabContent.setAttribute("class", "layui-tab-content");
        layuiTabContent.style.padding = 0;
        layuiTab.appendChild(layuiTabContent);

        // 创建 Tab Title 区名称
        for (let i = 0; i < node.children.length; i++) {
            let tempElement = document.createElement("li");
            let tempItemElement = document.createElement("div");
            tempItemElement.setAttribute("class", "layui-tab-item");

            if (i === 0) {
                tempElement.className = "layui-this";
                tempItemElement.setAttribute("class", "layui-tab-item layui-show");
            }

            tempElement.innerText = node.children[i].name;
            layuiTabTitle.appendChild(tempElement);

            layuiTabContent.appendChild(tempItemElement);

            let iframe = document.createElement("iframe");
            iframe.frameBorder = "0";
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            if (node.id === currentNodeId) {
                iframe.src = node.children[i].href;
            }
            tempItemElement.appendChild(iframe);

        }
    } else {
        // 中心区不带 Tab
        let iframe = document.createElement("iframe");
        iframe.frameBorder = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        if (node.id === currentNodeId) {
            iframe.src = node.href;
        }
        layuiBody.appendChild(iframe);
    }
}

/**
 * 刷新导航栏
 * @param {String} nodeId 新节点 ID
 * @returns {undefined}
 */
function refreshNav(nodeId) {
    currentNodeId = nodeId;
    //if (nodeId.length <= 4) {
    var n=(nodeId.split('_')).length-1;
    if (n <= 1) { 
        // 一级、二级直接刷新左侧栏及中心区
        layuiNavTree.innerHTML = "";
        createLeftNav(currentNodeId);
        refreshNav(urlFill(currentNodeId));
    } else {
        // 三级及以上层级直接创建中心区
        createBody(currentNodeId);
    }
    iframeAdjust();
}

/**
 * 调整 iframe 框架大小宽度等
 * @returns {undefined}
 */
function iframeAdjust() {
    let iframe = document.getElementsByTagName("iframe");
    for (let i = 0; i < iframe.length; i++) {
        if (iframe[i].parentNode.id !== "layui-body") {
            iframe[i].style.height = document.getElementById("layui-body").clientHeight - 57 + 'px';
        }
        // 去掉Typora生成的html中的宽度限制
        iframe[i].contentWindow.onload = function () {
            this.document.getElementById("write").style.maxWidth = "none";
        }
    }
}

/**
 * 复制链接到剪切板
 * @returns {undefined}
 */
function copy() {
    // 创建一个元素用于保存要复制的内容
    let textEle = document.createElement("div");
    textEle.innerText = window.location.origin + window.location.pathname + "?n=" + currentNodeId;
    document.body.appendChild(textEle);

    let range = document.createRange(textEle);
    // 传入需要选中的节点
    range.selectNodeContents(textEle);
    let selection = document.getSelection();
    // 清空选中的区域
    selection.removeAllRanges();
    // 添加选中区域
    selection.addRange(range);
    // 执行复制
    document.execCommand('Copy');
    // 删除此元素
    textEle.remove();
    layer.msg('链接已复制到剪贴板', {time: 1000});
}