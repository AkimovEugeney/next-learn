import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import { Toaster } from 'sonner'

import './globals.scss'
import { Providers } from './providers'
import { SITE_NAME } from '@/constans/seo.constans'

const noto = Noto_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-noto',
	style: ['normal']
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Good'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={noto.className}>
				<Providers>
					<Toaster
						theme='dark'
						position='bottom-right'
						duration={1500}
					/>
					{children}
				</Providers>
			</body>
		</html>
	)
}
