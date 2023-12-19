import './globals.css'

export const metadata = {
  title: 'Food Cluster',
  description: '식품클러스트',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
