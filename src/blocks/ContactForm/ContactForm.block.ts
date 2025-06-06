import { Block } from 'payload'

export const ContactFormBlock: Block = {
	slug: 'contact_form_block',
	interfaceName: 'ContactFormBlock',
	labels: {
		singular: 'Contact Form',
		plural: 'Contact Forms',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
		},
		{
			name: 'description',
			type: 'textarea',
		},
		// {
		// 	name: 'form_name',
		// 	type: 'select',
		// 	label: 'Form Name',
		// 	required: true,
		// 	options: [
		// 		{
		// 			label: 'Contact Form',
		// 			value: 'contact_form',
		// 		},
		// 	],
		// },
	],
}
