<template>
    <div class="video">
        <router-link :to="{path: '/watch', query: {id: this.video.id}}"><img class="coverImage" @mouseover="hoverForCoverImage = true" @mouseleave="hoverForCoverImage = false" :src="getCoverImage"></router-link>
        <div class="videoInformation">
            <div class="ownerImageDiv">
                <img class="ownerImage" :src="video.ownerImage">
            </div>
            <div class="videoExplanation">
                <span><b>{{ video.title }}</b></span>
                <span class="ownerName">{{ video.ownerName }}</span>
                <div class="subinfo">
                    <span>{{ video.viewCount}} görüntülenme</span>
                    <span class="publishDateInMonth">{{ video.publishDateInMonth}} ay önce</span>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "MainVideo",
    props: {
        video: Object
    },
    data() {
        return {
            coverImageSource: this.video.coverImage,
            hoverForCoverImage: false
        }
    },
    mounted(){
        console.log(this.video)
    },
    computed: {
        getCoverImage() {
            if (this.hoverForCoverImage == true){
                return this.video.hoverImage
            } else {
                return this.video.coverImage
            }
        }

    }
    
}
</script>

<style>

.video {
    display: flex;
    padding: 10px;
    flex-direction: column;
    width: 360px;
    height: 300px;
}

.ownerImageDiv {
    width: 20%;
}

.coverImage{
    width: 360px;
    height: 200px;
}

.videoInformation {
    padding: 5px;
    display: flex;
    flex-direction: row;
}

.videoExplanation {
    padding: 3px;
    display: flex;
    flex-direction: column;
    text-align: left;
}

.ownerImage {
    margin-top: 3px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
}

.ownerName {
    margin-top: 3px;
    font-size: 15px;
}

.subinfo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.publishDateInMonth{
    margin-left: 15px
}
</style>