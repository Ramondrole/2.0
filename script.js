const videoLinks = {
    youtube: "https://youtu.be/glpCU_xYWz4?si=GczRLbtPGNAXAIZr",
    rutube: "https://rutube.ru/video/7481cbc256c8c66b62b91d5df812853c/?r=wd", 
    vk: "https://vkvideo.ru/video-238760985_456239017?list=ln-jiU3EbNdnY31Rjkvx7" 
};
function changeVideo(platform) {
    const iframe = document.getElementById('main-iframe');
    if(videoLinks[platform]) {
        iframe.src = videoLinks[platform];
    } else {
        alert("Ссылка для этой платформы не настроена!");
    }
    const buttons = document.querySelectorAll('.switch-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}
function setLanguage(lang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    const title = document.getElementById('site-title');
    const aboutLink = document.getElementById('nav-about');
    const contactLink = document.getElementById('nav-contact');
    const channelsLink = document.getElementById('nav-channels');
    const videoLabel = document.getElementById('video-label-text');
    if(lang === 'en') {
        title.innerText = "Community 2.0";
        aboutLink.innerText = "About";
        contactLink.innerText = "Contact";
        channelsLink.innerText = "Channels";
        videoLabel.innerText = "Watch the rules video";
    } else {
        title.innerText = "Community 2.0";
        aboutLink.innerText = "О нас";
        contactLink.innerText = "Прямая связь";
        channelsLink.innerText = "Каналы";
        videoLabel.innerText = "Посмотри видео с правилами";
    }
}
