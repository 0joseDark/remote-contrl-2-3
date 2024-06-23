// static/display.js

function updateDisplays() {
    fetch("/read_pins")
        .then(response => response.json())
        .then(data => {
            document.getElementById('hex-display').innerText = "Valor Hex: " + data.hex_value;
            document.getElementById('binary-display').innerText = "Valor Binário: " + data.binary_value;
        });
}

setInterval(updateDisplays, 1000);
