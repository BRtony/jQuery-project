$(function() {
    window.addEventListener('scroll', function() { //requisito do projeto - scroll
        const header = $('#pageHeader');
        const windowPosition = window.scrollY > 0;
        header.toggleClass('scrolling-active', windowPosition);
    });
})