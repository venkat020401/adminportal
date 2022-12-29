import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UserList() {

  const [userList, setUserList] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {

    getUsers();

  }, []);
  let handleDelete = async (id) => {
    try {
      const confirmdata = window.confirm(`are you sure want to delete`);
      if (confirmdata) {
        await axios.delete(`https://63a149e3e3113e5a5c514a70.mockapi.io/userdetails/${id}`)
        getUsers()
      }
    } catch (error) {
      
    }

  }

  let getUsers = async () => {
    try {
      const users = await axios.get("https://63a149e3e3113e5a5c514a70.mockapi.io/userdetails");
      setUserList(users.data);
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div class="container-fluid">

        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Users List</h1>
          <Link to={"/portal/create-user"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
        </div>


        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">User Details</h6>
          </div>
          <div class="card-body">
            {
              isLoading ? (<>
                <img src='https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif' />
              </>) : <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Country</th>
                      <th>State</th>
                      <th>City</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {/* <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Action</th>
                  </tr>
                </tfoot> */}
                  <tbody>
                    {userList.map((user, index) => {
                      return (
                        <tr key={index}>
                          <td>{user.id}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{user.country}</td>
                          <td>{user.state}</td>
                          <td>{user.city}</td>
                          <td>
                            <Link to={`/portal/user-view/${user.id}`} className='btn btn-primary btn-sm mb-1 w-100'>View</Link>
                            <Link to={`/portal/user-edit/${user.id}`} className='btn btn-info mb-1 w-100 btn-sm' >Edit</Link>
                            <button onClick={() => handleDelete(user.id)} className='btn btn-danger w-100 btn-sm'>Delete</button>
                          </td>
                        </tr>)
                    })}

                  </tbody>
                </table>
              </div>
            }

          </div>
        </div>

      </div>
    </>
  )
}

export default UserList