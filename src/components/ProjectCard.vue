<template>
    <div class="cardDesign" v-for="design in project.design" :key="design.name">
        <div @click="modal(), modalImage(design.image, project.id)" class="imageContaier">
            <img :src="`https://res.cloudinary.com/dhlvev5oz/image/upload/catherineLangelier/${design.image}`" :alt="design.name">
        </div>
    </div> 
    <ModaleComponent @fermer-modale="modal" v-show="showModal" :modaleName="modaleName" :modaleId="modaleId"/>
</template>

<script>
    import sourceData from '@/data.json'
    import {ref} from 'vue'
    import ModaleComponent from '@/components/ModaleComponent.vue'
    export default {
        props: {
            id: {type: Number, required: true },
        },
        components:{
           ModaleComponent
        },
        setup(){
            const showModal = ref(false)
            const modaleName = ref("manteau.jpg")
            const modaleId = ref(0)
            return {showModal, modaleName, modaleId}
        },
        methods: {
            modal(){
                this.showModal = !this.showModal
            },
            modalImage(name, id){
                this.modaleName = name
                this.modaleId = id
            }
        },
        computed: {
            project(){
                return sourceData.projects.find(
                    (project) => project.id === this.id
                );
            },
        },
    }
</script>

<style scoped>
.imageContaier{
    /* margin-left: 60px;
    margin-top: 60px; */
    flex-basis: calc(100% / 2 - 20px);
    overflow: hidden;
    align-items: stretch;
    cursor: pointer;
}

.imageContaier img {
    margin-left: 20px;
    margin-top: 20px;
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
}

</style>