import React from 'react'
import { Theme } from '../theme'
import { Box } from './Box'

export default {
	title: 'Box',
	component: Box,
}

export const box = () => {
	return (
		<Box display="grid" gridTemplateColumns="repeat(auto-fit, 200px)" gridGap={3}>
			{Object.keys(new Theme().colors).map(color => (
				<Box width={200} height={200} tint={color}>
					{color}
				</Box>
			))}
		</Box>
	)
}
