/**
 * 节点类，用于记录架构中每个节点的数据和关系
 * @author ying.ye 2019-12-31
 */
class Node {
    /**
     * Node 的构造函数
     * @param {String | undefined} name 节点名称
     * @param {String | undefined} href 关联的 html 文件的路径
     * @param {Boolean | undefined} isTab 是否为 Tab 类型
     */
    constructor(name, href, isTab) {
        /** 节点名称 */
        this.name = name === undefined ? "" : name;
        /** 节点链接，config.filePath 是一个全局变量 */
        this.href = href === undefined ? "" : config.filePath + href;
        /** 是否为 Tab 类型 */
        this.isTab = isTab === undefined ? false : isTab;
        /** 节点 ID, 自动生成 */
        this.id = "";
        /** 节点所在层级 */
        this.level = 1;
        /** 子节点数组 */
        this.children = [];
    }

    /**
     * 添加子节点
     * @param  {...Node} node 节点，可以是多个
     * @returns {undefined}
     */
    addChild(...node) {
        for (let i = 0; i < node.length; i++) {
            let childNode = node[i];
            childNode.level = this.level + 1;
            if (childNode.level > 16) {
                alert("error, too many level");
            } else {
                childNode.id = this.id + "_" + (this.children.length + 1);
                this.children.push(childNode);
            }
        }
    }
    /**
     * 是否有子节点
     * @returns {boolean} 结果
     */
    isHaveChildren() {
        if (this.children.length === 0) {
            return false;
        } else {
            return true;
        }
    }
}