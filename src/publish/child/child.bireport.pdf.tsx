import { PdfReport, PdfReport2, PdfReport3, PdfReport4, PdfReport5, PdfReport6 } from './pdf'

import { globalStore } from '@/shared'
import { useEffect } from 'react'

import Contents from './pdf/pdf.style'

const _ = () => {
	const { setHeader } = globalStore()
	useEffect(() => {
		setHeader({
			type: 'sub',
			title: 'BI 리포트',
			back: true,
		})
	}, [])

	return (
		<Contents>

			<div className="pdf-frame" style={{position: 'absolute',  top:0, left:0, bottom:0, right:0}}>
				<div className="pdf-menu">
					<div className="left">
						<button className="btn-down-load"></button>
						<div className="paging">
							<button className="btn-prev"></button>
							<div className="page"><em>1</em>/4</div>
							<button className="btn-next"></button>
						</div>
					</div>
					<div className="right">
						<select name="" id="">
								<option value="">50%</option>
								<option value="">70%</option>
						</select>
						<button className="btn-pdf-close"></button>
					</div>
				</div>
				<div className="pdf-contet" style={{overflow:'auto'}}>
					<PdfReport />
					<PdfReport2 />
					<PdfReport3 />
					<PdfReport4 />
					<PdfReport5 />
					<PdfReport6 />
				</div>
			</div>
			
		</Contents>
	)
}

export default _
