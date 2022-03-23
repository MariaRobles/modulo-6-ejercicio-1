// CREAR HTML

// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

//crear input para el nombre

var showProducts = () => {

    for(var product of products){
        
        var nombre = document.createElement("h4");
        nombre.setAttribute("id", "nombre");
        nombre.innerText = product.description + " - " + product.price + " €/ud.";
        //nombre.addEventListener("change", event => console.log(event.target.value));
        var containerNames = document.getElementById("nombres");
        containerNames.appendChild(nombre);

    }
}

showProducts(products);


var createQuantity = (product) => {
    var inputQuantity = document.createElement("input"); //creo elemento input
        inputQuantity.setAttribute("id", "cantidad"); // con atributo id=cantidad
        inputQuantity.setAttribute("type", "number"); // y type=number
        inputQuantity.addEventListener("change", event => product.units = parseInt(event.target.value));
        var containerQuantity = document.getElementById("cantidades");
        containerQuantity.appendChild(inputQuantity);
}

var showQuantity = () => {

    for(var product of products){
        createQuantity(product);
    }
}

showQuantity(products);



//CALCULO DE LA FACTURA

/////////////Subtotal

var getSubtotal = (product) => {
  var subtotal = 0;
  subtotal = subtotal + (product.price * product.units);
  return subtotal; 
}


var getResultSubtotal = () => {
  var resulatSubtotal = 0;
  for (var product of products) { 
      resulatSubtotal = resulatSubtotal + getSubtotal(product);    
  } 
  return resulatSubtotal;        
} 

console.log(getResultSubtotal(products));


/////////////impuestos

var getTax = (product) => {
    var tax = 0;
    tax = tax + (getSubtotal(product) * product.tax) / 100; 
    return tax;
} 

var resultTax = () =>{
  var resultTax = 0;
  for (var product of products) {  
    resultTax = resultTax + getTax(product);
  }
  return resultTax;
}

var calculateBill = () => {
  var subTotal = getResultSubtotal(products);
  var tax = resultTax(products);
  var totalBill = subTotal + tax;

  document.getElementById("subtotal").innerHTML = subTotal.toFixed(2);
  document.getElementById("impuestos").innerHTML = tax.toFixed(2);
  document.getElementById("total").innerHTML = totalBill.toFixed(2);
}

calculateBill();

//////////eventos

document.getElementById("boton").addEventListener("click", calculateBill);





