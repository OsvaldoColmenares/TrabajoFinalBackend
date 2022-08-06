
const logger = async (req, res, next) => {

    let date_object = new Date();
    let date = ("0" + date_object.getDate()).slice(-2);   
    let month = ("0" + (date_object.getMonth() + 1)).slice(-2);
    let year = date_object.getFullYear();
    let hours = date_object.getHours();
    let minutes = date_object.getMinutes();
    let seconds = date_object.getSeconds();
    
    console.log('Fecha y hora de ejecución:',year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
    next();
}

module.exports = {logger}


