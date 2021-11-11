function filtrar(faturas){

    return faturas.filter(f => f.valor > 2000);

}

module.exports = filtrar;

