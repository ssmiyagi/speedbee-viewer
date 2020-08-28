<template>
  <div>
    <h2>{{dataName}}</h2>
    <v-sparkline
      :value="value"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="width"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      :fill="fill"
      :type="type"
      :auto-line-width="autoLineWidth"
      auto-draw
    />
  </div>
</template>

<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
    name:"TheChart",
    props: {
      dbData: {
        type: Array,
        default: () => {
          [];
        },
        required: true,
      },
    },
    data: () => ({
      dataName:"時計-000",
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      // value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: true,
      type: 'trend',
      autoLineWidth: false,
    }),
    computed:{
      value:function(){
        const display = [];
        this.dbData.forEach(el =>{
          if(el.type === this.dataName){
            display.push(el.data)
          }
        })    
        return display
    // dbData: [
    //   {
    //     type: "Col1",
    //     key: "1",
    //     keyType: "timestamp",
    //     dataType: "int",
    //     data: 1
    //   },
    // ],
      }
    }
  }
</script>