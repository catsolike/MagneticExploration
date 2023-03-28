<template>
    <div ref="plot"
         class="mountain-style"
    ></div>
</template>

<script>
import Plotly from 'plotly.js-dist';

export default {
    name: 'mountain-graph',
      
    props: {
      xData: {
        type: Array,
        required: true,
      },
      yData: {
        type: Array,
        required: true,
      },
      zData: {
        type: Array,
        required: true,
      },
    },
    mounted() {
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
};
</script>

<style lang="scss">

</style>