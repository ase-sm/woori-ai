import { Button, Icon, Img } from '@/entities'
import { globalStore } from '@/shared'
import { MenuBar } from '@/widgets'
import { useEffect } from 'react'
import Contents from './home.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'main',
			title: '',
			menu: true,
		})
	}, [])

	return (
		<>
			<Contents>
				<div className='main-notice-area'>
					<div className="bg"><Img src='/images/bg-main-visual.jpg' /></div>
					<div className="conts">
						<div className="name">을지로푸르니하나금융어린이집</div>
						<div className='user-desc'>
							<div className='img'>
								<Img src={'/images/temp/temp-profile.png'} alt='' />
							</div>
							<div className='desc'>
								<span>안녕하세요. </span>
								<b>
									<em>이미숙원장</em>
									<span>님</span>
								</b>
							</div>
						</div>
						<div className='noti-alarm'>
							<i></i>
							<div className='txt'>안심하세요. 우리 AI가 함께하고 있어요</div>
						</div>
					</div>
				</div>
				<div className="main-content">
					<h3>우리아이 <em>AI</em> </h3>
					<ul className="main-menu">
						<li>
							<Button className='menu'><b>알림장</b>
								<Icon type='3d-alarmnote' />
							</Button>
						</li>
						<li>
							<Button className='menu'><b>앨범</b>
								<Icon type='3d-album' />
							</Button>
						</li>
						<li>
							<Button className='menu'><b>사진관리</b>
								<Icon type='3d-photo' />
							</Button>
						</li>
						<li>
							<Button className='menu'><b>BI 리포트</b>
								<Icon type='3d-report' />
							</Button>
						</li>
						<li>
							<Button className='menu'><b>E-발달진단</b>
								<Icon type='3d-note' />
							</Button>
						</li>
					</ul>
					<ul className="main-sub-menu">
						<li>
							<Button className='menu'>
								<Icon type='3d-kindergarten' />
								<b>원 정보</b>
								<span className="view">보기</span>
							</Button>
						</li>
						<li>
							<Button className='menu'>
								<Icon type='3d-teacher' />
								<b>선생님 정보</b>
								<span className="view">보기</span>
							</Button>
						</li>
						<li>
							<Button className='menu'>
								<Icon type='3d-class' />
								<b>반 정보</b>
								<span className="view">보기</span>
							</Button>
						</li>
						<li>
							<Button className='menu'>
								<Icon type='3d-child' />
								<b>원아 정보</b>
								<span className="view">보기</span>
							</Button>
						</li>
						<li>
							<Button className='menu'>
								<Icon type='3d-notice' />
								<b>공지</b>
								<span className="view">보기</span>
							</Button>
						</li>
					</ul>
				</div>
			</Contents>

			<MenuBar menu='home' />
		</>
	)
}

export default _
