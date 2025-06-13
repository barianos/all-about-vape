<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="product.primary_photo" alt="product.name" height="400px" class="mb-4"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h1>{{ product.name}}</h1>
        <h3>{{ product.producer }}</h3>
        <p>{{ product.description }}</p>
        
        <!-- Characteristics Section -->
        <v-card v-if="characteristics.length > 0" class="mt-6 mb-6" outlined>
          <v-card-title>
            <h2 class="centered">{{ t('characteristics') }}</h2>
            <hr>
          </v-card-title>
          <v-card-text>
            <v-row v-for="characteristic in characteristics" 
                :key="characteristic.key">
                <div class="characteristic-item">
                  <strong>{{ characteristic.label }}:</strong>
                  <span class="ml-2">{{ characteristic.value }}</span>
                </div>
            </v-row>
          </v-card-text>
        </v-card>
        
        <v-btn color="secondary" @click="$router.back()"> {{ t('back') }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { supabase } from '../supabase';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
  props: {
    productType: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: {},
      locale: this.$i18n.locale || 'en',
      characteristics: []
    };
  },
  computed: {
    // Define characteristics based on product type_id
    characteristicConfig() {
      const configs = {
        1: [ //pods
          { key: 'volume', label: this.t('volume') },
          { key: 'amphours', label: this.t('amphours') },
          { key: 'watt', label: this.t('watt') },
          { key: 'color', label: this.t('color') },
          { key: 'vaping_profile', label: this.t('vaping_profile') }
        ],
        2: [ //starter_kit
          { key: 'volume', label: this.t('volume') },
          { key: 'amphours', label: this.t('amphours') },
          { key: 'watt', label: this.t('watt') },
          { key: 'color', label: this.t('color') },
          { key: 'vaping_profile', label: this.t('vaping_profile') }
        ],
        3: [ // mods
          { key: 'volume', label: this.t('volume') },
          { key: 'amphours', label: this.t('amphours') },
          { key: 'watt', label: this.t('watt') },
          { key: 'color', label: this.t('color') },
        ],
        4: [ // factory Vaporizers
          { key: 'volume', label: this.t('volume') },
          { key: 'ohm', label: this.t('ohm') },
          { key: 'vaping_profile', label: this.t('vaping_profile') }
        ],
        5: [ // RTA Vaporizers
          { key: 'volume', label: this.t('volume') },
          { key: 'ohm', label: this.t('ohm') },
          { key: 'vaping_profile', label: this.t('vaping_profile') }
        ],
        6: [ // Coils replacement
          { key: 'ohm', label: this.t('ohm') },
          { key: 'watt', label: this.t('watt') },
          { key: 'matterial', label: this.t('matterial') },
        ],
        7: [ // POD Cartridge
          { key: 'volume', label: this.t('volume') },
          { key: 'ohm', label: this.t('ohm') },
          { key: 'matterial', label: this.t('matterial') },
        ],
        8: [ // flavor shots
          { key: 'volume', label: this.t('volume') },
          { key: 'vaping_profile', label: this.t('vaping_profile') },
          { key: 'flavor', label: this.t('flavor') },
          { key: 'nicotine_volume', label: this.t('nicotine_volume') },
        ],
        9: [ // ready liquids
          { key: 'volume', label: this.t('volume') },
          { key: 'vaping_profile', label: this.t('vaping_profile') },
          { key: 'flavor', label: this.t('flavor') },
          { key: 'nicotine_volume', label: this.t('nicotine_volume') },
        ],
        10: [ //Liquid Bases
          { key: 'volume', label: this.t('volume') },
        ],
        11: [ // Nicotine Liquids
          { key: 'volume', label: this.t('volume') },
          { key: 'vaping_profile', label: this.t('vaping_profile') },
          { key: 'nicotine_volume', label: this.t('nicotine_volume') },
        ],
        12: [ // Consumables Wires
          { key: 'ohm', label: this.t('ohm') },
          { key: 'length', label: this.t('length') },
        ],
        13: [ // Prebuild Resistance
          { key: 'ohm', label: this.t('ohm') },
        ],
        14: [ // Consumambles Cotton
        ],
        15: [ // empty_bottles
        ],
        16: [ // Batteries
          { key: 'amphours', label: this.t('amphours') },
          { key: 'ampere', label: this.t('amperes') },
          { key: 'volt', label: this.t('volt') },
          { key: 'weight', label: this.t('weight') },
        ],
        17: [ // Battery Chargers
        ],
        18: [ // Other Items
        ],
        19: [ // Pouches
        ],
        20: [ // Hookah
        ],
        21: [ // Disposables Nicotine
          { key: 'volume', label: this.t('volume') },
          { key: 'vaping_profile', label: this.t('vaping_profile') },
          { key: 'ampere', label: this.t('amperes') },
          { key: 'flavor', label: this.t('flavor') },
          { key: 'puffs', label: this.t('puffs') },
          { key: 'length', label: this.t('length') }
        ],
        22: [ // Disposables Nicotine Free
          { key: 'volume', label: this.t('volume') },
          { key: 'vaping_profile', label: this.t('vaping_profile') },
          { key: 'ampere', label: this.t('amperes') },
          { key: 'flavor', label: this.t('flavor') },
          { key: 'puffs', label: this.t('puffs') },
          { key: 'length', label: this.t('length') }
        ],
        23: [ // Big Puffs
          { key: 'volume', label: this.t('volume') },
          { key: 'vaping_profile', label: this.t('vaping_profile') },
          { key: 'ampere', label: this.t('amperes') },
          { key: 'flavor', label: this.t('flavor') },
          { key: 'puffs', label: this.t('puffs') },
          { key: 'length', label: this.t('length') }
        ],
        // Add more product types as needed
        default: [
        ]
      };
      
      return configs[this.product.type_id] || configs.default;
    }
  },
  methods: {
    async fetchProductDetails() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', this.id)
        .single();

      if (error) {
        console.error('Error fetching product details:', error);
      } else {
        this.product = data;

        this.product.name = this.product[`name_${this.locale}`] || this.product.name_en;
        this.product.description = this.product[`description_${this.locale}`] || this.product.description_en;

        if (this.productType && this.product.type_slug !== this.productType) {
          console.warn('Product type mismatch!');
        }

        this.buildCharacteristics();
      }
    },

    buildCharacteristics() {
      this.characteristics = this.characteristicConfig
        .map(config => ({
          key: config.key,
          label: config.label,
          value: this.getCharacteristicValue(config.key)
        }))
        .filter(char => char.value !== null && char.value !== undefined && char.value !== '');
    },

    getCharacteristicValue(key) {
      const localizedKey = `${key}_${this.locale}`;
      if (this.product[localizedKey]) {
        return this.product[localizedKey];
      }
      
      const englishKey = `${key}_en`;
      if (this.product[englishKey]) {
        return this.product[englishKey];
      }
      
      return this.product[key] || null;
    }
  },

  mounted() {
    this.fetchProductDetails();
  },

  watch: {
    '$i18n.locale'() {
      this.locale = this.$i18n.locale;
      if (this.product.id) {
        this.buildCharacteristics();
      }
    }
  }
};
</script>

<style scoped>
h1 {
  font-weight: bold;
  margin-bottom: 16px;
}

h2 {
  font-size: 1.5em;
  font-weight: 600;
  text-align: center;
}

p {
  font-size: 1.2em;
  line-height: 1.6em;
}

.characteristic-item {
  margin-left: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
}

.characteristic-item:last-child {
  border-bottom: none;
}

</style>