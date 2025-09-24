document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('featuredProjects').scrollIntoView({ behavior: 'smooth' });
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scrollButton');
    var featuredProjects = document.getElementById('featuredProjects');

    if (isElementInViewport(featuredProjects)) {
        scrollButton.style.display = 'none';
    } else {
        scrollButton.style.display = 'block';
    }
});