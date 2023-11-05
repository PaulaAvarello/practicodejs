window.onload = function() {
    var resumen = localStorage.getItem('resumen');
    if (resumen) {
        document.getElementById('total').innerText = resumen;
    }
}