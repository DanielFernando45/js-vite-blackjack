import { pedirCarta,valorCarta,CrearCartaHtml } from './';

/**
 * turno de la computadora
 * @param {Number} puntosMinimos punots minimos que la computadora necesita para ganar
 * @param {HMLElment} puntosHTML elementos HTML para mostrar los puntos 
 * @param {HMLElment} divCartasComputadora elementos HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */


//Turno Computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck =[]) => {

    if(!puntosMinimos) throw new Error('Puntos Minimos son Necesarios');
    if(!puntosHTML) throw new Error('Argumento Puntos HTML es Necesario');


    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = CrearCartaHtml(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}