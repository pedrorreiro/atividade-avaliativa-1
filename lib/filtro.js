function filtrar(faturas){

    var result = faturas.filter(f => f.valor > 2000);

    result = result.filter(f => 
        (
            (f.valor > 2500) 
                || 
                (new Date().getMonth() - (f.data.getMonth()) < 1)
        )
            )

    result = result.filter(f => 
        (
            (f.valor > 3000) 
                || 
                (new Date().getMonth() - (f.cliente.dataInclusao.getMonth()) < 2)
        )
            )
        

    return result;
}

module.exports = filtrar;

