<template>
  <div id="app">
      <NavBar/>
      <!-- <router-link to="/login">Login</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/project">Project</router-link> -->
      <router-view></router-view>
  </div>
  
</template>

<script>
import NavBar from './components/navbar/navBar.vue'
import Login from './views/login.vue'
import About from './views/about.vue'
import Project from './views/project.vue'
import {mapState,mapActions} from 'vuex'
export default {
    components:{
        NavBar,
        Login,
        About,
        Project
    },
    data(){
        return{
        }
    },
    // computed:{
    //     ...mapState({
    //         projectData:'projectData',
    //         // counterObj:'count',
    //     })
    // },
    // mounted(){
    //     // console.log('store:',this.$store.state)
    //     //网页加载就获取header
    //     this.fetchHeader()
    //     // this.updateCountAsycn({
    //     //     num:5,
    //     //     time:2000,
    //     // })
    //     // console.log('hahahahah')
    //     // console.log(this.$store.state.projectData.header)
    // },
    // methods:{
	// ...mapActions(['fetchHeader','updateCountAsycn']),
    // }
};
</script>

<style>
@font-face {
  font-family: "HelveticaNeueLTPro-HvEx";
  src: url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20df2f4a-33ec-4711-b901-1a06fe42978b/0ac79f3c-4eb2-4715-8bc2-cef027ce483a.otf');
}

@font-face {
  font-family: "NotoSansSC-400";
  src: url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20df2f4a-33ec-4711-b901-1a06fe42978b/c1796d7f-7234-466f-99dd-5143a271bc0d.otf');
}

@font-face {
  font-family: "NotoSansSC-700";
  src: url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20df2f4a-33ec-4711-b901-1a06fe42978b/27051478-11d7-4180-9475-b76da319b1cc.otf');
}

@font-face {
  font-family: "NotoSansSC-900";
  src: url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20df2f4a-33ec-4711-b901-1a06fe42978b/8ef7498f-1942-461e-acb4-9df00723362c.otf');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
:root {
  --important: #cc2626;
  --bgcolor: rgb(231, 231, 229);
  --border: rgba(231, 231, 229, 0.2);

  --moveHeight: 16rem;
  --staticHeight: 18rem;
  --padleft: 9rem;
  --headerHeight: 50rem;

  --header-text: 14rem;
  --pro-text: 12rem;
  --big-text: 10rem;
  --md-text: 6rem;
  --text: 5rem;
  --sm-text: 2rem;
  --xs-text: 1.75rem;
  --text-nav: 2.5rem;
}
html {
  font-size: 10px;
}
body {
  background: var(--bgcolor);
  font-family: "NotoSansSC-400", "Open Sans", "Helvetica Neue", sans-serif;
}

.outline-text {
  color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #000;
}
.outline-nice {
  color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--important);
}
.indent {
  text-indent: 4rem;
}
/* animation */
@keyframes left {
  from {
    left: 0;
  }
  to {
    left: -100%;
  }
}

@keyframes bounce-left {
  0% {
    transform: skewx(45deg) translateX(-10rem);
    opacity: 0;
  }
  70% {
    transform: skewx(-10deg) translateX(0);
    opacity: 1;
  }
  100% {
    transform: skewx(0);
  }
}

@keyframes ants {
  100% {
    background-position: 100% 100%;
  }
}

.skew {
  transform: skewX(45deg) translateX(40rem);
  transform-origin: top left;
  transition: all 0.6s 1s ease-out;
}
.no-skew {
  transform: skewX(0deg) translateX(0);
  
}

/* layout */
.per-flex {
  display: flex;
}
.flex {
  display: flex;
  align-items: center;
}
.flex-around {
  justify-content: space-around;
}
.flex-between {
  justify-content: space-between;
}
.flex-col {
  flex-direction: column;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
</style>