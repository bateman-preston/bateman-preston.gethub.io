let t = parseFloat(document.getElementById("temp").textContent);
let s = parseFloat(document.getElementById("wind").textContent);
//takes wind speed and temp and calculates windchill
let w = Math.round(35.74 + 0.6215 * t - (35.75*(s**0.16))+ 0.4275 * t *(s**0.16));
if (t <= 50 && s > 3) {
    document.getElementById("windchill").innerHTML = w;
}
else {
    document.getElementById("windchill").innerHTML = "N/A";
}