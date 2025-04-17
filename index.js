function adicionarTarefa() {
    let tarefa = document.getElementById('input-tarefa').value;
    let dataInicio = document.getElementById('input-dataInicio').value;
    let prazo = document.getElementById('input-prazo').value;
    let prioridade = document.getElementById('select-prioridade').value;
    let autor = document.getElementById('input-autor').value;
    let descricao = document.getElementById('input-descricao').value;

    let resultado = 
        "Tarefa: " + tarefa + "<br>"
        "Data de início: " + dataInicio + "<br>"
        "Prazo: " + prazo + "<br>"
        "Prioridade: " + prioridade + "<br>"
        "Autor: " + autor + "<br>"
        "Descrição: " + descricao + "<br>"
    ;

    document.getElementById('a-fazer').innerHTML = resultado;
}