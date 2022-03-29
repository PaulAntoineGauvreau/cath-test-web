<template>
<header>
    <nav>
        <router-link  to="/" >Catherine Langelier</router-link>
        <div>
            <router-link
                v-for="project in projects"
                :key="project.id"
                :to="{ name:'project.show',params:{id: project.id, slug:project.slug}}"
            >
            {{project.name}}</router-link>
            <router-link i to="/about" >About</router-link>
        </div>
    </nav>
</header>

</template>

<script>
    import sourceData from '@/data.json'
    export default {
        data(){
            return {
                projects: sourceData.projects
            }
        }

    }
</script>

<style scoped>
    header {
        width: 100%;
        position: sticky;
        top: 0;
        z-index: 2;
        background: var(--white);
        padding: 20px;
    }
    nav {
        width: 100%;
        max-width: 900px;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }

    nav div>a {
        margin-left: 15px;
    }

    div>a:hover {
        border-bottom: 1px var(--text-blue) solid;
    }

</style>