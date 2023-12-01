const submit = document.getElementById('submit');


submit.addEventListener("click", () => {
    let optiuni = document.getElementsByName('rating');
    for (var i = 0; i < optiuni.length; i++) {
        if (optiuni[i].checked) {
            value.innerHTML = '<p>Valoarea selectată este: ' + optiuni[i].value + '</p>';
            window.location.href = '/thank-you-state.html';
        }
    }
});
