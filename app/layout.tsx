import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quartus Solver App",
  description: "Web app to manage the creation of new solvers.",
};

// This is applied to every page.
export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body>
        <div className="flex h-screen bg-gray-100">
            <div className="bg-gray-800 text-white w-48">
                <div className="pt-10 pb-5 h-7 flex items-center justify-center">
                    <span className="text-xl font-semibold">Solver Creator</span>
                </div>
                <nav>
                    <ul className="py-3">
                        <li>
                            <Link href="/" className="block px-6 py-2 text-l hover:bg-gray-700">Home</Link>
                        </li>
                        <li>
                            <Link href="/solvers" className="block px-6 py-2 text-l hover:bg-gray-700">Create Solver</Link>
                        </li>
                        <li>
                            <Link href="/about" className="block px-6 py-2 text-l hover:bg-gray-700">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex-1 p-10">
                {children}
            </div>
        </div>
        </body>
        </html>
    );
}
