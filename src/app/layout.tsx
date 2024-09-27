import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import "../../node_modules/flag-icons/css/flag-icons.min.css";


export const metadata: Metadata = {
  title: "Aybora Ünveren",
  description: "Web uygulama ödevi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="flex flex-col min-h-screen " lang="en">
      <body
        className="flex flex-col min-h-screen p-4 bg-gradient-to-l from-red-500 bg-gradient-to-r to-blue-500 text-slate-100 font-mono"
      >
        {children}
      </body>
    </html>
  );
}
