<template>
    <v-container class="about-page py-10">
      <!-- Title Section -->
      <v-row>
        <v-col>
          <h1 class="text-center">About Us</h1>
          <p class="text-center">
            Welcome to [Your Business Name], where we specialize in [describe business or service]. Our mission is to provide top-quality products and services to our local community.
          </p>
        </v-col>
      </v-row>
  
      <!-- Business History Section -->
      <v-row class="mt-6">
        <v-col>
          <h2 class="text-center">Our Story</h2>
          <p>
            Founded in [year], [Your Business Name] has been serving the [your city] community for [X years]. We started with a simple goal: [insert goal, like "to bring quality products to our customers"]. Over the years, we’ve grown thanks to the trust and support of our amazing customers.
          </p>
        </v-col>
      </v-row>
  
      <!-- Team Members Section -->
      <v-row class="team-section mt-6">
        <v-col>
          <h2 class="text-center">Meet the Team</h2>
          <v-row>
            <v-col cols="12" md="4">
              <v-card>
                <v-img src="https://via.placeholder.com/150" alt="Team Member 1" height="150px" />
                <v-card-title>John Doe</v-card-title>
                <v-card-subtitle>Founder & CEO</v-card-subtitle>
                <v-card-text>
                  John has over 10 years of experience in [industry] and is dedicated to bringing the best service to our customers.
                </v-card-text>
              </v-card>
            </v-col>
  
            <v-col cols="12" md="4">
              <v-card>
                <v-img src="https://via.placeholder.com/150" alt="Team Member 2" height="150px" />
                <v-card-title>Jane Smith</v-card-title>
                <v-card-subtitle>Operations Manager</v-card-subtitle>
                <v-card-text>
                  Jane oversees day-to-day operations and ensures everything runs smoothly at [Your Business Name].
                </v-card-text>
              </v-card>
            </v-col>
  
            <v-col cols="12" md="4">
              <v-card>
                <v-img src="https://via.placeholder.com/150" alt="Team Member 3" height="150px" />
                <v-card-title>Mike Johnson</v-card-title>
                <v-card-subtitle>Marketing Specialist</v-card-subtitle>
                <v-card-text>
                  Mike is in charge of our marketing efforts and helps us connect with our amazing customers through various channels.
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  
      <!-- Contact Info Section -->
      <v-row class="mt-6">
        <v-col>
          <h2 class="text-center">Contact Us</h2>
          <p class="text-center">
            Feel free to reach out with any questions or inquiries. We'd love to hear from you!
          </p>
          <v-row justify="center">
            <v-col cols="12" md="4">
              <v-card class="contact-card">
                <v-card-title>Phone</v-card-title>
                <v-card-text>
                  <v-icon left class="mr-2">fas fa-phone</v-icon>
                  <a href="tel:1234567890">(123) 456-7890</a>
                </v-card-text>
              </v-card>
            </v-col>
  
            <v-col cols="12" md="4">
              <v-card class="contact-card">
                <v-card-title>Email</v-card-title>
                <v-card-text>
                  <v-icon left class="mr-2">fas fa-envelope</v-icon>
                  <a href="mailto:info@yourbusiness.com">info@yourbusiness.com</a>
                </v-card-text>
              </v-card>
            </v-col>
  
            <v-col cols="12" md="4">
              <v-card class="contact-card">
                <v-card-title>Location</v-card-title>
                <v-card-text>
                  <v-icon left class="mr-2">fas fa-map-marker-alt</v-icon>
                  [Your Business Address]
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
    // You can add more functionality or composables here if needed
  </script>
  
  <style scoped>
  .about-page {
    text-align: center;
  }
  
  .team-section .v-card {
    text-align: center;
  }
  
  .contact-card {
    text-align: center;
  }
  </style>
  