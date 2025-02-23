<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-alert type="info" color="primary">
                    {{ t('filterTitle') }}
                </v-alert>
            </v-col>
        </v-row>

        <v-row v-if="availableFilters.length">
            <v-col v-for="filter in availableFilters" :key="filter.name" cols="12" md="6">
                <v-select v-if="filter.type === 'select'" :label="t(filter.label)" :items="filter.options"
                    v-model="selectedFilters[filter.name]" @update:modelValue="updateFilters"></v-select>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { supabase } from '@/supabase';

export default {
    props: {
        productTypeId: {
            type: Number, // Or whatever type it is
            required: true,
        },
        productType: {
            type: String,
            required: true,
        },
    },
    setup(props, { emit }) {
        const { t } = useI18n();
        const selectedFilters = ref({});
        const filterOptions = ref({});
        const loadingFilters = ref(false);

        const filtersByProductTypeId = {
            8: ['vaping_profile', 'producer'],
            9: ['watt', 'producer'],
        };

        const productTypeNames = {
            8: 'flavor_shots',
            9: 'mods',
        }

        const availableFilters = computed(() => {
            const filters = filtersByProductTypeId[props.productTypeId] || [];
            return filters.map(filterName => ({
                name: filterName,
                label: filterName, // Or use a more user-friendly label
                type: 'select',
                options: filterOptions.value[filterName] || [],
            }));
        });

        const fetchFilterValues = async () => {
            loadingFilters.value = true;
            const filtersToFetch = filtersByProductTypeId[props.productTypeId];

            if (!filtersToFetch) {
                console.error(`No filters found for product type ID: ${props.productTypeId}`);
                loadingFilters.value = false;
                return;
            }
            const newFilterOptions = {};

            for (const filter of filtersToFetch) {
                console.log("Current filter:", filter);
                console.log("productTypeId:", props.productTypeId);

                try {
                    const { data, error } = await supabase
                        .from('products')
                        .select(filter)
                        .not(filter, 'is', null)
                        .order(filter, { ascending: true })
                        .eq('type_id', props.productTypeId)
                        .limit(1000);
                    if (error) {
                        console.error(`Error fetching ${filter} values for ${filter}:`, error);
                        console.error("Supabase error:", error);
                        continue;
                    }

                    if (data && Array.isArray(data)) {
                        const normalizedData = data.map((item) => {
                            const value = item[filter];
                            return typeof value === 'string' ? value.trim().toLowerCase() : value;
                        });
                        newFilterOptions[filter] = [...new Set(normalizedData)];
                    } else {
                        newFilterOptions[filter] = [];
                    }
                } catch (error) {
                    console.error(`Unexpected error fetching ${filter} values for ${filter}:`, error);
                }
            }

            filterOptions.value = newFilterOptions;
            loadingFilters.value = false;
        };

        watch(() => props.productType, fetchFilterValues, { immediate: true });

        const updateFilters = () => {
            emit('updateFilters', selectedFilters.value);
        };

        onMounted(fetchFilterValues);

        return {
            t,
            availableFilters,
            selectedFilters,
            filterOptions,
            loadingFilters,
            updateFilters,
        };
    }
};
</script>
