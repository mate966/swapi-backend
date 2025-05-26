import { Field } from 'payload'

export type LinkType = (options?: {
	overrides?: Record<string, unknown>
	disableLabel?: boolean
	defaultValue?: 'reference' | 'custom'
}) => Field
