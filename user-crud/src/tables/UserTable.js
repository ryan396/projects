import React from 'react'

function UserTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(user)
                  }}
                  className="button muted-button"
                >
                  Edit
                </button>
                <button onClick={() => props.DeleteUser(user._id)} className="button muted-button">Delete</button>
              </td>
            </tr>
          ))
        ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
      </tbody>
    </table>
  )

}

export default UserTable