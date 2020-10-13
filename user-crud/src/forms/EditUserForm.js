import React, { useState, useEffect } from 'react'

function EditUserForm(props){
    useEffect(() => {
        setUser(props.currentUser)
      }, [props])

    const [user, setUser] = useState(props.currentUser)

    const handleInputChangeFirstName = (event) => {
        user.firstname = event.target.value;
    }


    const handleInputChangeLastName = (event) => {
        user.lastname = event.target.value;
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()

                props.updateUser(user._id, user)
            }}
        >
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={user.firstName}
                onChange={handleInputChangeFirstName}
            />
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={user.firstName}
                onChange={handleInputChangeLastName}
            />
            <button>Update user</button>
            <button
                onClick={() => props.setEditing(false)}
                className="button muted-button"
            >
                Cancel
      </button>
        </form>
    )
}

export default EditUserForm