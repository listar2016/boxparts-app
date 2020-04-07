<template>
  <q-card class="cursor-pointer" @click="Open()">
    <q-img
      :src="this.images[0]"
      basic
    >
      <div class="absolute-bottom bg-primary" style="right:auto">
        Bids <span class="text-bold q-mr-md">{{ this.bids }}</span> Watchers <span class="text-bold">{{ this.watchers }}</span>
      </div>
    </q-img>
    <q-card-section>
      <q-list>
        <q-item>
          <q-item-section avatar>
            <img src="statics/images/icon-product-type.png" class="text-primary"/>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6">{{ this.name }}</q-item-label>
            <q-item-label>Listed: {{ this.created }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <img src="statics/images/icon-location.png" class="text-primary"/>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1">{{ this.location }}</q-item-label>
            <q-item-label><span class="text-bold">{{ this.distance }}</span>km away from you</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <img src="statics/images/icon-price.png" class="text-primary"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Asking price <span class="text-primary q-ml-md">{{ formatPrice(this.price) }}</span></q-item-label>
            <q-item-label>Current bid <span class="text-negative q-ml-md">{{ formatPrice(this.currentBid) }}</span></q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
//
export default {
   name: 'Product',
   props: ['id', 'name', 'created', 'owner', 'tags', 'featured', 'status', 'end', 'images', 'manufacturer', 'model', 'price', 'description', 'type', 'colour', 'mileage', 'condition', 'quantity','location'],
  computed: {
    distance() {
      return 5
    },
    currentBid() {
      return 80000
    },
    bids() {
      return 1
    },
    watchers() {
      return 2
    }
  },
  methods: {
    Load(product) {
      this.id = product.id
    },
    Open() {
      this.$router.push('/product/')
    },
    Fetch() {
      this.$axios.post('/api/product/get', {id: this.id}).then((response) => {
        let product = response.data

        this.id = product.id
        this.name = product.name
        this.created = product.created
        this.owner = product.owner
      })
      .catch((e) => {
        this.$q.notify(e.message)
      })
    },
    formatPrice(number) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      })
      return formatter.format(number)
    }
  }
}
</script>
