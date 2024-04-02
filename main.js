// let producto=document.getElementById("input1");
// let boton=document.querySelector("button");
// console.log(producto);
// let producto2=document.getElementById("input2");
// console.log(producto2);
// let listaP=[];
// let listaE=[];
// listaP.append(input1);
// listaE.append(input2);
// console.log(listaP);
// console.log(listaE);

// boton.addEventListener("click",function(evt){
//     evt.preventDefault();
//     let productoObjeto={};
//     productoObjeto.productoLlave=producto.value;
//     productoObjeto.existencias=producto2.value;
//     console.log(productoObjeto);
//     var objeto1={};
//     for(let i=0;i<=listaP.length;i++){
//     //     if(objeto1[i]!=null){
//     //    let llaveOk="registro"+i;
//     //     objeto1.llaveOk=productoObjeto;}
//            objeto1[nombre+i]=listaP[i];


//     }
    
//     console.log(objeto1);
// })
console.log("este es solo un comentario para el archivo main de la carpeta PAGINAWEB6JOSE");
console.log("este es el 2do comentaro para la pagina web PAGINAWEB6JOSE");
let lista=[];
let lista2=["a","b","c"];
let producto=document.getElementById("input1");
console.log("el producto=document.getElementById es:");
console.log(producto);
let boton=document.querySelector("button");
let boton2=document.getElementById("boton1");
let boton3=document.getElementById("boton3");
let eleccion=document.getElementById("input3");
// console.log(eleccion);

let precio=document.getElementById("input2");
boton.addEventListener("click",function(evt){
    evt.preventDefault();
    let productoObjeto={};
    productoObjeto.productoLlave=producto.value;
    productoObjeto.precioLlave=precio.value;
    console.log("tratando de imprimir");
    // console.log(productoObjeto);
    lista.push(productoObjeto);
    // console.log(lista);
  
//   console.log(lista);
        
    
        // for(let i=0;i<lista.length;i++){
        //       let productoR=createElement("h2");
        //   let a=lista[i]
        //       productoR.textContent(a);
        //   }
    
        // for(let i=0;i<lista2.length;i++){
        //     console.log(lista2[i]);
        // }

});
boton2.addEventListener("click",function(evt){
    evt.preventDefault();
    let creacion1=document.createElement("h1");
  creacion1.textContent="las existencias son:";
  document.body.appendChild(creacion1);
    for(i=0;i<lista.length;i++){
        let creacion2=document.createElement("h2");
        // console.log(lista[i]);
        creacion2.textContent=lista[i].precioLlave;
        document.body.appendChild(creacion2);    
    }
});
 

boton3.addEventListener("click",function(evt){
    evt.preventDefault();
    let creacion1=document.createElement("h1");
  creacion1.textContent="la existencia de el producto elegido es:";
  document.body.appendChild(creacion1);
    let creacion3=document.createElement("h3");
    for(i=0;i<lista.length;i++){
        if(lista[i].productoLlave==eleccion.value){
            creacion3.textContent=lista[i].precioLlave;
            document.body.appendChild(creacion3);
            // console.log()

        }
    }

})


