import * as echarts from 'echarts/core';
import ECharts from 'echarts-for-react';

import Contents from './pdf.style'

const _ = () => {


  let raderOptions = {
    tooltip: {
      show:false,
    },
    radar: {
      indicator: [
        { name: '대근육', max: 100 },
        { name: '소근육', max: 100 },
        { name: '인지', max: 100 },
        { name: '언어', max: 100 },
        { name: '사회성', max: 100 },
        { name: '자립', max: 100 }
      ],
      shape: 'polygon',
      radius: '80%',
      splitNumber: 5,
      name: {
        color: '#4252E2',
        fontSize: 13,
        fontWeight: 'bold'
      },
      splitLine: {
        lineStyle: {
          color: [
            '#ECEEF5',
            '#ECEEF5',
            '#ECEEF5',
            '#ECEEF5',
            '#ECEEF5',
            '#D4D6E3'
          ]
        }
      },
      splitArea: {
        // show: true,
        areaStyle: {
          color: '#fff' 
        }
      },
      axisLine: {
        show: true,
        symbol: ['none', 'circle'], 
        symbolSize: 6, 
        lineStyle: {
          color: '#D4D6E3'
        }
      }
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [60, 70, 90, 95, 80, 65], 
            name: '발달 점수',
              areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(66, 82, 226, 0.15)'
                  },
                  {
                    offset: 0.8702,
                    color: 'rgba(66, 82, 226, 0)'
                  }
                ]
              }
            },
            lineStyle: {
              color: '#4252E2',
              width: 2
            },
            symbol: 'none',
            itemStyle: {
              color: '#4252E2'
            }
          },
          {
            value: [80, 85, 85, 85, 75, 90], 
            name: '기준 상위값',
            lineStyle: {
              color: '#A0A4BE',
              type: 'solid'
            },
            symbol: 'none'
          },
          {
            value: [50, 55, 60, 65, 50, 70],
            name: '기준 하위값',
            lineStyle: {
              color: '#A0A4BE',
              type: 'solid'
            },
            symbol: 'none'
          }
        ]
      }
    ]
  };

  
  let barOptions = {
    backgroundColor: '#FFFFFF',
    title: {
      left: 'center',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      show:false,
    },
    grid: {
      left: '0',
      right: '0',
      bottom: '0',
      top: '0',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: [
        '4-5',
        '6-7',
        '8-9',
        '10-11',
        '12-13',
        '14-15',
        '16-17',
        '18-19',
        '20-21', 
        '22-23',
        '24-26',
        '27-29', 
        '30-32',
        '33-35'
      ],
      axisLabel: {
        margin: 10,
        color: '#60637B',
        fontSize: 12,      
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show:false,
        alignWithLabel: false
      }
    },
    yAxis: {
      show: false,
      type: 'value',
      name: '비율 (%)',
      nameRotate: 90,
      nameLocation: 'middle',
      nameGap: 40,
      max: 100,
      splitNumber: 5
    },
    series: [
       {
          name: 'background',
          type: 'bar',
          barGap: '-100%',
          barWidth: '60%',
          itemStyle: {
            color: '#f0f0f0',
            // barBorderRadius: [5, 5, 0, 0]
          },
          data: Array(14).fill(100),  // y축 최대값
          z: 1
        },
      {
        name: '대근육',
        type: 'bar',
        stack: 'b',
        emphasis: {
          focus: 'series'
        },
        barWidth: '60%',
        itemStyle: {
          color: '#6370E3',
        },
        data: [10, 18, 16, 15, 14, 10, 12, 10, 9, 8, 7, 6, 5, 5]
      },
      {
        name: '소근육',
        type: 'bar',
        stack: 'b',
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          color: '#3FAEEC'
        },
        data: [20, 19, 18, 5, 16, 5, 14, 13, 12, 11, 10, 9, 8, 7]
      },
      {
        name: '인지',
        type: 'bar',
        stack: 'b',
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          color: '#33DDDD'
        },
        data: [2, 5, 16, 16, 17, 17, 10, 10, 5, 5, 20, 20, 21, 22]
      },
      {
        name: '언어',
        type: 'bar',
        stack: 'b',
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          color: '#F74D5A'
        },
        data: [15, 15, 14, 3, 0, 2, 1, 12, 11, 11, 10, 10, 9, 8]
      },
      {
        name: '사회성',
        type: 'bar',
        stack: 'b',
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          color: '#FFA851'
        },
        data: [10, 11, 12, 13, 14, 15, 5, 6, 7, 8, 10, 21, 22, 23]
      },
      {
        name: '자조',
        type: 'bar',
        stack: 'b',
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          color: '#FFE88D'
        },
        data: [10, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 15, 15, 5]
      }
    ]
  }

  

	
	return (
		<Contents className='bi-reort-pdf-wrap' style={{width:'794px', left:'0', top:'0'}}>
      <div className='report-header'>
        <div className='report-title'><b>우리아이어린이집</b></div>
        <div className='logo'><img src='data:image/png;base64,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' alt='' /></div>
      </div>

      <div className='report-content'>
          <div className='section-box'>
            <h2 className='section-tit'>또래 점수 비교</h2>
            <div className='section-txt'>
                해당 아동은 인지 및 언어 발달이 또래보다 빠르고 우수하여 상황 이해력과 표현력이 뛰어난 편입니다. 반면, 대근육과 소근육 발달은 또래 평균에 비해 다소 낮아 신체 조절 능력과 정교한 동작 수행에서 미세한 지연이 관찰됩니다. 균형 있는 발달을 위한 신체 활동 자극이 필요합니다.
            </div>
            <div className='chart-box-area'>
              <div className='radar-chart-area'>
                <div className='chart'>
                  <ECharts
                    option={raderOptions}
                  />
                </div>
              </div>
              <div className='chart-item-detail'>
                <div className='range-gage-bar-unit'>
                  <div className='info'>
                    <span className='name'>대근육</span>
                    <span className='grade' style={{ color: '#FF5151' }}>45.8</span>
                  </div>
                  <div className='gage-bar-wrap'>
                    <div className='gage-bar'>
                      <div className='gage' style={{ left: '45.8%', right: '20%' }}>
                        <span className='bar'></span>
                      </div>
                    </div>
                      <i style={{ left: '30%' }}></i>
                  </div>
                </div>
                <div className='range-gage-bar-unit'>
                  <div className='info'>
                    <span className='name'>소근육</span>
                    <span className='grade'>62.5</span>
                  </div>
                  <div className='gage-bar-wrap'>
                    <div className='gage-bar'>
                      <div className='gage' style={{ left: '30%', right: '20%' }}>
                        <span className='bar'></span>
                      </div>
                    </div>
                    <div className='gage-index'><i style={{ left: '80%' }}></i></div>
                  </div>
                </div>
                <div className='range-gage-bar-unit'>
                  <div className='info'>
                    <span className='name'>인지</span>
                    <span className='grade'>62.5</span>
                  </div>
                  <div className='gage-bar-wrap'>
                    <div className='gage-bar'>
                      <div className='gage' style={{ left: '30%', right: '0' }}>
                        <span className='bar'></span>
                      </div>
                    </div>
                    <div className='gage-index'><i style={{ left: '100%' }}></i></div>
                  </div>
                </div>
                <div className='range-gage-bar-unit'>
                  <div className='info'>
                    <span className='name'>언어</span>
                    <span className='grade'>62.5</span>
                  </div>
                  <div className='gage-bar-wrap'>
                    <div className='gage-bar'>
                      <div className='gage' style={{ left: '30%', right: '20%' }}>
                        <span className='bar'></span>
                      </div>
                    </div>
                    <div className='gage-index'><i style={{ left: '80%' }}></i></div>
                  </div>
                </div>
                <div className='range-gage-bar-unit'>
                  <div className='info'>
                    <span className='name'>사회성</span>
                    <span className='grade'>62.5</span>
                  </div>
                  <div className='gage-bar-wrap'>
                    <div className='gage-bar'>
                      <div className='gage' style={{ left: '30%', right: '20%' }}>
                        <span className='bar'></span>
                      </div>
                    </div>
                    <div className='gage-index'><i style={{ left: '80%' }}></i></div>
                  </div>
                </div>
                <div className='range-gage-bar-unit'>
                  <div className='info'>
                    <span className='name'>자립</span>
                    <span className='grade'>62.5</span>
                  </div>
                  <div className='gage-bar-wrap'>
                    <div className='gage-bar'>
                      <div className='gage' style={{ left: '30%', right: '20%' }}>
                        <span className='bar'></span>
                      </div>
                    </div>
                    <div className='gage-index'><i style={{ left: '80%' }}></i></div>
                  </div>
                </div>
              </div>
              <div className='chart-legend'>
                  <span className='item'>
                    <i className='rect' style={{background:'#4252E2'}}></i>
                    <span>아동 점수</span>
                  </span>
                  <span className='item'>
                    <i className='rect' style={{background:'#B1B3C2'}}></i>
                    <span>또래 범위</span>
                  </span>
              </div>
            </div>
          </div>

          <div className='section-box sectopm-development'>
            <h2 className='section-tit'>발달 추적</h2>
            <div className='section-txt'>초기에는 대근육과 소근육 발달이 또래와 비슷한 수준을 보였으나, 시간이 지나면서 신체 발달의 속도가 다소 늦어져 현재는 또래보다 낮은 수준으로 관찰됩니다. 반면 인지와 언어 능력은 또래보다 빠르게 향상되어 상황을 이해하고 표현하는 능력이 뛰어납니다. 전반적인 발달의 균형을 맞추기 위해서는 신체 활동 기회를 늘리고, 대·소근육을 자극하는 놀이와 과제를 지속적으로 제공하는 것이 바람직합니다.</div>
            <div className='chart-area development-chart-area'>
              <div className='chart'>
                <ECharts
                  option={barOptions}
                />
              </div>
              <div className='chart-legend'>
                <span className='item'>
                  <i className='rect' style={{ background: '#4252E2' }}></i>
                  <span>대근육</span>
                </span>
                <span className='item'>
                  <i className='rect' style={{ background: '#3FAEEC' }}></i>
                  <span>소근육</span>
                </span>
                <span className='item'>
                  <i className='rect' style={{ background: '#2CDDDD' }}></i>
                  <span>인지</span>
                </span>
                <span className='item'>
                  <i className='rect' style={{ background: '#F25D5D' }}></i>
                  <span>언어</span>
                </span>
                <span className='item'>
                  <i className='rect' style={{ background: '#F7A63F' }}></i>
                  <span>사회성</span>
                </span>
                <span className='item'>
                  <i className='rect' style={{ background: '#F9DD6D' }}></i>
                  <span>자조</span>
                </span>
              </div>

            </div>
            <div className='no-data'><p className='txt'>선생님과 부모님의 마음으로<br />우리아이를 안전하게 지키겠습니다.</p></div>
          </div>   
       

      </div>
		</Contents>
	)
}

export default _
