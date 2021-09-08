import React, { createContext, useState } from 'react'

export const SortContext = createContext({})

export const SortContextProvider = ({ children }) => {
	const [sortData, setSortData] = useState({ sortType: null })
	return (
		<SortContext.Provider
			value={{
				sortData,
				setSortData,
			}}
		>
			{children}
		</SortContext.Provider>
	)
}
