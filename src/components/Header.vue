<template>
    <div class="header">
        <router-link to="/favorites/bootcamp" tag="button" class="favoritesButton">Favorites</router-link>
    </div>
</template>


<script>
export default {
    name: "Header"
    
}
</script>

<style>
.header{
    height: 100px;
    display: flex;
    background-color: red;
    justify-content: flex-end;
}

.favoritesButton{
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 2%;
    height: 60%;
    width: 5%;
}

</style>