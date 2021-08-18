<template>
  <div>
      <header class="relative">
      <div class="absolute home-img"></div>
      <ul class="per-flex">
        <li style="width: 10%">
          <HeaderWrap>Nice to Nice to</HeaderWrap>
          <HeaderWrap style="bottom: 0">meet you! meet you!</HeaderWrap>
        </li>
        <li style="width: 20%"></li>
        <li style="width: 10%; z-index: 10">
          <HeaderWrap>Nice to Nice to</HeaderWrap>
        </li>
        <li style="width: 35%">
          <HeaderWrap style="bottom: 0">meet you! meet you!</HeaderWrap>
        </li>
        <li style="width: 25%">
          <HeaderWrap class="outline-nice" style="color: transparent">Nice to Nice to Nice to Nice to</HeaderWrap>
        </li>
      </ul>
    </header>
    <main class="per-flex flex-col">
      <div class="sec-title">
        你好！我是👋<span class="outline-text">来一碗</span>{{ aboutMy }}
      </div>
      <div class="info indent to-right">{{ aboutDes }}</div>

      <convinced class="convinced"></convinced>

      <div class="sec-title">
        不想联系？好吧，让你看看我的<br />
        <span class="outline-text">获奖记录&证书：</span>
      </div>

      <ul class="award-list">
        <li v-for="(item, index) in adwardList" :key="index">
          <p>{{ item.adwardName }}</p>
          <ul>
            <li v-for="award in item.awards" :key="award">{{ award }}</li>
          </ul>
        </li>
      </ul>

      <convinced class="convinced"></convinced>

      <div class="sec-title">
        Hmm，你也太难说服了，你一定很想知道
        <span class="outline-text">我的工作流程</span>
      </div>
      <ul class="handle-list">
        <li v-for="(item, index) in handleList" :key="index">
          <div class="handle-icon">
            <div class="no-hover"></div>
            <div class="on-hover"></div>
          </div>
          <div>
            <h5>{{ index + 1 }}.</h5>
            <h6>{{ item.handleName }}</h6>
            <p>{{ item.handleContent }}</p>
          </div>
        </li>
      </ul>

      <convinced
        class="convinced"
        style="text-align: center; padding: 0"
      ></convinced>

      <ul class="relative social">
        社交账号
        <li><a href="">Bilibili</a></li>
        <li><a href="">微博</a></li>
        <li><a href="">微信公众号</a></li>
      </ul>

      <div class="sec-title">
        都看到这儿了居然还不联系我?
        <span class="outline-text back-to-top" @click="toTop()">回到顶部</span>
        然后重新再看一遍吧，我只能帮你到这了🤷‍♀️
      </div>
    </main>
  </div>
</template>

