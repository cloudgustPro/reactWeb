import React, { useState } from "react";

const Index = ()=>{

    const[tasks, setTasks] = useState([
                                        {id:1, name:'finish this course', completed: false},
                                        {id:2, name:'start intern @ minabtech', completed: false},
                                        {id:3, name:'start GYM', completed: true}
                                    ])
return <>
<div className="absolute w-full">

    <h1 className=" ml-32 text-center text-lg mt-6">Task List</h1>
    <ul className="text center mx-8 w-auto ">{tasks.map((task)=>(
        <li className="mb-4 border shadow-md">{task.id}-{task.name}</li>
        ))}</ul>
</div>
</>
}

export default Index;
