import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import {Sidebar} from "@/components/layout/sidebar";

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
            <Sidebar />
            <div className="flex-1 p-10">
                {children}
            </div>
        </div>
        </body>
        </html>
    );
}
