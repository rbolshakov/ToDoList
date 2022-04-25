import React, { useState } from "react"
import styles from "./index.module.scss"

interface InputTaskProps {
	id: string
	title: string
	onDone: (id: string) => void
	onEdited: (id: string, title: string) => void
	onRemoved: (id: string) => void
}
export const InputTask: React.FC<InputTaskProps> = ({
	id,
	title,
	onDone,
	onEdited,
	onRemoved,
}) => {
	const [checked, setChecked] = useState(false)
	const [isEditMode, setIsEditMode] = useState(false)
	const [value, setValue] = useState(title)

	return (
		<div className={styles.inputTask}>
			<label className={styles.inputTaskLabel}>
				<input
					type='checkbox'
					disabled={isEditMode}
					checked={checked}
					className={styles.inputTaskCheckbox}
					onChange={(ev) => {
						setChecked(ev.target.checked)
						if (ev.target.checked) {
							onDone(id)
						}
					}}
				/>

				{isEditMode ? (
					<input
						value={value}
						onChange={(ev) => {
							setValue(ev.target.value)
						}}
						className={styles.inputTaskTitleEdit}
					/>
				) : (
					<h3 className={styles.inputTaskTitle}>{title}</h3>
				)}
			</label>

			{isEditMode ? (
				<button
					area-aria-label='Save'
					className={styles.inputTaskSave}
					onClick={() => {
						onEdited(id, value)
						setIsEditMode(false)
					}}
				/>
			) : (
				<button
					area-aria-label='Edit'
					className={styles.inputTaskEdit}
					onClick={() => {
						setIsEditMode(true)
					}}
				/>
			)}

			<button
				area-aria-label='Remove'
				className={styles.inputTaskRemove}
				onClick={() => {
					if (confirm("Вы уверены?")) {
						onRemoved(id)
					}
				}}
			/>
		</div>
	)
}
