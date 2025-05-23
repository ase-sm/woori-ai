import { UploadFile, Icon, Button } from '@/entities'
import UploadInfo from './uploadinfo.style'

const _ = ({ file, max, onChange, txt, noti }: any) => {
	return (
		<UploadInfo className='hold-wrap'>
			<Button as='a' to={'/file.zip'} className="btn-file-download">
				<span><em>{txt} 정보 파일 양식</em> 다운받기</span>
				<Button className='btn-download'>
					<Icon type='download'></Icon>
				</Button>
			</Button>
			<div className='visual-down-excel'>
				<i></i>
				<div className='txt'>
					보육통합 사이트의 <em>{txt} 정보 엑셀 파일</em>을
					<br />
					다운받아 등록해주세요.
				</div>
			</div>
			<UploadFile file={file} max={max} placeholder='파일을 등록해주세요.' onChange={onChange} accept={`.xlsx, .xls, .csv`} />
			{noti ? <p className='caution-noti'>{noti}</p> : null}
		</UploadInfo>
	)
}

export default _
