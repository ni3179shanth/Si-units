const siUnits = {
    "m": "Meter (length)",
    "kg": "Kilogram (mass)",
    "s": "Second (time)",
    "A": "Ampere (electric current)",
    "K": "Kelvin (thermodynamic temperature)",
    "mol": "Mole (amount of substance)",
    "cd": "Candela (luminous intensity)",
    "mol":"Mole(amount of substance)",
    "Hz":"Hertz(frequency)",    
    "N" : "Newton(force)",
    "Pa":"Pascal(pressure)",
    "J":"Joule(energy)",
    "W":"Watt(power)",
    "C":"Coulomb(charge)",
    "V":"Volt(voltage)",
    "F":"Farad(capacitance)",   
    "Ω":"Ohm(electrical resistance)",
    "S":"Siemens(magnetic flux)",
    "Wb":"Weber(magnetic flux density)",
    "T":"Tesla(thermal conductivity)",
    "H":"Henry(magnetic flux)",
    "lm":"Lumen(luminous intensity)",
    "lx":"Lux(illuminance)",
    "Bq":"Becquerel(electric constant)",
    "Gy":"Gray(magnetic flux density)",
    "Sv":"Sievert(magnetic flux)",
    "kat":"Katal(angle)",
    "AU":"Astronomical unit(distance)",
    "pc":"Parsec(distance)",
    "ft":"Foot(length)",
    "m":"Mile(length)",

    "yd":"Yard(length)",
    "mi":"Mile(length)",
    "in":"Inch(length)",    
    "out":"Outch(length)",

    
};

  
function searchSIUnit() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    for (const unit in siUnits) {
        if (siUnits[unit].toLowerCase().includes(searchInput)) {
            const result = document.createElement('p');
            result.textContent = unit + ": " + siUnits[unit];
            outputDiv.appendChild(result);
        }
    }

    if (outputDiv.innerHTML === '') {
        outputDiv.textContent = "No matching SI unit found.";
    }
}