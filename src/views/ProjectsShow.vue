<template>
    <div>
        <section v-if="project">
            <div class="banner-project">
                <img :src="`/images/${project.image}`" :alt="project.name">
                
            </div>
            <div class="titre">
                <div>
                    <h2>{{project.name}}</h2>
                    <p>{{project.description}}</p>
                </div>
            </div>
            <div class="containerProjet">
                <ProjectCard :id="project.id"/>
            </div>

        </section>
        <FooterComponent/>
     </div>
</template>

<script>
import sourceData from '@/data.json'
import ProjectCard from '@/components/ProjectCard.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
        components:{
    ProjectCard,
    FooterComponent
},
        props: {
            id: {type: Number, required: true}
        },
        computed: {
            project(){
                return sourceData.projects.find(
                    (project) => project.id === this.id
                );
            } 
        },
    }
</script>

<style scoped>

.banner-project {
    margin-top:75px;
    position: relative;
    min-height: 100vh;
    overflow: hidden;
}

.banner-project img {
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
    position: absolute;
    object-position: 50% 50%;
}

/* img {
    width: 100%;
     
}*/
/* 
h1{
    text-transform: uppercase;
    color: var(--white);
    position: absolute;
    top: 40px;
    left: 40px;
    padding: 20px;
    border-radius: 4px;
} */

.titre{
    min-height: 100vh;
    background: var(--text-blue);
    display:flex;
}

.titre>div {
    margin: auto;
    text-align: center;
}

p,
h2{
    color: var(--white);
    max-width: 65ch;
    padding-left: 20px;
    padding-right: 20px;
}

.containerProjet {
    display: flex;
    margin-left: -20px;
    margin-top: -20px;
    flex-wrap: wrap;
    padding: 20px;
    margin: auto;
    justify-content: space-around;
}
</style>