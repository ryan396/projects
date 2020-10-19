import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm'

function App() {

  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const initialFormState = { _id: "", firstName: "", lastName: "" }
  const [currentUser, setCurrentUser] = useState(initialFormState);

 function editRow(user){
    setEditing(true)
    setCurrentUser(user);   
  }
//for future use, if needed. will finda specific user
  function currentUserFind(id) {
    fetch("/api/fetch/" + id, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data)
      })
  }

  function updateUser(id, updatedUser) {
    setEditing(false);
    fetch('/api/update/' + id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: updatedUser._id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName
      })
    });
  }

  function useFetch() {
    fetch("/api/fetch", {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      })
  }

  function DeleteUser(id) {
    fetch(`/api/delete/` + id, {
      method: 'delete',
    })
    fetch("/api/fetch", {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      })
  }


  function AddUser(firstname, lastname) {
    fetch('/api/makeNew', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstname,
        lastName: lastname
      })
    });
  }



  useFetch();
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm AddUser={AddUser} />
              </div>
            )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} DeleteUser={DeleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App