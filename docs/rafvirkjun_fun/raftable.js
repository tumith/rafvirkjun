let info = [
  {
    name: "Silfur",
    Edlisvidnam: "0,0167",
    Edlisleidni: "60",
    Hitastudull: " 0,0041"
  }, // 0
  {
    name: "Eir",
    Edlisvidnam: "0,0178",
    Edlisleidni: "56",
    Hitastudull: "0,0041"
  },
  {
    name: "Gull",
    Edlisvidnam: "0,022",
    Edlisleidni: "45,7",
    Hitastudull: "0,00398"
  },
  {
    name: "Ál",
    Edlisvidnam: "0,0278",
    Edlisleidni: "36,0",
    Hitastudull: "0,004"
  },
  {
    name: "Wolfram",
    Edlisvidnam: "0,055",
    Edlisleidni: "18,2",
    Hitastudull: "0,0046"
  },
  {
    name: "Zink",
    Edlisvidnam: "0,0625",
    Edlisleidni: "16,0",
    Hitastudull: "0,0042"
  },
  {
    name: "Nikkel",
    Edlisvidnam: "0,095",
    Edlisleidni: "10,5",
    Hitastudull: "0,0055"
  },
  {
    name: "Járn",
    Edlisvidnam: "0,1",
    Edlisleidni: "10",
    Hitastudull: "0,00657"
  },
  {
    name: "Platína",
    Edlisvidnam: "0,098",
    Edlisleidni: "10,2",
    Hitastudull: "0,0038"
  },
  {
    name: "Blý",
    Edlisvidnam: "0,208",
    Edlisleidni: "4,8",
    Hitastudull: "0,00422"
  },
  {
    name: "Manganín",
    Edlisvidnam: "0,43",
    Edlisleidni: "2,33",
    Hitastudull: "0,01"
  },
  {
    name: "Konstantan",
    Edlisvidnam: "0,49",
    Edlisleidni: "2,04",
    Hitastudull: "0,04"
  },
  {
    name: "Kvikasilfur",
    Edlisvidnam: "0,9406",
    Edlisleidni: "1,063",
    Hitastudull: " 0,0009"
  }
];

let info2 = [
  { name: "Viðnám", takn: "R", maeliening: "ohm", einingatakn: "Ω" },
  {
    name: "Heildarlengd leiðara",
    takn: "l",
    maeliening: "metri",
    einingatakn: "m"
  },
  {
    name: "Þverflatarmál leiðara",
    takn: "A",
    maeliening: "fermillimetrar",
    einingatakn: "mm^2"
  },
  { name: "Þvermál", takn: "Φ", maeliening: "millimetrar", einingatakn: "mm" },
  { name: "Eðlisleiðni", takn: "G", maeliening: "", einingatakn: "" },
  { name: "Eðlisviðnám", takn: "p", maeliening: "", einingatakn: "" },
  { name: "Hitastuðull", takn: "a", maeliening: "", einingatakn: "" },
  { name: "Radíus", takn: "r", maeliening: "", einingatakn: "" },
  { name: "Umfang Breyting", takn: "∆", maeliening: "Delta", einingatakn: "" },
  {
    name: "Viðnám við upphafshitastig",
    takn: "Rt1",
    maeliening: "",
    einingatakn: ""
  },
  {
    name: "viðnám við lokahitastig",
    takn: "Rt2",
    maeliening: "",
    einingatakn: ""
  },
  { name: "Upphafshitastig", takn: "t1", maeliening: "", einingatakn: "" },
  { name: "lokahitastig", takn: "t2", maeliening: "", einingatakn: "" }
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

function generateTable4(table4, dat4) {
  for (let element4 of data4) {
    let row4 = table4.insertRow();
    for (let key4 in element4) {
      let cell4 = row4.insertCell();
      let text4 = document.createTextNode(element4[key4]);
      cell4.appendChild(text4);
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
