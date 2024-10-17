<template>
    <div>
      <h1>News Posts</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="post in posts" :key="post.id" class="blog-post">
          <h2>{{ post.title }}</h2>
          <p>By {{ post.author }} on {{ new Date(post.published_date).toLocaleDateString() }}</p>
          <p>{{ post.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { supabase } from '../supabase'; // import the supabase client
  
  export default {
    name: 'News',
    setup() {
      const posts = ref([]);
      const loading = ref(true);
  
      const fetchBlogPosts = async () => {
        // Fetch data from Supabase
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('published_date', { ascending: false });
  
        if (error) {
          console.error('Error fetching blog posts:', error);
        } else {
          posts.value = data;
        }
  
        loading.value = false;
      };
  
      // Fetch posts on component mount
      onMounted(() => {
        fetchBlogPosts();
      });
  
      return {
        posts,
        loading,
      };
    },
  };
  </script>
  
  <style scoped>
  .blog-post {
    margin-top: 2rem;
  }
  </style>
  