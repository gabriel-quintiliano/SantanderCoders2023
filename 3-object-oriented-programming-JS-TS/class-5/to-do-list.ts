class Tarefa {
    descricao: string;
    concluida: boolean = false;
    prioridade: string;

    constructor(descricao: string, prioridade?: string) {
        this.descricao = descricao;
        this.prioridade = prioridade ?? "baixa";
    }

    toString() {
        return `task: ${this.descricao}\nprioridade: ${this.prioridade}\nstatus: ${this.concluida ? " (Concluída)" : " (Pending)"}`
    }
}

class ListaDeTarefas {

    tarefas: Tarefa[] = [];

    adicionarTarefa(descricao: string, prioridade?: string): Tarefa {
        let novaTarefa = new Tarefa(descricao, prioridade);

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

    adicionarTarefaPrioritaria(descricao: string): Tarefa {
        let novaTarefa = new Tarefa(descricao, "alta");

        this.tarefasPrioritarias.push(novaTarefa);
        return novaTarefa;
    }

    listarTarefas(): number {
        this.tarefasPrioritarias.forEach((tarefa) => console.log(`${tarefa}`));
        return this.tarefas.length;
    }
}