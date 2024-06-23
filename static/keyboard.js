// static/keyboard.js

function toggle(pin, action) {
    fetch(`/${action}/${pin}`, { method: 'POST' })
        .then(response => {
            if (!response.ok) {
                alert("Falha na comunicação com o servidor!");
            }
        });
}
