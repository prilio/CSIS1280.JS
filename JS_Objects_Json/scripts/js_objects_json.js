//DECLARIN AN OBJECT
//1) Literal Approach
//1a) Without initialization
const mycar = {};

//assign values
mycar['make'] = "Toyota";
mycar.model = "Camry",
mycar["year"] = 2021;

//ref display element
let display = document.querySelectorAll(".display");

//display the Object (My car is 2021 Toyota Camry)
display[0].innerHTML = `My car is ${mycar.year} ${mycar.make} ${mycar.model}`;

//log to console
console.log(mycar);

//1b) with initialization
const mycar1 = {make: "Ford", model: "Escape", year: 2020};
console.log(mycar1);

//car object with a property that has an array of values
const mycar2 = {make: "Toyota", model: ["Corolla", "Camry", "Prius", "Tundra"], year: 2021};
console.log(mycar1);

//display mycar2 Object
//loop for array part.
function displayMake(mdl){
	let str = "";
	for (let i=0; i<mdl.length; i++) {
		str += "<br>" + mdl[i];
	}
	return str;
}

//Toyota automaker has the following 2021 models:"" 
display[1].innerHTML = `${mycar2.make} automaker  has the following ${mycar2.year} models: ${displayMake(mycar2.model)}`;

//car object with a property that has an array of values and a property that has a function
const mycar3 = {make: "Toyota", model: ["Corolla", "Camry", "Prius", "Tundra"], 
fleet: function(){
	//use the "this" reference to refer to the current object
	return this.model[0] +"<br>" +this.model[1] +"<br>" +this.model[2] +"<br>" +this.model[3];
},
year: 2021};

//Toyota automaker has the following 2021 models:""
display[2].innerHTML = `${mycar3.make} automaker  has the following ${mycar3.year} models: <br> ${mycar3.fleet()}`;

//=============== PART 2 ================
//defining and display JSON Data\
//convert mycar object to JSON String
let strJsonCar = JSON.stringify(mycar);
//display the Json String
display[3].innerHTML = strJsonCar;

//JSON Car
let jsonCar = '{"make":"Toyota","model":"Camry","year":2021}';

//Now try the object display techniques (i.e., either "dot" or subcript notation)
//try to display make
//need to first convert json string to an Object
let objJsonCar = JSON.parse(jsonCar);
display[4].innerHTML = `The make is of my car is ${objJsonCar.make}`;

