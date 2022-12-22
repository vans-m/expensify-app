import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = () => (
	<header className="header">
		<div className="content-container">
			<div className="header__content">
				<Link className="header__title" to="/dashboard">
<<<<<<< HEAD
					<h1>Boilerplate</h1>
=======
					<h1>Expensify</h1>
>>>>>>> b8f2aa657cd61afcb4be28256fa693ce6ddcb3b3
				</Link>
				<button className="button button--link" onClick={startLogout}>
					Logout
				</button>
			</div>
		</div>
	</header>
)

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => {
		dispatch(startLogout())
	}
})

export default connect(undefined, mapDispatchToProps)(Header)
