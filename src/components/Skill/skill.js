import React from 'react';
import echarts from 'echarts';

class Skill extends React.Component {
  componentDidMount(){
    let myChart = echarts.init(document.getElementById('line'));
    myChart.setOption({
      title:{
        show:true,
        text:'我的技能展示',
        left:'center',
        textStyle:{
          color: ['#3398DB'],
          fontSize:['30']
        }
      },
      color: ['#3398DB'],
      tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      grid: {
          top:'20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis : [
          {
              type : 'category',
              data : ['HTML', 'CSS', 'PS', 'JS', 'JQUERY', 'REACT', 'NODE'],
              axisTick: {
                  alignWithLabel: true
              }
          }
      ],
      yAxis : [
          {
              name:'百分比（%）',
              type : 'value'
          }
      ],
      series : [
          {
              name:'技能展示',
              type:'bar',
              barWidth: '60%',
              data:[95, 90, 60, 75, 80, 90, 50]
          }
      ]
    })
  }
  render () {
    let styles={
      style:{
        margin:'100px auto',
        width:'40%',
        height:'450px'
      }
    }
    return(
        <div id="line" style={styles.style}></div>
    )
  }
}

export default Skill;
