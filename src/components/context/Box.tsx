import { useContext } from 'react'
import { ThemeContexts } from './ThemeContext'

export default function box() {
	const theme = useContext(ThemeContexts)
	return (
		<div
		style={{background: theme.primary.main}}
		> </div>
	)
}
