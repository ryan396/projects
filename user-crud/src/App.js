import React, { useEffect, useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm'

function App() {

  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const initialFormState = { firstName: "", lastName: "" }
  const [currentUser, setCurrentUser] = useState(initialFormState);

  function editRow(user) {
    setEditing(true)
    setCurrentUser({ id: user._id, name: user.name, username: user.username })

  }

  function currentUserFind(id) {
    fetch("/fetch/" + id, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data)
      })
  }

  function updateUser(id, updatedUser) {
    fetch('/makeNew', {
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
    fetch("/fetch", {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      })
  }

  function DeleteUser(id) {
    fetch(`/delete/` + id, {
      method: 'delete',
    })
    fetch("/fetch", {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      })
  }


  function AddUser(firstname, lastname) {
    fetch('/makeNew', {
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
                setEditing={setEditing}
                currentUserFind={currentUserFind}
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