<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const handleLogin = async () => {
  console.log('Login starting');
  try {
    const response = await fetch('http://localhost:8080/api/auth/signin', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${username.value}:${password.value}`),
        'Content-Type': 'application/json',
      },
      // Important for handling cookies
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    // The token will be automatically stored in cookies by the browser
    // You can redirect or update UI state here
    console.log('Login successful');
    
  } catch (error) {
    console.error('Login error:', error);
    // Handle error (show message to user, etc.)
  }
};

// Example of how to make authenticated requests after login
const makeAuthenticatedRequest = async (url) => {
  const response = await fetch(url, {
    credentials: 'include',  // This will include the stored cookies
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};
</script>

<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Enter your username"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit" class="login-button">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

.login-button:hover {
  background-color: #369f6e;
}
</style>
