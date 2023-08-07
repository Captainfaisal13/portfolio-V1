import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
const inter = Inter({ subsets: ["latin"] });
const GlobalContext = dynamic(() => import("./components/globalContext"), {
  ssr: false,
});
export const metadata: Metadata = {
  title: "Faisal - Developer and Student",
  description:
    "Welcome to my portfolio website! I am a web developer and a passionate student. This site showcases my projects, skills, technologies I am currently learning, and my social links. Explore my work, learn about my abilities, and connect with me to foster a strong community. Thank you for visiting!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <link rel="icon" href="/favicon.ico" />
      <body className="font-poppins dark:bg-[#060912]">
        <GlobalContext>
          <Navbar />
          {children}
          <Footer />
        </GlobalContext>
      </body>
    </html>
  );
}
