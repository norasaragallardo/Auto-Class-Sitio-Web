var Arraynuevo = [];
Productos = [
    {
        "nombre": "Alarma k9",
        "precio":1150,
        "descripcion": "2 controles biper, funciona a distancia 1000m, controles con alertas de golpeteo y bibración, bloqueo de motor",
        "img": "assets/img/productos/alarmabipper.png"
    },
    {
        "nombre": "Alarma Genius",
        "precio":250,
        "descripcion": "2 controles, funciona a 400m de distancia, bloqueo de motor",
        "img": "assets/img/productos/alarmagenius.png"
    },
    {
        "nombre": "Alarma k9 sin biper ",
        "precio":400,
        "descripcion": "2 controles, funciona a 800m de distancia, bloqueo de motor",
        "img": "assets/img/productos/alarmabipper.png"
    },
    {
        "nombre": "Ventiladora Toyota",
        "precio":220,
        "descripcion": "Ventiladora nueva compatible para toyota corrolla y caldina",
        "img": "assets/img/productos/alarmabipper.png"
    },
    {
        "nombre":"Ventiladora auxiliar",
        "precio":250,
        "descripcion": "Ventiladora auxiliar con motor plano, base redonda, original seminuevo compatible con toyota, nissan y zuzuki",
        "img": "assets/img/productos/ventolaaux3.png"
    },
    {
        "nombre":"Ventiladora auxiliar Universal",
        "precio":200,
        "descripcion": "ventiladora auxiliar universal, nuevo",
        "img": "assets/img/productos/vent-1.jpg"
    },
    {
        "nombre":"Bujias NJK punta de iridium",
        "precio":320,
        "descripcion": "Bujias brasilera NGK punta de iridium ",
        "img": "assets/img/productos/iridium 2 ngk.png"
    },
    {
        "nombre":"flujometro",
        "precio":450,
        "descripcion": "Flujometro original seminuevo toyota.",
        "img": "assets/img/productos/flujometyro.png"
    },
    {
        "nombre":"Radio Pioneer con pantalla ",
        "precio":1850,
        "descripcion": "RAdio  Pionner con pantalla, usb,bluetooth,aux,usb",
        "img": "assets/img/productos/radiocon pantalla.jpg"
    },
    {
        "nombre":"Motor de ventiladora Toyota",
        "precio":175,
        "descripcion": "Motor para ventiladora principal ",
        "img": "assets/img/productos/motor de ventiladora.png"
    },
    {
        "nombre":"Distribuidor de Toyota 5A",
        "precio":320,
        "descripcion": "Distribuidor de toyota original seminuevo ",
        "img": "assets/img/productos/distribuidor.png"
    },
    {
        "nombre":"Bujias Denso",
        "precio":95,
        "descripcion": "Bujias Denso de 1 electrodos",
        "img": "assets/img/productos/bujia denso.png"
    },
    {
        "nombre":"Bujias NGK",
        "precio":145,
        "descripcion": "Bujias NGK de 2 electrodos ",
        "img": "assets/img/productos/bujia ngk.png"
    },
    {
        "nombre":"chicotillo Seiwa ",
        "precio":260,
        "descripcion": "Chicotillo japones Seiwa  con cabeza redonda, para Nissan, ",
        "img": "assets/img/productos/chicotillo redonod seiwaa.png"
    },
    {
        "nombre":"chicotillo Seiwa toyota 5A",
        "precio":220,
        "descripcion": "Chicotillos originales Seiwa , toyota 5A",
        "img": "assets/img/productos/chicotillo seiwa 5A.png"
    },
    {
        "nombre":"chicotillo Seiwa 3S",
        "precio":220,
        "descripcion": "chicotillo japones Seiwa toyota probox",
        "img": "assets/img/productos/chicotillo seiwa.png"
    },
    {
        "nombre":"Bujias NGK",
        "precio":145,
        "descripcion": "Bujias NGK de 2 electrodos ",
        "img": "assets/img/productos/bujia ngk.png"
    },
    {
        "nombre":"cable de bujia (chicotillo)",
        "precio":220,
        "descripcion": "Cable de bujia,subaru",
        "img": "assets/chicotillo de bujia seiwa.png"
    }
];

