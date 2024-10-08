import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LOL INFO APP",
  description: "리그오브레전드 정보 웹 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header 
          id="header" 
          className="fixed z-50 top-0 left-0 w-full bg-[rgba(255,255,255,.08)] shadow-custom"
          style={{
            textShadow: ".5px .5px 10px rgb(0, 0, 0, .8)",
          }}
        >
          <div className="inner flex justify-between w-full max-w-[1440px] m-auto px-[30px] py-[10px] max-m:px-[15px]">
            <div id="logo">
              <Link href="/" className="font-bold text-[rgba(241,215,40,1)] max-m:text-[13px]">League Of Legend</Link>
            </div>            
            <nav>
              <ul className="flex gap-[5px]">
                <li className="group">
                  <Link 
                    href="/rotation"
                    className="text-[rgba(255,255,255,1)] transition duration-500 ease-in-out group-hover:text-[rgba(142,253,151,1)] py-[5px] px-[10px] bg-[#232427] rounded-[5px] max-m:text-[12px] max-m:px-[5px]"
                    style={{
                      textShadow: ".1px .1px 3px rgb(241, 215, 40, 1)",
                    }}
                  >Rotation</Link>
                </li>
                <li className="group">
                  <Link 
                    href="/champions"
                    className="text-[rgba(255,255,255,1)] transition duration-500 ease-in-out group-hover:text-[rgba(142,253,151,1)] py-[5px] px-[10px] bg-[#232427] rounded-[5px] max-m:text-[12px] max-m:px-[5px]"
                    style={{
                      textShadow: ".1px .1px 3px rgb(241, 215, 40, 1)",
                    }}
                  >Champions</Link>
                </li>
                <li className="group">
                  <Link 
                    href="/items"
                    className="text-[rgba(255,255,255,1)] transition duration-500 ease-in-out group-hover:text-[rgba(142,253,151,1)] py-[5px] px-[10px] bg-[#232427] rounded-[5px] max-m:text-[12px] max-m:px-[5px]"
                    style={{
                      textShadow: ".1px .1px 3px rgb(241, 215, 40, 1)",
                    }}
                  >Items</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer id="footer" className="fixed z-50 bottom-0 left-0 w-full bg-[rgba(255,255,255,.08)] shadow-custom">
          <div className="inner flex justify-center w-full max-w-[1440px] m-auto px-[30px] py-[5px] max-m:px-[15px]">
            <Link href="https://github.com/rarrit" className="text-[rgba(255,255,255,.5)] text-[13px] max-m:text-[10px]" target="_blank">Copyright 2024. <strong className="text-white mr-[5px]">Rarrit</strong> All pictures cannot be copied without permission</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
