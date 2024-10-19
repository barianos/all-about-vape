<template>
    <v-dialog v-model="showModal" persistent max-width="600px">
      <v-card>
        <v-card-title class="headline  text-center">Είσαι άνω των 18;</v-card-title>
        <v-card-text>
          Τα προϊόντα του καταστήματος απευθύνονται αποκλειστικά σε άτομα άνω των 18 ετών.
        </v-card-text>
        <v-card-actions class="justify-center">
            <v-btn variant="flat"  size="x-large" color="green darken-2" @click="confirmAge">ΝΑΙ</v-btn>
            <v-btn variant="flat"  size="x-large" color="red darken-2" @click="denyAccess">ΟΧΙ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: true,
      };
    },
    methods: {
      confirmAge() {
        localStorage.setItem('isOver18', true);
        this.showModal = false;
      },
      denyAccess() {
        alert('Η πρόσβαση επιτρέπεται μόνο σε ενήλικες');
        // Redirect the user to another page, or just close the browser tab.
        window.location.href = 'https://google.com'; // Redirect to a safe page
      },
    },
    mounted() {
      const isOver18 = localStorage.getItem('isOver18');
      if (isOver18) {
        this.showModal = false;
      }
    },
  };
  </script>  