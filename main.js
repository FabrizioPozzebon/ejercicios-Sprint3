const cerveza = beers;
console.log(cerveza)
 const filtroCervezas = (cervezas) => {
     const cervezasFiltradas = [];
     cervezas.forEach(element => {
         if (element.abv <= 5) cervezasFiltradas.push({ Nombre: element.name, Alcohol: element.abv, Amargor: element.ibu });
     });
     return cervezasFiltradas;
 }
 const cervezasFiltradasAbv = [];
 cervezasFiltradasAbv.push(filtroCervezas(cerveza))
 console.log(cervezasFiltradasAbv)
 const cervezaMasAbv = (cervezas) => {
     const cervezaMas = []
     cervezas.sort((a, b) => b.abv - a.abv);
     for (let element = 0; element < 10; element++) {
         cervezaMas.push(cervezas[element])
     }
     return cervezaMas;
 }
 console.log(cervezaMasAbv(cerveza))
 const cervezaMasIbu = (cervezas) => {
     const cervezaMenosAmarga = []
     cervezas.sort((a, b) => b.ibu - a.ibu);
     for (let element = 0; element < 10; element++) {
         cervezaMenosAmarga.push(cervezas[element])
     }
     return cervezaMenosAmarga;
 }
 console.log(cervezaMasIbu(cerveza))

 const cervezaSorter = (cervezas, atributo, orden) => {
     const cervezaMas = []
     if (typeof (cervezas[0][atributo]) === "string") {
         console.log("es string")
         if (orden) {
             cervezas.sort((a, b) => {
                 if (a[atributo] > b[atributo]) return 1;
                 if (a[atributo] < b[atributo]) return -1;
                 return 0;
             });
         } else {
             cervezas.sort((b, a) => {
                 if (a[atributo] > b[atributo]) return 1;
                 if (a[atributo] < b[atributo]) return -1;
                 return 0;
             });
         }
     } else {
         console.log("es number")
         if (orden) {
             cervezas.sort((a, b) => a[atributo] - b[atributo])
         } else {
             cervezas.sort((b, a) => a[atributo] - b[atributo])
         }
     }
     for (let index = 0; index < 10; index++) {
         cervezaMas.push(cervezas[index])
     }
     return cervezaMas;
 }
 console.log(cervezaSorter(beers, "name", true))

 const cajaCervezas = document.getElementById("cajaCervezas");
 console.log(cajaCervezas)
 let crearMaqueta = (arrayCervezas) => {
     return <ul>
     <li>Nombre:${arrayCervezas.name}</li>
     <li>ABV:${arrayCervezas.abv}</li>
     <li>IBU:${arrayCervezas.ibu}</li>
     </ul>
 }
 let filtrarCarta = (arrayCervezas) => {
     const arrayFiltrado = []
     let filtrandoArray = arrayCervezas.forEach(element => {
         arrayFiltrado.push(element.name, element.abv, element.ibu)
     });
     return arrayFiltrado
 }
 console.log(filtrarCarta(cerveza))
 let imprimirCarta = (arrayCervezas) => {
     for (const element of arrayCervezas) {
         cajaCervezas.innerHTML += crearCarta(element)
     }
 }
 imprimircarta(cerveza)