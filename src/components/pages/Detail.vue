<template>
  <div>
      <div class="dropdown-divider m-0"></div>
      <div class="bg-light padding">
          <div class="container">
                  
              <div class="row">
                  <div class="col-md-12 mb-3">
                      <div class="card">
                          <div class="card-header bg-white">
                              <h5 class="mb-0">Souveniers Shop</h5>
                          </div>
                          <div class="card-body">
                              <div class="row">
                                  <!-- <div class="col-md-7"></div> -->
                                  <div class="col-md-4">
                                      <img :src="sellers[0].image" alt="" class="responsive-img">
                                  </div>
                                   <div class="col-md-8 sm-text">
                                      <table class="content-list">
                                          <tr>
                                              <th width=120>Name</th>
                                              <td> {{sellers[0].name}}</td>
                                          </tr>
                                          <tr>
                                              <th width=120>Category</th>
                                              <td> {{sellers[0].category.name}}</td>
                                          </tr>
                                          <tr>
                                              <th width=120>Open Hour</th>
                                              <td> {{sellers[0].open_hour}} till {{sellers[0].close_hour}}  </td>
                                          </tr>
                                          <tr>
                                              <th width=120>Phone</th>
                                              <td> {{sellers[0].phone}}</td>
                                          </tr>
                                           <tr>
                                              <th width=120>Address</th>
                                              <td> {{sellers[0].address}}</td>
                                          </tr>
                                          <tr>
                                              <th width=120>Description</th>
                                              <td> {{sellers[0].description}}</td>
                                          </tr>
                                      </table>
                                  </div>
                                  <div class="col-md-12">
                                 <!-- <div class="dropdown-divider mt-4 mb-4"></div> -->
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
               
                
              </div>
              <h5>Products</h5>
              <div class="row">
                  <div class="col-md-2" v-for="(item,i) in products" :key="i">
                      <product-item
                            :name="item.name"
                            :image="item.image"
                            :price="parseInt(item.price).toLocaleString('id')"
                            
                      />
                  </div>
              </div>
          </div>
      </div>    
    
  </div>
</template>

<script>
import { db } from '../../main'
// import GoogleMapsLoader from 'google-maps'
import ProductItem from '@/components/place/ProductItem.vue'

export default {
  name: 'Detail',
  data : function() {
      return {
          sellers : [
              {
                  lat : 0,
                  lng : 0,
                  image : '',
                  name : ''
              }
          ],
          products : []
      }
  },
  firestore () {
    return {
        products: db.collection('products'),
        sellers: db.collection('sellers'),
        
    }
  },
  methods : {
      getData : function(){
      

      }
  },
  mounted: function () {
      this.getData()
      
    // GoogleMapsLoader.KEY = 'AIzaSyCXRs1-faJJiZl2S3XnWQW2l0G_5OZub0I';
    // console.log(this.$router.params)
    // GoogleMapsLoader.load(function(google) {
    //   var options = {
    //     zoom: 14,
    //     center:{ lat : -8.622484,lng : 115.169942 }
    //   }

    //   var map = new google.maps.Map(document.getElementById('map'), options);

    // //   var marker = new google.maps.Marker({position: {lat : -8.622484,lng : 115.169942}, map: map});

    // });
  },
  components: {
      'product-item' : ProductItem
  }
}
</script>

<style>
    #map {
        height : 300px;
        width : 100%;
    }    
</style>
