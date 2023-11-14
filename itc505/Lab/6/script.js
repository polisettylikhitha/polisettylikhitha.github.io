document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const colorButton = document.getElementById('colorButton');
    
    colorButton.addEventListener('click', function() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        content.style.backgroundColor = randomColor;
    });
});
