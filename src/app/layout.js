import Navbar from "./component/Navbar";
import "./globals.css";
import Footer from "./component/Footer";

export const metadata = {
  title: "Saraswati Educare | IIT JEE , NEET , MHT-CET Coaching in Thane",
  description: "Thane's most trusted coaching institute since 2002. 6 centres. IITian faculty.",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
