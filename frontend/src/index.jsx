import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App.jsx'
import { ModalContextProvider } from './context/ModalContext'
import { SortContextProvider } from './context/SortContext'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ModalContextProvider>
				<SortContextProvider>
					<App />
				</SortContextProvider>
			</ModalContextProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
