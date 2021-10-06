let info = [
  { name: "Silfur", Edlisvidnam: "0,0167", Edlisleidni: "60", Hitastudull: "0,0041" }, // 0
  { name: "Eir", Edlisvidnam: "0,0178", Edlisleidni: "56", Hitastudull: "0,0041" },
  { name: "Gull", Edlisvidnam: "0,022", Edlisleidni: "45,7",  Hitastudull: "0,00398" },
  { name: "Ál", Edlisvidnam: "0,0278", Edlisleidni: "36,0", Hitastudull: "0,004" },
  { name: "Wolfram", Edlisvidnam: "0,055", Edlisleidni: "18,2", Hitastudull: "0,0046" },
  { name: "Zink", Edlisvidnam: "0,0625", Edlisleidni: "16,0", Hitastudull: "0,0042" },
  { name: "Nikkel", Edlisvidnam: "0,095", Edlisleidni: "10,5", Hitastudull: "0,0055" },
  { name: "Járn", Edlisvidnam: "0,1", Edlisleidni: "10", Hitastudull: "0,00657" },
  { name: "Platína", Edlisvidnam: "0,098", Edlisleidni: "10,2", Hitastudull: "0,0038" },
  { name: "Blý", Edlisvidnam: "0,208", Edlisleidni: "4,8", Hitastudull: "0,00422" },
  { name: "Manganín", Edlisvidnam: "0,43", Edlisleidni: "2,33", Hitastudull: "0,01" },
  { name: "Konstantan", Edlisvidnam: "0,49", Edlisleidni: "2,04", Hitastudull: "0,04" },
  { name: "Kvikasilfur", Edlisvidnam: "0,9406", Edlisleidni: "1,063", Hitastudull: " 0,0009" }
];

let info2 = [
  { name: "Viðnám", takn: "R", maeliening: "ohm", einingatakn: "Ω" },
  { name: "Heildarlengd leiðara", takn: "l", maeliening: "metri", einingatakn: "m"},
  { name: "Þverflatarmál leiðara", takn: "A", maeliening: "fermillimetrar", einingatakn: "mm^2"},
  { name: "Þvermál", takn: "Φ(Ø eða d)", maeliening: "millimetrar", einingatakn: "mm" },
  { name: "Eðlisleiðni", takn: "G", maeliening: "Siemens", einingatakn: "" },
  { name: "Eðlisviðnám", takn: "p", maeliening: "", einingatakn: "" },
  { name: "Hitastuðull", takn: "a", maeliening: "", einingatakn: "" },
  { name: "Radíus", takn: "r", maeliening: "", einingatakn: "" },
  { name: "Umfang Breyting", takn: "∆", maeliening: "Delta", einingatakn: "" },
  { name: "Viðnám við upphafshitastig", takn: "Rt1", maeliening: "", einingatakn: ""},
  { name: "viðnám við lokahitastig", takn: "Rt2", maeliening: "", einingatakn: ""},
  { name: "Upphafshitastig", takn: "t1", maeliening: "", einingatakn: "" },
  { name: "lokahitastig", takn: "t2", maeliening: "", einingatakn: "" },
  { name: "Spennufall / Spennutap", takn: "ΔU", maeliening: "", einingatakn: ""}
];

let info3 = [
  { name: "Þverflatarmál þegar þvermál er þekkt", formula: "A= r^2 * pi" },
  { name: "Þverflatarmál (kvaðrat)", formula: "A = (p * l) / R" },
  { name: "Viðnám (leiðslu / vírs)", formula: "R = (p * l) / A" },
  { name: "Lengd (leiðslu / vírs)", formula: "l = (R * A) / p" },
  { name: "Eðlisviðnám", formula: "p = (R * A) / l" }
];

let info4 = [
  { name: "Hita aukning", formula: " Rt2 = Rt1 + (Rt1 * a * Δt)" },
  { name: "Kólnun", formula: "Rt2 = Rt1 - (Rt1 * a * Δt)" },
  { name: "Hitastigs-breyting", formula: "Δt = (Rt2 - Rt1) / (Rt1 * a)" }
];

