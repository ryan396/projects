import React, { useState, useEffect } from 'react'

function EditUserForm(props){
    useEffect(() => {
        setUser(props.currentUser)
      }, [props])

    const [user, setUser] = useState(props.currentUser)

    const handleInputChangeFirstName = (event) => {
        user.firstName = event.target.value;
    }


    const handleInputChangeLastName = (event) => {
        user.lastName = event.target.value;
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                try {
					if ((user.firstName !== "" & user.lastName !== "" & typeof user.firstName === 'string' & typeof user.lastName === "string")) {
                        props.updateUser(user._id, user);
					} else {
						alert('please enter valid first and last name');
					}
				} catch (error) {
					console.log(error);
				}
            }}
        >
            <label>Name</label>
            <input
                type="text"
                firstname="firstName"
                value={user.firstName}
                onChange={handleInputChangeFirstName}
            />
            <label>Last Name</label>
            <input
                type="text"
                name="lastName"
                value={user.lastName}
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