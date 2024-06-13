import { Button, Group } from "@mantine/core"
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
        <div className="border flex flex-col justify-between items-center px-2">
                <p>{props.description}</p>
            <div className="flex justify-between w-full">
                <p>statut : {props.status? "Terminé" : "En cours"}</p>
                <Group>
                    <Button onClick={() => changeStatus(props.id,props.taskList)}>Terminer</Button>
                    <Button onClick={() => suppr(props.id, props.taskList)}>Supprimer</Button>
                </Group>
            </div>
        </div>
    )
}