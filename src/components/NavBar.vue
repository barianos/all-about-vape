<template>
  <v-app-bar app color="secondary" dark class="navbar" elevation="4">
    <img src="@/assets/logocut.png" alt="Company Logo" class="logo-img" />

    <v-btn v-for="(category, index) in translatedCategories" :key="index">
      {{ category.name }}

      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, subIndex) in category.subcategories"
            :key="subIndex"
            :to="item.link"
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
</template>

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale, t } = useI18n();

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
          subcategories: [
            { name: t("categories.subcategories.pods"), link: "/devices/pods" },
            { name: t("categories.subcategories.kits"), link: "/devices/kits" },
            { name: t("categories.subcategories.mods"), link: "/devices/mods" },
          ],
        },
        {
          name: t("categories.atomizers"),
          subcategories: [
            { name: t("categories.subcategories.factoryAtomizers"), link: "/atomizers/factory" },
            { name: t("categories.subcategories.rebuildable"), link: "/atomizers/rebuildable" },
            { name: t("categories.subcategories.coils"), link: "/atomizers/coils" },
            { name: t("categories.subcategories.capsules"), link: "/atomizers/capsules" },
          ],
        },
        {
          name: t("categories.liquids"),
          subcategories: [
            { name: t("categories.subcategories.flavorShots"), link: "/liquids/shot" },
            { name: t("categories.subcategories.readyLiquids10ml"), link: "/liquids/ready-10ml" },
            { name: t("categories.subcategories.pgVgBases"), link: "/liquids/pg-vg-bases" },
            { name: t("categories.subcategories.nicotine"), link: "/liquids/nicotine" },
          ],
        },
        {
          name: t("categories.consumables"),
          subcategories: [
            { name: t("categories.subcategories.wire"), link: "/consumables/wire" },
            { name: t("categories.subcategories.coils"), link: "/consumables/coils" },
            { name: t("categories.subcategories.cotton"), link: "/consumables/cotton" },
            { name: t("categories.subcategories.emptyBottles"), link: "/consumables/empty-bottles" },
          ],
        },
        {
          name: t("categories.accessories"),
          subcategories: [
            { name: t("categories.subcategories.batteries"), link: "/accessories/batteries" },
            { name: t("categories.subcategories.chargers"), link: "/accessories/chargers" },
            { name: t("categories.subcategories.tools"), link: "/accessories/tools" },
          ],
        },
        {
          name: t("categories.otherProducts"),
          subcategories: [
            { name: t("categories.subcategories.pouches"), link: "/other-products/pouches" },
            { name: t("categories.subcategories.shisha"), link: "/other-products/shisha" },
          ],
        },
        {
          name: t("categories.disposables"),
          subcategories: [
            { name: t("categories.subcategories.withNicotine"), link: "/disposables/with-nicotine" },
            { name: t("categories.subcategories.withoutNicotine"), link: "/disposables/without-nicotine" },
          ],
        }
      ];
    });

    return {
      toggleLanguage,
      currentFlagIcon,
      translatedCategories,
    };
  },
};
</script>

<style scoped>
.logo-img {
  max-height: 40px;
  margin-right: 16px;
}

.flag-icon {
  width: 24px;
  height: 24px;
}
</style>
