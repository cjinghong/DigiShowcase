
const user = (state={}, action) => {
	console.log(action.email);
	switch(action.type) {
		case 'LOGIN':
			return {
				email: action.email
			};
		case 'LOGOUT':
			return {}
		default: 
			return state;
	}
}

export default user;