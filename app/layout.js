import Navbar from './components/navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}