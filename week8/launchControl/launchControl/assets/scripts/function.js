var gasLevel = 0, traction = 1, battery = 0, brake = 1, intMode = 0;

showTime();

function getGas() {
    if (gasLevel == 0) {
        gasLevel = 1;
        document.getElementById('gas').src = './assets/images/gas1.png';
        document.getElementById('bttn_gas').src = './assets/images/bttn_gas_1.png';
    } else {
        gasLevel = 0;
        document.getElementById('gas').src = './assets/images/gas0.png';
        document.getElementById('bttn_gas').src = './assets/images/bttn_gas_0.png';
    }
}

function setTraction() {
    if(traction == 0) {
        traction = 1;
        document.getElementById("bttn_trac").src='./assets/images/bttn_trac_1.PNG';
        document.getElementById("trac").src="./assets/images/trac1.png";
    } else {
        traction = 0;
        document.getElementById("bttn_trac").src='./assets/images/bttn_trac_0.PNG';
        document.getElementById("trac").src="./assets/images/trac0.png";
    }
}

function chargeBattery() {
    if(battery == 0) {
        gasLevel = 1;
        document.getElementById("bttn_batt").src='./assets/images/bttn_batt_1.PNG';
        document.getElementById("batt").src="./assets/images/batt1.png";
    } else {
        gasLevel = 0;
        document.getElementById("bttn_batt").src='./assets/images/bttn_batt_0.PNG';
        document.getElementById("batt").src="./assets/images/batt0.png";
    }
}

function setBrake() {
    if(brake == 0) {
        brake = 1;
        document.getElementById("bttn_park").src='./assets/images/bttn_park_1.PNG';
        document.getElementById("brake").src="./assets/images/p1.png";
    } else {
        brake = 0;
        document.getElementById("bttn_park").src='./assets/images/bttn_park_0.PNG';
        document.getElementById("brake").src="./assets/images/p0.png";
    }
}