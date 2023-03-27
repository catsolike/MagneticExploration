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
    console.log(this.items)
    this.fillXYZ();
    console.log(this.xData)
    console.log(this.yData)
    console.log(this.zData)
      
      const data = [
        {
          
          x: this.xData,
          y: this.yData,
          z: this.zData,
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
  data() {
    return {
      xData: [],
      yData: [],
      zData: [],
    }
  },
  methods: {
    fillXYZ() {
      for (let i = 0; i < this.items.lenght + 1; i++) {
        this.xData[i] = this.items[i].x;
        this.yData[i] = this.items[i].y;
        this.zData[i] = this.items[i].induction;
      }
      return this.xData, this.yData, this.zData
    }
  }
    
};

</script>

<style lang="scss">

</style>