let resultado = (dato) => {
    const valor = `${dato["realtime"][1]["tableRow"]["value"]} ${dato["realtime"][1]["tableRow"]["unit"]}`;
    const estado = dato["realtime"][1]["tableRow"]["status"];
    let mensaje = `<p>Resultados:</p>
    <p><b>Comuna:</b> ${dato["comuna"]}</p>
    <p><b>Región:</b> ${dato["region"]}</p>
    <p>La concentración de la contaminación en el aire es ${valor}</p>
    <p>La calidad del aire es ${estado}</p>`;
    return mensaje;
}

$(function(){

    $('form').submit(function (e) { 
        e.preventDefault();
        $.get("https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/", function(data, status) { 
            try{
                console.log(`Estado de la petición: ${status}`);
                const dato = data.filter(localidad => localidad["nombre"] === $("input.form-control").val())[0];
                if(dato === undefined){
                    throw new Error('Localidad No Encontrada');
                }
                $('#resultados').html(`${resultado(dato)}`);
            }catch (err){
                console.error(err.message);
                $('#resultados').html(`Localidad No Encontrada`);
            }
        });
    });
})