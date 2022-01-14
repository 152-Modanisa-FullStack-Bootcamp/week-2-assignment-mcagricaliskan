<template>
    <div class="homepage">
        <Header></Header>
        <div class="videos"> 
            <MainVideo
                v-for="video in videos"
                :video="video"
                :key=video.id
                />
        </div>
    </div>
</template>

<script>
import axios from "axios"
import MainVideo from "@/components/MainVideo"
import Header from "@/components/Header"


export default {
    name: "Main",
    components: {
        MainVideo, Header
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

<style>
.homepage{
    display: flex;
    flex-direction: column;
}

.videos{
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    margin-top: 3%;
}
</style>