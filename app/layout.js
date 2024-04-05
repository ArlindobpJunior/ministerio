import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Central do Recreio",
  description: "Território da Congregação Central do Recreio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
          <div className="h-14 shadow-md">
            <NavBar />
          </div>
          <div className="h-[calc(100vh-3.5rem)] p-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
