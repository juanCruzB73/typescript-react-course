import { FC } from "react"
import { Droppable } from "react-beautiful-dnd";

interface Props{
    droppableId:string;
}

export const EmptyTodos:FC<Props> = ({droppableId}) => {
    console.log(droppableId);
    
  return (
    <Droppable droppableId={droppableId}>
        {(provided) =>(
            <div {...provided.droppableProps} ref={provided.innerRef} style={{ minHeight: '100px', border: '1px solid lightgray', background: 'lightgrey' }}>
                <p>no todos</p>
                {provided.placeholder}
            </div>
        )}
    </Droppable>
  )
}
