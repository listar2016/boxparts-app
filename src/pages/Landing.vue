<template>
  <q-page>
    <div class="home-slider row">
      <div class="col-xs-12 col-md-9 col-lg-6 col-xl-4 absolute-center q-pa-sm">
        <q-card class="q-pa-md quick-search" align="center">
          <q-card-section>
            <div class="text-h4 text-center text-primary">Get your new vehicle today</div>
            <div class="text-subtitle2 text-center text-grey">Find vehicles and parts near you</div>
            <q-input outlined v-model="location" label="Enter your location" stack-label class="search-input">
              <template v-slot:append>  
                <q-btn color="primary" @click="search()">Search</q-btn>
              </template>
            </q-input>
          </q-card-section>
          <q-card-section>
            <div class="row search-fields justify-evenly">
              <div class="col-12 col-sm-4 search-field">
                <q-select outlined v-model="chosenBrand" :options="brands" label="Brand" />
              </div>
              <div class="col-12 col-sm-4 search-field">
                <q-select outlined v-model="chosenModel" :options="models" label="Model" />
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <router-link tag="a" to="/search" class="float-right text-grey">Advanced Search</router-link>
          </q-card-section>
        </q-card>
      </div>
    </div>
    
    <div class="row justify-center">
      <div class="col-md-4 col-lg-3">
        <q-item clickable tag="a">
          <q-item-section avatar>
            <img src="statics/images/car-front.png" />
          </q-item-section>
          <q-item-section>
            <h6 class="text-primary">Find your item</h6>
          </q-item-section>
        </q-item>
      </div>  
      <div class="col-md-4 col-lg-3">
        <q-item clickable tag="a">
          <q-item-section avatar>
            <img src="statics/images/hand-money.png" />
          </q-item-section>
          <q-item-section>
            <h6 class="text-primary">Purchase your item</h6>
          </q-item-section>
        </q-item>
      </div>  
      <div class="col-md-4 col-lg-3">
        <q-item clickable tag="a">
          <q-item-section avatar>
            <img src="statics/images/smile-face.png" />
          </q-item-section>
          <q-item-section>
            <h6 class="text-primary">Enjoy your item</h6>
          </q-item-section>
        </q-item>
      </div>  
    </div>
    <div class="row justify-center bg-primary q-py-xl">
      <div class="row col-12">
        <div class="col-lg-9 justify-center q-mx-auto q-mb-sm">
          <span class="text-h3 text-white">Featured Items</span>
        </div>
      </div>
      <div class="row col-lg-9 justify-center">
        <div class="col-xl-4 q-pa-sm" v-for="(product,index) in featuredProducts" :key="index">
          <product v-bind="product" />
        </div>
      </div>
    </div>
    <div class="row justify-center q-my-xl q-mx-sm">
      <div class="row col-lg-6 buy-app q-pa-lg text-primary get-boxpart">
        <div class="col col-sm-8">
          <div class="text-h4">Get the <span class="text-bold">BoxParts</span> app</div>
          <div class="text-h6 q-mb-md">Get the BoxParts market on the go!</div>
          <div class="row col-12">
            <div class="col q-px-sm">
              <img src="statics/images/get-on-apple.png" class="q-mr-lg">
            </div>
            <div class="col q-px-sm">
              <img src="statics/images/get-on-google.png">
            </div>
          </div>
        </div>
        <div class="col-sm-4 phone-image">
          <img src="statics/images/phone-image.png"/>
        </div>
      </div>
    </div>
    <div class="row justify-center q-mb-xl">
      <div class="col-md-4 col-lg-3 q-px-xl">
        <h5 class="text-primary text-bold text-center">Who We Are</h5>
        <p>
          A placeholder paragraph to be replaced by official text. This is a placeholder paragraph, it is temporary and will be replaced with official text. This is a placeholder paragraph, it is temporary and will be replaced with official text. A placeholder paragraph to be replaced by official text.
        </p>
      </div>
      <div class="col-md-4 col-lg-3 q-px-xl text-center">
        <h5 class="text-primary text-bold">What We Do</h5>
        <p>
          A placeholder paragraph to be replaced by official text. This is a placeholder paragraph, it is temporary and will be replaced with official text. This is a placeholder paragraph, it is temporary and will be replaced with official text. A placeholder paragraph to be replaced by official text.
        </p>
      </div>
      <div class="col-md-4 col-lg-3 q-px-xl text-center">
        <h5 class="text-primary text-bold">Start Your Experience!</h5>
        <p>
          A placeholder paragraph to be replaced by official text. This is a placeholder paragraph, it is temporary and will be replaced with official text. This is a placeholder paragraph, it is temporary and will be replaced with official text. A placeholder paragraph to be replaced by official text.
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  // name: 'PageName',
  mounted() {
    this.location = this.address
    localStorage.setItem('modeldata', JSON.stringify(this.modelData))
  },
  watch: {
    address(newaddr){
      this.location = newaddr
    },
    chosenBrand() {
      this.chosenModel = this.models[0]
    }
  },
  computed: {
    ...mapGetters('maps', ['address']),
    brands () {
      return [...new Set(this.modelData.map((product) => { return product.brand } ))]
    },
    models() {
      return this.modelData.filter((product) => product.brand === this.chosenBrand )
      .map((product) => { return product.model })
    }
  },
    methods: {
    toProduct() {
      this.$router.push('/product')
    },
    search() {
      this.$router.push('/search')
    }
    },
  data() {
    return {
      chosenBrand: "",
      chosenModel: "",
      modelData: [
        {
          brand: "Ferrari",
          model: "Spyder"
        },
        {
          brand: "Lamborghini",
          model: "Mercielago"
        },
        {
          brand: "Ferrari",
          model: "458 Italia"
        },
        {
          brand: "Lamborghini",
          model: "Aventador"
        }
      ],
      featuredProducts: [
        {
          id: 0,
          images: ['statics/images/car-1.png'],
          bids: 35,
          watchers: 105,
          name: 'NISSAN GTR 3.8 V6',
          created: '01/12/2019',
          location: 'Qwerty, ABC1234',
          distance: 1,
          price: 100000
        },
        {
          images: ['statics/images/car-2.png'],
          bids: 35,
          watchers: 105,
          name: 'NISSAN GTR 3.8 V6',
          created: '01/12/2019',
          location: 'Qwerty, ABC1234',
          distance: 1,
          price: 100000
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
      query: {
        term: "",
        type: "",
        manufacturer: "",
        model: "",
        location: {
          lon: -1,
          lat: -1,
          range: -1
        }
      },
      location: '',
      options: [],
      model: ''
    }
  }
}
</script>

<style lang="scss" scoped>
a li {
  text-decoration: none;
}
</style>