<template>
    <v-navigation-drawer app permanent width="300">
        <v-list dense>
            <v-list-item>
                <v-list-item-title class="text-h6">{{ t('filters') }}</v-list-item-title>
            </v-list-item>

            <v-divider></v-divider>

            <div v-for="(values, filter) in filterOptions" :key="filter" class="filter-section">
                <v-list-subheader class="filter-title">
                    {{ t(filter) }}
                </v-list-subheader>
                
                <div class="filter-options">
                    <div v-for="value in values" :key="value" class="ml-2">
                        <v-checkbox 
                            :label="value" 
                            :value="value"
                            :model-value="selectedFilters[filter] ? selectedFilters[filter].includes(value) : false"
                            @update:model-value="(checked) => toggleSelection(filter, value, checked)"
                            dense
                        >
                        </v-checkbox>
                    </div>
                </div>
                
                <v-divider class="my-2"></v-divider>
            </div>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { ref, computed, watch, onMounted, reactive } from "vue";
import { useI18n } from "vue-i18n";
import { supabase } from "@/supabase";

export default {
    props: {
        productTypeId: {
            type: Number,
            required: true,
        },
    },
    setup(props, { emit }) {
        const { t } = useI18n();
        const selectedFilters = reactive({});
        const filterOptions = ref({});
        const loadingFilters = ref(false);

        const filtersByProductTypeId = {
            1: ["producer", "volume", "amphours", "watt", "color", "vaping_profile"],
            2: ["producer", "volume", "amphours", "watt", "color", "vaping_profile"],
            3: ["producer", "volume", "amphours", "watt", "color"],
            4: ["producer", "volume", "ohm", "color", "vaping_profile"],
            5: ["producer", "volume", "ohm", "vaping_profile"],
            6: ["producer", "ohm", "watt", "material"],
            7: ["producer", "volume", "ohm", "material"],
            8: ["producer", "volume", "vaping_profile", "flavor"],
            9: ["producer", "volume", "vaping_profile", "flavor", "nicotine_volume"],
        };

        const availableFilters = computed(() => filtersByProductTypeId[props.productTypeId] || []);

        const fetchFilterValues = async () => {
            loadingFilters.value = true;
            const filtersToFetch = availableFilters.value;
            if (!filtersToFetch.length) {
                console.error(`No filters found for product type ID: ${props.productTypeId}`);
                loadingFilters.value = false;
                return;
            }

            const newFilterOptions = {};
            for (const filter of filtersToFetch) {
                try {
                    console.log(`Fetching filter: ${filter} for productTypeId: ${props.productTypeId}`);

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
            loadingFilters.value = false;
        };

        function toggleSelection(filter, value, checked) {
            if (!selectedFilters[filter]) {
                selectedFilters[filter] = [];
            }
            
            if (checked) {
                selectedFilters[filter].push(value);
            } else {
                selectedFilters[filter] = selectedFilters[filter].filter(v => v !== value);
            }
            
            updateFilters();
        }

        const updateFilters = () => {
            emit("updateFilters", selectedFilters);
        };

        watch(() => props.productTypeId, fetchFilterValues, { immediate: true });

        onMounted(fetchFilterValues);

        return {
            t,
            selectedFilters,
            filterOptions,
            availableFilters,
            toggleSelection,
            updateFilters,
        };
    },
};
</script>

<style scoped>
.v-navigation-drawer {
    background-color: #f8f9fa;
    padding: 10px;
}

.filter-section {
    margin-bottom: 8px;
}

.filter-title {
    font-weight: bold;
    margin-top: 12px;
    margin-bottom: 8px;
}

.filter-options {
    max-height: 200px;
    overflow-y: auto;
}

.v-checkbox {
    margin: 4px 0;
}
</style>