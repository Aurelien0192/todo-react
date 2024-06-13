import { Button } from "@mantine/core"
import { task } from "./App"

type taskProps = {
    id: number,
    description : string,
    status : boolean
    taskList : Array<task>
    changeTaskList : Function
}

export const CardsTask : React.FC<taskProps> = (props)  => {

    function changeStatus(id: number, tasklist : Array<task>){
        const taskListTabInt :Array<task> = [...tasklist]
        const index : number= taskListTabInt.findIndex((e) => e.id === id)
        taskListTabInt[index].status = true
        props.changeTaskList(taskListTabInt)
    }

    function suppr (id: number, tasklist: Array<task>){
        const taskListTabInt :Array<task> = [...tasklist]
        const index : number= taskListTabInt.findIndex((e) => e.id === id)
        taskListTabInt.splice(index,1)
        props.changeTaskList(taskListTabInt)
    }

    return(
        <div className="border flex justify-between items-center px-2">
            <div className="flex flex-col">
                <p>{props.description}</p>
                <p>statut : {props.status? "Terminé" : "En cours"}</p>
            </div>
            <Button onClick={(e) => changeStatus(props.id,props.taskList)}>Terminer</Button>
            <Button onClick={(e) => suppr(props.id, props.taskList)}>Supprimer</Button>
        </div>
    )
}