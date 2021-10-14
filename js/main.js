class Car {
  constructor(name, category, price, registerDate, imgUrl) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.registerDate = registerDate;
    this.imgUrl = imgUrl;
  }
}

const carItems = [
  new Car("Model 3", "Tesla", "48,490", "2020-10-4", "https://media.istockphoto.com/photos/electric-sports-car-the-tesla-model-3-picture-id1277254968?k=6&m=1277254968&s=612x612&w=0&h=4j3WhZQD95BJyqOnML2sDatX9SFQomJclLyd5bbV3FU="),
  new Car("Model X", "Tesla", "89,990", "2017-08-08", "https://media.istockphoto.com/photos/tesla-model-x-travelling-on-the-freeway-in-silicon-valley-picture-id1191552504?k=6&m=1191552504&s=612x612&w=0&h=NWHap01jKkYzC5BT-9gaKYr8phGeO1ZUYHnGPLQ5RUM="),
  new Car("Model S", "Tesla", "82,990", "2019-04-01", "https://media.istockphoto.com/photos/tesla-model-s-on-the-highway-picture-id582261244?k=6&m=582261244&s=612x612&w=0&h=LwYAD7oI6Xy9gsRM7OZ10Nsq-ehGsSmLcbPwQEmZBpg="),
  new Car("Model Y", "Tesla", "48,190", "2020-02-02", "https://media.istockphoto.com/photos/tesla-model-y-in-austin-texas-at-360-bridge-picture-id1272025387?k=6&m=1272025387&s=612x612&w=0&h=o_W18f-pFNdHsSpdaNejXSS7G8XnWfayhinzZVWhQU8="),
  new Car("Cayenne", "Porsche", "67,500", "2017-12-20", "https://media.istockphoto.com/photos/porsche-cayenne-picture-id1138819485?k=6&m=1138819485&s=612x612&w=0&h=uSPCZUofVb5ComBHUpH5qZ5QB7B1WWcKFxNzm53W2ME="),
  new Car("Macan", "Porsche", "52,100", "2019-07-12", "https://media.istockphoto.com/photos/porsche-macan-gts-crossover-suv-picture-id508107322?k=6&m=508107322&s=612x612&w=0&h=syLuqvZng-mEbqJblhY3q6wWxcUlaijknWO9ea90CJo="),
  new Car("Camry", "Toyota", "24,425", "2015-06-29", "https://media.istockphoto.com/photos/toyota-camry-in-motion-picture-id905266220?k=6&m=905266220&s=612x612&w=0&h=8iRQyhjJYVn_ppC6x3LTLGzG0P67NyCvuQqxvO40ryI="),
  new Car("Accord", "Honda", "24,800", "2018-10-02", "https://media.istockphoto.com/photos/honda-accord-in-the-city-picture-id649004692?k=6&m=649004692&s=612x612&w=0&h=7WnRBZcLQ6-Y2FrKKVxya3nwJ6U-CLeZUuk-D5RVlu8="),
  new Car("Civic", "Honda", "20,650", "2015-04-04", "https://media.istockphoto.com/photos/new-honda-civic-front-picture-id458119929?k=6&m=458119929&s=612x612&w=0&h=h8uh7Bqgw2l1Hhg2TmX05VSBnp2cxrjpTBtvPYpKiD4="),
  new Car("CX-5", "Mazda", "26,940", "2012-11-03", "https://media.istockphoto.com/photos/new-2018-mazda-cx5-red-cx5-suv-car-japanese-car-moving-vehicle-picture-id1069236296?k=6&m=1069236296&s=612x612&w=0&h=CO2YJA51esFD2an-sKkhusVifvwTwhBXR3ebxD6h3Fg="),
  new Car("GLE Coupe", "Mercedes-Benz", "76,500", "2020-02-05", "https://media.istockphoto.com/photos/mercedesbenz-gle-43-4matic-coupe-picture-id894961460?k=6&m=894961460&s=612x612&w=0&h=aKbMi31eXuJOSVEKlesIzsJlLM6QhUe0k_5V-FJvH0M="),
  new Car("CLA", "Mercedes-Benz", "37,850", "2019-06-09", "https://media.istockphoto.com/photos/mercedes-benz-cla-picture-id472122163?k=6&m=472122163&s=612x612&w=0&h=IIRhsoWfMXXy6b_aTMtSA2dgSTPK4pSD-_M5vh8OY6M="),
  new Car("GLA 250", "Mercedes-Benz", "37,280", "2017-05-02", "https://media.istockphoto.com/photos/mercedesbenz-gla-2020-test-drive-day-picture-id1297389811?k=6&m=1297389811&s=612x612&w=0&h=NOPBUppwL9aFKKoha3phbhpHUw6hYSdsW5NlFejp4RU="),
  new Car("RX 350", "Lexus", "45,175", "2015-01-01", "https://media.istockphoto.com/photos/hybrid-suv-lexus-nx-on-the-road-picture-id657915058?k=6&m=657915058&s=612x612&w=0&h=DGCgfv-pBE75oOUktrX_WpGSadnEmRcm5iPfa49BOQw="),
  new Car("NX 300", "Lexus", "37,510", "2018-09-12", "https://media.istockphoto.com/photos/lexus-nx-200t-car-picture-id480681192?k=6&m=480681192&s=612x612&w=0&h=Ne9_r4aioLH_jpiK41fHpTr-ADdKsHcFMOOPXT9DGp8="),
  new Car("Urus", "Lamborghini", "218,000", "2021-08-16", "https://media.istockphoto.com/photos/lamborghini-urus-picture-id1184360237?k=6&m=1184360237&s=612x612&w=0&h=cDC3bjJCG9fZC8VpJnuoK73du-hKLnij-14eKHxuLyA="),
  new Car("Aventador", "Lamborghini", "393,695", "2020-09-11", "https://media.istockphoto.com/photos/lamborghini-aventador-lp-7504-superveloce-picture-id1083962000?k=6&m=1083962000&s=612x612&w=0&h=VBYRfp0408ZHqDTdJ69pIJP7z_zhj2T7z8OB-28adSU="),
  new Car("A3", "Audi", "33,500", "2019-05-08", "https://media.istockphoto.com/photos/audi-a3-sportback-on-a-street-picture-id1255388367?k=6&m=1255388367&s=612x612&w=0&h=nh2TLu9W-68-3_PgN1-0qkXYaw4mfFZviKY1sY_fjJ8="),
  new Car("X3", "BMW", "43,000", "2018-03-11", "https://media.istockphoto.com/photos/-picture-id1206921084?k=6&m=1206921084&s=612x612&w=0&h=o8ETeAQHAuzOerMorNWxPnDpyhSyrxiy6vvIQ8TLd4Y="),
  new Car("2 Series", "BMW", "37,500", "2019-01-15", "https://media.istockphoto.com/photos/coupe-competition-picture-id1187329409?k=6&m=1187329409&s=612x612&w=0&h=qDHLX8yA8WVGmEwFU8k56z72uobZfcGkHH14zzpLPc4=")
];

