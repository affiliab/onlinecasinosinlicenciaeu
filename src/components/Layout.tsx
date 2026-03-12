import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <Breadcrumbs />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
