import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CSI Task",
  description: "Lelo mujhe CSI mai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
          <header>
            <Navbar/>
          </header>
          {children}
          <footer>

          </footer>
      </body>
    </html>
  );
}
