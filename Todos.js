// Todos
// userId: 1,
// id: 1,
// title
// completed

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Posts.css';

function Todos() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        // API call
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then( res => {
            console.log(res.data);
            setTodos(res.data);
        })
    }, [])
    let todo = todos.map(el => {
        return(
            <tr>
                <td>{el.userId}</td>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>{el.completed}</td>
            </tr>
        )
    });

    return (
      <div>
          <table>
              <thead>
                  <tr>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                  </tr>
               </thead>
               <tbody>
                   {todo}
               </tbody>
          </table>
      </div>
    );
  }
  
  export default Todos;