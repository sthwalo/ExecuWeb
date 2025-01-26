import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./theme-provider";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import Navigation from "./shared/Navigation";
import { Toaster } from "./ui/toaster";

export default function Layout() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex min-h-screen flex-col">
        <Header />
        <Navigation />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}