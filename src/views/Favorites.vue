<template>
    <div>
        <Header></Header>
        <div class="videos"> 
            <FavoriteVideo
                v-for="video in videos"
                :v-if=video.favorite
                :video="video"
                :key=video.id
                />
        </div>
    </div>
</template>



<script>
import axios from "axios"
import Header from "@/components/Header"
import FavoriteVideo from "@/components/FavoriteVideo"


export default {
    name: "Favorites",
    components: {
        Header, FavoriteVideo
    },
    data() {
        return {
            videos: []
        }
    },
    async mounted() {
        const { data } = await axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos")
        this.videos = data
        console.log(data)
    }
    
}
</script>



<style scoped>
.videos{
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>