document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");

  images.forEach(img => {
    const iconNames = ['hourglass', 'hourglass-top', 'hourglass-split', 'hourglass-bottom'];
    const icons = [];

    iconNames.forEach((name) => {
      const icon = document.createElement("i");
      icon.className = `bi bi-${name} position-absolute top-50 start-50 translate-middle`;  
      icon.style.display = "none";  // 初始状态，所有图标都隐藏
      icons.push(icon);
      img.insertAdjacentElement("beforebegin", icon);
    });

    let currentIconIndex = 0;
    icons[currentIconIndex].style.display = "block";  // 显示第一个图标
    const colorStages = ['text-success', 'text-success', 'text-success', 'text-success', 'text-success', 'text-success', 'text-success']; // 根据你的需求调整

    const changeIcon = () => {
      icons[currentIconIndex].style.display = "none";  // 隐藏当前图标
      icons[currentIconIndex].classList.remove(colorStages[currentIconIndex]);

      currentIconIndex++;
      if (currentIconIndex === icons.length) {
        currentIconIndex = 0;  // 重置回第一个图标
      }
      icons[currentIconIndex].style.display = "block";  // 显示下一个图标
      icons[currentIconIndex].classList.add(colorStages[currentIconIndex]);

      // 如果图片未加载完成，则继续切换图标
      if (!img.complete) {
        setTimeout(changeIcon, 1000);  
      } else {
        icons.forEach(icon => icon.style.display = "none");  // 图片加载完成后，隐藏所有图标
      }
    }

    setTimeout(changeIcon, 1000);  // 开始切换图标的循环

    img.addEventListener("load", () => {
      icons.forEach(icon => {
        icon.style.display = "none";  // 图片加载完成后，隐藏所有图标
        icon.classList.remove(...colorStages);  // 移除所有颜色类
        icon.classList.add('text-success');  // 添加加载完成的颜色
      });
    });
  });
});