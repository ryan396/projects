import React, { useState } from 'react'

function AddUserForm(props) {
	const initialFormState = { firstname: '', lastname: '' }
	const [user, setUser] = useState(initialFormState)


	const handleInputChangeFirstName = (event) => {
		user.firstname = event.target.value;
	}


	const handleInputChangeLastName = (event) => {
		user.lastname = event.target.value;
	}

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				try {
					if ((user.firstname !== "" & user.lastname !== "" & typeof user.firstname === 'string' & typeof user.lastname === "string")) {
						props.AddUser(user.firstname, user.lastname);
						setUser(initialFormState);
					} else {
						alert('please enter valid first and last name');
					}
				} catch (error) {
					console.log(error);
				}


			}}
		>
			<label>First Name</label>
			<input
				type="text"
				firstname="firstName"
				value={user.firstname}
				onChange={handleInputChangeFirstName}
			/>
			<label>Last Name</label>
			<input
				type="text"
				lastname="lastName"
				value={user.lastname}
				onChange={handleInputChangeLastName}
			/>
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm