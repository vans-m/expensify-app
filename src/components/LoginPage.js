import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = () => (
	<div className="box-layout">
		<div className="box-layout__box">
<<<<<<< HEAD
			<h1 className="box-layout__title">Boilerplate</h1>
			<p>Tag line</p>
=======
			<h1 className="box-layout__title">Expensify</h1>
			<p>It's time to get your expenses under control.</p>
>>>>>>> b8f2aa657cd61afcb4be28256fa693ce6ddcb3b3
			<button className="button" onClick={startLogin}>
				Login with Google
			</button>
		</div>
	</div>
)

const mapDispatchToProps = (dispatch) => ({ startLogin: () => dispatch(startLogin()) })

export default connect(undefined, mapDispatchToProps)(LoginPage)
