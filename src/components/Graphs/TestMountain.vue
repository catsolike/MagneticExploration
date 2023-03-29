<template>
<div ref="plot"
      class="mountain-style"
></div>
</template>

<script>
import Plotly from 'plotly.js-dist';

export default {
  name: 'test-mountain',
    
  props: {
    items: Array,
    // xData: {
    //     type: Array,
    //     required: true,
    //   },
    //   yData: {
    //     type: Array,
    //     required: true,
    //   },
    //   zData: {
    //     type: Array,
    //     required: true,
    //   },
    },
  mounted() {
    this.createGraph();
  },
  data() {
    return {
      xData: Array(this.items.map(item => Number(item.x))),
      yData: Array(this.items.map(item => Number(item.y))),
      zData: Array(this.items.map(item => (item.induction))),
    }
  },
  methods: {
    createGraph() {
      const data = [
        {
          x: this.xData[0],
          y: this.yData[0],
          z: this.zData[0],
            

          type: 'surface',
        
          contours: {
            z: {
              show: true,
              usecolormap: true,
              highlightcolor: '#42f462',
              project: { z: true },
            },
          },
      
          colorscale: 'Viridis',
        },
      ];

      const layout = {
        paper_bgcolor: "rgba(0,0,0,0)",
        autosize: true,
        scene: {
          xaxis: { title: 'X Axis' },
          yaxis: { title: 'Y Axis' },
          zaxis: { title: 'Z Axis' },
        },
        margin: {
          l: 0,
          r: 0,
          b: 0,
          t: 0,
        },
      };

      Plotly.newPlot(this.$refs.plot, data, layout);
    },

    // fillXYZ() {
    //   this.xData = this.items.map(item => (item.x, console.log("AAAAAAA X", item.x)))
    //   this.yData = this.items.map(item => (item.y, console.log("AAAAAAA Y", item.y)))
    //   this.zData = this.items.map(item => (item.z, console.log("AAAAAAA Z", item.z)))
    //   // return this.xData, this.yData, this.zData
    // }
  }
};

</script>

<style lang="scss">

</style>