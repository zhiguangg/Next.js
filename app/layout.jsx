import Link from "next/link"
import "./global.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header className="site-header">
        <h3>Our Header</h3>
      </header>
      <body>{children}</body>
      <footer className="site-footer">
        <p>Our Footer</p>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </html>
  )
}
