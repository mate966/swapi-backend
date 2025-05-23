'use client'

import { useRowLabel } from '@payloadcms/ui'
import { RowLabelProps } from './rowLabel.types'

export default function RowLabel() {
	const { data, rowNumber } = useRowLabel<RowLabelProps>()

	return (
		<div>
			[{String((rowNumber || 0) + 1).padStart(2, '0')}]{' '}
			{data?.link?.label ? `${data.link.label}` : 'Link'}
		</div>
	)
}
