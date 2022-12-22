import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import LoginPage from '../components/LoginPage'

const LoggedRoutes = ({ user }) => (
	<Routes>
		<Route path="/" element={user ? <Navigate to="/dashboard" /> : <LoginPage />} />
		<Route path="/dashboard" element={<DashboardPage />} />
		<Route path="*" element={<NotFoundPage />} />
	</Routes>
)
const LogoutRoutes = () => (
	<Routes>
		<Route path="*" element={<LoginPage />} />
	</Routes>
)

const AppRouter = ({ user }) => (
	<BrowserRouter>
		{user && <Header />}
		<div>{!user ? <LogoutRoutes /> : <LoggedRoutes user={user} />}</div>
	</BrowserRouter>
)

export default AppRouter
