<template>
  <div>
      <hero/>
      <div class="dropdown-divider m-0"></div>
      <div class="bg-light padding">
          <div class="container">
              <center>
                  <h4>Souveniers Shop</h4>
                  <br>
              </center>
              <div class="row">
                 <div class="col-md-3" v-for="(item,i) in sellers" v-bind:key="i">
                    <place-item 
                        :name="item.name"
                        :image="item.image"
                        :phone="item.phone"
                        :open-hour="item.open_hour"
                        :close-hour="item.close_hour"
                        :address="item.address"
                        :id="item.slug"
                    />
                </div>
                
              </div>
              <center>
                  <br>
                  <a href="shop" class="btn btn-primary">View All Shop</a>
                  <br>
              </center>
          </div>
      </div>
      <div class="dropdown-divider m-0"></div>
      <div class=" padding">
          <div class="container">
              <center>
                  <h4>Crafting House</h4>
                  <br>
              </center>
              <div class="row">
                 <div class="col-md-3" v-for="(item,i) in crafters" v-bind:key="i">
                    <place-item 
                        :name="item.name"
                        :image="item.image"
                        :phone="item.phone"
                        :open-hour="item.open_hour"
                        :close-hour="item.close_hour"
                        :address="item.address"
                        :id="item.slug"
                    />
                </div>
                
              </div>
               <center>
                  <br>
                  <a href="shop" class="btn btn-primary">View All Crafter</a>
                  <br>
              </center>
          </div>
      </div>
      <div class="dropdown-divider m-0"></div>
      <div class="parallax-content">
          <center>
            <div class="block-content">
                <h2 class="logo">Grow Up Your Shop</h2>
                <p>Join us and increase your souvenirs sales</p>
                <a href="/crafter" class="btn btn-primary">Join Now </a>
            </div>            
          </center>
      </div>      

  </div>
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import PlaceItem from '@/components/place/PlaceItem.vue'
import { db } from '../../main'

export default {
  name: 'Home',
  data : function() {
      return {
          sellers : [],
          crafters : []
      }
  },
  firestore () {
    return {
        sellers: db.collection('sellers').where('status','==','ACTIVE').limit(4),
        crafters: db.collection('sellers').where('status','==','ACTIVE').limit(4)
        
    }
  },
  components: {
    'hero' : Hero,
    'place-item' : PlaceItem
  }
}
</script>
<style>
    
</style>
