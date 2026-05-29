import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { createUser } from '../../services/UserService';

const inputClasses = 'mt-2 w-full rounded-2xl border-2 border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-white focus:shadow-sm';
const actionButtonClassName = 'w-full rounded-2xl py-3 text-[11px] font-semibold uppercase tracking-[0.2em]';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    contactNumber: '',
    address: '',
    email: '',
    username: '',
    password: '',
    type: 'editor',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (key) => (event) => {
    setFormData({ ...formData, [key]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      await createUser(formData);
      setSuccess('Account created successfully. Redirecting to sign in...');
      setTimeout(() => navigate('/auth/signin'), 900);
    } catch (err) {
      setError(err.response?.data?.message || 'Could not create account. Please try again.');
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-200 bg-zinc-50 px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-green-400"></span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">Get Started</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Create Account</h1>
        <p className="text-sm leading-6 text-zinc-600">
          Join the portfolio community and start showcasing your amazing work to the world.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <div className="rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
        {success && <div className="rounded-2xl border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-700">{success}</div>}
        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-700">First Name</label>
              <input 
                id="first-name" 
                type="text" 
                placeholder="John" 
                autoComplete="given-name" 
                className={inputClasses} 
                value={formData.firstName}
                onChange={handleChange('firstName')}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-700">Last Name</label>
              <input 
                id="last-name" 
                type="text" 
                placeholder="Doe" 
                autoComplete="family-name" 
                className={inputClasses} 
                value={formData.lastName}
                onChange={handleChange('lastName')}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="signup-email" className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-700">Email Address</label>
            <input 
              id="signup-email" 
              type="email" 
              placeholder="your.email@example.com" 
              autoComplete="email" 
              className={inputClasses} 
              value={formData.email}
              onChange={handleChange('email')}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="signup-password" className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-700">Password</label>
            <input 
              id="signup-password" 
              type="password" 
              placeholder="Create a strong password" 
              autoComplete="new-password" 
              className={inputClasses} 
              value={formData.password}
              onChange={handleChange('password')}
              required
            />
            <p className="text-xs leading-5 text-zinc-500">Use 8+ characters with letters, numbers, and symbols for security</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="signup-age" className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-700">Age</label>
              <input
                id="signup-age"
                type="number"
                min="1"
                placeholder="28"
                className={inputClasses}
                value={formData.age}
                onChange={handleChange('age')}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="signup-gender" className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-700">Gender</label>
              <select
                id="signup-gender"
                className={inputClasses}
                value={formData.gender}
                onChange={handleChange('gender')}
                required
              >
                <option value="">Choose gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="signup-contact" className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-700">Contact Number</label>
            <input
              id="signup-contact"
              type="tel"
              placeholder="0917 000 0000"
              className={inputClasses}
              value={formData.contactNumber}
              onChange={handleChange('contactNumber')}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="signup-address" className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-700">Address</label>
            <input
              id="signup-address"
              type="text"
              placeholder="123 Main St"
              className={inputClasses}
              value={formData.address}
              onChange={handleChange('address')}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="signup-username" className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-700">Username</label>
            <input
              id="signup-username"
              type="text"
              placeholder="johndoe"
              className={inputClasses}
              value={formData.username}
              onChange={handleChange('username')}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="signup-type" className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-700">Account Type</label>
            <select
              id="signup-type"
              className={inputClasses}
              value={formData.type}
              onChange={handleChange('type')}
            >
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
              <option value="admin">Admin</option>
            </select>
            <p className="text-xs leading-5 text-zinc-500">Viewer accounts cannot access the dashboard after signing up.</p>
          </div>
        </div>

        <div className="space-y-3">
          <Button type="submit" variant="primary" className={actionButtonClassName}>
            Create Account
          </Button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-zinc-50 px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">Or sign up with</span>
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
          Already have an account?{' '}
          <Link 
            to="/auth/signin" 
            className="font-semibold text-zinc-900 transition hover:text-zinc-700 hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;