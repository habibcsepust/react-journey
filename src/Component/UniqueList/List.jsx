import '../../index.css';
import { v4 as uuidv4 } from 'uuid';
const todos = [
    {
        "id":uuidv4(),
        "title":"Title--1",
        "description":"Description---1"
    },
    {
        "id":uuidv4(),
        "title":"Title--2",
        "description":"Description---2"
    },
    {
        "id":uuidv4(),
        "title":"Title--3",
        "description":"Description---3"
    },
    {
        "id":uuidv4(),
        "title":"Title--4",
        "description":"Description---4"
    }
]

function List() {
 console.log("uuid: "+uuidv4())
  return (
    <div className='task'>
        {todos.map((todo)=>{
            const {id, title, description} = todo;
            return <div key={id}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        })}
    </div>
  )
};

export default List;