<template>
  <v-navigation-drawer class="filters-container">
    <v-card flat class="pa-3">
      <v-card-title class="text-h6 pb-2">{{ t('filters') }}</v-card-title>
      <v-divider></v-divider>

      <div v-if="loading" class="d-flex justify-center pa-4">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </div>

      <div v-else>
        <v-expansion-panels v-model="expandedPanels" multiple flat>
          <v-expansion-panel v-for="(values, filter) in filterOptions" :key="filter"
            v-show="values && values.length > 0" class="filter-panel">
            <v-expansion-panel-title class="py-2 font-weight-bold">
              {{ t(filter) }}
              <template v-slot:actions="{ expanded }">
                <v-badge v-if="selectedFilters[filter]?.length" :content="selectedFilters[filter]?.length"
                  color="primary" class="ms-2"></v-badge>
                <v-icon>{{ expanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="scrollable-filter-content" :style="{ maxHeight: getMaxHeight(values) }">
                <v-list density="compact" class="filter-list">
                  <v-list-item v-for="value in values" :key="value" :active="isValueSelected(filter, value)"
                    @click="toggleSelection(filter, value, !isValueSelected(filter, value))" class="py-1 px-2"
                    color="primary" rounded="sm">
                    <template v-slot:prepend>
                      <v-icon v-if="isValueSelected(filter, value)" color="primary" size="small" icon="mdi-check"
                        class="me-2"></v-icon>
                      <div v-else class="me-6"></div>
                    </template>
                    <v-list-item-title>{{ value }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </div>

              <div v-if="values.length > 5" class="d-flex justify-end pt-2">
                <v-btn v-if="selectedFilters[filter]?.length" density="compact" variant="text" size="small"
                  @click="clearFilterSelection(filter)" color="error">
                  {{ t('clear') }}
                </v-btn>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-divider class="my-3" v-if="hasActiveFilters"></v-divider>

        <div v-if="hasActiveFilters" class="d-flex align-center justify-space-between">
          <div class="text-caption">
            {{ t('active_filters') }}: {{ totalSelectedFilters }}
          </div>
          <v-btn color="primary" variant="text" size="small" @click="clearAllFilters">
            {{ t('clear_all') }}
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import { ref, computed, watch, onMounted, reactive } from "vue";
import { useI18n } from "vue-i18n";
import { supabase } from "@/supabase";

export default {
  name: "ProductFilters",
  props: {
    productTypeId: {
      type: Number,
      required: true,
    }
  },
  emits: ["updateFilters"],
  setup(props, { emit }) {
    const { t } = useI18n();
    const selectedFilters = reactive({});
    const filterOptions = ref({});
    const loading = ref(true);
    const expandedPanels = ref([0]);

    const filtersByProductTypeId = {
      1: ["producer", "volume", "amphours", "watt", "color", "vaping_profile"],
      2: ["producer", "volume", "amphours", "watt", "color", "vaping_profile"],
      3: ["producer", "volume", "amphours", "watt", "color"],
      4: ["producer", "volume", "ohm", "color", "vaping_profile"],
      5: ["producer", "volume", "ohm", "vaping_profile"],
      6: ["producer", "ohm", "watt", "matterial"],
      7: ["producer", "volume", "ohm", "matterial"],
      8: ["producer", "volume", "vaping_profile", "flavor"],
      9: ["producer", "volume", "vaping_profile", "flavor", "nicotine_volume"],
      10: ['producer', 'volume'],
      11: ['producer', 'volume', 'vaping_profile', 'nicotine_volume'],
      12: ['producer', 'ohm', 'length'],
      13: ['producer', 'ohm'],
      14: ['producer'],
      15: ['producer'],
      16: ['producer', 'amphours', 'ampere', 'volt', 'weight'],
      17: ['producer'],
      18: ['producer'],
      19: ['producer'],
      20: ['producer'],
      21: ['producer', 'volume', 'vaping_profile', 'ampere', 'flavor', 'puffs', 'length'],
      22: ['producer', 'volume', 'vaping_profile', 'ampere', 'flavor', 'puffs', 'length']
    };

    const availableFilters = computed(() => filtersByProductTypeId[props.productTypeId] || []);

    const hasActiveFilters = computed(() => {
      return Object.values(selectedFilters).some(values => values && values.length > 0);
    });

    const totalSelectedFilters = computed(() => {
      return Object.values(selectedFilters).reduce((total, values) => total + (values?.length || 0), 0);
    });

    const fetchFilterValues = async () => {
      loading.value = true;
      const filtersToFetch = availableFilters.value;

      if (!filtersToFetch.length) {
        console.error(`No filters found for product type ID: ${props.productTypeId}`);
        loading.value = false;
        return;
      }

      const newFilterOptions = {};

      for (const filter of filtersToFetch) {
        try {
          const { data, error } = await supabase
            .from("products")
            .select(`${filter}`)
            .neq(filter, null)
            .order(filter, { ascending: true })
            .eq("type_id", props.productTypeId)
            .limit(1000);

          if (error) {
            console.error(`Error fetching ${filter} values:`, error);
            continue;
          }

          if (data && Array.isArray(data)) {
            newFilterOptions[filter] = [...new Set(data.map((item) => item[filter]).filter(Boolean))];
          } else {
            newFilterOptions[filter] = [];
          }
        } catch (error) {
          console.error(`Unexpected error fetching ${filter}:`, error);
        }
      }

      filterOptions.value = { ...newFilterOptions };
      loading.value = false;
    };

    function isValueSelected(filter, value) {
      return selectedFilters[filter]?.includes(value) || false;
    }

    function toggleSelection(filter, value, checked) {
      if (!selectedFilters[filter]) {
        selectedFilters[filter] = [];
      }

      if (checked) {
        if (!selectedFilters[filter].includes(value)) {
          selectedFilters[filter].push(value);
        }
      } else {
        selectedFilters[filter] = selectedFilters[filter].filter(v => v !== value);
      }

      updateFilters();
    }

    function clearFilterSelection(filter) {
      selectedFilters[filter] = [];
      updateFilters();
    }

    function clearAllFilters() {
      Object.keys(selectedFilters).forEach(filter => {
        selectedFilters[filter] = [];
      });
      updateFilters();
    }
    function getMaxHeight(values) {
      return values.length > 8 ? '300px' : 'auto';
    }

    watch(() => props.productTypeId, () => {
      Object.keys(selectedFilters).forEach(key => {
        selectedFilters[key] = [];
      });
      fetchFilterValues();
    }, { immediate: true });

    onMounted(fetchFilterValues);



    return {
      t,
      loading,
      selectedFilters,
      filterOptions,
      expandedPanels,
      hasActiveFilters,
      totalSelectedFilters,
      isValueSelected,
      toggleSelection,
      clearFilterSelection,
      clearAllFilters,
      getMaxHeight
    };
  },
};
</script>

<style scoped>
.filters-container {
  width: 100%;
  max-width: 300px;
  overflow-y: auto;
  max-height: calc(100vh - 100px);
}

/* .scrollable-list-wrapper {
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow: hidden;
}

.filter-list {
  overflow-y: auto;
  flex-grow: 1;
}

  
  .filter-panel {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  
  :deep(.v-list-item--active) {
    background-color: rgba(25, 118, 210, 0.1);
  }
  
  :deep(.v-expansion-panel-text__wrapper) {
    padding: 0;
  } */


.scrollable-filter-content {
  overflow-y: auto;
  max-height: 300px;
  /* Fallback */
}

/* Better scrollbar styling */
.scrollable-filter-content::-webkit-scrollbar {
  width: 6px;
}

.scrollable-filter-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.scrollable-filter-content::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

.scrollable-filter-content::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.filter-list {
  padding-right: 4px;
  /* Prevent scrollbar overlap */
}
</style>