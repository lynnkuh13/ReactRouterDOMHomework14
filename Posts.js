// Posts
// userId: 1,
// id: 1,
// title
// body

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Posts.css';

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // API call
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data);
            setPosts(res.data);
        })
    }, [])
    console.log("posts: ", posts);
    let post = posts.map(el => {
        return(
            <tr>
                <td>{el.userId}</td>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>{el.body}</td>
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
                    <th>Body</th>
                 </tr>
               </thead>
               <tbody>
                   {post}
               </tbody>
          </table>
      </div>
    );
  }
  
  export default Posts;