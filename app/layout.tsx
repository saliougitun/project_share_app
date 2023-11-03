import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css"

export const metadata = {
  title: "Project_Media",
  description: "Poster ou découvrez les travaux de remarquables développeur",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
