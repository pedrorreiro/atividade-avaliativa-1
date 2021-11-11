function filtrar(faturas){

    var result = faturas.filter(f => f.valor > 2000);

    result = result.filter(f => 
        (
            (f.valor  > 2000 && f.valor < 2500) 
                && 
            (f.data.getMonth() === new Date().getMonth() - 1)
        )
            )

    return result;
}

module.exports = filtrar;

