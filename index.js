import chalk from 'chalk';         // Para colorear texto en consola
import fetch from 'node-fetch';    // Para hacer peticiones HTTP
import moment from 'moment';       // Para gestionar fechas

// Mensaje de bienvenida de color verde
console.log(chalk.green('Bienvenidos a Weather Finder :)'))

// Guardamos la fecha y hora actual en una constante
const fechaActual = moment().format('LLLL')

// Imprimimos por consola la fecha y hora de colores con chalk
console.log(chalk.blue('Fecha actual: ') + chalk.yellow(fechaActual));

// Coordenadas de sevilla
const alt = 37.38283;
const lat = -5.97317;

// Constante que contiene la URL de la api de open-meteo
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${alt}&current_weather=true`;

// Hace una peticion GET a la const apiUrl
fetch(apiUrl)
    // Promesa que recoge en 'respuesta' la petición GET y la convierte en un .JSON
    .then(respuesta => respuesta.json())
    // Promesa que recoge la info en datos
    .then((datos)=> {
        // guarda la info que hay en current_weather del JSON en la constante tiempo
        const tiempo = datos.current_weather;
        console.log(chalk.cyan(`Temperatura: ${chalk.magenta(tiempo.temperature)}`)) //Muestra la temperatura
        console.log(chalk.cyan(`Velocidad del viento: ${chalk.magenta(tiempo.windspeed)}`)) //Muestra la vel del viento
        console.log(chalk.cyan(`Coordenadas del viento: ${chalk.magenta(tiempo.winddirection)}`)) // Muestra las coordenadas a las q va el viento
        })
        // Captura algun error que pueda suceder
    .catch(err => {
        // Muestra el error de color rojo por pantalla
        console.log(chalk.red('Error al obtener los datos del tiempo:', err));
    });