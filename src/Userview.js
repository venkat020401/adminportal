import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Userview() {

  const params = useParams();
  const [isLoading, setLoading] = useState(true);

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`https://63a149e3e3113e5a5c514a70.mockapi.io/userdetails/${params.id}`).then((response) => {
      setPost(response.data);
      setLoading(false)
    });
  }, []);

  if (post)


    return (<div className="container mt-5">
      <div className="row">
        <div className="col-sm-6">
          <h2>{post.username}</h2> <br/>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <th>ID</th>
                <td>{post.id}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{post.email}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{post.country}</td>
              </tr>
              <tr>
                <th>State</th>
                <td>{post.state}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{post.city}</td>
              </tr>
              <tr>
                <th><Link to={`/portal/user-edit/${params.id}`} className="btn btn-outline-primary">Edit user</Link></th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>)
      
    

    
}

export default Userview
