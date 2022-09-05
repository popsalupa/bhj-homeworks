let clickCounter = document.getElementById('clicker__counter').textContent;
let cookie = document.getElementById('cookie');

cookie.onclick = function() {
    document.getElementById('clicker__counter').textContent = ++clickCounter;

    let size = document.getElementById('cookie').width;

    if (size == 200) {
        document.getElementById('cookie').width = 250;
    }   else {
        document.getElementById('cookie').width = 200;
    }
}