<script>
import HeaderWrap from '../components/Wrap/headerWrap.vue'
import convinced from '../components/Wrap/convinced.vue'
export default {
  components:{
    HeaderWrap,
    convinced
  },
  data() {
    return {
      aboutMy:
        "🥣，这是我的个人网站，用于记录自己的前端作品，未来将用于面试，客户展示什么的。Whatever~",
      aboutDes:
        "既然你进入了这个网站，说明你在寻找某人帮你完成页面设计，开发网站或应用这方面的工作，🎉恭喜你找到啦！我可以帮助你完成页面设计，包括图标，横幅，动画等设计，然后进行开发部署上线，无论是多端适配的响应式界面，还是后期运维更新内容，我都可以帮你实现你的想法！听起来很棒吧，想知道如何联系我？快往下看吧。",
      adwardList: [
        {
          adwardName: "name1",
          awards: ["award1", "award2"]
        },
        {
          adwardName: "name2",
          awards: ["award3", "award4"]
        },
        {
          adwardName: "name3",
          awards: ["award5"]
        }
      ],
      handleList: [
        {
          handleName: "step1",
          handleContent: "content1"
        },
        {
          handleName: "step2",
          handleContent: "content2"
        },
        {
          handleName: "step3",
          handleContent: "content3"
        },
        {
          handleName: "step4",
          handleContent: "content4"
        },
        {
          handleName: "step5",
          handleContent: "content5"
        },
        {
          handleName: "step6",
          handleContent: "content6"
        }
      ]
    };
  },
  mounted() {
    console.log('about mounted');
    const html = document.documentElement;
    const convinceds = document.querySelectorAll(".convinced");

    window.addEventListener("scroll", () => {
      for (let i = 0; i < convinceds.length; i++) {
        let scroll =
          convinceds[i].getBoundingClientRect().top -
          html.clientHeight +
          convinceds[i].offsetHeight;

        if (scroll <= 0) {
          convinceds[i].classList.add("an-convinced");
        } else {
          convinceds[i].classList.remove("an-convinced");
        }
      }
    });

    const contentWrapper = document.querySelectorAll(".wrapper");
    const headerContent = document.querySelectorAll(".header-content");
    const copyContent = document.querySelectorAll(".copy-content");

    let speed = parseInt(200 / (document.body.offsetWidth * 0.03));
    // console.log("speed:", speed);
    // setInterval(()=>{
    //   contentWrapper[0].style.left='100'+'px';
    //   // console.log(contentWrapper[0].getBoundingClientRect())
    //   console.log(contentWrapper[0].style.left);
    // },2000)
    // for (let i = 0; i < headerContent.length; i++) {
    //   copyContent[i].innerHTML = headerContent[i].innerHTML;

    //   function Marquee() {
    //     if (copyContent[i].offsetWidth - contentWrapper[i].scrollLeft <= 0) {
    //       contentWrapper[i].scrollLeft -= headerContent[i].offsetWidth;
    //     } else {
    //       contentWrapper[i].scrollLeft++;
    //     }
    //   }
    //   setInterval(Marquee, speed);
    // }
    let headertext = document.querySelectorAll(".wrapper");
    headertext.forEach(e => e.classList.add("no-skew"));
  },
    
}
</script>

<style scoped>
.to-right {
  margin-left: auto;
}
/* header */
header {
  width: 90vw;
  height: var(--headerHeight);
  min-height: 40rem;
  padding: 10rem 0;
  font-size: var(--header-text);
  font-weight: 900;
  font-family: "HelveticaNeueLTPro-HvEx";
}
header > ul {
  width: 100%;
  height: 100%;
}
header > ul li {
  position: relative;
  overflow: hidden;
}
header > ul li .wrapper {
  height: 50%;
  display: flex;
  position: absolute;
  width: 100%;
  overflow: hidden;
  color: var(--important);
}
header > ul li:nth-child(3) .wrapper {
  left: -100%;
  width: 200%;
}
header > ul li:nth-child(4) .wrapper {
  left: -28%;
  width: 128%;
}
header > ul li:nth-child(5) .wrapper {
  left: -80%;
  width: 180%;
}
header > ul li .wrapper >>> div p {
  width: max-content;
}

.home-img {
  width: 25%;
  /* min-width: 200px; */
  right: 0;
  top: 0;
  height: 100%;
  /*background: no-repeat center/cover url(../img/about.jpg);*/

  background: no-repeat center/cover
    url("https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20df2f4a-33ec-4711-b901-1a06fe42978b/cb4daa4b-c9b2-4228-ae40-f9ab521eccab.jpg");
  transition: all 0.3s;
}
.home-img:hover {
  background-image: url("https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20df2f4a-33ec-4711-b901-1a06fe42978b/3b98ebd1-a7b6-413d-a719-0c740867018a.jpg");
}

/* main */
main {
  margin-top: 20rem;
  padding-bottom: 50rem;
  font-size: var(--sm-text);
}
main > * {
  margin-top: 20rem;
}
main .sec-title {
  font-family: "NotoSansSC-700";
  font-size: var(--big-text);
  width: 70%;
  margin-left: auto;
}
main .sec-title + * {
  margin-top: 5rem;
}
main .info {
  width: 50%;
  padding-right: 30%;
}

