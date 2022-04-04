<template>
    <transition name="button">
        <button v-show="show" class="buttonUp" @click="backUp">
            <i class="fa fa-angle-up" aria-hidden="true"></i>
        </button>
    </transition>
</template>

<script>
export default {
    data(){
        return {
            show : false
        }
    },
    methods: {
        backUp(){
            document.body.scrollTop = 0; 
            document.documentElement.scrollTop = 0;
        },
        scroll(){
            window.onscroll = () => {
                let positionWindow = document.documentElement.scrollTop;
                if (positionWindow > 1200 ) {
                    this.show = true 
                } else {
                    this.show = false
                }
            }
        }
    },
    mounted () {
  	    this.scroll()
    }
}
</script>

<style scoped>
.buttonUp{
    padding:15px;
    background: var(--text-blue);
    color:var(--white);
    border: none;
    border-radius: 4px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: block;
    cursor: pointer;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 2;
}

.fa {
    font-size: 20px;
}
.button-enter-active,
.button-leave-active {
  transition: opacity 0.5s ease;
}

.button-enter-from,
.button-leave-to {
  opacity: 0;
}
</style>