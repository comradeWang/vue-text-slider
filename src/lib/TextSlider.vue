<template>
  <div id="TextSlider">
    <div id="text-slider-box">
      <div id="text-slider-marquee">{{text}}</div>
      <div id="text-slider-copy"></div>
    </div>
    <div id="text-slider-node">{{text}}</div>
  </div>
</template>

<script>
  export default {
    name: "TextSlider",
    data() {
      return {
        text: "" // 数组文字转化后的字符串
      };
    },
    props: {
      lists: {
        type: Array,
        default: []
      },
      speed: {
        type: Number,
        default: 40
      }
    }, // 父组件传入数据， 数组形式 [ "连雨不知春去"，"一晴方觉夏深"]
    components: {},
    computed: {},
    watch: {},
    methods: {
      move() {
        // 获取文字text 的计算后宽度  （由于overflow的存在，直接获取不到，需要独立的node计算）
        let width = document.getElementById("text-slider-node").getBoundingClientRect().width;
        let box = document.getElementById("text-slider-box");
        // let copy = document.getElementById("copy");
        // copy.innerText = this.text; // 文字副本填充
        let distance = 0; // 位移距离
        // 设置位移
        let self = this;
        setInterval(function () {
          distance = distance - 1;
          // 如果位移超过文字宽度，则回到起点
          if (-distance >= width) {
            distance = width;
          }
          box.style.transform = "translateX(" + distance + "px)";
        }, self.speed);
      }
    },
    created() {
    },
    mounted() {
      this.lists.forEach( item => {
        this.text = item
      });
    },
    updated() {
      this.move();
    }
  };
</script>

<style scoped>
  #TextSlider {
    overflow: hidden;
    background: white;
    margin: 0 auto;
    width: 35vw;
  }

  /*样式的话可以写*/
  #text-slider-box {
    width: 500%;
  }

  #text-slider-box div {
    float: left;
  }

  #text-slider-marquee {
    margin: 0 16px 0 0;
  }

  #text-slider-node {
    position: absolute;
    z-index: -99;
    top: -99px;
  }
</style>
