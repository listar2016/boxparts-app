<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="row col-lg-9 col-xl-6">
        <div class="col-xs-12 col-lg-7 q-pa-sm">
          <q-card>
            <div class="row col-12 q-pa-sm">
              <q-img
                :src="product.images[0]"
                basic
              />
            </div>
            <div class="row col-12">
              <div class="col-3 q-pa-sm">
                <q-img
                  :src="product.images[1]"
                />  
              </div>
              <div class="col-3 q-pa-sm">
                <q-img
                  :src="product.images[2]"
                />  
              </div>
              <div class="col-3 q-pa-sm">
                <q-img
                  :src="product.images[3]"
                />  
              </div>
              <div class="col-3 q-pa-sm">
                <q-img
                  :src="product.images[4]"
                />  
              </div>
            </div>
          </q-card>
          <q-card>
            <div class="row col-12 q-ma-md">
              <div class="col-xs-12 col-sm-4 q-pa-sm price-div">
                <div class="text-subtitle1">Price:</div>
                <div class="text-h4 text-bold">{{ formatPrice(product.price) }}</div>
              </div>
              <div class="col-xs-6 col-sm-4 q-my-sm q-pa-sm">
                <q-btn outline rounded color="primary" label="Add to Watchlist" />
              </div>
              <div class="col-xs-6 col-sm-4 q-my-sm q-pa-sm">
                <q-btn rounded color="primary" label="Purchase" style="width:100%" />
              </div>
            </div>
            <div class="row col-12 q-ma-md">
              <div class="col-xs-12 col-sm-4 q-pa-sm price-div">
                <div class="text-subtitle1">Current bid:</div>
                <div class="text-h4 text-bold" color="negative">{{ formatPrice(currentBid) }}</div>
              </div>
              <div class="col-xs-6 col-sm-4 q-pa-sm">
                <q-input outlined v-model="newBid" hint="Enter $80,800 or more"/>
              </div>
              <div class="col-xs-6 col-sm-4 q-my-sm q-pa-sm">
                <q-btn rounded color="primary" label="Place bid" style="width:100%" />
              </div>
            </div>
            <div class="row col-12 bg-primary text-white q-px-md">
              <div class="col-xs-6 col-sm-4 q-pa-md">
                Bids  <span class="text-bold">35</span>
              </div>
              <div class="col-xs-6 col-sm-4 q-pa-md">
                Watchers  <span class="text-bold">105</span>
              </div>
              <div class="col-xs-12 col-sm-4 q-pa-md nextline-xs">
                Time Left  <span class="text-bold">{{ product.end }}</span>
              </div>
            </div>
          </q-card>
        </div>
        <div class="col-xs-12 col-lg-5 q-pa-sm">
          <div class="text-h4">Mercedes AMG GT C</div>
          <div class="text-subtitle1">by <a href="#">john.don.doe</a></div>
          <div class="text-subtitle1">Item listed on <span class="text-bold">{{ product.created }}</span></div>
          <div class="text-subtitle1">Condition: <span class="text-bold">{{ product.condition }}</span></div>
          <q-separator class="q-my-md"/>
          <q-item>
            <q-item-section avatar>
              <q-icon name="place" class="text-primary" size="lg"/>
            </q-item-section>
            <q-item-section>
              <a class="text-subtitle1" href="#">Item Location, Qwerty, ABC1234</a>
              <span class="text-subtitle1"><span class="text-bold">1 km</span> away from you</span>
            </q-item-section>
          </q-item>
          <q-card>
            <div class="bg-primary text-white q-py-sm q-px-md">
              <div class="text-h6 text-bold">Item details</div>
            </div>
            <div class="row q-pa-sm q-px-md">
              <div class="col">
                <div class="text-h6 text-bold">Manufacturer</div>
              </div>
              <div class="col">
                <div class="text-h6 text-right text-weight-regular">{{ product.manufacturer }}</div>
              </div>
            </div>
            <div class="row q-pa-sm q-px-md">
              <div class="col">
                <div class="text-h6 text-bold">Model</div>
              </div>
              <div class="col">
                <div class="text-h6 text-right text-weight-regular">{{ product.model }}</div>
              </div>
            </div>
            <div class="row q-pa-sm q-px-md">
              <div class="col">
                <div class="text-h6 text-bold">Year</div>
              </div>
              <div class="col">
                <div class="text-h6 text-right text-weight-regular">{{ product.year }}</div>
              </div>
            </div>
            <div class="row q-pa-sm q-px-md">
              <div class="col">
                <div class="text-h6 text-bold">Colour</div>
              </div>
              <div class="col">
                <div class="text-h6 text-right text-weight-regular">{{ product.colour }}</div>
              </div>
            </div>
            <div class="row q-pa-sm q-px-md">
              <div class="col">
                <div class="text-h6 text-bold">Mileage</div>
              </div>
              <div class="col">
                <div class="text-h6 text-right text-weight-regular">{{ product.mileage }}</div>
              </div>
            </div>
            <div class="text-center q-pa-sm q-px-md">
              <a href="#" class="q-link">View more specifications</a>
            </div>
            <div class="bg-primary text-white q-pa-sm q-px-md">
              <div class="text-h6 text-bold">Description</div>
            </div>
            <div class="q-pa-sm q-px-md">
              <p>{{ product.description }}</p>
            </div>
          </q-card>
        </div>
        <div class="col-xs-12 q-pa-sm">
          <q-card class="q-pa-md">
            <div class="row col-12 q-ma-md">
              <div class="text-h6 text-weight-regular">Questions & Answers</div>
            </div>
            <div class="row q-mx-md" v-for="(quiz ,index) in questions" :key="index">
              <div class="col-12 q-my-sm">
                <div class="ques-ans-title">
                  <div class="text-h6">Question:</div>
                </div>
                <div class="ques-ans-content">
                  <div class="text-subtitle1">{{ quiz.question }}</div>
                  <div class="text-subtitle2">By <a href="#">{{ quiz.question_auther }}</a> on <span class="text-bold">{{ quiz.question_date }}</span></div>
                </div>
              </div>
              <div class="col-12 q-my-sm">
                <div class="ques-ans-title">
                  <div class="text-h6">Answer:</div>
                </div>
                <div class="ques-ans-content">
                  <div class="text-subtitle1">{{ quiz.answer }}</div>
                  <div class="text-subtitle2">By (Seller) <a href="#">{{ quiz.answer_auther }}</a> on <span class="text-bold">{{ quiz.answer_date }}</span></div>
                </div>
              </div>
              <div class="ques-ans-content q-ma-md">
                <q-separator />
              </div>
            </div>
            <div class="row q-my-md">
              <div class="col text-right q-mx-sm">
                <q-btn outline rounded color="primary" label="Read More" />
              </div>
              <div class="col q-mx-sm">
                <q-btn rounded color="primary" label="Ask a question"/>
              </div>
            </div>
          </q-card>
        </div>
      </div>
      <div class="col-lg-3 q-pa-sm featured-product">
        <div class="col-xs-12 q-ma-sm" v-for="(item, index) in featuredProducts" :key="index">
          <product v-bind="item" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      product: {
        images :[
          'statics/images/car.png',
          'statics/images/small-car.png',
          'statics/images/small-car.png',
          'statics/images/small-car.png',
          'statics/images/small-car.png'
        ],
        manufacturer: "Mercedes Benz",
        model: "AMG GT C",
        year: "2019",
        colour: "white",
        mileage: "10100",
        condition: "Used",
        description: "The facelift for the Mercedes-AMG GT Roadster family shows that you can also improve dream cars. The deliberately refined exterior design, the comprehensively upgraded cockpit and the increase of safety and comfort with new assistance systems make them even more desirable. As before, the impressive sports car technology of the AMG GT can be experienced even more intensely with the top down.",
        price: "100000",
        created: "01/12/2019",
        end: "4d 12h"
      },
      questions: [
        {
          question: 'Does it come with a steering wheel? Thanks in advance.',
          answer: 'Yes, this vehicle does come with a steering wheel. Thank you for asking. I forgot to list that specification.',
          question_date: '01 December 2019',
          answer_date: '01 December 2019',
          question_auther: 'icantdrive',
          answer_auther: 'john.don.doe'
        },
        {
          question: 'Does it come with a steering wheel? Thanks in advance.',
          answer: 'Yes, this vehicle does come with a steering wheel. Thank you for asking. I forgot to list that specification.',
          question_date: '01 December 2019',
          answer_date: '01 December 2019',
          question_auther: 'icantdrive',
          answer_auther: 'john.don.doe'
        }
      ],
      bids: [],
      currentBid: 80400,
      newBid: '',
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
    }
  }
}
</script>