//dynamically creating DOM objects/elements
let arrObjJson = [{"id":1,"common_name":"Navel Lichen","scientific_name":"Umbilicaria hyperborea (Ach.) Hoffm. var. radicicula (J.E. Zetterst.) Hasselrot","family":"Umbilicariaceae"},
	{"id":2,"common_name":"Osterhout's Thistle","scientific_name":"Cirsium osterhoutii (Rydb.) Petr.","family":"Asteraceae"},
	{"id":3,"common_name":"Cashew","scientific_name":"Anacardium occidentale L.","family":"Anacardiaceae"},
	{"id":4,"common_name":"Rascagarganta","scientific_name":"Philodendron consanguineum Schott","family":"Araceae"},
	{"id":5,"common_name":"White Lupine","scientific_name":"Lupinus albus L.","family":"Fabaceae"},
	{"id":6,"common_name":"Wingedseed Draba","scientific_name":"Draba pterosperma Payson","family":"Brassicaceae"},
	{"id":7,"common_name":"Higgins' Beardtongue","scientific_name":"Penstemon leonardii Rydb. var. higginsii Neese","family":"Scrophulariaceae"},
	{"id":8,"common_name":"Macdougal's Indian Parsley","scientific_name":"Aletes macdougalii J.M. Coult. & Rose ssp. macdougalii","family":"Apiaceae"},
	{"id":9,"common_name":"Swamp Thistle","scientific_name":"Cirsium muticum Michx.","family":"Asteraceae"},
	{"id":10,"common_name":"Common Fiddleneck","scientific_name":"Amsinckia menziesii (Lehm.) A. Nelson & J.F. Macbr. var. intermedia (Fisch. & C.A. Mey.) Ganders","family":"Boraginaceae"},
	{"id":11,"common_name":"Pokeweed","scientific_name":"Phytolacca dodecandra L'Her.","family":"Phytolaccaceae"},
	{"id":12,"common_name":"Santa Susana Tarweed","scientific_name":"Deinandra minthornii (Jeps.) B.G. Baldw.","family":"Asteraceae"},
	{"id":13,"common_name":"Gastony's Cliffbrake","scientific_name":"Pellaea gastonyi Windham","family":"Pteridaceae"},
	{"id":14,"common_name":"Mckittrick's Snowberry","scientific_name":"Symphoricarpos guadalupensis Correll","family":"Caprifoliaceae"},
	{"id":15,"common_name":"Texan Goatbush","scientific_name":"Castela erecta Turp. ssp. texana (Torr. & A. Gray) Cronquist","family":"Simaroubaceae"},
	{"id":16,"common_name":"Sedge","scientific_name":"Carex ×fulva Goodenough","family":"Cyperaceae"},
	{"id":17,"common_name":"Cuthbert's Turtlehead","scientific_name":"Chelone cuthbertii Small","family":"Scrophulariaceae"},
	{"id":18,"common_name":"Rainbow Iris","scientific_name":"Iris hartwegii Baker ssp. hartwegii","family":"Iridaceae"},
	{"id":19,"common_name":"European Bur-reed","scientific_name":"Sparganium emersum Rehmann","family":"Sparganiaceae"},
	{"id":20,"common_name":"Bryum Moss","scientific_name":"Bryum flaccidum Brid.","family":"Bryaceae"},
	{"id":21,"common_name":"Geranium","scientific_name":"Geranium L.","family":"Geraniaceae"},
	{"id":22,"common_name":"Rim Lichen","scientific_name":"Lecanora opiniconensis Brodo","family":"Lecanoraceae"},
	{"id":23,"common_name":"Chilean Bird's-foot Trefoil","scientific_name":"Lotus wrangelianus Fisch. & C.A. Mey.","family":"Fabaceae"},
	{"id":24,"common_name":"Santa Rita Threeawn","scientific_name":"Aristida californica Thurb. ex S. Watson var. glabrata Vasey","family":"Poaceae"},
	{"id":25,"common_name":"Macdonald Rockcress","scientific_name":"Arabis macdonaldiana Eastw.","family":"Brassicaceae"}];

//display one value
display[4].innerHTML += `<br>The first plant common name is: ${arrObjJson[0].common_name}`;

//generate the table dynamically
//ref table element in the HTML
let tbl_display = document.getElementById("tbl_display");

//create elements (headings)
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');
let th4 = document.createElement('th');

//append the text to the headings (innerHTML)
th1.innerHTML = "ID";
th2.innerHTML = "Common Name";
th3.innerHTML = "Scientific Name";
th4.innerHTML = "Plant Family";

//create heading row Element
let trh = document.createElement('tr');

//append the ths to tr
trh.appendChild(th1)
trh.appendChild(th2)
trh.appendChild(th3)
trh.appendChild(th4)

//append heading to table
	tbl_display.appendChild(trh)

//table bdoy part (need to use a loop)
for (let i=0; i<arrObjJson.length; i++){

	//create textnodes and tds abd tr elements	
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');
	let td3 = document.createElement('td');
	let td4 = document.createElement('td');
	
	//create textnodes
	let txt1 = document.createTextNode(arrObjJson[i].id);
	let txt2 = document.createTextNode(arrObjJson[i].common_name);
	let txt3 = document.createTextNode(arrObjJson[i].scientific_name);
	let txt4 = document.createTextNode(arrObjJson[i].family);
	
	//append the text to the tds
	td1.appendChild(txt1)
	td2.appendChild(txt2)
	td3.appendChild(txt3)
	td4.appendChild(txt4)
	
	//create the tr
	let tr = document.createElement('tr');
	
	//append the tds to the tr
	tr.appendChild(td1)
	tr.appendChild(td2)
	tr.appendChild(td3)
	tr.appendChild(td4)
	
	//append the tr to the table
	tbl_display.appendChild(tr)
	
}





















