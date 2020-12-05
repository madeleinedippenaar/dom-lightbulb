function turnOn() {
    let on = document.getElementById('lightbulb');
    on.style.backgroundColor = "yellow";
}

function turnOff() {
    let off = document.getElementById('lightbulb');
    off.style.backgroundColor = "darkgray";
}

function toggle() {
    let toggleSwitch = document.getElementById('lightbulb');
    if (toggleSwitch.style.backgroundColor === "yellow") {
        toggleSwitch.style.backgroundColor = "darkgray";
    } else if (toggleSwitch.style.backgroundColor === "darkgray") {
        toggleSwitch.style.backgroundColor = "yellow";
    }
}

function endAll() {
    document.getElementById("on").disabled = true;
    document.getElementById("off").disabled = true;
    document.getElementById("toggle").disabled = true;
    document.getElementById("end").disabled = true;
    var removeBulb = document.getElementById("lightbulb");
    removeBulb.parentNode.removeChild(removeBulb);
}
