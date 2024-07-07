// document.addEventListener('DOMContentLoaded', () => {
//     const videoElements = document.querySelectorAll('.video');
//     videoElements.forEach(videoElem => {
//         const linkElem = videoElem.querySelector('a');
//         const sourceUrl = linkElem ? linkElem.getAttribute('href') : null;
//         if (sourceUrl) {

//             const videoContainer = document.createElement('div');
//             videoContainer.style.width = '100%';

//             const width = videoElem.offsetWidth;

//             const height = (width * 9) / 16;

//             new Player({
//                 el: videoContainer,
//                 url: sourceUrl,
//                 width: width + 'px',
//                 height: height + 'px'
//             });

//             videoElem.replaceWith(videoContainer);
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const videoElements = document.querySelectorAll('.video');

    videoElements.forEach(videoElem => {
        const linkElem = videoElem.querySelector('a');
        const sourceUrl = linkElem ? linkElem.getAttribute('href') : null;

        if (sourceUrl) {

            const videoContainer = document.createElement('div');
            videoContainer.setAttribute('class', 'rounded')

            videoElem.replaceWith(videoContainer);


            new Player({
                el: videoContainer,
                url: sourceUrl,
                fluid: true,
                fitVideoSize: 'fixed',
                videoFillMode: 'contain',
                autoplayMuted: true,
                plugins: [],
                rotate: [{
                    "innerRotate": true,
                    "clockwise": false,
                }]
            });

        }
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const audioElements = [...document.querySelectorAll('.audio')];

//     audioElements.forEach(audioElem => {
//         const linkElem = audioElem.querySelector('a');

//         if (linkElem) {
//             const sourceUrl = linkElem.getAttribute('href');

//             // 创建一个新的 audio 元素并设置属性
//             const newAudio = document.createElement('audio');
//             newAudio.src = sourceUrl;
//             newAudio.controls = true; // 添加播放控制

//             // 替换原 a 元素
//             audioElem.replaceChild(newAudio, linkElem);
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    [...document.querySelectorAll('.audio a')].forEach(linkElem => {
        const sourceUrl = linkElem.getAttribute('href');

        // 创建 audio 元素
        const newAudio = document.createElement('audio');
        newAudio.src = sourceUrl;

        const container = linkElem.closest('.audio');
        container.replaceChild(newAudio, linkElem);


        // 设置ID并初始化西瓜播放器
        const playerId = `xgplayer_${new Date().getTime()}`; // 使用时间戳确保唯一性
        container.id = playerId;

        new window.Player({
            id: playerId,
            url: sourceUrl,
            volume: 0.8,
            // width: window.innerWidth,
            height: 60,
            mediaType: 'audio',
            presets: ['default', window.MusicPreset],
            ignores: ['playbackrate'],
            controls: {
                initShow: true,
                mode: 'flex'
            },
            marginControls: true,
            videoConfig: {
                crossOrigin: "anonymous"
            }
        }).crossOrigin = "anonymous";
    });
});