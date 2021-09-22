import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './styles/index.css'
import './styles/scroll.css'
import 'react-activity/dist/Spinner.css'

import { ModalContextProvider } from './context/ModalContext'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SortContextProvider } from './components/sort'

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
	document.getElementById('deadline_root')
)
