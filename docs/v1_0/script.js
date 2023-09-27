document.addEventListener('DOMContentLoaded', function () {
    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(function (collapsible) {
        collapsible.addEventListener('click', function () {
            const parentLi = this.parentElement;
            parentLi.classList.toggle('collapsed');
        });
    });
});
