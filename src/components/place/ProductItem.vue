<template>
    <div class="card" style="margin-bottom : 16px">
    <img class="card-img-top" :src="image" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
        <p>
            <small class="card-text">Rp {{price}}</small>
            <br>
        </p>
    </div>
    </div>
</template>
<script>
    export default {
        name : 'ProductItem',
        props : {
            name : String,
            image : String,
            price : String,
        }
    }
</script>
