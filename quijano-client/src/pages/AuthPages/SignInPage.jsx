import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { loginUser } from '../../services/UserService';

const inputClasses = 'mt-2 w-full rounded-2xl border-2 border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-white focus:shadow-sm';
const actionButtonClassName = 'w-full rounded-2xl py-3 text-[11px] font-semibold uppercase tracking-[0.2em]';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const { data } = await loginUser({ email, password });

      if (data.type === 'viewer') {
        setError('Viewer accounts cannot log in to the dashboard.');
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('firstName', data.firstName);
      localStorage.setItem('type', data.type);

      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-200 bg-zinc-50 px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-zinc-400"></span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">Authentication</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Welcome Back</h1>
        <p className="text-sm leading-6 text-zinc-600">
          Enter your credentials to access your portfolio dashboard and continue your journey.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <div className="rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
        <div className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="signin-email" className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-700">Email Address</label>
            <input 
              id="signin-email" 
              type="email" 
              placeholder="your.email@example.com" 
              autoComplete="email" 
              className={inputClasses} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="signin-password" className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-700">Password</label>
            <input 
              id="signin-password" 
              type="password" 
              placeholder="Enter your password" 
              autoComplete="current-password" 
              className={inputClasses} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-xs leading-5 text-zinc-500">Minimum 8 characters with letters, numbers, and symbols</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-3 text-zinc-600 cursor-pointer">
            <input 
              type="checkbox" 
              className="h-4 w-4 rounded border-2 border-zinc-300 accent-zinc-900 focus:ring-2 focus:ring-zinc-900/20" 
            />
            <span className="text-sm font-medium">Remember me</span>
          </label>
          <button 
            type="button" 
            className="font-semibold text-zinc-700 transition hover:text-zinc-900 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <div className="space-y-3">
          <Button type="submit" variant="primary" className={actionButtonClassName}>
            Sign In
          </Button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-zinc-50 px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">Or continue with</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Button type="button" variant="secondary" className={actionButtonClassName}>
              Google
            </Button>
            <Button type="button" variant="secondary" className={actionButtonClassName}>
              Apple
            </Button>
          </div>
        </div>
      </form>

      <div className="border-t-2 border-zinc-200 pt-6">
        <div className="text-center text-sm text-zinc-600">
          No account yet?{' '}
          <Link 
            to="/auth/signup" 
            className="font-semibold text-zinc-900 transition hover:text-zinc-700 hover:underline"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;