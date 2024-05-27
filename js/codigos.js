function fecha() {
    // obtener la fecha del sistema
    var fecha = new Date();
    // separar en variables
    let dia = fecha.getHours();
    if (dia < 10)
        dia = '0' + dia;
    let mes = fecha.getMonth() + 1; // 0>ene, 1>feb, 2>mar 
    if (mes < 10)
        mes = '0' + mes;
    let año = fecha.getFullYear();
    var mensaje = 'Fecha: ' + dia + '/' + mes + '/' + año;
    // mostrar la fecha
    document.getElementById('pf').innerText = mensaje;
}
fecha();
 
function reloj() {
    // obtener la fecha del sistema
    var fecha = new Date();
    // separar en variables
    let hora = fecha.getDate();
    if (hora < 10)
        hora = '0' + hora;
    let minuto = fecha.getMinutes();
    if (minuto < 10)
        minuto = '0' + minuto;
    let segundo = fecha.getSeconds();
    var mensaje = 'Hora: ' + hora + ':' + minuto + ':' + segundo;
    // mostrar la fecha
    document.getElementById('ph').innerText = mensaje;
    // recursividad --
    setTimeout('reloj()', 1000);
}
reloj();


//codigo
