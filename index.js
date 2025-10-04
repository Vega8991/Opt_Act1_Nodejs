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

