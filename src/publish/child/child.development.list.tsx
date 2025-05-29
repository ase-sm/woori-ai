import { Button, Img, Icon } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect } from 'react'
import Contents from './child.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: '원아 정보',
			back: true,
			menu: true,
		})
	}, [])


	const currrentAge= '36~41'

	//반선택 팝업
	const assessmentList =[
		{
			age: '4~5',
			status: true,
			period: '2024.05.05~2024.03.01',
			date: '2024.03.06',
			disabled: false
		},
		{
			age: '4~5',
			status: false,
			period: '2024.05.05~2024.03.01',
			date: null,
			disabled: false
		},
		{
			age: '8~9',
			status: true,
			period: '2024.05.05~2024.03.01',
			date: '2024.03.06',
			disabled: false
		},
		{
			age: '12~18',
			status: true,
			period: '2024.05.05~2024.03.01',
			date: '2024.03.06',
			disabled: false
		},
		{
			age: '36~41',
			status: false,
			period: '2024.05.05~2024.03.01',
			date: null,
			disabled: false
		},
		{
			age: '42~47',
			status: true,
			period: '2024.05.05~2024.03.01',
			date: null,
			disabled: true
		}
	]

	return (
		<>
			<Contents>
				<div className='child-home-wrap'>
					<div className='page-top-area'>
						<div className='child-info-box'>
							<div className='box'>
									<div className='thumb'>
										<Img src={'/images/temp/temp-profile.png'} alt='' />
									</div>
									<div className='desc'>
										<div className='info'>
											<span>풀입반</span>
											<b>홍길동</b>
										</div>
										<div className="child-months">
											<span>2023.10.02</span><em>(37개월)</em>
										</div>
										<div className='parents'>학부모 : 소이현</div>
									</div>
								</div>
						</div>
					</div>

					  <div className='assessment-list'>
							<ul>
								{assessmentList.map((item, index) => (
									<li key={index}>
										<div className={`box ${item.disabled ? 'disabled' : ''} ${item.age === currrentAge ? 'current' : ''}`}>
											<Button className='description'>
												<div className="desc">
													<div className='txt'>{item.age}개월</div>
													<div className="period">{item.period}</div>
													<div className='date'>
														{item.disabled ? '작성일 : 해당 월령 전입니다.' : 
															item.date ? `작성일 : ${item.date}` : '작성일 : 미작성'}
													</div>
												</div>
												{!item.status ? <div className="right"> <div className='tag'>작성하기</div> </div> : null }
											</Button>
											{item.status && !item.disabled ? 
												<div className='menu'>
														<Button className='btn-download'>
															<Icon type='download-pdf' />
															<span>파일보기</span>
														</Button>
												</div>
											: null}
										</div>
									</li>
								))}
								{/* 선생님 알람 */}
								<li>
									<div className={`box`}>
											<Button className='description'>
												<div className="desc">
													<div className='txt'>8~9개월</div>
													<div className="period">2024.05.05~2024.03.01</div>
													<div className='date'>작성일 : 미작성</div>
												</div>
											</Button>
											<div className='menu'>
													<Button className='btn-push-alarm'>
														<Icon type='push-alarm' />
														<span>푸시알림</span>
													</Button>
											</div>
										</div>
								</li>
							</ul>
						</div>
				</div>
			</Contents>
		</>
	)
}

export default _
