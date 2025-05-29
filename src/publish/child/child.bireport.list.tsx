import { Img, Reportlist } from '@/entities'
import { globalStore } from '@/shared'
import { useEffect, useState } from 'react'
import Contents from './child.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: 'BI-리포트',
			back: true,
			menu: true,
		})
	}, [])

	
	const [report, setReport] = useState(
		[{
			id:'sdfsadfasdf',
			period: '2025.05.15~2025.05.27',
			date: '2024.03.06'
		}, {
			id:'fgfsgdgdfg',
			period: '2023.03.06~2023.04.06',
			date: '2024.03.06'
		}, {
			id:'55dfdsf',
			period: '2023.03.06~2023.04.06',
			date: '2024.03.06'
		}, {
			id:'668989df',
			period: '2023.03.06~2023.04.06',
			date: '2024.03.06'
		}]
	)

	return (
		<>
			<Contents>
				<div className='child-home-wrap'>
					<div className='page-top-area'>
						<div className="child-info-box">
							<div className='box'>
									<div className='thumb'>
										<Img src={'/images/temp/temp-profile.png'} alt='' />
									</div>
									<div className='desc'>
										<div className='info'>
											<span>풀입반</span>
											<b>홍길동</b>
										</div>
										<div className='parents'>학부모 : 소이현</div>
									</div>
								</div>
						</div>
					</div>


					<Reportlist type='st2' report={report} />
				</div>
			</Contents>
		</>
	)
}

export default _
