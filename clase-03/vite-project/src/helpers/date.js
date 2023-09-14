/**
 * Transforma un objeto Date a una representacion como string con el formato de fecha:
 * AAAA-MM-DD hh:mm:ss
 * 
 * @param {Date} date 
 */


export function dateToString(date) {

    //Tenemos dos maneras de lograr el objetivo:
    //1.Parsear manualmente el objeto Date y armar el string
    //2. Usar la API de Intl.

    //Forma 1:
    // let year = normalizeSegment(date.getFullYear());
    // let month = normalizeSegment(date.getMonth() + 1); //Los meses en Date los cuenta de 0 a 11 por eso hay que agregar uno
    // let day = normalizeSegment(date.getDate());
    // let hours = normalizeSegment(date.getMinutes());
    // let minutes = normalizeSegment(date.getMinutes());
    // let seconds = normalizeSegment(date.getSeconds());

    // function normalizeSegment(value){
    //     return ("" + value).padStart(2, '0');
    // }

    // return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    //Forma 2: usando la API Intl(intercionalization)
    const dateFormatter = new Intl.DateTimeFormat('es-AR', {
        //que reglas quiero que tenga
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(date);

    return dateFormatter.replace(',', '');
}