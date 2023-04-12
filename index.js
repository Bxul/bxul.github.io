const observer = new IntersectionObserver((e) => {
    e.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenelements = document.querySelectorAll(".skillHidden");
hiddenelements.forEach((el) => observer.observe(el));

function easteregg() {
    alert("🎉축하드립니다 당신은 이스터에그를 발견하셨습니다!!");
}
function discordLink() {
    var discord = "https://discord.gg/VAnYcEmQHU";
    window.open(discord);
}

function MinecraftLink() {
    var Minecrft = "https://laby.net/@Bxul";
    window.open(Minecrft);
}

const mobile_nav = document.querySelector(".mobile_nav_icon");
mobile_nav.onclick = function() {
    navBar = document.querySelector(".nav_links");
    navBar.classList.toggle("mobile")
}