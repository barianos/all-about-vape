<template>
    <v-app-bar color="primary" dark class="navbar" elevation="2">
        <v-row align="center" justify="space-between">
            <v-col cols="8" class="d-flex align-center">
                <a href="tel:2831304224" style="text-decoration: none; color: inherit;">
                    <v-btn icon>
                        <v-icon class="fas fa-phone"></v-icon>
                    </v-btn>
                </a>
                <span>2831 304224</span>

                <a href="tel:6956201101" style="text-decoration: none; color: inherit;">
                    <v-btn icon >
                        <v-icon class="fas fa-phone"></v-icon>
                    </v-btn>
                </a>
                <span>6956201101</span>

                <!-- <a href="mailto:all.about.vape23@gmail.com" style="text-decoration: none; color: inherit;">
                    <v-btn icon>
                        <v-icon class="fas fa-envelope"></v-icon>
                    </v-btn>
                </a>
                <span>all.about.vape23@gmail.com</span> -->

                <a href="https://maps.app.goo.gl/Ltr3PWksUrEf6pD37" style="text-decoration: none; color: inherit;">
                    <v-btn icon target="_blank">
                        <v-icon class="fas fa-map-marker-alt"></v-icon>
                    </v-btn>
                </a>
                <span>ΧΑΡΑΛΑΜΠΟΥ ΛΙΑΝΔΡΗ, ΑΤΣΙΠΟΠΟΥΛΟ</span>
            </v-col>
        <!-- </v-row>
        <v-row align="center" justify="space-between"> -->
            <v-col cols="4" class="d-flex align-center justify-end">
                <v-btn icon href="mailto:all.about.vape23@gmail.com" target="_blank"
                    rel="noopener noreferrer">
                    <v-icon class="fas fa-envelope"></v-icon>
                </v-btn>
                <v-btn icon href="https://www.facebook.com/profile.php?id=100094327924435" target="_blank"
                    rel="noopener noreferrer">
                    <v-icon class="fab fa-facebook"></v-icon>
                </v-btn>
                <v-btn icon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <v-icon class="fab fa-instagram"></v-icon>
                </v-btn>
                <v-btn icon href="https://www.tiktok.com/@all.about.vape7" target="_blank">
                    <v-icon class="fab fa-tiktok"></v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-app-bar>

</template>



<script setup>
</script>

<style scoped>
.contact-banner {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    /* Make sure it stays above other elements */
}
</style>