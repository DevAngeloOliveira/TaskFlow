import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { LogIn } from 'lucide-react';
import { authService } from '../../services';
import { setCredentials } from '../../store/slices/authSlice';
import LoadingSpinner from '../../components/LoadingSpinner';
import { AxiosError } from 'axios';

interface ApiError {
  message: string;
  statusCode: number;
}

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const mutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      dispatch(setCredentials(data));
      navigate('/');
    },
    onError: (error: AxiosError<ApiError>) => {
      setError(error.response?.data?.message || 'Login failed');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    mutation.mutate(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="glass-card w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="mt-2 text-gray-400">Sign in to your account</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="glass-input w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="glass-input w-full"
              required
            />
          </div>

          <button
            type="submit"
            disabled={mutation.isLoading}
            className="w-full glass-button bg-green-500/20 hover:bg-green-500/30 flex items-center justify-center gap-2"
          >
            {mutation.isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <LogIn size={20} />
                Sign in
              </>
            )}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-green-400 hover:text-green-300">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
} 