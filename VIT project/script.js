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
    "fm":"Femi(length)",
    "kn":"Kont(Speed)",
    "nmi":"NauticalMile(distance)",
    "Oe":"Oersted(magnetic field)",
    "rad":"Radian(angle)",
    "sr":"Second(time)",
    "min":"Minute(time)",
    "hr":"Hour(time)",
    "day":"Day(time)",
    "week":"Week(time)",
    "month":"Month(time)",
    "year":"Year(time)",
    "decade":"Decade(time)",
    "century":"Century(time)",
    "millenium":"Millenium(time)",
    "sr":"Steradian(angle)",
    "solar":"Solar(angle)",
    "ly":"Lumens(illuminance)",
    "lx":"Lux(illuminance)",
    "Bq":"Becquerel(electric constant)",
    "Gy":"Gray(magnetic flux density)",
    "Sv":"Sievert(magnetic flux)",
    "Å":"Angstrom(length)",
    "Lx":"Lux(illuminance)",
    "Ci":"Curie(radioactivity)",
    "dyn":"Dyne(force)",
    "erg":"Erg(energy)",
    "Gal":"Gal(accelaration)",
    "Np":"Neper(logarithm unit)",
    "Pa":"Pascal(pressure)",
    "J":"Joule(energy)",
    "W":"Watt(power)",
    "C":"Coulomb(charge)",
    "V":"Volt(voltage)",
    "P":"Posie(dynamic  viscosity)",
    "sb":"Stilb(luminance)",
    "Ba":"Barye(pressure)",
    "ph":"Phot(illuminance)",
    "blm":"Biolumen(luminance energy)",
    "Da":"Dalton(mass)",
    "Rd":"Rutherford(acitivity)",
    "G":"Gauss(magnetic flux density)",
    "lb":"Pound(mass)",
    "slug":"Slug(mass)",
    "ft-lb":"Foot-pound(mass)",







    
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
