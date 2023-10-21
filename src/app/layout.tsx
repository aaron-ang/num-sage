import "./globals.css";

import Navbar from "./components/Navbar";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg-color">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
