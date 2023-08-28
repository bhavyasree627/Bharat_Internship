function convertToCelsius() {
    const f= parseFloat(document.getElementById('fahrenheit').value);
    const c = (f - 32) * (5 / 9);
    document.getElementById('celsius').value = c.toFixed(2);
}

function convertToFahrenheit() {
    const c = parseFloat(document.getElementById('celsius').value);
    const f = (c * 9 / 5) + 32;
    document.getElementById('fahrenheit').value = f.toFixed(2);
}