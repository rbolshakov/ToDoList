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

	return (
		<div className={styles.inputTask}>
			<label>
				<input
					type='checkbox'
					checked={checked}
					className={styles.inputTaskCheckbox}
					onChange={(ev) => {
						setChecked(ev.target.checked)
						if (ev.target.checked) {
							onDone(id)
						}
					}}
				/>
				<h3 className={styles.inputTaskTitle}>{title}</h3>
			</label>
			<button area-aria-label='Edit' />
		</div>
	)
}
