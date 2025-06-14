import { Icon, Img } from '@/entities'
import { LineChart} from '@/features'
import { useState } from 'react'

import Contents from './pdf.style'

const _ = () => {

	const [chartOption1, setChartOption1] = useState({
		label: ['1주', '2주', '3주', '4주', '5주'],
		series: [{
				name:'활동성',
				type:'type1',
				data :[2, 3, 4, 1, 1],
			},
			{
				name:'사회성',
				type:'type2',
				data :[3, null, 2, 3, 2],
			}
		]
	});	

	const [chartOption2, setChartOption2] = useState({
		label: ['1주', '2주', '3주', '4주', '5주'],
		series: [{
				name:'안전 사고 발생 가능 행동 수',
				type:'type3',
				data :[2, 3, 4, 1, 1],
			}
		]
	});	
  

	return (
		<Contents className='bi-reort-pdf-wrap' style={{width:'794px', left:'0', top:'0'}}>
      <div className='report-header'>
        <div className='report-title'><b>우리아이어린이집</b><span className='bar'></span><span className='txt'>AI 관찰 일지</span></div>
        <div className='logo'><img src='data:image/png;base64,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' alt='' /></div>
        <div className='report-info'>
          <div className='date'>2025.01.03 - 2025.03.31</div>
          <div className='child-info'>
            <div className='child'>딸기반 <em>이동욱</em></div>
            <span className='bar'></span>
            <div className='teacher'>이원영 선생님</div>
          </div>
        </div>
      </div>

      <div className='report-content'>
          
        <div className='character-summary'>
          <div className='summary'>
            <span>어린이집에서 <em>105시간</em>을 함께 하면서</span>
            <span>총 <em>14명</em>의 친구들과 어울렸고 <em>미술 놀이</em>를 가장 많이 했어요.</span>
          </div>
          <div className='summary-box'>
            <div className='character-wrap'>
              <div className='text'>
                오늘은 재기발랄한  <b>토끼</b> 같았어요
              </div>
              <div className="character">
                <Img src='/images/ico-character-rabbit.svg' alt='' />
                {/* <Img src='/images/ico-character-koala.svg' alt='' />
                <Img src='/images/ico-character-sloth.svg' alt='' />
                <Img src='/images/ico-character-beaver.svg' alt='' />
                <Img src='/images/ico-character-alpaca.svg' alt='' />
                <Img src='/images/ico-character-dolphin.svg' alt='' /> */}
              </div>
            </div>
            <div className='summary-list'>
              <ul>
                <li>
                  <Icon type='toy' /><span>놀이 활동에 적극적으로 참여하고 여러 활동에 관심이 많아요.</span>
                </li>
                <li>
                  <Icon type='friend' /><span>친구들과 두루두루 친하고 친구와 함께할 때 더욱 활발해져요.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className='section-box-wrap'>
          <div className='section-box'>
            <h2 className='section-tit'>기간별 관찰추이</h2>
            <div className='chart-area'>
              <div className='chart'>
                <LineChart option={chartOption1}  />
              </div>
            </div>
            <div className='data-table'>
              <table>
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>1주</th>
                      <th>2주</th>
                      <th>3주</th>
                      <th>4주</th>
                      <th>5주</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>활동성</td>
                      <td><b>42.5</b></td>
                      <td><b>52.0</b></td>
                      <td><b>39.7</b></td>
                      <td><b>39.7</b></td>
                      <td><b>39.7</b></td>
                    </tr>
                    <tr>
                      <td>사회성</td>
                      <td><b>42.5</b></td>
                      <td><b>52.0</b></td>
                      <td><b>39.7</b></td>
                      <td><b>39.7</b></td>
                      <td><b>39.7</b></td>
                    </tr>
                  </tbody>
              </table>
            </div>
            <div className='list-dot-wrap'>
              <div className='list-dot'>
                <p className='dot'>활동성이 2월에 급격히 증가하였다가 3월에 급격히 감소하였습니다.</p>
                <p className='dot'>사회성이 2월에 약간 줄었다가 3월에 다시 증가하였습니다.</p>
              </div>
            </div>
          </div>
          <div className='section-box'>
            <h2 className='section-tit'>안전강화 월별 관찰 추이</h2>
            <div className='noti-box'>
              <p>우리아이AI는 선생님과 함께 우리 아이의 안전을 지키고 있습니다.          </p>
            </div>
            <div className='chart-area'>
              <div className='chart'>
                <LineChart option={chartOption2}  />
              </div>
            </div>
            <div className='list-dot-wrap'>
              <div className='list-dot'>
                <p className='dot'>안전 추적을 시작한 일자를 기준으로, 안전 사고 발생 가능 행동이 24.7% 줄었습니다. </p>
              </div>
            </div>
            
            <div className='no-data'>
              <p className="txt">선생님과 부모님의 마음으로
                <br />우리아이를 안전하게 지키겠습니다.</p>
            </div>
          </div>
        </div>

      </div>
		</Contents>
	)
}

export default _
