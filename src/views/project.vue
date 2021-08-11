<template>
  <div>
      <h1>Project</h1>
      <p>{{projectData.main}}</p>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState({
            projectData:'projectData',
        })
    },
    mounted(){
        this.fetchMain()
    },
    methods:{
	...mapActions(['fetchMain']),
    }
};
</script>

<style>

</style>