<template>
    <div v-if="modaleName" @click="fermerModale" class="backgroundModal">
        <div class="centreModale">
            <img  :src="`https://res.cloudinary.com/dhlvev5oz/image/upload/catherineLangelier/${modaleName}`" :alt="modaleName">
            <div v-if="project" class="info">
                <h3>{{design.name}}</h3>
                <p>{{design.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import sourceData from '@/data.json'
export default{
    props: {
        modaleName: String,
        modaleId: Number,
    },
    methods: {
        fermerModale(){
            const fermer = true;
            this.$emit('fermer-modale', fermer)
        }
    },
    computed: {
        project(){
            return sourceData.projects.find(
                (project) => project.id === this.modaleId
            )
            //console.log(sourceData.projects , this.modaleId)
            
        },
        design(){
            console.log(this.project)
               return this.project.design.find(
                design => design.image === this.modaleName
            )
        }
    },
}

</script>

<style scoped>
.backgroundModal{
    /* background: rgba(0,0,0,0.9); */
    background: var(--white);
    height: 100vh;
    width: 100%;
    top: 0;
    position: fixed;
    left: 0;
}

.centreModale{
    display: flex;
    /* background: var(--white); */
    background: var(--white);
    color: black;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
   
}

img{
    display: block;
    width: 100%;
}

.info{
    width: 33.33%;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 10px;
    margin: 20px 20px;
}
</style>