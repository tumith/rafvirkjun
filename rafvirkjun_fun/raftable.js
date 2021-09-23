let info = [
    {name: "Silfur", Edlisvidnam: "0,0167", Edlisleidni: "60", Hitastudull: " 0,0041"},// 0
    {name: "Eir", Edlisvidnam: "0,0178", Edlisleidni: "56", Hitastudull: "0,0041"},
    {name: "Gull",Edlisvidnam: "0,022", Edlisleidni: "45,7", Hitastudull: "0,00398"},
    {name: "Ál",Edlisvidnam: "0,0278", Edlisleidni: "36,0", Hitastudull: "0,004"},
    {name: "Wolfram",Edlisvidnam: "0,055", Edlisleidni: "18,2", Hitastudull: "0,0046"},
    {name: "Zink",Edlisvidnam: "0,0625", Edlisleidni: "16,0", Hitastudull: "0,0042"},
    {name: "Nikkel",Edlisvidnam: "0,095", Edlisleidni: "10,5", Hitastudull: "0,0055"},
    {name: "Járn",Edlisvidnam: "0,1", Edlisleidni: "10", Hitastudull: "0,00657"},
    {name: "Platína",Edlisvidnam: "0,098", Edlisleidni: "10,2", Hitastudull: "0,0038"},
    {name: "Blý",Edlisvidnam: "0,208", Edlisleidni: "4,8", Hitastudull: "0,00422"},
    {name: "Manganín",Edlisvidnam: "0,43", Edlisleidni: "2,33", Hitastudull: "0,01"},
    {name: "Konstantan",Edlisvidnam: "0,49", Edlisleidni: "2,04", Hitastudull: "0,04"},
    {name: "Kvikasilfur",Edlisvidnam: "0,9406", Edlisleidni: "1,063", Hitastudull: " 0,0009"}
];

function generateTableHead(table) {
    let thead = table.creatTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key)
        th.appendChild(text);
        row.appendChild(th);
        th.setAttribute('id');
    }
}
function generateTable(table, data){
    for (let element of data){
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

function mathFormula(data){
    // U = R * I  | R = U / I  | I = U / R

}

let table = document.querySelector("table");
let data = Object.keys(info[0]);
//generateTabelHead(table,data); //generate head
generateTable(table, info); //generate table


let r = document.getElementById("numid").innerHTML = JSON.stringify(info, null, 2);
console.log(r);