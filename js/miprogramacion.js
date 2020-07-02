$(document).ready(function() {
    $("#contenido").load("home.html");
    $("#preguntasFrecuentes").click(function(){
        $("#contenido").load("preguntas_frecuentes.html");
    });
    $("#producto").click(function(){
        $("#contenido").load("producto.html");
    });
    $("#combo1").click(function(){
        $("#contenido").load("venta.html");
    });
    $("#combo2").click(function(){
        $("#contenido").load("venta_b.html");
    });
    $("#terminos").click(function(){
        $("#contenido").load("terminos_condiciones.html");
    });
    $("#home").click(function(){
        $("#contenido").load("home.html");
    });
    $("#pF").click(function(){
        $("#contenido2").load("preguntas_frecuentes.html");
    });
});

