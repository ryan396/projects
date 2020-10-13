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
				console.log(user.lastname);
				props.AddUser(user.firstname, user.lastname);
				setUser(initialFormState);
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