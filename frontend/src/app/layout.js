import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "ForkIt",
  description: "Group Restaurant Recommender",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        <AuthContextProvider>
        <Navbar/>
        {children}
        </AuthContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
