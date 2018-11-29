<template>
  <div>
      <div class="dropdown-divider m-0"></div>
      <div class="bg-light padding">
          <div class="container">
              <center>
                  <h4>Souveniers Shop</h4>
                  <br>
              </center>
              <div class="row">
                  <div class="col-md-12 mb-3">
                      <div class="card">
                          <div class="card-body">
                              <div class="row">
                                  <!-- <div class="col-md-7"></div> -->
                                  <div class="col-md-10">
                                      <div class="form-group  m-0">
                                          <input type="text" class="form-control sm-text" placeholder="Search Something" name="search">
                                      </div>
                                  </div>
                                  <div class="col-md-2">
                                      <div class="form-group  m-0">
                                          <button class="btn btn-primary  sm-text full-width"><i class="fa fa-search"></i> Search</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
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
          </div>
      </div>    
      <!-- <nav aria-label="Page navigation "> -->
            <ul class="pagination justify-content-center bg-light">
                <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">&lt;	</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item disabled">
                <a class="page-link" href="#">&gt;	</a>
                </li>
            </ul>
      <!-- </nav> -->
  </div>
</template>

<script>
import PlaceItem from '@/components/place/PlaceItem.vue'
import { db } from '../../main'

export default {
  name: 'Shop',
  data : function() {
      return {
          sellers : []
      }
  },
  firestore () {
    return {
        sellers: db.collection('sellers')
    }
  },
  components: {
    'place-item' : PlaceItem
  }
}
</script>
<style>
    
</style>
