<template>
  <div id="app">
      <div>{{projectData.header}}</div>
      <router-link to="/login">Login</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/project">Project</router-link>
      <router-view></router-view>
  </div>
  
</template>

<script>
import Login from './views/login.vue'
import About from './views/about.vue'
import Project from './views/project.vue'
import {mapState,mapActions} from 'vuex'
export default {
    components:{
        Login,
        About,
        Project
    },
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState({
            projectData:'projectData',
            // counterObj:'count',
        })
    },
    mounted(){
        // console.log('store:',this.$store.state)
        this.fetchHeader()
        // this.updateCountAsycn({
        //     num:5,
        //     time:2000,
        // })
        // console.log('hahahahah')
        // console.log(this.$store.state.projectData.header)
    },
    methods:{
	...mapActions(['fetchHeader','updateCountAsycn']),
    }
};
</script>

<style>

</style>