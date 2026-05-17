const videoLinks = {
    youtube: "https://www.youtube.com/embed/glpCU_xYWz4",
    rutube: "https://rutube.ru/play/embed/7481cbc256c8c66b62b91d5df812853c",
    vk: "https://vkvideo.ru/video_ext.php?oid=-238760985&id=456239017&hash=7c7b5a5c5a8e8f3b"
};

function changeVideo(platform, activeButton) {
    const iframe = document.getElementById('main-iframe');
    if (videoLinks[platform]) {
        iframe.src = videoLinks[platform];
    } else {
        alert("Ссылка для этой платформы не настроена!");
        return;
    }
    
    const buttons = document.querySelectorAll('.switch-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

const videoButtons = document.querySelectorAll('.switch-btn');
videoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const platform = btn.getAttribute('data-video');
        changeVideo(platform, btn);
    });
});

function setLanguage(lang, activeLangBtn) {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => btn.classList.remove('active'));
    if (activeLangBtn) {
        activeLangBtn.classList.add('active');
    }
    
    const title = document.getElementById('site-title');
    const aboutLink = document.getElementById('nav-about');
    const contactLink = document.getElementById('nav-contact');
    const channelsLink = document.getElementById('nav-channels');
    const videoLabel = document.getElementById('video-label-text');
    
    if (lang === 'en') {
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

const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang, btn);
    });
});

const currentSrc = document.getElementById('main-iframe').src;
if (currentSrc.includes('youtube.com/embed')) {
    document.querySelector('.switch-btn[data-video="youtube"]').classList.add('active');
} else if (currentSrc.includes('rutube.ru/play/embed')) {
    document.querySelector('.switch-btn[data-video="rutube"]').classList.add('active');
} else if (currentSrc.includes('vkvideo.ru/video_ext.php')) {
    document.querySelector('.switch-btn[data-video="vk"]').classList.add('active');
}