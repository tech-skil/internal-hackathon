import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Container, 
  Link 
} from '@mui/material';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Sign in with:', { email, password });
  };

  return (
    <Box 
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #4a90e2, #50c878)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2
      }}
    >
      <Container maxWidth="sm">
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
          <CardContent sx={{ padding: 4 }}>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
              Sign In
            </Typography>
            <form onSubmit={handleSignIn}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                  mt: 3, 
                  mb: 2, 
                  bgcolor: 'warning.main',
                  '&:hover': {
                    bgcolor: 'warning.dark',
                  }
                }}
              >
                Sign In
              </Button>
            </form>
            <Box textAlign="center" mt={2}>
              <Link href="#" underline="hover">
                Forgot password?
              </Link>
            </Box>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don't have an account?{' '}
              <Link href="/signup" className='cursor-pointer' underline="hover">
                Sign up
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default SignIn;