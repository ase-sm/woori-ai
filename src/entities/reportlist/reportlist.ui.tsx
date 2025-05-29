import Button from '../button'
import Icon from '../icon'
import Checkbox from '../checkbox'
import { ReportList } from './reportlist.style'
import { useState } from 'react'

const _ = ({report}: any) => {


	let reportList = [...report]

	// 단일선택
	const [checkItems, setCheckItems] = useState<number[]>([])

	console.log(checkItems);

	const handleSingleCheck = (checked: boolean, id: number): void => {
		if (checked) {
			setCheckItems(prev => [...prev, id])
		} else {
			setCheckItems(prev => prev.filter(el => el !== id))
		}
	}
	// 전체 선택
	const handleAllCheck = (checked: boolean): void => {
		if (checked) {
			const idArray: any[] = []
			report.forEach((item: any) => idArray.push(item.id))
			setCheckItems(idArray)
		} else {
			setCheckItems([])
		}
	}

	return (
		<ReportList className='report-list-comp'>
			<div className='menus'>
					<div className='left'>
						{checkItems.length !== reportList.length ? (
							<Button
								className='btn-total'
								onClick={() => {
									handleAllCheck(true)
								}}
							>
								전체
							</Button>
						) : (
							<Button
								onClick={() => {
									handleAllCheck(false)
								}}
								className='btn-total on'
							>
								전체
							</Button>
						)}
					</div>
					<div className='right'>
						<Button className={`btn btn-download ` + (checkItems.length > 0 ? 'on' : '')} disabled={checkItems.length <= 0}>다운로드</Button>
						<span className="bar"></span>
						<Button className={`btn btn-delete ` + (checkItems.length > 0 ? 'on' : '')} disabled={checkItems.length <= 0}>삭제</Button>
					</div>
				</div>
			
			<div className='report-list'>
				<ul>
          {report.map((item: any) => (
            <li key={item.id}>
              	<Checkbox name={`check-img`} onChange={(e: any) => handleSingleCheck(e, item.id)} checked={checkItems.includes(item.id) ? true : false}></Checkbox>
							<span className="icon">
									<Icon type='list' />
								</span>
              <div className="text">
                <div className="period">{item.period}</div>
								 <div className="date">{item.date}</div>
              </div>
            </li>
          ))}
        </ul>
			</div>
		</ReportList>
	)
}

export default _
