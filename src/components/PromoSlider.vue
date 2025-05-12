<template>
  <div class="slider-container">
    <div class="slider" @touchstart="touchStart" @touchend="touchEnd">
      <div 
        v-for="(slide, index) in slides" 
        :key="slide.id" 
        class="slide"
        :class="{ active: currentIndex === index }"
        :style="{ backgroundImage: `url(${slide.image_url})` }"
      >
        <div class="slide-content">
          <h3 v-if="slide.title">{{ slide.title }}</h3>
          <p v-if="slide.description">{{ slide.description }}</p>
          <button v-if="slide.link" class="cta-button">Learn More</button>
        </div>
      </div>
      
      <button class="slider-nav prev" @click="prevSlide">&#10094;</button>
      <button class="slider-nav next" @click="nextSlide">&#10095;</button>
      
      <div class="slider-dots">
        <span 
          v-for="(dot, index) in slides" 
          :key="'dot-' + dot.id"
          class="dot"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from '@/supabase';

export default {
  name: 'ProductSlider',
  data() {
    return {
      slides: [],
      currentIndex: 0,
      touchStartX: 0,
      touchEndX: 0,
      supabase: null,
      autoSlideInterval: null
    }
  },
  async created() {
    await this.fetchSlides()
    this.startAutoSlide()
  },
  beforeDestroy() {
    clearInterval(this.autoSlideInterval)
  },
  methods: {
    async fetchSlides() {
      try {
        
        const { data, error } = await supabase.from('promo_images')
          .select('*');
        
        if (error) throw error
        console.log(data);
        this.slides = data
      } catch (error) {
        console.error('Error fetching slides:', error)
      }
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length
      this.resetAutoSlide()
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length
      this.resetAutoSlide()
    },
    goToSlide(index) {
      this.currentIndex = index
      this.resetAutoSlide()
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide()
      }, 5000) // Change slide every 5 seconds
    },
    resetAutoSlide() {
      clearInterval(this.autoSlideInterval)
      this.startAutoSlide()
    },
    touchStart(e) {
      this.touchStartX = e.changedTouches[0].screenX
    },
    touchEnd(e) {
      this.touchEndX = e.changedTouches[0].screenX
      this.handleSwipe()
    },
    handleSwipe() {
      if (this.touchEndX < this.touchStartX - 50) {
        this.nextSlide() // Swipe left
      }
      if (this.touchEndX > this.touchStartX + 50) {
        this.prevSlide() // Swipe right
      }
    }
  }
}
</script>

<style scoped>
.slider-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.slider {
  position: relative;
  height: 500px;
  display: flex;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide.active {
  opacity: 1;
}

.slide-content {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 2rem;
  max-width: 600px;
  text-align: center;
  border-radius: 8px;
}

.cta-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #369f6b;
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

.slider-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.dot.active {
  background-color: white;
}

.slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  opacity: 0.7;
  transition: all 0.2s ease;
}

.slider-nav:hover {
  font-size: 3rem;
  opacity: 1;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

@media (max-width: 768px) {
  .slider {
    height: 300px;
  }
  
  .slide-content {
    padding: 1rem;
    max-width: 80%;
  }
  
  .slider-nav {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
  .slider-nav:hover {
    font-size: 2.5rem;
  }
}
</style>