import { Img } from '@/entities'
import { BarChart, GageBarChart, ThumbChart } from '@/features'
import { useState } from 'react'

import Contents from './pdf.style'

const _ = () => {

	const [chartOption3, setChartOption3] = useState({
		label: ['1월', '2월', '3월'],
		series: [{
				name:'미술',
				data :[30, 50, 30],
				color: '#6b74ff'
			},
			{
				name:'역할놀이',
				data: [20, 30, 20],
				color: '#1ddbd9'
			},
			{
				name:'과학',
				data: [25, 20, 40],
				color: '#f6c25a'
			},{
				name:'미술',
				data :[30, 50, 30],
				color: '#E61356'
			},
			{
				name:'역할놀이',
				data: [20, 30, 20],
				color: '#F77F16'
			},
			{
				name:'과학',
				data: [25, 20, 40],
				color: '#06C289'
			},{
				name:'미술',
				data :[30, 50, 30],
				color: '#7F30B7'
			},
			{
				name:'역할놀이',
				data: [20, 30, 20],
				color: '#0DBEF4'
			},
			{
				name:'과학',
				data: [25, 20, 40],
				color: '#DC4D9E'
			},
			{
				name:'과학',
				data: [25, 20, 40],
				color: '#62C91F'
			},
		]
	});	

	const [preferenceOption, setPreferenceOption] = useState([
		{title:'미술', value:45.8, time:42, bg:'linear-gradient(90deg, rgba(66, 82, 226, 0.6) 0%, #4252E2 100%)', tagBg:'#4252E2'},
		{title:'역할놀이', value:30, time:17, bg:'linear-gradient(90deg, rgba(0, 212, 212, 0.6) 0%, #00D4D4 100%)', tagBg:'#09D5D5'},
		{title:'쌓기', value:60, time:15, bg:'linear-gradient(90deg, rgba(249, 183, 54, 0.6) 0%, #F9B736 100%)', tagBg:'#F8BA42'},
		// {title:'쌓기', value:60, time:15, bg:'linear-gradient(90deg, rgba(230, 19, 86, 0.6) 0%, #E61356 100%)', tagBg:'#E61356'},
		// {title:'쌓기', value:60, time:15, bg:'linear-gradient(90deg, rgba(247, 127, 22, 0.6) 0%, #F77F16 100%)', tagBg:'#F77F16'},
		// {title:'쌓기', value:60, time:15, bg:'linear-gradient(90deg, rgba(6, 194, 137, 0.6) 0%, #06C289 100%)', tagBg:'#06C289'},
		// {title:'쌓기', value:60, time:15, bg:'linear-gradient(90deg, rgba(127, 48, 183, 0.6) 0%, #7F30B7 100%)', tagBg:'#7F30B7'},
		// {title:'쌓기', value:60, time:15, bg:'linear-gradient(90deg, rgba(13, 190, 244, 0.6) 0%, #0DBEF4 100%)', tagBg:'#0DBEF4'},
		// {title:'쌓기', value:60, time:15, bg:'linear-gradient(90deg, rgba(220, 77, 158, 0.6) 0%, #DC4D9E 100%)', tagBg:'#DC4D9E'},
		// {title:'쌓기', value:60, time:15, bg:'linear-gradient(90deg, rgba(98, 201, 31, 0.6) 0%, #62C91F 100%)', tagBg:'#62C91F'},		
	]);	

	const [relationshipOption, setRelationshipOption] = useState([
		{name:'이선화', value:45.8, src:'https://img.hankyung.com/photo/201902/BD.18938279.1.jpg'},
		{name:'김연우', value:40.5, src:'https://img.hankyung.com/photo/201902/BD.18938279.1.jpg'},
		{name:'윤소윤', value:38.4, src:'https://img.hankyung.com/photo/201902/BD.18938279.1.jpg'},
		{name:'이시우', value:30.8, src:'https://img.hankyung.com/photo/201902/BD.18938279.1.jpg'},
		{name:'이지호', value:28.6, src:'https://img.hankyung.com/photo/201902/BD.18938279.1.jpg'},
		{name:'김연아', value:25.3, src:'https://img.hankyung.com/photo/201902/BD.18938279.1.jpg'},
		{name:'이단비', value:12.4, src:'https://img.hankyung.com/photo/201902/BD.18938279.1.jpg'},
	]);	


	return (
		<Contents className='bi-reort-pdf-wrap' style={{width:'794px', left:'0', top:'0'}}>

  <div className="report-header">
    <div className="report-title"><b>우리아이어린이집</b></div>
    <div className="logo"><img src="data:image/png;base64,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" alt="" /></div>
  </div>

  <div className="report-content">
    <div className="section-box-wrap">
      <div className="section-box">
        <h2 className="section-tit">놀이</h2>
        <div className="noti-box min-h">
          <p>총 놀이 시간 98시간 중 <em>42시간</em>을 <em>미술</em>에 보냈습니다.  놀이 선호도는 <em>미술, 역할놀이, 쌓기</em> 순입니다.</p>
        </div>
        <div className="chart-area">
          <h3 className="chart-tit">선호도</h3>
          <GageBarChart options={preferenceOption} />
        </div>
        <div className="chart-area">
          <h3 className="chart-tit">월별추이</h3>
          <div className="chart-area">
            <BarChart option={ chartOption3 } />
            
          </div>
        </div>
          
      </div>
      <div className="section-box">
        <h2 className="section-tit">교우관계</h2>
        <div className="noti-box min-h">
          <p>
            어린이집에서 20%이상의 교차 관계가 있었던 아동의 수는 <em>5명</em>이며,  <em>이선화, 김연우, 윤소윤</em> 원아와 가장 많은 시간을 보냈습니다.               
          </p>
        </div>
        <div className="chart-area">
          <h3 className="chart-tit">상호 작용 원아</h3>
          <ThumbChart options={relationshipOption} />
        </div>
        <div className='no-data'>
            <p className="txt">선생님과 부모님의 마음으로
              <br />우리아이를 안전하게 지키겠습니다.</p>
          </div>
      </div>
    </div>
      
    <div className="section-box">
      <h2 className="section-tit">우리아이 하이라이트</h2>
        
      <div className='photo-desc-list'>
        <ul>
          <li>
                <div className='img'><Img src={'/images/temp/temp-album.jpg'} alt='' /></div>
                <div className='txt'>줄을 맞추어 팀끼리 시합을 하였는데 적극적으로 활동했어요.</div>
                <div className='date'>2025.01.05</div>
              </li>
              <li>
                <div className='img'><Img src={'/images/temp/temp-album.jpg'} alt='' /></div>
                <div className='txt'>줄을 맞추어 팀끼리 시합을 하였는데 적극적으로 활동했어요.</div>
                <div className='date'>2025.01.05</div>
              </li>
              <li>
                <div className='img'><Img src={'/images/temp/temp-album.jpg'} alt='' /></div>
                <div className='txt'>줄을 맞추어 팀끼리 시합을 하였는데 적극적으로 활동했어요.</div>
                <div className='date'>2025.01.05</div>
              </li>
              <li>
                <div className='img'><Img src={'/images/temp/temp-album.jpg'} alt='' /></div>
                <div className='txt'>줄을 맞추어 팀끼리 시합을 하였는데 적극적으로 활동했어요.</div>
                <div className='date'>2025.01.05</div>
              </li>
              <li>
                <div className='img'><Img src={'/images/temp/temp-album.jpg'} alt='' /></div>
                <div className='txt'>줄을 맞추어 팀끼리 시합을 하였는데 적극적으로 활동했어요.</div>
                <div className='date'>2025.01.05</div>
              </li>
              <li>
                <div className='img'><Img src={'/images/temp/temp-album.jpg'} alt='' /></div>
                <div className='txt'>줄을 맞추어 팀끼리 시합을 하였는데 적극적으로 활동했어요.</div>
                <div className='date'>2025.01.05</div>
              </li>
              <li>
                <div className='img'><Img src={'/images/temp/temp-album.jpg'} alt='' /></div>
                <div className='txt'>줄을 맞추어 팀끼리 시합을 하였는데 적극적으로 활동했어요.</div>
                <div className='date'>2025.01.05</div>
              </li>
              <li>
                <div className='img'><Img src={'/images/temp/temp-album.jpg'} alt='' /></div>
                <div className='txt'>줄을 맞추어 팀끼리 시합을 하였는데 적극적으로 활동했어요.</div>
                <div className='date'>2025.01.05</div>
              </li>
        </ul>
      </div>
      <div className='no-data'>
            <p className="txt">선생님과 부모님의 마음으로
              <br />우리아이를 안전하게 지키겠습니다.</p>
          </div>
        
      
    </div>
      
      
  </div>

    </Contents>
	)
}

export default _
