window.addEventListener("load", event_pageLoaded, false);

function event_pageLoaded() {
  // 还原图标样式延时时间 1000 毫秒
  const TIMER_DEFAULT_ICON_STYLE = 1500;
  // 代码块
  // let codeChunk = document.querySelectorAll("pre > code:nth-child(2)");
   let codeChunk = document.querySelectorAll("pre > code:last-child");

  // 遍历代码块添加按钮
  for (let j = 0; j < codeChunk.length; j++) {
    // 当前命中的代码块元素 <pre> 标签
    let ele_pre = codeChunk.item(j);

    let ele_btn = document.createElement("button");
    ele_btn.classList.add("btn", "btn-none", "my-btn-hover");
    // 生成复制按钮后添加iconfont，添加样式
    const ele_i = document.createElement("i");
    ele_i.classList.add(...[`bi`, `bi-clipboard`, `text-white`]);
    ele_btn.appendChild(ele_i);
    ele_pre.appendChild(ele_btn, ele_pre.nextSibling);
    ele_btn.setAttribute("data-clipboard-action", "copy");
  
    ele_btn.setAttribute("data-bs-toggle", "tooltip");
    ele_btn.setAttribute("data-bs-title", "点击复制");

    // 生成 鼠标悬停提示 - 实例对象
    const bs_btnTooltips = new bootstrap.Tooltip(ele_btn);

    // 生成 ClipboardJS 实例对象
    const clipboard = new ClipboardJS(ele_btn, {
      target: function (trigger) {
        return trigger.parentElement;
      },
    });

    // ClipboardJS 实例对象的拷贝成功事件处理函数
    clipboard.on("success", function (e) {
      // 获取当前用户点击的按钮触发元素 以及内部的i元素 ( i元素在按钮创建之初就已置入 )
      const currentTriggerElement = e.trigger;
      const ele_innerIcon = currentTriggerElement.querySelector("i.bi-clipboard");
      // 控制指定元素的图标显示状态
      FN_styleChange(ele_innerIcon,bs_btnTooltips, true);
      window.setTimeout(FN_styleChange.bind(null, ele_innerIcon,bs_btnTooltips, false), TIMER_DEFAULT_ICON_STYLE);
      // 清除选区
      e.clearSelection();
    });
  }
}

function FN_styleChange(param_element, param_elementTips,param_status) {
  if (!param_element || !param_elementTips) {
    console.error('Invalid element references');
    return;
  }
  const clissList_default = [`bi-clipboard`, `text-white`];
  const clissList_changed = [`bi-clipboard-check`, `text-primary`];

  // 要开启显示
  if (param_status == true) {
    // 移除默认样式，更换为新的样式
    param_element.classList.remove(...clissList_default);
    param_element.classList.add(...clissList_changed);
    param_elementTips.setContent({".tooltip-inner":"已复制"});
    
  } else {
    // 移除新样式，还原默认样式
    param_element.classList.add(...clissList_default);
    param_element.classList.remove(...clissList_changed);
    param_elementTips.setContent({".tooltip-inner":"点击复制"});
    
    param_elementTips.hide();
  }
}


// window.addEventListener("load", event_pageLoaded, false);

// function event_pageLoaded() {
//     const TIMER_DEFAULT_ICON_STYLE = 1500;
//     let codeChunk = document.querySelectorAll("pre > code:last-child");

//     for (let j = 0; j < codeChunk.length; j++) {
//         let ele_pre = codeChunk.item(j);
//         let ele_btn = document.createElement("button");
//         ele_btn.classList.add("btn", "btn-none", "my-btn-hover");
//         const ele_i = document.createElement("i");
//         ele_i.classList.add(...[`bi`, `bi-clipboard`, `text-white`]);
//         ele_btn.appendChild(ele_i);
//         ele_pre.appendChild(ele_btn, ele_pre.nextSibling);
//         ele_btn.setAttribute("data-clipboard-action", "copy");

//         ele_btn.setAttribute("data-bs-toggle", "tooltip");
//         ele_btn.setAttribute("data-bs-title", "点击复制");

//         const bs_btnTooltips = new bootstrap.Tooltip(ele_btn);

//         const clipboard = new ClipboardJS(ele_btn, {
//             target: function (trigger) {
//                 return trigger.parentElement;
//             },
//         });

//         clipboard.on("success", debounce(function (e) {
//             const currentTriggerElement = e.trigger;
//             const ele_innerIcon = currentTriggerElement.querySelector("i.bi-clipboard");
//             FN_styleChange(ele_innerIcon, bs_btnTooltips, true);
//             window.setTimeout(FN_styleChange.bind(null, ele_innerIcon, bs_btnTooltips, false), TIMER_DEFAULT_ICON_STYLE);
//             e.clearSelection();
//         }, 300));
//     }
// }

// function FN_styleChange(param_element, param_elementTips, param_status) {
//     const clissList_default = [`bi-clipboard`, `text-white`];
//     const clissList_changed = [`bi-clipboard-check`, `text-success`];

//     if (param_status == true) {
//         param_element.classList.remove(...clissList_default);
//         param_element.classList.add(...clissList_changed);
//         param_elementTips.setContent({".tooltip-inner": "已复制"});
//     } else {
//         param_element.classList.add(...clissList_default);
//         param_element.classList.remove(...clissList_changed);
//         param_elementTips.setContent({".tooltip-inner": "点击复制"});
//         param_elementTips.hide();
//     }
// }

// // Adding debounce functionality to prevent rapid clicks
// function debounce(func, delay) {
//     let debounceTimer;
//     return function() {
//         const context = this;
//         const args = arguments;
//         clearTimeout(debounceTimer);
//         debounceTimer = setTimeout(() => func.apply(context, args), delay);
//     };
// }
