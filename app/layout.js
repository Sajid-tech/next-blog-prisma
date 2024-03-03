import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Provider from "@/provider/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "Share your Thought with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} pattern `}>
        <Provider>

          <div className="min-h-screen max-w-screen-2xl  bg-white text-black ">



            <div className="wrapper">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>

        </Provider>
      </body>
    </html>
  );
}
