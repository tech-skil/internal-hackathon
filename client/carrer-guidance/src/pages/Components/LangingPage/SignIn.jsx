import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Sign in with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white rounded-lg shadow-md">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center text-gray-800">Sign In to AI-Powered Career Tools</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Sign In
            </Button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;