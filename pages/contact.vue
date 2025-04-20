<template>
  <Layout>
    <div class="contact-container">
      <h1 class="contact-title">Get In Touch</h1>
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true"
        netlify-honeypot="bot-field"
        class="contact-form"
      >
        <input type="hidden" name="form-name" value="contact">
        <p hidden>
          <label>Scammer get scammed buddy: <input name="bot-field"></label>
        </p>
        
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" required>
        </div>
        
        <div class="form-group">
          <label for="email">Your Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '~/components/Layout.vue'

useHead({
  link: [
    { 
      rel: 'stylesheet', 
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap' 
    }
  ]
})
</script>

<style>
/* Add this at the top of your style section */
:root {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.contact-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.contact-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #2b2d42;
  font-size: 2rem;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #4a5568;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #4361ee;
  box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
}

textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-btn {
  background: #4361ee;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.submit-btn:hover {
  background: #3a56d4;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>