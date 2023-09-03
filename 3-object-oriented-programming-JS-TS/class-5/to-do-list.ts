// Nesse arquivo eu fiz só o mínimo descrito na atividade, no outro arquivo 'ToDoListV2.ts' (neste mesmo diretório)
// eu construí com mais liberdade classes semelhantes mas com bem mais robustas.
class Tarefa {
    descricao: string;
    prioridade: string;
    concluida: boolean = false;

    constructor(descricao: string, prioridade?: string) {
        this.descricao = descricao;
        this.prioridade = prioridade ?? "baixa";
    }

    toString() {
        return `task: ${this.descricao}\n      prioridade: ${this.prioridade}\n      status: ${this.concluida ? "Concluída" : "Pendente"}\n`
    }
}

class ListaDeTarefas {

    tarefas: Tarefa[] = [];

    adicionarTarefa(descricao: string): Tarefa {
        let novaTarefa = new Tarefa(descricao);

        this.tarefas.push(novaTarefa);
        return novaTarefa;
    }

    listarTarefas(): number {
        this.tarefas.forEach((tarefa) => console.log(`${tarefa}`));
        return this.tarefas.length;
    }
}

class ListaPrioritaria extends ListaDeTarefas {
    tarefasPrioritarias: Tarefa[] = [];

    adicionarTarefaPrioritaria(descricao: string, prioridade: string): Tarefa {
        let novaTarefa = new Tarefa(descricao, prioridade);

        this.tarefasPrioritarias.push(novaTarefa);
        return novaTarefa;
    }

    listarTarefas(): number {
        this.tarefasPrioritarias.forEach((tarefa) => console.log(`${tarefa}`));
        return this.tarefas.length;
    }
}

const lista = new ListaDeTarefas();
const listaPrioritaria = new ListaPrioritaria();

lista.adicionarTarefa("Comprar leite")
lista.adicionarTarefa("Lavar roupa")
lista.adicionarTarefa("Dar banho no cachorro")

listaPrioritaria.adicionarTarefaPrioritaria("Terminar o exercício da aula", "alta");
listaPrioritaria.adicionarTarefaPrioritaria("Escolher uma nova serie para começar a assistir", "baixa");
listaPrioritaria.adicionarTarefaPrioritaria("Comprar um chinelo reserva", "média");

lista.tarefas[2].concluida = true;
listaPrioritaria.tarefasPrioritarias[0].concluida = true;


lista.listarTarefas()
listaPrioritaria.listarTarefas()