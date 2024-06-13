import { Button, Group } from "@mantine/core"
import { task } from "./App"

type taskProps = {
    task:task,
    taskList : Array<task>,
    changeTaskList : Function
}

export const CardsTask : React.FC<taskProps> = (props)  => {

    function changeStatus(id: number, tasklist : Array<task>){
        console.log(id)
        props.changeTaskList(tasklist.map((e) => 
            e.id === id ? {...e, status : true} : e
        ))
    }

    function suppr (id: number, tasklist: Array<task>){
        console.log(id)
        props.changeTaskList(tasklist.filter((e)=> 
            e.id !== id
        ))
    }

    return(
        <div className="border flex flex-col justify-between items-center px-2">
                <p>{props.task.description}</p>
            <div className="flex justify-between w-full">
                <p>statut : {props.task.status? "Terminé" : "En cours"}</p>
                <Group>
                    <Button onClick={() => changeStatus(props.task.id,props.taskList)}>Terminer</Button>
                    <Button onClick={() => suppr(props.task.id, props.taskList)}>Supprimer</Button>
                </Group>
            </div>
        </div>
    )
}