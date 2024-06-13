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
        props.changeTaskList(tasklist.map((e) => {
            e.id === id && {...e, status : true}
        }))
    }

    function suppr (id: number, tasklist: Array<task>){
        props.changeTaskList(tasklist.filter((e)=> {
            e.id != id
        }))
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