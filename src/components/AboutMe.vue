<template>
  <div class="about-container">
    <div class="left-side">
      <img
        src="https://via.placeholder.com/150"
        alt="Azime Tolumoğlu"
        class="profile-pic"
      />
      <div class="social-icons">
        <a href="https://linkedin.com/in/azimetolumoglu" target="_blank" rel="noopener">
          <v-icon size="28">mdi-linkedin</v-icon>
        </a>
        <a href="https://github.com/azimetolumoglu" target="_blank" rel="noopener">
          <v-icon size="28">mdi-github</v-icon>
        </a>
        <a href="mailto:azime@example.com">
          <v-icon size="28">mdi-email</v-icon>
        </a>
      </div>
    </div>
    <div class="right-side">
      <h2>About Me</h2>
      <p>
        Ben Azime Tolumoğlu, 
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.about-container {
  display: flex;
  min-height: 400px;
  font-family: 'Poppins', sans-serif;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 90%;
  max-width: 900px;
  margin: 60px auto;
  flex-wrap: wrap;
  border-radius: 0; 
}

.left-side {
  background-color: #e6dace; 
  flex: 1 1 33.33%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.social-icons {
  display: flex;
  gap: 24px;
}

.social-icons a {
  color: #4a148c; 
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #7e57c2; 
}

.right-side {
  background-color: white;
  flex: 2 1 66.66%;
  padding: 40px 30px;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right-side h2 {
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 28px;
  color: #4a148c; 
}

.right-side p {
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
  }
  .left-side, .right-side {
    flex: 1 1 100%;
    padding: 20px;
  }
  .right-side {
    padding-top: 0;
  }
}
</style>
