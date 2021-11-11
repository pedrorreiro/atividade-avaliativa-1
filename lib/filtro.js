function filtrar(faturas){

    var result = faturas.filter(f => f.valor > 2000);

    return result;
}

module.exports = filtrar;

