"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {useReducer} from "react";
import {BlogContext, BlogReducer} from "@/app/features/blog/model/blog";
import {BlogInitialState} from "@/app/features/blog/model/types/blog";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const [state, dispatch ] = useReducer(BlogReducer, BlogInitialState);
    console.log(state)

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <BlogContext.Provider value={{ state, dispatch }}>
        {children}
      </BlogContext.Provider>
      </body>
    </html>
  );
}