let info5 = [
  { hugtak: "Spenna", takn: "U", eining: "Volt", einingatakn: "V" },
  { hugtak: "Straumur", takn: "I", eining: "Amper", einingatakn:"A" },
  { hugtak: "Viðnám", takn: "R", eining: "Ohm", einingatakn:"Ω" },
  { hugtak: "Afl", takn: "P", eining: "Watt", einingatakn:"W" }
]

let info6 = [
  { name: "heildarviðnám innra- og ytra viðnáms", formula: "RH= Ri + Ry" },
  { name: "spennufall yfir innra viðnám", formula: "ERi = I * Ri" },
  { name: "innri spennu", formula: "E = ERi + U" },
  { name: "skautspennu", formula: "E = U + I * Ri" },
  { name: "skautspennu", formula: "U = E - (I * Ri)" }
]

let info7 = [
  { name: "að finna inmnrtaks aflið", formula: "Pinn = U * I" },
  { name: "að finna inntaks aflið", formula: "Pinn = Pút / n(Nýtni)" },
  { name: "að finna aflið út", formula: "Pút = Pinn * n(Nýtni)" },
  { name: "að finna nýtni á afli", formula: "n = Pút / Pinn" },
  { name: "að finna tap á afli", formula: "ΔP = Pinn - Pút" }
]

let info8 = [
  { name: "spenna og straumur eru þekktar stærðir", formula: "P = U * I" },
  { name: "viðnám og straumur eru þekktar stærðir", formula: "P = R * I^2" },
  { name: "Spenna og viðnám eru þekktar stærðir", formula: "P = U^2 / R" },
  { name: "þegar hestöflin eru þekkt stærð", formula: "P = hö. * k" },
  { name: "að finna hestöfl þegar afl er þekkt stærð", formula: "hö. = P / k" }
]

let info9 = [
  { forskeyti: "Tera", sk_st: "T", Tugveldi_veldisvísir: "10^12", margföldunarstudull:"1.000.000.000.000", synishorn: "TB = Tera Byte" },
  { forskeyti: "Gíga", sk_st: "G", Tugveldi_veldisvísir: "10^9", margföldunarstudull:"1.000.000.000", synishorn: "GW = Gíga Watts" },
  { forskeyti: "Mega", sk_st: "M", Tugveldi_veldisvísir: "10^6", margföldunarstudull:"1000.000", synishorn: "MΩ = MEga ohm" },
  { forskeyti: "Kíló", sk_st: "K", Tugveldi_veldisvísir: "10^3", margföldunarstudull:"1.000", synishorn: " KV = Kíló volt" },
  { forskeyti: "Grunneining", sk_st: "", Tugveldi_veldisvísir: "10^0", margföldunarstudull:"1", synishorn: "v = volt" },
  { forskeyti: "millí", sk_st: "m", Tugveldi_veldisvísir: "10^-3", margföldunarstudull:"0,001", synishorn: "mA = millí Amper" },
  { forskeyti: "míkró", sk_st: "µ", Tugveldi_veldisvísir: "10^-6", margföldunarstudull:"0,000.001", synishorn: "µV = míkró Volt" },
  { forskeyti: "nanó", sk_st: "n", Tugveldi_veldisvísir: "10^-9", margföldunarstudull:"0,000.000.001", synishorn: "ns = nanó sekúnda" },
  { forskeyti: "píkó", sk_st: "p", Tugveldi_veldisvísir: "10^-12", margföldunarstudull:"0,000.000.000.001", synishorn: "pF = píkó Farad" },
]

let info10 = [
  { name: "Rafhleðsla", formula: "Q= I * t"  },
  { name: "Rafhleðsla", formula: "Q = U * C" },
  { name: "Rafstraumur", formula: "I = Q / t" },
  { name: "Hleðslutími", formula: "t = Q / I" },
  { name: "Hleðslutími", formula: "t = R * C" },
  { name: "Coulumb", formula: "C = Q / U" }
]

