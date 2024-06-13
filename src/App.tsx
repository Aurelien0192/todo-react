import { useState } from 'react'
import { Button, Container, Group, Input } from '@mantine/core'
import { CardsTask } from './cardsTask'

export type task = {
  id : number,
  description : string,
  status : boolean
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
    setTaskList([...tasklist, task])
    setInputValue("")
    const input: HTMLInputElement = document.getElementById("input") as HTMLInputElement
    input.value = ""
  }

  function inputChange(input: string): void {
    setInputValue(input)
  }

  function changeTaskList(newTaskList: Array<task>): void{
    setTaskList(newTaskList)
  }

  return (
   <div>
      <Group className='flex w-fit mx-auto my-10'>
        <Input id="input" className='border' placeholder="Nouvelle tâche" onChange={(e) => inputChange(e.currentTarget.value)}></Input>
        <Button onClick={() => addTaskList(inputValue as string)}>Ajouter Tâche</Button>
      </Group>
      <Container size="xs">
        {tasklist.map((e, index) =><CardsTask key={index} changeTaskList={changeTaskList} taskList={tasklist} task={e}></CardsTask> )}
      </Container>
   </div>
  )
}
