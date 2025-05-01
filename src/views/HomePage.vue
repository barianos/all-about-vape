
<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to All About Vape</h1>
        <p>Where you will find anything vape related!</p>
      </div>
    </section>


    <!-- About Us Snippet -->
    <section class="about-snippet">
      <div class="container">
        <div class="about-content">
          <div class="about-image">
            <img src="../assets/images/allAboutVape.jpg" alt="Our store">
          </div>
          <div class="about-text">
            <h2>About Our Store</h2>
            <p>Established in 2023, our store has been providing quality vaping products to our community. We pride ourselves on exceptional customer service and carefully curated selection.</p>
            <!-- <router-link to="/about" class="learn-more">Learn More About Us</router-link> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Value Proposition -->
    <section class="value-proposition">
      <div class="container">
        <h2>Why Choose Us</h2>
        <div class="benefits">
          <div class="benefit-item">
            <div class="icon">🛠️</div>
            <h3>Quality Products</h3>
            <p>We carefully selected the best products for you</p>
          </div>
          <div class="benefit-item">
            <div class="icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Get your products quickly and reliably</p>
          </div>
          <div class="benefit-item">
            <div class="icon">💯</div>
            <h3>Customer Satisfaction</h3>
            <p>Your happiness is our priority</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style scoped>
/* Basic reset and container */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Section styling */
section {
  padding: 60px 0;
}

section h2 {
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
}

/* Hero section */
.hero {
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-content {
  max-width: 800px;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 24px;
  margin-bottom: 30px;
}


/* Value proposition */
.benefits {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.benefit-item {
  flex: 1;
  min-width: 250px;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.icon {
  font-size: 40px;
  margin-bottom: 15px;
}

/* About snippet */
.about-content {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.about-image {
  flex: 1;
  min-width: 300px;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.about-text {
  flex: 1;
  min-width: 300px;
}

.about-text h2 {
  text-align: left;
  margin-bottom: 20px;
}

.learn-more {
  display: inline-block;
  margin-top: 20px;
  color: #ff6b6b;
  text-decoration: none;
  font-weight: bold;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }
  
  .hero {
    height: 400px;
  }
  
  .hero h1 {
    font-size: 36px;
  }
  
  .hero p {
    font-size: 18px;
  }
  
  section {
    padding: 40px 0;
  }
  
  section h2 {
    font-size: 28px;
  }
}
</style>