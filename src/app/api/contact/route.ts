// TODO: Handle form submissions

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: true,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASSWORD,
	},
})

export async function POST(request: Request) {
	try {
		const body = await request.json()
		const { name, email, message } = body

		if (!name || !email || !message) {
			return NextResponse.json({ error: 'Wszystkie pola są wymagane' }, { status: 400 })
		}

		const mailOptions = {
			from: process.env.SMTP_USER,
			to: process.env.CONTACT_EMAIL,
			subject: `Nowa wiadomość od ${name}`,
			text: `
        Imię: ${name}
        Email: ${email}
        Wiadomość: ${message}
      `,
			html: `
        <h3>Nowa wiadomość ze strony</h3>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Wiadomość:</strong> ${message}</p>
      `,
		}

		await transporter.sendMail(mailOptions)

		return NextResponse.json(
			{ message: 'Wiadomość została wysłana pomyślnie' },
			{ status: 200 },
		)
	} catch (error) {
		console.error('Błąd podczas wysyłania maila:', error)
		return NextResponse.json(
			{ error: 'Wystąpił błąd podczas wysyłania wiadomości' },
			{ status: 500 },
		)
	}
}