Vue.component('car-card', {
  props: ['item'],
  template: `
    <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
            <img v-bind:src="item.imgUrl" class="card-img-top" alt="...">
            <h5 class="card-title pt-2">{{ item.name }}</h5>
            <p class="card-text">Category: {{ item.category }}</p>
            <p class="card-text">Price: $ {{ item.price }}</p>
            <p class="card-text">Date: {{ item.registerDate }}</p>
        </div>
    </div>
  `
});


var car = new Vue({
  el: "#carEcommerce",
  data() {
    return {
      items: carItems,
      currentItems: carItems,
      sort: "0",
      sortCategory: {
        "0": "Sort by:",
        "1": "Price: Low to High",
        "2": "Price: High to Low",
        "3": "Newest Arrivals"
      },
      category: "0",
      carCategory: {
        "0": "Category",
        "1": "Tesla",
        "2": "Porsche",
        "3": "Toyota",
        "4": "Toyota",
        "5": "Mazda",
        "6": "Mercedes-Benz",
        "7": "Lexus",
        "8": "Lamborghini",
        "9": "Audi",
        "10": "BMW"
      }
    }
  },
  computed: {
    lowToHigh: function() {
      for (let i = 1; i < this.currentItems.length; i++) {
        let currentPrice = this.toNumber(this.currentItems[i].price);
        let currentItem = this.currentItems[i];
        for (let j = i - 1; j >= 0; j--) {
          if (currentPrice <= this.toNumber(this.currentItems[j].price)) {
            this.currentItems[j + 1] = this.currentItems[j];
            this.currentItems[j] = currentItem;
          } else {
            break;
          }
        }
      }
    },
    highToLow: function() {
      for (let i = 1; i < this.currentItems.length; i++) {
        let currentPrice = this.toNumber(this.currentItems[i].price);
        let currentItem = this.currentItems[i];
        for (let j = i - 1; j >= 0; j--) {
          if (currentPrice > this.toNumber(this.currentItems[j].price)) {
            this.currentItems[j + 1] = this.currentItems[j];
            this.currentItems[j] = currentItem;
          } else {
            break;
          }
        }
      }
    },
    newArrival: function() {
      for (let i = 1; i < this.currentItems.length; i++) {
        let currentDate = new Date(this.currentItems[i].registerDate);
        let currentItem = this.currentItems[i];
        for (let j = i - 1; j >= 0; j--) {
          if (currentDate > new Date(this.currentItems[j].registerDate)) {
            this.currentItems[j + 1] = this.currentItems[j];
            this.currentItems[j] = currentItem;
          } else {
            break;
          }
        }
      }
    },
    sortItems: function() {
      if (this.sort === "1") {
        this.lowToHigh;
      } else if(this.sort === "2") {
        this.highToLow;
      } else if (this.sort === "3") {
        this.newArrival;
      }
      return this.currentItems;
    }
  },
  methods: {
    selectCategory: function() {
      if (this.category === "Category") {
        this.currentItems = this.items;
      } else {
        let result = [];
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].category === this.carCategory[this.category]) result.push(this.items[i]);
        }
        this.currentItems = result;
      }
    },
    toNumber: function(strNum) {
      return parseInt(strNum.replace(",", ""));
    }
  }
});
