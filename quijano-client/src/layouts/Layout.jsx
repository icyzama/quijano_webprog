import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-100 text-zinc-900">
      <NavBar />
      <main className="flex-1 pb-8 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
