import React, { useState, useEffect } from 'react'
import ListCard from './components/listCard'

import { SortContext } from '../context/SortContext'

// Prop drilling, should be improved.

const DeadlineContainer = ({ reminderArray }) => {
	const { sortData } = useContext(SortContext)
	const [reminderArrays, setreminderArray] = useState(reminderArray)

	const getDate = (a) => {
		return new Date(a).getTime()
	}

	useEffect(() => {
		const i = sortData.sortType
		if (i === null) {
			setreminderArray(reminderArrays)
		} else if (i === 'Most urgent') {
			setreminderArray(
				reminderArray.sort(
					(a, b) => getDate(a.payload.dueDate) - getDate(b.payload.dueDate)
				)
			)
		} else if (i === 'Least urgent') {
			setreminderArray(
				reminderArray.sort(
					(a, b) => getDate(b.payload.dueDate) - getDate(a.payload.dueDate)
				)
			)
		}
	}, [sortData])

	return (
		<div>
			{Array.isArray(reminderArrays) &&
				reminderArray.map((value, index) => {
					const { title, description, dueDate, startDate } = value.payload
					return (
						<div className="w-full border-b-1/2 mt-5" key={index}>
							<ListCard
								title={title}
								description={description}
								dueDate={dueDate}
								startDate={startDate}
							/>
						</div>
					)
				})}
		</div>
	)
}

export default DeadlineContainer
