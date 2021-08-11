<template>
      <nav class="flex-around">
        <div class="grade">
          <span :xValue="[currentId === -1 || currentId === 'NaN' ? xValue = 'X' : xValue = currentId ]">{{xValue}}</span>
          /Y
        </div>
        <div>
          <a
            class="about"
            v-bind:class="{'nav-active':currentId === -1}"
            @click.prevent="currentId = -1;"
            ><router-link to="/">About</router-link></a
          >
        </div>
        <ul class="flex">
          <a
            v-for="item,index in projectData.header"
            :key="index"
            v-bind:class="{'nav-active':currentId === index+1}"
            @click.prevent="x(index)"
          >
             <router-link :to="{name:'PROJECT',params:{id:index+1}}"> {{item.title}}/ </router-link>
          </a>
        </ul>
      </nav>
</template>

<script>
// import event from '../assets/event'
export default {
    name:'NavBar',
    data(){
        return{
            currentId: -1,
            xValue:'X',
            projectData: {
                header: [],
                main: [],
                currentMain: [],
            },
        }
    },
    mounted() {
        console.log('mounted start');
        let url = "http://47.100.104.162:8000/header";
        fetch(url)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            this.projectData.header = data.data;
          });
    
        let urlMain = "http://47.100.104.162:8000/main";
        fetch(urlMain)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            this.projectData.main = Array.from(data.data);
          });
    },
    methods: {
        x: function (index) {
          console.log("x start");
          this.currentId = index+1;
    
          // console.log(this.projectData.currentMain)
          console.log(window.location.hash)
          console.log('currentId:',this.currentId)

        // 调用自定义事件
        event.$emit('toProject', this.currentId,this.projectData)

      // let skewtimer = setTimeout(() => {
      //   let headertext = document.querySelectorAll(".wrapper");

      //   headertext.forEach((e) => {
      //     e.classList.add("skew");
      //     e.classList.remove("no-skew");
      //   });
      // }, 0);

      // let skewtime = setTimeout(() => {
      //   let headertext = document.querySelectorAll(".wrapper");

      //   headertext.forEach((e) => {
      //     e.classList.add("no-skew");
      //   });
      // }, 100);

      // setTimeout(() => {
      //   clearTimeout(skewtimer);
      //   clearTimeout(skewtime);
      // }, 1000);
    },
    },
    watch: {
        $route() {
          let hash = window.location.hash;
          // console.log('route',hash)
    
          if(hash === '#/about' || hash === '#/'){
            this.currentId = -1;
          }else{
            console.log('projectnnn');
            let num = hash.split('/')[2]
          // console.log('route num',num)
          this.currentId = parseInt(num)
          // console.log('route currentId',this.currentId)
          document.documentElement.scrollTop = 0;
          }

          this.$nextTick(()=>{
          let skewtimer = setTimeout(() => {
            let headertext = document.querySelectorAll(".wrapper");
    
            headertext.forEach((e) => {
              e.classList.add("skew");
              e.classList.remove("no-skew");
            });
          }, 0);
    
          let skewtime = setTimeout(() => {
            let headertext = document.querySelectorAll(".wrapper");
    
            headertext.forEach((e) => {
              e.classList.add("no-skew");
            });
          }, 100);

          setTimeout(() => {
            clearTimeout(skewtimer);
            clearTimeout(skewtime);
          }, 1000);
    
          })
          this.projectData.currentMain = this.projectData.main.filter(
            (e) => e.hid === this.currentId
          );
        },
     },
    }
</script>

<style scoped>
    nav {
      font-size: var(--text-nav);
      padding-top: 1rem;
      margin-bottom: 10rem;
      width: 80%;
      letter-spacing: 0.3rem;
      display: flex;
    }
    nav .grade span {
      color: var(--important);
    }
    
    nav > ul {
      width: 50%;
      flex-wrap: wrap;
    }
    nav a:hover {
      text-decoration: line-through;
    }
    .nav-active {
      color: var(--important);
      text-decoration: line-through;
    }

</style>