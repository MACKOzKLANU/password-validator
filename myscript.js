// Function for toggling password visibility
function myFunction() {
    var x = document.getElementById("haslo");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// Password validation function
function Passwordvalidate() {
    // Retrieve password and validation criteria values
    let haslo = document.getElementById('haslo').value;
    console.log(haslo);

    let minimalnaliczbaliczb = document.getElementById('minimum').value;
    console.log(minimalnaliczbaliczb);

    let maksymalnaliczbaliczb = document.getElementById('max').value;
    console.log(maksymalnaliczbaliczb);

    let duze = document.getElementById('liczbaduze').value;
    console.log(duze);

    let znakible = document.getElementById('zakazane').value;
    console.log(znakible);

    let ilespec = document.getElementById('liczbaspecjal').value;
    console.log(ilespec);

    // Split forbidden and allowed characters into arrays
    let zakazanelista = znakible.split(",");
    console.log(zakazanelista);

    let znakidozwolonje = document.getElementById('dozw').value;
    console.log(znakidozwolonje);

    let dozwolonelista = znakidozwolonje.split(",");
    console.log(dozwolonelista);

    let liczbaznakowdozwolonych = 0;

    // Initialize result text and counters
    let resultText = 'Result: ';
    let oki = 0;
    var i = 0;
    var j = 0;

    console.log("===========================================");
    console.log("Validation in progress...");
    alert("Validation initiated...");

    // Validation checks
    if (haslo.length < minimalnaliczbaliczb) {
        resultText += 'Password is too short, it must have at least ' + minimalnaliczbaliczb + ' characters, ';
    } else if (haslo.length > maksymalnaliczbaliczb) {
        resultText += 'Password is too long, ';
    } else {
        resultText += 'Password length is valid, ';
        oki += 1;
    }

    // Check allowed characters
    while (i < dozwolonelista.length) {
        if (haslo.indexOf(dozwolonelista[i]) >= 0) {
            liczbaznakowdozwolonych += 1;
        }
        i += 1;
    }

    // Check forbidden characters
    while (j < zakazanelista.length) {
        if (haslo.indexOf(zakazanelista[j]) >= 0) {
            resultText += 'Password contains forbidden characters,';
        }
        j += 1;
    }

    // Check uppercase letters
    var duzzz = 0;
    for (var i = 0; i < haslo.length; i++) {
        if (haslo[i] >= 'A' && haslo[i] <= 'Z') {
            duzzz++;
        }
    }
    if (duzzz < duze) {
        resultText += 'Password must contain at least ' + duze + ' uppercase letters, ';
    } else {
        resultText += 'Number of uppercase letters is valid, ';
        oki += 1;
    }

    // Check special characters
    if (liczbaznakowdozwolonych < ilespec) {
        resultText += 'Password must contain at least ' + ilespec + ' special characters.';
    } else {
        resultText += 'Number of special characters is valid.';
        oki += 1;
    }

    // Display result and show appropriate alert
    document.getElementById('result').innerText = resultText;
    if (oki == 3) {
        alert("Validation successfully completed. Password meets the requirements.");
    } else if (oki < 3) {
        alert("!Validation failed. Password does not meet the requirements!.");
    }
}
