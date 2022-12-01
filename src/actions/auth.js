import { signInWithPopup, signOut } from 'firebase/auth'
import { provider, auth } from '../firebase/firebase'

export const startLogin = () => {
	return signInWithPopup(auth, provider)
}

export const startLogout = () => {
	window.location.href = '/'
	signOut(auth)
}

export const login = (uid) => ({ type: 'LOGIN', uid })

export const logout = () => ({ type: 'LOGOUT' })
