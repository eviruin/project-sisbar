document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.content-item').forEach(item => {
            item.classList.remove('active');
        });

        const contentId = this.getAttribute('data-content');
        const contentToShow = document.getElementById(contentId);
        if (contentToShow) {
            contentToShow.classList.add('active');
        }
    });
});