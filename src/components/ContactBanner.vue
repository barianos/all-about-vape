<template>
    <v-sheet
    color="secondary"
    dark
    class="contact-banner"
    elevation="2"
  >
        <v-row align="center" justify="space-between">
            <v-col class="d-flex align-center">
                <v-btn icon >
                    <v-icon href="tel:2831304224">mdi-phone</v-icon>
                </v-btn>
                <span>2831 304224</span>

                <v-btn icon >
                    <v-icon href="tel:6956201101">mdi-phone</v-icon>
                </v-btn>
                <span>6956201101</span>

                <v-btn icon href="mailto:all.about.vape23@gmail.com">
                    <v-icon>mdi-email</v-icon>
                </v-btn>
                <span>all.about.vape23@gmail.com</span>

                <v-btn icon href="https://goo.gl/maps/example" target="_blank">
                    <v-icon>mdi-map-marker</v-icon>
                </v-btn>
                <span>ΧΑΡΑΛΑΜΠΟΥ ΛΙΑΝΔΡΗ, ΑΤΣΙΠΟΠΟΥΛΟ</span>
            </v-col>

          
            <v-col class="d-flex align-end justify-end">
                <v-btn icon href="https://www.facebook.com/profile.php?id=100094327924435" target="_blank" rel="noopener noreferrer">
                    <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn icon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <v-icon>mdi-tiktok</v-icon>
                </v-btn>
                
            </v-col>
        </v-row>
    </v-sheet>

</template>



<script setup>
</script>

<style scoped>
.contact-banner {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Make sure it stays above other elements */
}
</style>