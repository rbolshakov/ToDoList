import React, { useCallback, useState } from "react"
import styles from "./index.module.scss"

interface InputPlusProps {
	onAdd: (title: string) => void
}

export const InputPlus: React.FC<InputPlusProps> = ({ onAdd }) => {
	const [inputValue, setInputValue] = useState("")
	const addTask = useCallback(() => {
		onAdd(inputValue)
		setInputValue("")
	}, [inputValue])
	return (
		<div className={styles.inputPlus}>
			<input
				type='text'
				className={styles.inputPlusValue}
				value={inputValue}
				onChange={(ev) => {
					setInputValue(ev.target.value)
				}}
				onKeyDown={(ev) => {
					if (ev.key === "Enter") {
						addTask()
					}
				}}
				placeholder='Напишите задачу здесь...'
			/>
			<button
				onClick={addTask}
				aria-label='Add'
				className={styles.inputPlusButton}
			/>
		</div>
	)
}
