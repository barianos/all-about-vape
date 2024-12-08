<template>
  <v-app-bar app color="black" dark class="navbar" elevation="4">
    <img src="@/assets/logocut.png" alt="Company Logo" class="logo-img" />

    <v-btn icon @click="toggleDrawer" v-if="isSmallScreen">
      <v-icon>fa fa-bars</v-icon>
    </v-btn>

    <v-btn
      v-for="(category, index) in translatedCategories"
      :key="index"
      class="category-button"
      v-if="!isSmallScreen"
    >
      {{ category.name }}

      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, subIndex) in category.subcategories"
            :key="subIndex"
            :to="`/${category.slug}/${item.slug}`"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn icon @click="toggleLanguage">
      <v-icon :icon="currentFlagIcon" class="flag-icon" />
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer 
    v-model="drawer" 
    app 
    temporary
    :clipped="isSmallScreen"
    class="d-flex" 
  >
    <v-list>
      <v-list-group
        v-for="(category, index) in translatedCategories"
        :key="index"
        no-action
        :value="false"
      >
      <template v-slot:activator>
        <v-list-item>
          <v-list-item-title style="font-weight: bold">{{ category.name }}</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-for="(item, subIndex) in category.subcategories"
          :key="subIndex"
          :to="`/${category.slug}/${item.slug}`"
          
        >
          <v-list-item-content>
            <v-list-item-title class="subcategory-item">{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>


        <!-- Subcategories -->
        
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale, t } = useI18n();
    const drawer = ref(false); 
    const isSmallScreen = computed(() => {
      return window.innerWidth <= 600;
    });

    const currentFlagIcon = computed(() => {
      return locale.value === 'el' ? 'fi fi-gb' : 'fi fi-gr';
    });

    function toggleLanguage() {
      locale.value = locale.value === 'el' ? 'en' : 'el';
    }

    const translatedCategories = computed(() => {
      return [
        {
          name: t("categories.devices"),
          slug: "devices",
          subcategories: [
            { name: t("categories.subcategories.pods"), slug: "pods" },
            { name: t("categories.subcategories.kits"), slug: "starter_kit" },
            { name: t("categories.subcategories.mods"), slug: "mods" },
          ],
        },
        {
          name: t("categories.atomizers"),
          slug: "atomizers",
          subcategories: [
            { name: t("categories.subcategories.factoryAtomizers"), slug: "factory_vaporizers" },
            { name: t("categories.subcategories.rebuildable"), slug: "rta_vaporizers" },
            { name: t("categories.subcategories.coils"), slug: "coils_replacements" },
            { name: t("categories.subcategories.capsules"), slug: "pod_cartridge" },
          ],
        },
        {
          name: t("categories.liquids"),
          slug: "liquids",
          subcategories: [
            { name: t("categories.subcategories.flavorShots"), slug: "flavor_shots" },
            { name: t("categories.subcategories.readyLiquids10ml"), slug: "ready_liquids" },
            { name: t("categories.subcategories.pgVgBases"), slug: "liquid_bases" },
            { name: t("categories.subcategories.nicotine"), slug: "nicotine_liquids" },
          ],
        },
        {
          name: t("categories.consumables"),
          slug: "consumables",
          subcategories: [
            { name: t("categories.subcategories.wire"), slug: "consumables_wire" },
            { name: t("categories.subcategories.coils"), slug: "prebuilt_resistance" },
            { name: t("categories.subcategories.cotton"), slug: "consumables_cotton" },
            { name: t("categories.subcategories.emptyBottles"), slug: "empty_bottles" },
          ],
        },
        {
          name: t("categories.accessories"),
          slug: "accessories",
          subcategories: [
            { name: t("categories.subcategories.batteries"), slug: "batteries" },
            { name: t("categories.subcategories.chargers"), slug: "battery_chargers" },
            { name: t("categories.subcategories.tools"), slug: "tools" },
          ],
        },
        {
          name: t("categories.otherProducts"),
          slug: "other-products",
          subcategories: [
            { name: t("categories.subcategories.pouches"), slug: "pouches" },
            { name: t("categories.subcategories.shisha"), slug: "shisha" },
          ],
        },
        {
          name: t("categories.disposables"),
          slug: "disposables",
          subcategories: [
            { name: t("categories.subcategories.withNicotine"), slug: "with-nicotine" },
            { name: t("categories.subcategories.withoutNicotine"), slug: "without-nicotine" },
          ],
        }
      ];
    });

    function toggleDrawer() {
      drawer.value = !drawer.value;
    }

    return {
      toggleLanguage,
      currentFlagIcon,
      translatedCategories,
      drawer,
      isSmallScreen,
      toggleDrawer
    };
  },
};
</script>

<style scoped>
.logo-img {
  max-height: 60px;
  margin-right: 16px;
}

.flag-icon {
  width: 24px;
  height: 24px;
}

.category-button {
  margin-right: 8px;
}

.subcategory-item {
  padding-left: 54px;
}

</style>