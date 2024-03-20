import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Layout from "@/components/global/layout";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Salon Website",
  description: "Generated by create next app",
};

const roboto = Roboto({
  weight: ["400", "700", "900", "300", "100"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
