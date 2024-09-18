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

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Sign up with:', { email, password });
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
              Sign Up
            </Typography>
            <form onSubmit={handleSignUp}>
              <TextField
                fullWidth
                type="text"
                label="User Name"
                variant="outlined"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
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
              <TextField
                fullWidth
                type="password"
                label="Confirm Password"
                variant="outlined"
                margin="normal"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                Sign Up
              </Button>
            </form>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Already have an account?{' '}
              <Link href="/signin" className='cursor-pointer' underline="hover">
                Log in
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default SignUp;