var producto = Productos.map(function(element,index)
    {
        return '<div class="col p-3 ">'+
               '<div class="card h-100 shadow">'+
               '<img src="'+element.img+'" class="card-img-top" alt="...">'+
               '<div class="card-body">'+
               '<h5 class="card-title text-center">'+element.nombre+'</h5>'+
               '<p class="card-text text-justify">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>'+
               '<h6 class="text-right text-success">Precio: '+element.precio+' bs.</h6>'+
               '<button type="button" class="btn btn-outline-primary btn-block" onClick="verMaspro('+index+')" data-toggle="modal" data-target="#myModal">ver mas</button>'+
               '</div></div></div>'
    }
);
document.getElementById("producto").innerHTML= producto.join("");
function verMaspro(index){
   // console.log(Servicios[index])
    document.getElementById('titulopro').innerText= Productos[index].nombre;
    document.getElementById('imagenpro').innerHTML = '<img src="'+Productos[index].img+'" class="img-fluid" alt="Responsive image">'
    document.getElementById('descriptpro').innerText= Productos[index].descripcion;
}
function myFunction() {
    var x = document.getElementById("fname").value;
    //console.log(x)
    var noValido = /\s/;
    if(x.trim() == ""){
        document.getElementById('aviso').innerHTML = ''
        var producto = Productos.map(function(element,index)
            {
                return '<div class="col p-3 ">'+
                    '<div class="card h-100 shadow">'+
                    '<img src="'+element.img+'" class="card-img-top" alt="...">'+
                    '<div class="card-body">'+
                    '<h5 class="card-title text-center">'+element.nombre+'</h5>'+
                    '<p class="card-text text-justify">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>'+
                    '<h6 class="text-right text-success">Precio: '+element.precio+' bs.</h6>'+
                    '<button type="button" class="btn btn-outline-primary btn-block" onClick="verMaspro('+index+')" data-toggle="modal" data-target="#myModal">ver mas</button>'+
                    '</div></div></div>'
            }
        );
        document.getElementById("producto").innerHTML= producto.join("");
    } else {
        Arraynuevo = [];
        var minusculas = x.toLowerCase();
        //console.log(x)
        for (let i = 0; i < Productos.length; i++){
            var minusPros = Productos[i].nombre.toLowerCase();
            //console.log(minusPros.indexOf(minusculas) >= 0)
            if(minusPros.indexOf(minusculas) >= 0){
                if(Arraynuevo.indexOf(Productos[i]) >= 0){

                }else{
                    Arraynuevo.push(Productos[i])
                }

            } else {
                document.getElementById('aviso').innerHTML = '<strong class="text-danger">El producto no existe</strong>'
            }
        }
        if(Arraynuevo.length != 0){
            document.getElementById('aviso').innerHTML = ''
            var producto = Arraynuevo.map(function(element,index)
                {
                    return '<div class="col p-3 ">'+
                        '<div class="card h-100 shadow">'+
                        '<img src="'+element.img+'" class="card-img-top" alt="...">'+
                        '<div class="card-body">'+
                        '<h5 class="card-title text-center">'+element.nombre+'</h5>'+
                        '<p class="card-text text-justify">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>'+
                        '<h6 class="text-right text-success">Precio: '+element.precio+' bs.</h6>'+
                        '<button type="button" class="btn btn-outline-primary btn-block" onClick="verMaspro('+index+')" data-toggle="modal" data-target="#myModal">ver mas</button>'+
                        '</div></div></div>'
                }
            );
            document.getElementById("producto").innerHTML= producto.join("");
        }
    }
}
