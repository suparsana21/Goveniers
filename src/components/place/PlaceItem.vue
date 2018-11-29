<template>
    <div class="card" style="margin-bottom : 16px">
    <img class="card-img-top" :src="image" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
        <p>
            <small class="card-text"><i class="fa fa-map"></i> {{address}}</small>            
            <br>
            <small class="card-text"><i class="fa fa-phone"></i> {{phone}}</small>
            <br>
            <small class="card-text"><i class="fa fa-clock-o"></i> Open at {{openHour + ' - ' + closeHour}}</small>
        </p>
        <a :href="'/shop/'+id" class="btn btn-sm btn-info full-width">Detail</a>
    </div>
    </div>
</template>
<script>
    export default {
        name : 'PlaceItem',
        props : {
            name : String,
            image : String,
            phone : String,
            openHour : String,
            closeHour : String,
            address : String,
            id : String,
        }
    }
</script>
