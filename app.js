const peliculas = () => {

    // Eventos
    const cantidadPelicula = document.getElementById("numerosPeliculas").value;
    const opcionUno = document.getElementById("opcion1");
    const opcionDos = document.getElementById("opcion2");
    const opcionTres = document.getElementById("opcion3");
    const opcionCuatro = document.getElementById("opcion4");
    const opcionCinco = document.getElementById("opcion5");
    // variables globales
    let valorTotalPeliculasEnCine = 0;
    const valorPeliCineColombia = 3750;
    const plataformas = {
        netflix: 16900,
        Amazon: 14900,
        HBO: 14900,
        Sky: 15000,
        Disney: 23900
    }
    let ValorPlataformasSeleccionadas = [];
    let sumaValorPlataformasSeleccionadas = 0;

    //Logica
    // suma pelicula
    valorTotalPeliculasEnCine = valorPeliCineColombia * cantidadPelicula;

    //Consultar si escogio el check y guardar el precio en un arreglo
    for (let i = 0; i < 5; i++) {
        if (opcionUno.checked) {
            ValorPlataformasSeleccionadas.push(plataformas.netflix);
            opcionUno.checked = false;
        } else if (opcionDos.checked) {
            ValorPlataformasSeleccionadas.push(plataformas.Amazon);
            opcionDos.checked = false;
        } else if (opcionTres.checked) {
            ValorPlataformasSeleccionadas.push(plataformas.HBO);
            opcionTres.checked = false;
        } else if (opcionCuatro.checked) {
            ValorPlataformasSeleccionadas.push(plataformas.Sky);
            opcionCuatro.checked = false;
        } else if (opcionCinco.checked) {
            ValorPlataformasSeleccionadas.push(plataformas.Disney);
            opcionCinco.checked = false;
        }
    }

    // Sumar las plataformas seleccionadas
    ValorPlataformasSeleccionadas.forEach((valorPlataforma) => {
        sumaValorPlataformasSeleccionadas = sumaValorPlataformasSeleccionadas + valorPlataforma;
    });

    //Comparando Cine VS Nelflix

    if (valorTotalPeliculasEnCine > sumaValorPlataformasSeleccionadas) {
        document.getElementById("resultado").innerHTML = "Nooooooo, Las plataformas de Streaming acabaron con las salas de cines, I LOVE <3";
    } else {
        document.getElementById("resultado").innerHTML = "Te recomiendo mejor ir al cine ya que vas a ver MUY pero MUY pocas pelis al mes";
    }
    console.log(valorTotalPeliculasEnCine);
    console.log(sumaValorPlataformasSeleccionadas);
}