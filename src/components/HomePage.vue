<template>
  <div class="home-container">
    <nav class="navbar">
      <div class="logo">
        <h2>Your Logo</h2>
      </div>
      <div class="nav-links">
        <button @click="navigateToLogin" class="sign-in-button">Sign In</button>
      </div>
    </nav>
    
    <main class="hero-section">
      <h1>Welcome to Your Database Platform</h1>
      <p class="subtitle">Build faster. Build smarter. Build together.</p>
      <div class="cta-buttons">
        <button class="primary-button">Try Free</button>
        <button class="secondary-button">Learn More</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToLogin = () => {
  router.push('/login');
};
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sign-in-button {
  padding: 0.5rem 1.5rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.sign-in-button:hover {
  background-color: #369f6e;
}

.hero-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  text-align: center;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.subtitle {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.primary-button, .secondary-button {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
}

.primary-button {
  background-color: #42b983;
  color: white;
  border: none;
}

.secondary-button {
  background-color: transparent;
  border: 2px solid #42b983;
  color: #42b983;
}

.primary-button:hover {
  background-color: #369f6e;
}

.secondary-button:hover {
  background-color: rgba(66, 185, 131, 0.1);
}
</style> 