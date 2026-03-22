import './globals.css'

export const metadata = {
  title: 'Crop Health Estimator',
  description: 'Estimate the health of your grape plants and predict harvest time',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}