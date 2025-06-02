import * as echarts from 'echarts/core';
import ECharts from 'echarts-for-react';

import Contents from './pdf.style'

const _ = () => {

const data = [
    {
      data1:[10, 18, 16, 15, 14, 10, 12, 10, 9, 8, 7, 6, 5, 5],
      data2:[6, 14, 8, 10, 8, 6, 8, 6, 5, 4, 3, 2, 1, 1],
      data3:[8, 15, 14, 10, 12, 8, 10, 8, 7, 6, 5, 4, 3, 3],
      color:'#6370E3'
    },
    {
      data1:[10, 18, 16, 15, 14, 10, 12, 10, 9, 8, 7, 6, 5, 5],
      data2:[6, 14, 8, 10, 8, 6, 8, 6, 5, 4, 3, 2, 1, 1],
      data3:[8, 15, 14, 10, 12, 8, 10, 8, 7, 6, 5, 4, 3, 3],
      color:'#3FAEEC'
    },
    {
      data1:[10, 18, 16, 15, 14, 10, 12, 10, 9, 8, 7, 6, 5, 5],
      data2:[6, 14, 8, 10, 8, 6, 8, 6, 5, 4, 3, 2, 1, 1],
      data3:[8, 15, 14, 10, 12, 8, 10, 8, 7, 6, 5, 4, 3, 3],
      color:'#33DDDD'
    },
    {
      data1:[10, 18, 16, 15, 14, 10, 12, 10, 9, 8, 7, 6, 5, 5],
      data2:[6, 14, 8, 10, 8, 6, 8, 6, 5, 4, 3, 2, 1, 1],
      data3:[8, 15, 14, 10, 12, 8, 10, 8, 7, 6, 5, 4, 3, 3],
      color:'#F74D5A'
    },
    {
      data1:[10, 18, 16, 15, 14, 10, 12, 10, 9, 8, 7, 6, 5, 5],
      data2:[6, 14, 8, 10, 8, 6, 8, 6, 5, 4, 3, 2, 1, 1],
      data3:[8, 15, 14, 10, 12, 8, 10, 8, 7, 6, 5, 4, 3, 3],
      color:'#FFA851'
    },
    {
      data1:[10, 18, 16, 15, 14, 10, 12, 10, 9, 8, 7, 6, 5, 5],
      data2:[6, 14, 8, 10, 8, 6, 8, 6, 5, 4, 3, 2, 1, 1],
      data3:[8, 15, 14, 10, 12, 8, 10, 8, 7, 6, 5, 4, 3, 3],
      color:'#F5C059'
    }
  ]

 const getLineOptions = (data:any) => ({
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      top: '5%',
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
    boundaryGap: false,
    axisTick: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        color: '#BDC0D2'
      }
    },
    axisLine: {
      lineStyle: {
        type: 'dashed',
        color: '#BDC0D2'
      }
    },
    axisLabel: {
      margin: 12,
      color: '#60637B',
      fontSize: 13.5,
      fontFamily: 'Montserrat, Pretendard, Sans-serif'
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        color: '#ECEEF5'
      }
    },
    axisLabel: {
      show: false
    }
  },

  series:[
  {
      name: '대근육',
      type: 'line',
      stack: 'b',
      itemStyle: {
        color: data.color,
      },
       symbolSize: 7, 
      data: data.data1
    },
    {
      type: 'line',
      stack: 'Total',
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        color: '#3FAEEC'
      },
      lineStyle: {
        color: 'transparent'
      },
      showSymbol: false,
      data: data.data2
    },
    {
      type: 'line',
      stack: 'Total',
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        color: '#33DDDD'
      },
      lineStyle: {
        color: 'transparent'
      },
      showSymbol: false,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(160, 164, 190, 0.13)' },
          { offset: 1, color: 'rgba(160, 164, 190, 0.20)' }
        ])
      },
      data: data.data2
    }    
  ]
  
});


	
	return (
		<Contents className='bi-reort-pdf-wrap' style={{width:'794px', left:'0', top:'0'}}>
      <div className='report-header'>
        <div className='report-title'><b>우리아이어린이집</b></div>
        <div className='logo'><img src='data:image/png;base64,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' alt='' /></div>
      </div>

      <div className='report-content'>
          <div className='section-box'>
            <h2 className='section-tit'>발달 추적 상세</h2>
            <div className='line-chart-area'>
              <h3 className='chart-tit lg'>대근육</h3>
              <div className='chart'>
                <ECharts
                  option={getLineOptions(data[0])}
                />
              </div>
              <div className='data-table'>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>4-5</th>
                    <th>6-7</th>
                    <th>8-9</th>
                    <th>10-11</th>
                    <th>12-13</th>
                    <th>14-15</th>
                    <th>16-17</th>
                    <th>18-19</th>
                    <th>20-21</th>
                    <th>22-23</th>
                    <th>24-26</th>
                    <th>27-29</th>
                    <th>30-32</th>
                    <th>33-35</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>대근육</th>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>73.2</td>
                    <td>97.5</td>
                    <td>82.4</td>
                    <td>76.1</td>
                    <td>83.1</td>
                    <td>81.9</td>
                    <td>99.2</td>
                    <td>98.8</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
            <div className='line-chart-area'>
              <h3 className='chart-tit lg'>소근육</h3>
              <div className='chart'>
                <ECharts
                  option={getLineOptions(data[1])}
                />
              </div>
              <div className='data-table'>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>4-5</th>
                    <th>6-7</th>
                    <th>8-9</th>
                    <th>10-11</th>
                    <th>12-13</th>
                    <th>14-15</th>
                    <th>16-17</th>
                    <th>18-19</th>
                    <th>20-21</th>
                    <th>22-23</th>
                    <th>24-26</th>
                    <th>27-29</th>
                    <th>30-32</th>
                    <th>33-35</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>소근육</th>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>73.2</td>
                    <td>97.5</td>
                    <td>82.4</td>
                    <td>76.1</td>
                    <td>83.1</td>
                    <td>81.9</td>
                    <td>99.2</td>
                    <td>98.8</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
            <div className='line-chart-area'>
              <h3 className='chart-tit lg'>인지</h3>
              <div className='chart'>
                <ECharts
                  option={getLineOptions(data[2])}
                />
              </div>
              <div className='data-table'>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>4-5</th>
                    <th>6-7</th>
                    <th>8-9</th>
                    <th>10-11</th>
                    <th>12-13</th>
                    <th>14-15</th>
                    <th>16-17</th>
                    <th>18-19</th>
                    <th>20-21</th>
                    <th>22-23</th>
                    <th>24-26</th>
                    <th>27-29</th>
                    <th>30-32</th>
                    <th>33-35</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>인지</th>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>73.2</td>
                    <td>97.5</td>
                    <td>82.4</td>
                    <td>76.1</td>
                    <td>83.1</td>
                    <td>81.9</td>
                    <td>99.2</td>
                    <td>98.8</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
            <div className='line-chart-area'>
              <h3 className='chart-tit lg'>언어</h3>
              <div className='chart'>
                <ECharts
                  option={getLineOptions(data[4])}
                />
              </div>
              <div className='data-table'>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>4-5</th>
                    <th>6-7</th>
                    <th>8-9</th>
                    <th>10-11</th>
                    <th>12-13</th>
                    <th>14-15</th>
                    <th>16-17</th>
                    <th>18-19</th>
                    <th>20-21</th>
                    <th>22-23</th>
                    <th>24-26</th>
                    <th>27-29</th>
                    <th>30-32</th>
                    <th>33-35</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>언어</th>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>73.2</td>
                    <td>97.5</td>
                    <td>82.4</td>
                    <td>76.1</td>
                    <td>83.1</td>
                    <td>81.9</td>
                    <td>99.2</td>
                    <td>98.8</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
            <div className='line-chart-area'>
              <h3 className='chart-tit lg'>사회성</h3>
              <div className='chart'>
                <ECharts
                  option={getLineOptions(data[5])}
                />
              </div>
              <div className='data-table'>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>4-5</th>
                    <th>6-7</th>
                    <th>8-9</th>
                    <th>10-11</th>
                    <th>12-13</th>
                    <th>14-15</th>
                    <th>16-17</th>
                    <th>18-19</th>
                    <th>20-21</th>
                    <th>22-23</th>
                    <th>24-26</th>
                    <th>27-29</th>
                    <th>30-32</th>
                    <th>33-35</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>사회성</th>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>73.2</td>
                    <td>97.5</td>
                    <td>82.4</td>
                    <td>76.1</td>
                    <td>83.1</td>
                    <td>81.9</td>
                    <td>99.2</td>
                    <td>98.8</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
            <div className='line-chart-area'>
              <h3 className='chart-tit lg'>자립</h3>
              <div className='chart'>
                <ECharts
                  option={getLineOptions(data[3])}
                />
              </div>
              <div className='data-table'>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>4-5</th>
                    <th>6-7</th>
                    <th>8-9</th>
                    <th>10-11</th>
                    <th>12-13</th>
                    <th>14-15</th>
                    <th>16-17</th>
                    <th>18-19</th>
                    <th>20-21</th>
                    <th>22-23</th>
                    <th>24-26</th>
                    <th>27-29</th>
                    <th>30-32</th>
                    <th>33-35</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>자립</th>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>100</td>
                    <td>73.2</td>
                    <td>97.5</td>
                    <td>82.4</td>
                    <td>76.1</td>
                    <td>83.1</td>
                    <td>81.9</td>
                    <td>99.2</td>
                    <td>98.8</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>          

      </div>
		</Contents>
	)
}

export default _
