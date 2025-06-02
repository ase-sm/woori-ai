import { Img } from '@/entities'

import Contents from './pdf.style'

const _ = () => {

	return (
		<Contents className='bi-reort-pdf-wrap' style={{width:'794px', left:'0', top:'0'}}>
      <div className='report-header'>
        <div className='report-title'><b>우리아이어린이집</b><span className='bar'></span><span className='txt'>E-발달진단 결과지</span></div>
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
        <div className='profile-box'>
          <div className='thumb'><Img src={'/images/temp/temp-album.jpg'} alt='' /></div>
          <div className='desc'>
            <div className='info'>
              <div className='birth'>2022년 6월 1일생 <span className='age'>(33개월)</span></div>
              <div className='name'>이동욱</div>
            </div>
            <div className='result'>
              <b className='tit'>종합결과</b>
              <div className='text'>
                인지, 언어 발달이 또래에 비해 높은 편입니다.
                <br />소근육, 사회성, 자립 발달은 또래와 유사한 수준입니다.
                <br />대근육 발달은 또래보다 낮은 편입니다.
              </div>
            </div>
          </div>
        </div>
        
        <div className='section-box'>
          <div className='section-title'>
            <h2 className='section-tit lg'>발달 항목 검사 점수</h2>
            <div className='right'>
              <div className='list-dot lg'>
                <p className='dot'>검사지 선택 번호 : 잘 할 수 있음 <em className='c-primary'>(A)</em>, 할 수 있는 편 <em className='c-primary'>(B)</em>, 하지 못하는 편 <em className='c-primary'>(C)</em>, 전혀 하지 못함 <em className='c-primary'>(D)</em></p>
              </div>
            </div>
          </div>
          <div className='data-table lg'>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>총점</th>
                    <th>또래수준</th>
                    <th>01</th>
                    <th>02</th>
                    <th>03</th>
                    <th>04</th>
                    <th>05</th>
                    <th>06</th>
                    <th>07</th>
                    <th>08</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>대근육</th>
                    <td><b style={{color: '#FF0000'}}>100</b></td>
                    <td>75.0~95.8</td>
                    <td>(A)</td>
                    <td>(A)</td>
                    <td>(A)</td>
                    <td>(C)</td>
                    <td>(D)</td>
                    <td>(D)</td>
                    <td>(B)</td>
                    <td>(A)</td>
                  </tr>
                  <tr>
                    <th>소근육</th>
                    <td><b>62.5</b></td>
                    <td>62.5~91.7</td>
                    <td>(D)</td>
                    <td>(C)</td>
                    <td>(D)</td>
                    <td>(B)</td>
                    <td>(C)</td>
                    <td>(C)</td>
                    <td>(A)</td>
                    <td>(B)</td>
                  </tr>
                  <tr>
                    <th>인지</th>
                    <td><b style={{color: '#365acf'}}>100</b></td>
                    <td>80.0~95.8</td>
                    <td>(C)</td>
                    <td>(B)</td>
                    <td>(A)</td>
                    <td>(C)</td>
                    <td>(B)</td>
                    <td>(A)</td>
                    <td>(B)</td>
                    <td>(A)</td>
                  </tr>
                  <tr>
                    <th>언어</th>
                    <td><b style={{color: '#365acf'}}>100</b></td>
                    <td>75.0~95.8</td>
                    <td>(A)</td>
                    <td>(C)</td>
                    <td>(B)</td>
                    <td>(C)</td>
                    <td>(A)</td>
                    <td>(B)</td>
                    <td>(C)</td>
                    <td>(A)</td>
                  </tr>
                  <tr>
                    <th>사회성</th>
                    <td><b>75.0</b></td>
                    <td>75.0~95.8</td>
                    <td>(B)</td>
                    <td>(C)</td>
                    <td>(D)</td>
                    <td>(A)</td>
                    <td>(B)</td>
                    <td>(B)</td>
                    <td>(C)</td>
                    <td>(B)</td>
                  </tr>
                  <tr>
                    <th>자립</th>
                    <td><b>70.8</b></td>
                    <td>70.8~95.8</td>
                    <td>(D)</td>
                    <td>(B)</td>
                    <td>(A)</td>
                    <td>(C)</td>
                    <td>(D)</td>
                    <td>(C)</td>
                    <td>(B)</td>
                    <td>(B)</td>
                  </tr>
                </tbody>
              </table>
          </div>

          <div className='list-dot-wrap lg'>
            <h3 className='tit'>발달 항목별 정보</h3>
            <div className='list-dot'>
              <p className='dot'>대근육운동: 아이가 세상을 탐색하고 활동 범위를 넓히는 기반이 되며, 신체·인지·정서 발달에 중요한 영향을 줍니다.</p>
              <p className='dot'>소근육운동: 손을 스스로 조절해 원하는 대상을 탐색하고 다뤄보는 경험을 통해 지능 발달과 긴밀하게 연결됩니다.</p>
              <p className='dot'>인지: 감각 정보를 이해하고 기억하여 사고·추리·문제 해결에 활용하며, 이를 통해 환경에 대한 지식과 태도를 형성하는 과정입니다.</p>
              <p className='dot'>언어: 언어 발달은 사고의 범위를 넓히고 의사소통을 활발하게 하여, 사회적 관계 형성의 기초가 됩니다.</p>
              <p className='dot'>사회성: 타인과의 상호작용에 필요한 기술로, 사회가 기대하는 가치관과 행동을 배우고 형성하는 데 중요한 역할을 합니다.</p>
              <p className='dot'>자조: 환경에 적응하고 독립적인 생활을 하기 위한 기본 기술로, 자기 욕구를 조절하고 통제하는 힘과 깊이 연결되어 있습니다.</p>
            </div>
          </div>
        </div>        

            

      </div>
		</Contents>
	)
}

export default _
