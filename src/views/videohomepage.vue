<template>
    <div class="videos">
        <VideoInfo
            v-for="video in videos"
            :video="video"
            :key=video.id
            />

    </div>
</template>

<script>
import axios from "axios"
import VideoInfo from "@/components/VideoInfo"

export default {
    name: "VideoHomePage",
    components: {
        VideoInfo
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
.videos{
    display: flex;
    flex-wrap: wrap;
}
</style>