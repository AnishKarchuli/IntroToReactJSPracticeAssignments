import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App'
import About from './pages/About'
import Todos from './pages/Todos'
import TodoDetails from './pages/TodoDetails'

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/todos",
		element: <Todos />
	},
	{
		path: "/about",
		element: <About />
	},
	{
		path: "/todos/:todoId",
		element: <TodoDetails />
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)