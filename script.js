function showMainPage() {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('mainPage').classList.remove('hidden');
}

function showLanding() {
    document.getElementById('mainPage').classList.add('hidden');
    document.getElementById('landing').classList.remove('hidden');
}

function orderPickle(pickleName, weightSelectId) {
    const weightSelect = document.getElementById(weightSelectId);
    const selectedWeight = weightSelect.value;
    const whatsappURL = `https://wa.me/919866327108?text=I want to order ${pickleName} - ${selectedWeight}`;
    window.open(whatsappURL, "_blank");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});