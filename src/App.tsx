import { useState } from 'react'
import { Button, Container, Group, Input } from '@mantine/core'
import { CardsTask } from './cardsTask'

export type task = {
  id : number,
  description : string,
  status : boolean,
  }

export function App() {

  const [tasklist, setTaskList] = useState<Array<task>>([])
  const [inputValue, setInputValue] = useState<string>()

  function addTaskList(taskDescribe : string): void{
    const task : task = {
      id : tasklist.length+1,
      description : taskDescribe,
      status : false
    }
    const taskTabInt = tasklist
    taskTabInt.push(task)
    setTaskList(taskTabInt)
    setInputValue("")
  }

  function inputChange(input: string): void {
    setInputValue(input)
  }


  return (
   <div>
      <Group className='flex w-fit mx-auto mt-10'>
        <Input className='border' placeholder="Nouvelle tâche" onChange={(e) => inputChange(e.currentTarget.value)}></Input>
        <Button onClick={(e) => addTaskList(inputValue as string)}>Ajouter Tâche</Button>
      </Group>
      <Container size="xs">
        {tasklist.map((e, index) =><CardsTask key={index} description={e.description} status={e.status}></CardsTask> )}
      </Container>
   </div>
  )
}

export default App
