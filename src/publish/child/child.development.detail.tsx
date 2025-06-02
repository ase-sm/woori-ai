import { Button, useToast, Popup, Img, Icon } from '@/entities'
import { globalStore } from '@/shared'
import { Footer } from '@/widgets'
import { useEffect, useState } from 'react'
import Contents from './child.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: 'E-발달진단',
			back: true,
			menu: true,
		})
	}, [])

	const { toast } = useToast()

	//속성정보 설정  팝업
	const [popProperty, setPopProperty] = useState(true);
	
	const questions = [
		'계단의 가장 낮은 층에서 양발을 모아 바닥으로 뛰어 내린다.',
		'계단의 가장 낮은 층에서 양발을 모아 바닥으로 뛰어 내린다. 계단의 가장 낮은 층에서 양발을 모아 바닥으로 뛰어 내린다.',
	];	
	const options = ['잘 할 수 있음', '할 수 있는 편', '하지 못하는 편', '전혀 하지 못함'];
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const handleSelect = (questionIndex:any, optionIndex:any) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

	  const completedCount = answers.filter((a) => a !== null).length;
		console.log(completedCount);

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

					 <div className='develop-q-list'>
						<div className="month-info">
							<span className="icon"><Icon type='3d-note' /></span>
							<div className="desc">
								<b className="month">30~32개월</b>
								<div className="info">
									<span>전체 문항 수</span>
									<em>48</em>
								</div>
							</div>
						</div>
						<div className="title-wrap">
							<h3 className="tit">대근육 운동</h3>
							<div className="info">
								문항 수 <span className="num"><em>{completedCount}</em>/{questions.length}</span>
							</div>
						</div>
						<ul>
							{questions.map((question, qIdx) => (
								<li key={qIdx}>
									<div className='box'>
										<div className="q-txt">
											<i>{qIdx + 1}.</i>
											<span>{question}</span>
										</div>
										<ul className="item">
											{options.map((option, oIdx) => (
												<li key={oIdx}>
													<Button
														className={answers[qIdx] === oIdx ? 'on' : ''}
														onClick={() => handleSelect(qIdx, oIdx)}
													>
														{option}
													</Button>
												</li>
											))}
										</ul>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className='btn-wrap'>
						<Button className='btn-type2 st1' onClick={() => {completedCount === answers.length ? setPopProperty(true) : toast('답변을 선택하지 않은 문항이 있습니다.')}}>
							<span>진단서 제출하기</span>
						</Button>
					</div>
				</div>
			</Contents>

			<Popup
				open={popProperty}
				close={() => {
					setPopProperty(false)
				}}
			>
				<div className='pop-header'>
					<b className='title'>진단서를 제출하시겠습니까?</b>
				</div>
				<div className='pop-body'>
					<div className='text'>
					선택한 답변을 분석하여 결과지를 생성합니다.
					<br />다시 한 번 답변을 확인해 주세요.
					</div>
				</div>
				<div className='pop-footer'>
					<div className='btn-wrap'>
						<Button
							className='btn-type1 st4'
							onClick={() => {
								setPopProperty(false)
							}}
						>
							<span>취소</span>
						</Button>
						<Button
							className='btn-type1 st1'
							onClick={() => {
								setPopProperty(false)
							}}
						>
							<span>제출</span>
						</Button>
					</div>
				</div>
			</Popup>			

			<Footer className='full-btn'>
				<Button className='btn-type1 st1'>
					<span>다음</span>
				</Button>
			</Footer>		
		</>
	)
}

export default _
