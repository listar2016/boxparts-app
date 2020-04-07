<template>
  <q-page padding>
    <div class="search-left q-px-md">
      <div class="text-subtitle2 q-mt-md">Search</div>
      <q-input outlined v-model="q">
        <template v-slot:prepend>
          <q-icon name="search" class="text-primary" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="q = ''" class="cursor-pointer text-primary" />
        </template>
      </q-input>
      <q-separator class="q-my-md"/>
      <div class="text-subtitle2 q-mt-md">Location</div>
      <q-input outlined v-model="addr" >
        <template v-slot:prepend>
          <q-icon name="place" class="text-primary"/>
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="addr = ''" class="cursor-pointer text-primary" />
        </template>
      </q-input>
      <div class="text-subtitle2 q-mt-md">Search Range(in miles)</div>
      <div class="slider-div">
        <q-slider v-model="query.location.range" :min="0" :max="50" color="primary" class="left-slider"/>
        <q-input outlined v-model="query.location.range" class="right-input"/>
      </div>
      <q-separator class="q-my-md"/>
      <q-select outlined v-model="query.manufacturer" :options="options" label="Product Type" class="q-my-sm"/>
      <q-select outlined v-model="query.type" :options="options" label="Brand" class="q-my-sm"/>
      <q-select outlined v-model="query.model" :options="options" label="Model" class="q-my-sm"/>

    </div>
    <div class="result-right">
      <div class="row col-12 justify-center">
        <div class="col-md-6 col-lg-4 col-xl-3 q-pa-md" v-for="(product,index) in featuredProducts" :key="index">
          <Product v-bind="product"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    mounted() {
    this.addr = this.address
    this.query.location.lon = this.location.lon
    this.query.location.lat = this.location.lat
  },
  watch: {
    address(newaddr){
      this.addr = newaddr
    }
  },
  computed: {
    ...mapGetters('maps', ['address', 'location'])
  },
  data() {
    return {
      featuredProducts: [
        {
          images: ['statics/images/car-1.png'],
          bids: 35,
          watchers: 105,
          name: 'NISSAN GTR 3.8 V6',
          created: '01/12/2019',
          location: 'Qwerty, ABC1234',
          distance: 1,
          price: 100000,
          },
        {
          images: ['statics/images/car-2.png'],
          bids: 35,
          watchers: 105,
          name: 'NISSAN GTR 3.8 V6',
          created: '01/12/2019',
          location: 'Qwerty, ABC1234',
          distance: 1,
          price: 100000,
          },
        {
          images: ['statics/images/car-3.png'],
          bids: 35,
          watchers: 105,
          name: 'NISSAN GTR 3.8 V6',
          created: '01/12/2019',
          location: 'Qwerty, ABC1234',
          distance: 1,
          price: 100000,
          },
        {
          images: ['statics/images/car-3.png'],
          bids: 35,
          watchers: 105,
          name: 'NISSAN GTR 3.8 V6',
          created: '01/12/2019',
          location: 'Qwerty, ABC1234',
          distance: 1,
          price: 100000,
          },
        {
          images: ['statics/images/car-3.png'],
          bids: 35,
          watchers: 105,
          name: 'NISSAN GTR 3.8 V6',
          created: '01/12/2019',
          location: 'Qwerty, ABC1234',
          distance: 1,
          price: 100000
        }
      ],
      products: [{}],
      query: {
        term: "",
        type: "",
        manufacturer: "",
        model: "",
        location: {
          lon: 0,
          lat: 0,
          range: 0
        }
      },
      addr: '',
      q:'',
      options: [],
    }
  },
  methods: {
    formatPrice(number) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      })
      return formatter.format(number)
    },
    toProduct() {
      this.$router.push('/product')
    }
  },  
}
</script>
