<template>

    <div v-if="this.video.favorite" class="video">
        
        <router-link :to="{path: '/watch', query: {id: this.video.id}}"><img class="coverImage" @mouseover="hoverForCoverImage = true" @mouseleave="hoverForCoverImage = false" :src="getCoverImage"></router-link>
        <div class="videoInformation">
            <span><b>{{ video.title }}</b></span>
            <div class="subinfo">
                <span>{{ video.viewCount}} görüntülenme</span>
                <span class="publishDateInMonth">{{ video.publishDateInMonth}} ay önce</span>
            </div>

            <div class="ownerDiv">
                <img class="ownerImage" :src="video.ownerImage">
                <span class="ownerName">{{ video.ownerName }}</span>
            </div>
            <span class="description">{{ video.description }}</span>

        </div>
            
    </div>
    
</template>

<script>
export default {
    name: "FavoriteVideo",
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

<style scoped>

.video {
    display: flex;
    padding: 10px;
    flex-direction: row;
    width: 70%;
    height: 200px;
}

.videoInformation {
    margin-left: 1%;
    display: flex;
    width: 50%;
    flex-direction: column;
    text-align: left;
    padding: 5px;
}

.ownerDiv{
    margin-top: 2%;
    display: flex;
    flex-direction: row;
}

.ownerImageDiv {
    width: 20%;
}

.coverImage{
    width: 360px;
    height: 200px;
}


.videoExplanation {
    padding: 3px;
    display: flex;
    flex-direction: column;
    text-align: left;
}

.ownerImage {
    margin-top: 3px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
}

.ownerName {
    margin-left: 1%;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 15px;
}

.subinfo {
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.publishDateInMonth{
    margin-left: 15px
}

.description{
    margin-top: 2%;
}
</style>