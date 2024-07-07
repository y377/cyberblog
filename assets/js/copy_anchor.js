window.addEventListener("load", event_pageLoaded, false);

/**
 * @description 页面载入事件处理事件
 */
function event_pageLoaded() {
    // 还原图标样式延时时间 1000 毫秒
    const TIMER_DEFAULT_ICON_STYLE = 1000;
    // 代码块
    var copyAnchor = document.querySelectorAll('.js-toc-content .anchorjs-link');

    // 遍历代码块添加按钮
    for (let j = 0; j < copyAnchor.length; j++) {
        // 当前命中的代码块元素 <pre> 标签
        let ele_maodian = copyAnchor.item(j);
        // let ele_btn = document.createElement("button");

        // ele_maodian.setAttribute("class", "octicon btn btn-none");
        // 生成复制按钮后添加iconfont，添加样式
        const i_maodian = document.createElement("i");
        i_maodian.classList.add(...[`bi`, `bi-paragraph`,`align-middle`]);
        ele_maodian.appendChild(i_maodian);
        // ele_maodian.appendChild(ele_maodian.nextSibling);
        ele_maodian.setAttribute("data-clipboard-action", "copy");

        ele_maodian.setAttribute("data-bs-toggle", "tooltip");
        ele_maodian.setAttribute("data-bs-title", "点击复制");

        // 生成 鼠标悬停提示 - 实例对象
        const bs_btnTooltips_maodian = new bootstrap.Tooltip(ele_maodian);

        // 生成 ClipboardJS 实例对象
        const clipboard = new ClipboardJS(ele_maodian, {
            target: function(trigger) {
                return trigger.parentElement;
            },
        });

        // ClipboardJS 实例对象的拷贝成功事件处理函数
        clipboard.on("success", function(e) {
            // 获取当前用户点击的按钮触发元素 以及内部的i元素 ( i元素在按钮创建之初就已置入 )
            const currentTriggerElement = e.trigger;
            const i_maodiannnerIcon = currentTriggerElement.querySelector("i.bi-paragraph");
            // 控制指定元素的图标显示状态
            FN_styleChange_maodian(i_maodiannnerIcon, bs_btnTooltips_maodian, true);
            window.setTimeout(FN_styleChange_maodian.bind(null, i_maodiannnerIcon, bs_btnTooltips_maodian, false), TIMER_DEFAULT_ICON_STYLE);
            // 清除选区
            e.clearSelection();
        });
    }
}

/**
 * @description 控制指定元素的图标显示状态
 * @param {Object.Element} param_element 需要控制外观的元素
 * @param {Object.Element} param_elementTips 需要更改提示的元素
 * @param {Boolean} param_status 目标状态
 */
function FN_styleChange_maodian(param_element, param_elementTips, param_status) {
    // 默认与变动的样式
    const clissList_default = [`bi`, `bi-paragraph`];
    const clissList_changed = [`bi-check2`, `text-success`];

    // 要开启显示
    if (param_status == true) {
        // 移除默认样式，更换为新的样式
        param_element.classList.remove(...clissList_default);
        param_element.classList.add(...clissList_changed);
        param_elementTips.setContent({ ".tooltip-inner": "已复制" });

    } else {
        // 移除新样式，还原默认样式
        param_element.classList.add(...clissList_default);
        param_element.classList.remove(...clissList_changed);
        param_elementTips.setContent({ ".tooltip-inner": "点击复制" });

        param_elementTips.hide();
    }
}