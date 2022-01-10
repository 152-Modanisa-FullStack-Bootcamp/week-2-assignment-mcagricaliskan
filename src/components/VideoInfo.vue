<template>

    <div class="video">
        
        <img class="coverImage" :src="video.coverImage">
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
    name: "VideoInfo",
    props: {
        video: Object
    },
    mounted(){
        console.log(this.video)
    }
    
}
</script>

<style>

.video {
    display: flex;
    padding: 5px;
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