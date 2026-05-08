import { Outlet, useLocation } from 'react-router-dom';
import Developer2Image from '../assets/developer2.png';
import DeveloperImage from '../assets/Developer.png';

const AuthLayout = () => {
  const location = useLocation();
  const isSignIn = location.pathname === '/auth/signin';
  const image = isSignIn ? Developer2Image : DeveloperImage;

  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex items-center justify-center border-b-2 border-zinc-300 bg-zinc-200 p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-zinc-300 lg:p-16">
          <div className="flex w-full h-full items-center justify-center rounded-[2rem] border-2 border-dashed border-zinc-300 bg-zinc-100/60 p-4 sm:p-6">
            <img 
              src={image} 
              alt={isSignIn ? "Developer workspace and coding environment" : "Developer working and coding"} 
              className="w-full h-full object-cover rounded-2xl border-2 border-zinc-300 shadow-lg"
            />
          </div>
        </div>
        <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;