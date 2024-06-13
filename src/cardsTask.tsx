type task ={
    description : string,
    status : boolean
}


export const CardsTask : React.FC<task> = (props)  => {
    return(
        <div className="border">
            <p>{props.description}</p>
            <p>statut : {props.status? "Terminé" : "En cours"}</p>
        </div>
    )
}