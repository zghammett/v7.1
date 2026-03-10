
export const metadata = {
  title: 'Red White & Clean',
  description: 'Veteran owned pressure washing in Kansas City'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