main .convinced {
  font-size: var(--md-text);
  transform-origin: bottom;
  opacity: 0;
  padding-left: var(--padleft);
}

.an-convinced {
  opacity: 1 !important;
  animation: bounce-left 0.5s ease-in-out;
}

main .convinced >>> a {
  font-size: var(--text);
}
main .convinced >>> a,
.social a {
  text-decoration: underline;
}
main .convinced >>> a:hover,
.social a:hover {
  color: var(--important);
}

main .award-list > li {
  display: flex;
  padding: 2rem 0 2rem var(--padleft);
}
main .award-list > li p {
  width: 30%;
}
main .award-list > li ul > li {
  padding-bottom: 0.5rem;
}
main .social {
  font-size: var(--text);
  text-align: right;
  padding-right: var(--padleft);
  padding-bottom: 40rem;
}

.back-to-top:hover {
  cursor: pointer;
  -webkit-text-stroke-color: var(--important);
}

/* handle-list */
main .handle-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  color: white;
  background-color: black;
}
main .handle-list * {
  font-size: var(--xs-text);
}
main .handle-list li {
  flex: 1;
  flex-basis: 33%;
  height: 60rem;
  padding: 10rem 4rem 2rem;
}
.handle-list li:nth-of-type(1),
.handle-list li:nth-of-type(2),
.handle-list li:nth-of-type(3) {
  border-bottom: 0.1rem solid var(--border);
}
.handle-list li:nth-of-type(2),
.handle-list li:nth-of-type(5) {
  border-left: 0.1rem solid var(--border);
  border-right: 0.1rem solid var(--border);
}

main .handle-list .handle-icon {
  width: 14rem;
  height: 14rem;
  margin-bottom: 4rem;
  position: relative;
}
.handle-icon div {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
}
.handle-list li .no-hover {
  border: 0.2rem solid white;
}
.handle-list li:nth-of-type(even) .no-hover,
.handle-list li:nth-of-type(even) .on-hover {
  border-radius: 50%;
}
main .handle-list .handle-icon .on-hover {
  border: 0.2rem solid transparent;
  background: linear-gradient(black, black) content-box,
    repeating-linear-gradient(
        -45deg,
        white 0,
        white 25%,
        transparent 0,
        transparent 50%
      )
      0 /1.4rem 1.4rem;
  opacity: 0;
}
main .handle-list li:hover .no-hover {
  opacity: 0;
}
main .handle-list li:hover .on-hover {
  opacity: 1;
  animation: ants 12s linear infinite;
}
.handle-list li p {
  margin-top: 2rem;
  text-indent: 4rem;
}
@media screen and (max-width: 768px) {
  .home-img {
    width: 60%;
  }
  main .sec-title {
    font-family: "NotoSansSC-700";
  }
  .outline-text {
    -webkit-text-stroke-width: 1px;
  }
  main .info {
    width: 36%;
    padding-right: 6%;
  }
  main .handle-list li {
    flex-basis: 50%;
    border-bottom: 0.1rem solid var(--border);
    border-right: 0.1rem solid var(--border);
  }
}
@media screen and (max-width: 640px) {
  .home-img {
    width: 60%;
  }
  main .sec-title {
    font-family: "NotoSansSC-400";
  }
  main .info {
    width: 60%;
    padding-right: 10%;
  }
  .outline-text {
    -webkit-text-stroke-width: 0.5px;
  }
  main .award-list > li {
    flex-direction: column;
  }
  main .award-list > li p {
    text-indent: 4rem;
    width: 50%;
  }
  main .handle-list li {
    flex-basis: 100%;
    border-bottom: 0.1rem solid var(--border);
  }
  main .social {
    font-size: var(--big-text);
  }
}
</style>