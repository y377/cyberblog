// document.addEventListener('DOMContentLoaded', function() {
//     const preElements = document.querySelectorAll('pre');
//     preElements.forEach(preElement => {
//         const divWrapper = document.createElement('div');
//         divWrapper.classList.add('pre-wrapper', 'pt-4', 'rounded');
//         preElement.parentNode.insertBefore(divWrapper, preElement);
//         divWrapper.appendChild(preElement);
//     });
// }); 


hljs.addPlugin({
    "after:highlightBlock": ({ block }) => {
        // 模拟异步操作
        setTimeout(() => {
            const blockParent = block.closest("pre");
            if (!blockParent) return;

            blockParent.classList.add("pre-wrapper", "d-flex", "rounded","lh-base");

            const lineNumbersCode = document.createElement("code");
            const lineNumbers = [...Array(block.textContent.trimEnd().split(/\n/).length)].map((_, i) => i + 1).join("\n");

            lineNumbersCode.classList.add("hljs", "border-end", "border-secondary", "opacity-50", "flex-shrink-0", "text-center","px-2");
            lineNumbersCode.style.userSelect = "none";

            lineNumbersCode.textContent = lineNumbers;

            blockParent.insertBefore(lineNumbersCode, block);

            block.classList.add("flex-grow-1");
        }, 0); // 等待时间为 0 毫秒，即立即执行
    }
});



hljs.highlightAll();
// hljs.configure({ cssSelector: "code" });
//建议禁用hljs，推荐code.scss的全局代码，可以自定样式；
//问题在于hljs会添加"hljs language-undefined",假设有些不是代码的情况，比如某个文件夹名，如何突出显示