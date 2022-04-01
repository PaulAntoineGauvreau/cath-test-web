<template>
    <div class="cardDesign" v-for="design in project.design" :key="design.name">
            <!-- <h1>{{design.name}}</h1> -->
            <div class="imageContaier">
                <img :src="`https://res.cloudinary.com/dhlvev5oz/image/upload/catherineLangelier/${design.image}`" :alt="design.name">
            </div>

    </div> 
</template>

<script>
    import sourceData from '@/data.json'
    export default {
        props: {
            id: {type: Number, required: true },
        },
        // data() {
        //     return {
        //         design:  sourceData.projects.find(
        //             project => project.id === this.id
        //         )
                
        //     }
        // },
        computed: {
            project(){
                return sourceData.projects.find(
                    (project) => project.id === this.id
                );
            } 
        },
    }
</script>

<style>


.imageContaier{
    /* margin-left: 60px;
    margin-top: 60px; */
    flex-basis: calc(100% / 2 - 20px);
    overflow: hidden;
    align-items: stretch;
}

.imageContaier img {
    margin-left: 20px;
    margin-top: 20px;
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
}

</style>