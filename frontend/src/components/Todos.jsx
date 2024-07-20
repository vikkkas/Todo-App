export function Todos({todos}){
    return <div>
        {todos.map((todos)=>{
            return <div>
                <h1>{todos.title}</h1>
                <h1>{todos.description}</h1>
                <button>{todos.completed == true ? "Completed" : "Not Completed"}</button>
            </div>
        })}
    </div>
}