function generateTable(table, data1) {
  for (let element of data1) {
    let row = table.insertRow();
    for (let key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function generateTable2(table2, data2) {
  for (let element2 of data2) {
    let row2 = table2.insertRow();
    for (let key2 in element2) {
      let cell2 = row2.insertCell();
      let text2 = document.createTextNode(element2[key2]);
      cell2.appendChild(text2);
    }
  }
}

function generateTable3(table3, data3) {
  for (let element3 of data3) {
    let row3 = table3.insertRow();
    for (let key3 in element3) {
      let cell3 = row3.insertCell();
      let text3 = document.createTextNode(element3[key3]);
      cell3.appendChild(text3);
    }
  }
}

function generateTable4(table4, data4) {
  for (let element4 of data4) {
    let row4 = table4.insertRow();
    for (let key4 in element4) {
      let cell4 = row4.insertCell();
      let text4 = document.createTextNode(element4[key4]);
      cell4.appendChild(text4);
    }
  }
}

function generateTable5(table5, data5) {
  for (let element5 of data5){
    let row5 = table5.insertRow();
    for (let key5 in element5) {
      let cell5 = row5.insertCell();
      let text5 = document.createTextNode(element5[key5]);
      cell5.appendChild(text5);
    }
  }
}

function generateTable6(table5, data6) {
  for (let element6 of data6){
    let row6 = table6.insertRow();
    for (let key6 in element6) {
      let cell6 = row6.insertCell();
      let text6 = document.createTextNode(element6[key6]);
      cell6.appendChild(text6);
    }
  }
}

function generateTable7(table7, data7) {
  for (let element7 of data7){
    let row7 = table7.insertRow();
    for (let key7 in element7) {
      let cell7 = row7.insertCell();
      let text7 = document.createTextNode(element7[key7]);
      cell7.appendChild(text7);
    }
  }
}

function generateTable8(table8, data8) {
  for (let element8 of data8){
    let row8 = table8.insertRow();
    for (let key8 in element8) {
      let cell8 = row8.insertCell();
      let text8 = document.createTextNode(element8[key8]);
      cell8.appendChild(text8);
    }
  }
}

function generateTable9(table9, data9){
  for (let element9 of data9){
    let row9 = table9.insertRow();
    for (let key9 in element9) {
      let cell9 = row9.insertCell();
      let text9 = document.createTextNode(element9[key9]);
      cell9.appendChild(text9);
    }
  }
}
function generateTable10(table10, data10){
  for (let element10 of data10){
    let row10 = table10.insertRow();
    for (let key10 in element10) {
      let cell10 = row10.insertCell();
      let text10 = document.createTextNode(element10[key10]);
      cell10.appendChild(text10);
    }
  }
}

let table = document.getElementById("table1");
let data1 = Object.keys(info[0]);
generateTable(table, info); //generate table

let table2 = document.getElementById("table2");
let data2 = Object.keys(info2[0]);
generateTable2(table2, info2);

let table3 = document.getElementById("table3");
let data3 = Object.keys(info3[0]);
generateTable3(table3, info3);

let table4 = document.getElementById("table4");
let data4 = Object.keys(info4[0]);
generateTable3(table4, info4);

let table5 = document.getElementById("table5");
let data5 = Object.keys(info5);
generateTable5(table5, info5);

let table6 = document.getElementById("table6");
let data6 = Object.keys(info6[0]);
generateTable6(table6, info6);

let table7 = document.getElementById("table7");
let data7 = Object.keys(info7[0]);
generateTable7(table7, info7);

let table8 = document.getElementById("table8");
let data8 = Object.keys(info8[0]);
generateTable8(table8, info8);

let table9 = document.getElementById("table9");
let data9 = Object.keys(info9[0]);
generateTable9(table9, info9);

let table10 = document.getElementById("table10");
let data10 = Object.keys(info10[0]);
generateTable10(table10, info10);