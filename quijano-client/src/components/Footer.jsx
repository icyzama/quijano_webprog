import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-10 border-t-2 border-zinc-900">
      <div className="bg-zinc-950 px-4 py-10 text-zinc-200 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
          <div>
            <p className="text-3xl font-black leading-[1.05]">Reynald</p>
            <p className="text-3xl font-black leading-[1.05]">Quijano</p>
            <p className="mt-3 text-sm text-zinc-400">Building websites with purpose and style.</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Location</p>
            <p className="mt-3 text-sm leading-7 text-zinc-300">Manila, Philippines</p>
            <p className="text-sm leading-7 text-zinc-300">National University - Manila</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Contact</p>
            <a className="mt-3 block text-sm underline underline-offset-4" href="mailto:quijanorrq@gmail.com">
              quijanorrq@gmail.com
            </a>
            <p className="mt-2 text-sm text-zinc-400">Open for internships and collaborations</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Quick Links</p>
            <div className="mt-3 space-y-2 text-sm">
              <Link className="block underline underline-offset-4" to="/">
                Home
              </Link>
              <Link className="block underline underline-offset-4" to="/about">
                About
              </Link>
              <Link className="block underline underline-offset-4" to="/articles">
                Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
