import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Provider from "@/app/_trpc/Provider";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="w-full flex items-center justify-center">
            <header className="container flex flex-row items-center">
              <p className="grow">Clerk + App Router + tRPC</p>
              <div>
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <SignInButton>
                    <button className="border border-gray-700 rounded py-4 px-6">Sign In</button>
                  </SignInButton>
                </SignedOut>
              </div>
            </header>
          </div>
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
