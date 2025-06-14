import styled from '@emotion/styled'

export const Contents = styled.div`
	position:relative;


	.c-primary{ color:#4252E2;vertical-align:baseline;}
.bi-reort-pdf-wrap{background:#fff;}
.report-header {
	position: relative; padding: 25px 37px 12px; background: #F5F6FA; border-bottom: 1px solid #BDC0D2;

	.report-title {
		b { font-size: 23px; font-weight: 500; color: #000000; }
		.bar { display: inline-block; width: 1px; height: 14px; margin: 0 9px; background: #BDC0D2; }
		.txt { font-size: 16px; font-weight: 600; color: #878AA1; }
	}
	.logo {
		position: absolute; top: 28px; right: 37px; height: 30px;

		img { height: 100%; }
	}
	.report-info {
		margin-top: 23px; overflow: hidden;

		.date { float: left; font-weight: 500; font-size: 14px; color: #60637B; padding-top: 12px; }
		.child-info {
			float: right; display: inline-flex; align-items: center; height: 40px; padding: 7px 17px; background: #fff; border-radius: 12px; overflow: hidden;

			.child {
				font-weight: 600; color: #111111; font-size: 16px; vertical-align: middle;
				em { color: #4252E2; vertical-align: baseline; }
			}
			.bar { height: 15px; width: 1px; background: #000000; margin: 0 14px; vertical-align: middle; }
			.teacher { font-weight: 500; font-size: 12px; vertical-align: middle; color: #878AA1; }
		}
	}
}

.report-content{padding:35px 32px;}
.character-summary {
	.summary {
		padding: 9px 18px; background: #F5F6FA; border-radius: 12px; font-size: 13px; letter-spacing: -0.01em; color: #505050;

		span {
			em { color: #4252E2; font-weight: 500; vertical-align: baseline; }
		}
	}
	.character-wrap {
		margin-top: 0;
		.character{
				padding:20px 0;text-align:center;
			 img{width:auto !important;height:auto !important;}
		}
		.text {
			font-size: 21px; font-weight: 500; color: #383838; text-align: center; margin-bottom: 0;

			b { vertical-align: baseline; }
		}
	}
	[class*=ico-character] { margin: 17px auto; display: block; }
	.summary-box { margin-top: 23px; padding: 28px; border: 1px solid #ECEEF5; box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.04); border-radius: 12px; }
	.summary-list {
		margin-top: 0; color: #383838; font-size: 14px; text-align: center;

		ul { display: inline-block; }
		li {
			padding: 9px 0; overflow: hidden;

			& ~ li { border-top: 1px solid #ECEEF5; }
			[class*=ico] { float: left; position: relative; margin-right: 9px; }
			span { overflow: hidden; padding: 6px 0; display: block; text-align: left; }
			.ico-toy { width: 28px; height: 28px;}
			.ico-friend {	width: 28px; height: 28px;}
		}
	}
}


* + .section-box-wrap{margin-top:35px;}
.section-box-wrap {
	display:flex;overflow: hidden; position: relative; min-height: 345px;
	> .section-box{flex:1;overflow:hidden;display:flex;flex-direction: column;
	 	~ .section-box{border-left:1px solid #ECEEF5;}
		.no-data{flex:1;} 
	}
  + .section-box{margin-top:23px;}
	& > *:first-child { float: left; width: 50%; padding-right: 18px; }
	& > *:last-child { float: left; width: 50%; padding-left: 18px; }
}
.section-box {
	&.sectopm-development{margin-top:20px;}
	.section-title{display:flex;align-items:center;
		.right{margin-left:auto;}
	}
	.section-tit {
		font-size: 15px; font-weight: 700; color: #383838;
		&.lg{font-size:18px;}

		& + * { margin-top: 7px; }
	}
	.section-txt{
		font-size:12px;
		 color:#60637B;
	}

	.noti-box {
		display: table; width: 100%; background: #F5F6FA; border-radius: 12px; font-weight: 500; font-size: 12px; color: #505050;

		p { display: table-cell; padding: 9px 14px; vertical-align: middle; font-weight: 400; }
		&.min-h { min-height: 67px; }
		em {
			color: #4252E2; vertical-align: baseline;

			strong { font-weight: 700; vertical-align: baseline; }
		}
		& + * { margin-top: 23px; }
	}
}

.no-data {
	background:#F5F6FA;
	&:before{width:96px;height:50px;background: url("data:image/svg+xml,%3Csvg width='86' height='45' viewBox='0 0 86 45' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24.5004 43.5881H22.492L22.0747 44.6201H21.5005L23.223 40.4415H23.8023L25.5197 44.6201H24.9203L24.5029 43.5881H24.5004ZM24.3056 43.1024L23.4962 41.084L22.6817 43.1024H24.3056Z' fill='%23878AA1'/%3E%3Cpath d='M26.6221 44.6201H26.0732V40.4415H26.6221V44.6201Z' fill='%23878AA1'/%3E%3Cpath d='M30.2067 42.9077C29.3467 42.9077 28.813 42.3588 28.813 41.6127C28.813 40.8665 29.3442 40.3176 30.2067 40.3176C31.0692 40.3176 31.5953 40.8665 31.5953 41.6127C31.5953 42.3588 31.0692 42.9077 30.2067 42.9077ZM29.7059 44.2028H32.9713V44.6732H29.1772V43.2163H29.7033V44.2028H29.7059ZM30.2067 42.4701C30.7278 42.4701 31.0793 42.1413 31.0793 41.6152C31.0793 41.0891 30.7303 40.7552 30.2067 40.7552C29.6831 40.7552 29.329 41.0891 29.329 41.6152C29.329 42.1413 29.678 42.4701 30.2067 42.4701ZM33.4772 41.3319V41.8277H32.8525V43.5805H32.3365V40.2721H32.8525V41.3319H33.4772Z' fill='%23878AA1'/%3E%3Cpath d='M33.9243 42.9507V42.4752C34.6705 42.3715 35.1359 41.729 35.1814 40.8361H33.98V40.3884H36.823V40.8361H35.7025C35.6924 41.0764 35.6494 41.3066 35.5887 41.5191L36.9571 42.5359L36.6637 42.9128L35.4065 41.9567C35.103 42.5157 34.582 42.8799 33.9243 42.9482V42.9507ZM38.1257 44.2078V44.6732H34.238V43.2542H34.7641V44.2078H38.1257ZM37.5161 41.3268V40.2721H38.0321V43.5856H37.5161V41.7796H36.651V41.3268H37.5161Z' fill='%23878AA1'/%3E%3Cpath d='M38.9688 42.632V42.1843C40.2259 42.1792 41.015 41.7821 41.015 40.9727V40.8209H38.9688V40.3834H41.5361V40.8842C41.5361 42.1109 40.5142 42.632 38.9688 42.632ZM42.9551 43.7955C42.9551 44.4785 42.1153 44.7289 41.0454 44.7289C39.9755 44.7289 39.1357 44.4785 39.1357 43.7955C39.1357 43.1126 39.9805 42.8622 41.0454 42.8622C42.1103 42.8622 42.9551 43.1126 42.9551 43.7955ZM42.4062 43.7955C42.4062 43.4465 41.8067 43.2897 41.0454 43.2897C40.284 43.2897 39.6846 43.4465 39.6846 43.7955C39.6846 44.1446 40.2891 44.2964 41.0454 44.2964C41.8017 44.2964 42.4062 44.1497 42.4062 43.7955ZM43.5141 41.1852V41.6809H42.8893V42.7079H42.3733V40.2721H42.8893V41.1852H43.5141Z' fill='%23878AA1'/%3E%3Cpath d='M46.8747 41.2434H43.8521V40.7906H45.099V40.2265H45.6252V40.7906H46.8722V41.2434H46.8747ZM45.6226 44.0055C46.212 44.0004 46.7229 43.9473 47.0315 43.8082V44.2787C46.7508 44.4051 46.2019 44.4658 45.5771 44.4658H43.8748V44.0055H45.1066V43.3428C44.4743 43.2745 44.0848 42.9406 44.0848 42.4398C44.0848 41.8707 44.5856 41.5165 45.3748 41.5165C46.1639 41.5165 46.6648 41.8707 46.6648 42.4398C46.6648 42.9457 46.2676 43.2795 45.6252 43.3478V44.0055H45.6226ZM45.3722 42.9355C45.8983 42.9355 46.1715 42.7205 46.1715 42.4398C46.1715 42.159 45.9009 41.9389 45.3722 41.9389C44.8436 41.9389 44.5729 42.159 44.5729 42.4398C44.5729 42.7205 44.8436 42.9355 45.3722 42.9355ZM48.534 42.5334H47.9193V44.7314H47.4033V40.2746H47.9193V42.0376H48.534V42.5334Z' fill='%23878AA1'/%3E%3Cpath d='M54.8048 42.2147V42.6168H50.353V42.2147H54.8048ZM54.5443 41.8428H50.611V41.4508H51.4002V40.7147H50.6591V40.3227H54.4987V40.7147H53.7576V41.4508H54.5468V41.8428H54.5443ZM51.1675 44.2964H54.5746V44.6783H50.6616V43.6463H53.9903V43.3605H50.6515V42.9785H54.4962V44.0055H51.1675V44.2989V44.2964ZM51.9137 41.4533H53.2391V40.7173H51.9137V41.4533Z' fill='%23878AA1'/%3E%3Cpath d='M56.3896 42.9253H55.5068V41.4229H56.9107V40.8183H55.5068V40.3858H57.3963V41.8478H55.9874V42.4953H56.425C56.9208 42.4953 57.3533 42.4473 57.6467 42.3334V42.7609C57.3533 42.8798 56.9005 42.9279 56.3896 42.9279V42.9253ZM59.6601 44.7288L57.667 43.9725C57.1914 44.4329 56.4452 44.6656 55.7041 44.6706V44.228C56.554 44.2179 57.4418 43.8309 57.6088 43.0999L58.1197 43.2086C58.0843 43.3553 58.0261 43.4894 57.9477 43.6159L59.8574 44.2988L59.6601 44.7263V44.7288ZM58.441 43.0088H57.9503V40.2998H58.441V41.3394H59.1669V40.2745H59.6576V43.4211H59.1669V41.8149H58.441V43.0088Z' fill='%23878AA1'/%3E%3Cpath d='M64.8439 42.4448V42.8571H60.3921V42.4448H62.36V41.9971H60.6476V41.5899H61.4367V40.735H60.6956V40.3277H64.5353V40.735H63.7942V41.5899H64.5833V41.9971H62.8709V42.4448H64.8439ZM60.7007 43.2644H64.5302V44.6783H60.7007V43.2644ZM61.2167 44.2711H64.0193V43.6666H61.2167V44.2711ZM61.9527 41.5874H63.2781V40.7324H61.9527V41.5874Z' fill='%23878AA1'/%3E%3Cpath d='M61.8376 13.4603C61.8376 12.1332 60.7618 11.0573 59.4347 11.0573C58.1076 11.0573 57.0317 12.1332 57.0317 13.4603V33.2125C57.0317 34.5396 58.1076 35.6154 59.4347 35.6154C60.7618 35.6154 61.8376 34.5396 61.8376 33.2125V13.4603Z' fill='%23A0A4BE'/%3E%3Cpath d='M36.6459 24.8856C35.8087 23.8561 34.0937 23.8637 32.8113 24.9033L28.7263 28.1789V13.4628C28.7263 12.1348 27.6513 11.0598 26.3234 11.0598C24.9954 11.0598 23.9204 12.1348 23.9204 13.4628V33.215C23.9204 34.5429 24.9954 35.6179 26.3234 35.6179C27.0872 35.6179 27.7651 35.2613 28.2052 34.7048C28.3696 34.6112 28.529 34.5024 28.6808 34.3785L35.839 28.6367C37.1189 27.5971 37.4806 25.9176 36.6434 24.8881L36.6459 24.8856Z' fill='%23A0A4BE'/%3E%3Cpath d='M65.6602 34.5151V23.8131L71.8573 18.6961L78.0544 23.8612V34.5151H73.4306V31.1914H70.2815V34.5151H65.6577H65.6602ZM73.4331 27.0103V25.5356L71.8598 24.2077L70.2865 25.5356V27.0103H73.4357H73.4331Z' fill='%23A0A4BE'/%3E%3Cpath d='M80.4312 23.8182H85.0549V34.8565H80.4312V23.8182Z' fill='%23A0A4BE'/%3E%3Cpath d='M3.21766 6.50185H11.59C12.0301 6.50185 12.3868 6.8585 12.3868 7.29862C12.3868 7.73874 12.0301 8.09538 11.59 8.09538H8.27902V9.96968C8.27902 10.4528 7.88696 10.8449 7.40384 10.8449C6.92072 10.8449 6.52867 10.4528 6.52867 9.96968V8.09538H3.21766C2.77755 8.09538 2.4209 7.73874 2.4209 7.29862C2.4209 6.8585 2.77755 6.50185 3.21766 6.50185ZM6.41484 5.53562C5.83055 5.53562 5.30949 5.42938 4.84914 5.21691C4.38878 5.00444 4.02961 4.70344 3.77161 4.31391C3.5136 3.92438 3.3846 3.47667 3.3846 2.96826C3.3846 2.45985 3.5136 2.02226 3.77161 1.63273C4.02961 1.2432 4.38878 0.944731 4.84914 0.73479C5.30949 0.524849 5.83055 0.421143 6.41484 0.421143H8.39031C8.9822 0.421143 9.50831 0.524849 9.96614 0.73479C10.4265 0.944731 10.7857 1.2432 11.0437 1.63273C11.3017 2.02226 11.4307 2.46744 11.4307 2.96826C11.4307 3.46909 11.3017 3.92691 11.0437 4.31391C10.7857 4.70344 10.424 5.00444 9.96108 5.21691C9.4982 5.42938 8.97461 5.53562 8.39031 5.53562H6.41484ZM6.75378 1.92108C6.25296 1.92108 5.85837 2.01214 5.57002 2.19679C5.28167 2.38144 5.13749 2.63944 5.13749 2.97585C5.13749 3.31226 5.28167 3.57532 5.57002 3.76756C5.85837 3.95726 6.25296 4.05338 6.75378 4.05338H8.05643C8.55726 4.05338 8.95437 3.95726 9.24526 3.76756C9.53614 3.57785 9.68284 3.31226 9.68284 2.97585C9.68284 2.63944 9.53614 2.37891 9.24526 2.19679C8.95437 2.01467 8.55726 1.92108 8.05643 1.92108H6.75378Z' fill='%23A0A4BE'/%3E%3Cpath d='M13.5195 7.80202V5.76078C13.5195 4.9286 14.1924 4.25578 15.0245 4.25578H17.1341V2.41437H14.3011C13.8711 2.41437 13.5221 2.06531 13.5221 1.63531C13.5221 1.20531 13.8711 0.856249 14.3011 0.856249H17.9662C18.4747 0.856249 18.8844 1.26854 18.8844 1.77443V4.86284C18.8844 5.37125 18.4721 5.78102 17.9662 5.78102H15.6645C15.4469 5.78102 15.2699 5.95808 15.2699 6.17561V7.35178C15.2699 7.56931 15.4469 7.74637 15.6645 7.74637H16.2134C17.0708 7.74637 17.9688 7.68819 18.9072 7.57184C19.3245 7.51872 19.7065 7.80961 19.7672 8.22443C19.8279 8.64684 19.5294 9.03384 19.107 9.09455C18.1079 9.23619 17.0379 9.30702 15.8997 9.30702H15.0245C14.1924 9.30702 13.5195 8.6342 13.5195 7.80202ZM21.4442 10.7311C20.9611 10.7311 20.569 10.339 20.569 9.8559V1.06872C20.569 0.585602 20.9611 0.193542 21.4442 0.193542C21.9273 0.193542 22.3194 0.585602 22.3194 1.06872V9.8559C22.3194 10.339 21.9273 10.7311 21.4442 10.7311Z' fill='%23A0A4BE'/%3E%3Cpath d='M10.2937 13.0126C4.60761 13.0126 -0.000976562 17.6642 -0.000976562 23.4009C-0.000976562 29.1376 4.60761 33.7892 10.2937 33.7892C15.9799 33.7892 20.5884 29.1376 20.5884 23.4009C20.5884 17.6642 15.9799 13.0126 10.2937 13.0126ZM16.2379 24.9008C16.2379 24.9008 16.2252 24.9008 16.2176 24.9008C15.5549 27.5592 13.1747 29.5322 10.3317 29.5322C7.48862 29.5322 5.10591 27.5567 4.4432 24.8932C4.41032 24.8958 4.37997 24.9033 4.34708 24.9033C3.69703 24.9033 3.16838 24.3722 3.16838 23.7145C3.16838 23.0569 3.68185 22.5409 4.32179 22.5282C4.64809 20.2189 6.24667 18.3243 8.37897 17.5959V19.8268H12.2009V17.568C14.3737 18.2788 16.0077 20.1961 16.3365 22.5358C16.9385 22.5889 17.4115 23.0923 17.4115 23.7145C17.4115 24.3722 16.8854 24.9033 16.2328 24.9033L16.2379 24.9008Z' fill='%23A0A4BE'/%3E%3Cpath d='M13.2427 23.9801C13.0884 23.9801 12.9644 24.1041 12.9644 24.2584C12.9644 25.1538 11.7908 25.9101 10.3996 25.9101C9.00844 25.9101 7.83479 25.1538 7.83479 24.2584C7.83479 24.1041 7.71085 23.9801 7.55656 23.9801C7.40226 23.9801 7.27832 24.1041 7.27832 24.2584C7.27832 25.475 8.67961 26.4665 10.3996 26.4665C12.1196 26.4665 13.5209 25.475 13.5209 24.2584C13.5209 24.1041 13.397 23.9801 13.2427 23.9801Z' fill='%23A0A4BE'/%3E%3Cpath d='M8.4069 22.9304C8.6807 22.9304 8.90266 22.6054 8.90266 22.2045C8.90266 21.8036 8.6807 21.4785 8.4069 21.4785C8.13309 21.4785 7.91113 21.8036 7.91113 22.2045C7.91113 22.6054 8.13309 22.9304 8.4069 22.9304Z' fill='%23A0A4BE'/%3E%3Cpath d='M12.1354 22.9304C12.4086 22.9304 12.6312 22.6067 12.6312 22.2045C12.6312 21.8023 12.4086 21.4785 12.1354 21.4785C11.8622 21.4785 11.6396 21.8023 11.6396 22.2045C11.6396 22.6067 11.8622 22.9304 12.1354 22.9304Z' fill='%23A0A4BE'/%3E%3Cpath d='M43.6707 13.1417C37.9846 13.1417 33.376 17.7933 33.376 23.53C33.376 29.2667 37.9846 33.9183 43.6707 33.9183C49.3568 33.9183 53.9654 29.2667 53.9654 23.53C53.9654 17.7933 49.3568 13.1417 43.6707 13.1417ZM47.5028 15.7824L48.4058 17.8641L50.7303 17.9349L49.1292 20.1937L48.3628 17.945L45.9649 17.8185L47.5028 15.7824ZM49.6528 25.1766C49.6401 25.1766 49.6275 25.1741 49.6123 25.1716C48.9749 27.8704 46.577 29.8788 43.7086 29.8788C40.8403 29.8788 38.4424 27.8704 37.805 25.1716C37.7923 25.1716 37.7797 25.1766 37.767 25.1766C37.117 25.1766 36.5883 24.6454 36.5883 23.9878C36.5883 23.3301 37.0866 22.8344 37.7139 22.804C38.068 20.5048 39.6843 18.6305 41.8267 17.9248C42.7399 18.8607 44.2525 20.09 45.9143 20.09C45.9143 20.09 44.8342 18.8 44.5484 17.682C47.1992 18.0513 49.2986 20.1431 49.7084 22.804C50.3332 22.8318 50.834 23.3478 50.834 23.9878C50.834 24.6277 50.3053 25.1766 49.6553 25.1766H49.6528Z' fill='%23A0A4BE'/%3E%3Cpath d='M46.6211 23.9801C46.4668 23.9801 46.3429 24.1041 46.3429 24.2584C46.3429 25.1538 45.1692 25.9101 43.778 25.9101C42.3869 25.9101 41.2132 25.1538 41.2132 24.2584C41.2132 24.1041 41.0893 23.9801 40.935 23.9801C40.7807 23.9801 40.6567 24.1041 40.6567 24.2584C40.6567 25.475 42.058 26.4665 43.778 26.4665C45.498 26.4665 46.8993 25.475 46.8993 24.2584C46.8993 24.1041 46.7754 23.9801 46.6211 23.9801Z' fill='%23A0A4BE'/%3E%3Cpath d='M41.7878 22.9304C42.0609 22.9304 42.2835 22.6067 42.2835 22.2045C42.2835 21.8023 42.0609 21.4785 41.7878 21.4785C41.5146 21.4785 41.292 21.8023 41.292 22.2045C41.292 22.6067 41.5146 22.9304 41.7878 22.9304Z' fill='%23A0A4BE'/%3E%3Cpath d='M45.5163 22.9304C45.7895 22.9304 46.012 22.6067 46.012 22.2045C46.012 21.8023 45.7895 21.4785 45.5163 21.4785C45.2431 21.4785 45.0205 21.8023 45.0205 22.2045C45.0205 22.6067 45.2431 22.9304 45.5163 22.9304Z' fill='%23A0A4BE'/%3E%3Cpath d='M82.7214 16.144C80.9508 16.144 79.5166 17.5782 79.5166 19.3487C79.5166 21.1193 80.9508 22.5535 82.7214 22.5535C84.492 22.5535 85.9261 21.1193 85.9261 19.3487C85.9261 17.5782 84.492 16.144 82.7214 16.144ZM82.7214 21.5089C81.5275 21.5089 80.5613 20.5426 80.5613 19.3487C80.5613 18.1549 81.5275 17.1886 82.7214 17.1886C83.9152 17.1886 84.8815 18.1549 84.8815 19.3487C84.8815 20.5426 83.9152 21.5089 82.7214 21.5089Z' fill='%23A0A4BE'/%3E%3Cmask id='mask0_6852_31203' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='82' y='15' width='5' height='8'%3E%3Cpath d='M86.0007 15.7671H82.5986V22.8596H86.0007V15.7671Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_6852_31203)'%3E%3Cpath d='M82.7204 16.144C80.9498 16.144 79.5156 17.5782 79.5156 19.3487C79.5156 21.1193 80.9498 22.5535 82.7204 22.5535C84.491 22.5535 85.9252 21.1193 85.9252 19.3487C85.9252 17.5782 84.491 16.144 82.7204 16.144ZM82.7229 21.5089C81.529 21.5089 80.5628 20.5426 80.5628 19.3487C80.5628 18.1549 81.529 17.1886 82.7229 17.1886C83.9168 17.1886 84.883 18.1549 84.883 19.3487C84.883 20.5426 83.9168 21.5089 82.7229 21.5089Z' fill='%23BDC0D2'/%3E%3C/g%3E%3Cpath d='M83.8883 18.9769C83.815 19.2172 83.5848 19.3892 83.3218 19.3765C83.0081 19.3614 82.7678 19.0958 82.783 18.7821C82.7956 18.5115 82.9955 18.2965 83.2535 18.251C83.1093 18.1852 82.9499 18.1498 82.7805 18.1498C82.1405 18.1498 81.6245 18.6683 81.6245 19.3057C81.6245 19.9431 82.143 20.4617 82.7805 20.4617C83.4179 20.4617 83.9364 19.9431 83.9364 19.3057C83.9364 19.1919 83.9187 19.0806 83.8883 18.9769Z' fill='%23A0A4BE'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100% !important;}

	position: relative; font-size: 12px; text-align: center; padding: 100px 0; border-radius: 12px;

	.txt{font-size:13px; color:#878AA1;margin-top:14px;white-space: nowrap;}
}

.data-table {
	overflow-x: auto; margin-top: 12px !important;

	&.lg{
		table{
			th,
			td{height:42px;font-size:12px !important;}
		}
	}

	table {
		min-width: 100%; border-collapse: collapse;

		th { color: #878AA1; font-size: 10px; height: 23px; background: #F5F6FA; padding: 6px 12px; vertical-align: middle; border-top: 1px solid #D4D6E3; border-bottom: 1px solid #D4D6E3; }
		tbody th{ border-bottom: 1px solid #ECEEF5;}
		td {
			color: #60637B; font-size: 10px; height: 23px; vertical-align: middle; padding: 6px 12px; text-align: center; border-bottom: 1px solid #ECEEF5;

			b { font-size: 12px; color: #383838; font-weight: 500; }
			.light { font-size: 10px; font-weight: 400; color: #878AA1; }
		}
	}
}

.list-dot-wrap { padding: 9px 14px; border: 1px solid #ECEEF5; border-radius: 12px; margin-top: 12px;
	.tit{font-size:18px;font-weight:700; color:#60637B;
		+ *{margin-top:15px;}
	}
	&.lg{
		margin-top:30px;
		padding-top:20px;padding-bottom:20px;
		.dot{font-size:13px;
			~ .dot{
				margin-top:8px;
			}
		}
	}
}
.list-dot {
	&.lg .dot{font-size:12px;s}
	.dot {
		font-size: 10.5px; padding-left: 12px; position: relative; color: #383838;
		em.c-primary{font-weight:600;}

		& ~ .dot { margin-top: 6px; }
		&:before { content: ''; display: block; width: 2px; height: 2px; border-radius: 100%; background: #383838; position: absolute; top: 6px; left: 3px; }
	}
}

[class*=ico-]{display:inline-block;background-position:0 0;background-size:auto 100%;background-repeat:no-repeat;}

* + .chart-area{margin-top:23px;}

	.chart-tit {
		padding-left: 14px; font-size: 12px; font-weight: 600; padding-left: 12px; position: relative;
		&.lg{font-size:13px;}

		em { color: #4252E2; vertical-align: baseline; }
		& + * { margin-top: 7px; }
		&:before { content: ''; display: block; width: 3px; height: 3px; background: #383838; position: absolute; top: 6px; left: 3px; border-radius: 100%; }
	}

.chart img{max-width: 100%;;width:100%;}

.gage-bar-unit{
	&:not(.st-both){transform:scale(0.7);width:calc(100% + 60px);margin-left:-30px;}
	&:not(.st-both):not(.st-thumb) ~ .gage-bar-unit{margin-top:-20px;}
	&.st-both{transform:scale(0.85);margin-top:-20px;
		.gage-bar-wrap{padding-bottom:0;}
		.x-axis{top:initial;position:relative;display:flex;justify-content:center;align-items:center;flex-direction: column;margin-top:10px;
			&:before{transform: translateX(0);margin-bottom:5px;margin-left:-2px;}
		}
	}

	&.st-thumb{transform:scale(0.7);margin-top:15px;
		+ .st-thumb {margin-top:21px;}
		.gage-bar-unit{margin-left:-20px;}
	}
}

.standard-deviation-chart{transform:scale(0.75);margin-top:-25px !important;}

.chart-legend {
	position: relative; text-align: center; margin-top: 8px; z-index: 1; padding: 0 15px;
	.item {
		display: inline-block; font-size: 12px; color: #A0A4BE; margin: 0 6px;

		&:first-child { margin-left: 0; }
		&:last-child { margin-right: 0; }
		span { vertical-align: middle; line-height: 1; white-space: nowrap; }
		i {
			display: inline-block; margin-right: 2px; vertical-align: middle;

			&.bar { width: 13px; height: 2px; }
			&.rect { width: 9px; height: 9px; border-radius: 2px; margin-right: 5px; }
			&.child-avg { width: 19px; height: 19px; background: url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.44775 12.948L21.4478 12.948' stroke='url(%23paint0_linear_1_10824)' stroke-width='2' stroke-dasharray='3 1'/%3E%3Cg filter='url(%23filter0_i_1_10824)'%3E%3Ccircle cx='12.5781' cy='12.948' r='4' fill='white'/%3E%3C/g%3E%3Ccircle cx='12.5781' cy='12.948' r='4' stroke='url(%23paint1_linear_1_10824)' stroke-width='2'/%3E%3Cdefs%3E%3Cfilter id='filter0_i_1_10824' x='7.57812' y='8.948' width='9' height='9' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dx='-1' dy='1'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.298516 0 0 0 0 0.369767 0 0 0 0 0.985577 0 0 0 0.4 0'/%3E%3CfeBlend mode='normal' in2='shape' result='effect1_innerShadow_1_10824'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_1_10824' x1='3.44775' y1='12.448' x2='21.4478' y2='12.448' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%234252E2'/%3E%3Cstop offset='1' stop-color='%237E8BFF'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_1_10824' x1='14.2448' y1='17.1147' x2='15.9115' y2='7.948' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%234252E2'/%3E%3Cstop offset='1' stop-color='%237E8BFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") no-repeat 0 0; background-size: auto 100%; }
			&.class-avg { width: 19px; height: 19px; background:url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.7754 12.948L3.77539 12.948' stroke='url(%23paint0_linear_1_10833)' stroke-width='2' stroke-dasharray='3 1'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_10833' x1='3.77539' y1='12.448' x2='19.7754' y2='12.448' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2360637B'/%3E%3Cstop offset='1' stop-color='%23979AB5'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") no-repeat 0 0; background-size: auto 100%; }
			&.danger { width: 19px; height: 19px; background: url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='6.05322' y='6.948' width='12' height='12' rx='2' fill='url(%23paint0_linear_1_10838)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_10838' x1='12.2847' y1='16.948' x2='12.2847' y2='6.948' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23DC0000' stop-opacity='0.2'/%3E%3Cstop offset='1' stop-color='%23FF6163' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") no-repeat 0 0; background-size: auto 100%; }
		}
	}
}

.echart{margin:0;
	>* {
			height: calc(100% + 1rem);
			margin: -4rem 0 -3rem;
	}
	&.bar-chart{
		.echarts-for-react {height:270px !important;}
	}
	
}

 
.photo-desc-list {
	padding: 9px 14px; border: 1px solid #ECEEF5; border-radius: 12px;

	ul {
		display: grid; grid-template-columns: repeat(6, 1fr); grid-gap: 15px 8px;

		li {
			.img { height: 70px; border: 0.5px solid rgba(189, 192, 210, 0.5); border-radius: 10px; overflow:hidden;
				img { object-fit: cover; max-width: 100%; max-height: 100%; width: 100%; height: 100%; }
			}
			.txt { font-size: 9px; margin-top:6px;}
			.date { font-size: 8px; }
		}
	}
}


.tip-box {
	margin-top: 9px; padding: 9px 14px; border: 1px solid #ECEEF5; border-radius: 12px;

	b {
		font-size: 10px; font-weight: 600; display: block; color: #505050;

		strong { font-weight: 700; }
	}
	p { margin-top: 5px; font-size: 9px; color: #60637B; }
}


.profile-box { display: flex; background-color: #fff; border: 1px solid #e3e7f0; border-radius: 16px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); max-width: 800px; margin: auto; align-items: flex-start; 
	& + *{margin-top:30px;}
	.thumb {position:relative;overflow:hidden; width: 160px; height: 160px; border-radius: 50%; background-color: #e6e6e6; flex-shrink: 0; margin-right: 32px; 
		img{width:100%;height:100%;object-fit:cover;}
	}
	.desc { flex: 1; }
	.info {
		.birth { font-size: 16px; color: #000; margin-bottom: 10px; }
		.age { color: #4a6cf7; font-weight: bold; }
		.name {display:block; font-size: 24px; font-weight: 700;line-height:1; color: #4252E2;padding-bottom:12px;border-bottom:1px solid #878AA1;margin-bottom:15px;}
	}
	.result { font-size:14px; color:#60637B;
		.tit { display: block; font-weight: bold; margin-bottom:3px; }
	}
}


.range-gage-bar-unit {
	& ~ .range-gage-bar-unit { margin-top: 20px; }
	.info {
		display: flex; justify-content: space-between; height: 22px; overflow: hidden;

		.name { font-size: 13px; color: #60637B; font-weight: 500; vertical-align: top; }
		.grade { float: right; font-size: 13px; color: #383838; font-weight: 500; line-height: 1; }
	}
	& ~ .gage-bar-unit { margin-top: 8px; }
	.gage-bar-wrap {
		position: relative; padding: 0 1px;

		.gage-bar {
			position: relative; height: 18px; border-radius: 18px; border: 1px dashed #D4D6E3; background: #fff; overflow: hidden;

			.gage {
				position: absolute; top: 0; bottom: 0; display: block; vertical-align: top;

				.bar { display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-left: 1px dashed #D4D6E3; border-right: 1px dashed #D4D6E3; background: linear-gradient(90deg, rgba(160, 164, 190, 0.48) 0%, rgba(160, 164, 190, 0.8) 100%); }
			}
		}
		.gage-index { position: absolute; top: 0; left: 11px; right: 11px; height: 100%; }
		i { position: absolute; top: 2px; left: 0; display: inline-block; width: 14px; height: 14px; transform: translateX(-50%); border-radius: 100%; border: 3px solid #4252E2; box-shadow: inset -1px 1px 4px rgba(76, 94, 251, 0.3); background: #fff; }
	}
}


.chart-box-area{margin-top:10px;border-radius:10px;
	display:flex; padding: 24px; gap: 0 47px; border-radius: 10px; background: #F5F6FA; align-items:center;flex-wrap:wrap;
	.chart-item-detail{width:40%;}
	.radar-chart-area{flex:1;overflow:hidden;}
	.chart-legend{width:100%;}
}

.development-chart-area .chart{height:250px;
	.echarts-for-react {height:100% !important;}
}

.radar-chart-area .chart{height:350px;
	.echarts-for-react {height:100% !important;}
}

.line-chart-area {
	margin-top:20px !important;
	.chart{height:220px;
		.echarts-for-react {height:100% !important;}
	}
.data-table{margin-top:0 !important;}
}

.pdf-frame {
	width:100%;z-index:50;display:flex;flex-direction:column;
	.pdf-menu {
		background: #fff; padding: 0 17px;
		position: relative; display: flex; align-items: center; background: #F5F6FA; height: 62px;min-height:62px;
		box-shadow: 0px 3px 6.6px 0px #BCBFCF;

		.btn-down-load {
			border-radius: 6px; 
			width: 35px; height: 35px; display: flex; justify-content: center; align-items: center; background: #4252E2; box-shadow: 0px 1.1px 2.2px 0px rgba(190, 190, 197, 0.30), 1.1px 3.3px 1.1px 0px rgba(220, 220, 223, 0.15);

			&:before { content: ''; display: block; width: 19px; height: 19px; background: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_114_881)'%3E%3Cpath d='M15.5 10V12.6667C15.5 13.0203 15.3361 13.3594 15.0444 13.6095C14.7527 13.8595 14.357 14 13.9444 14H3.05556C2.643 14 2.24733 13.8595 1.95561 13.6095C1.66389 13.3594 1.5 13.0203 1.5 12.6667V10' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5.16675 5.6665L8.50008 8.99984L11.8334 5.6665' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8.5 9V1' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_114_881'%3E%3Crect width='16' height='16' fill='white' transform='translate(0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E") no-repeat 50% 50%; background-size: auto 100%; }
		}
			.left{display:flex;gap:20px;}
		.paging {
			display: flex; align-items: center; gap: 9px;

			button, .page {
				width: 35px; height: 35px; display: block; border-radius: 6px; background: #FFF; box-shadow: 0px 1.1px 2.2px 0px rgba(190, 190, 197, 0.30), 1.1px 3.3px 1.1px 0px rgba(220, 220, 223, 0.15); background-repeat: no-repeat; background-position: 50% 50%; background-size: 19px 18px;

				&.btn-prev { background-image: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.7 2.40088L6.09995 8.00088L11.7 13.6009' stroke='%23383838' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); }
				&.btn-next { background-image: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.2998 13.5991L10.8998 7.99912L5.2998 2.39912' stroke='%23383838' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); }
			}
			.page {
				width: auto; min-width: 72px;
				padding: 0 17px; font-size: 15.5px;
				color: #383838; display: flex; justify-content: center; align-items: center; letter-spacing: 0.055em;

				em { color: #4252E2; font-weight: 600; }
			}
		}
		.right { margin-left: auto; display:flex;align-items:center;gap:10px;}
		select { display: inline-flex; -webkit-appearance: none;height: 35px; padding: 0px 11px; align-items: center; gap: 9px; border-radius: 6px; border: 1px solid #ECEEF5;padding-right:35px;background:#fff url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.81088 10.8764C8.41175 11.4295 7.58825 11.4295 7.18912 10.8764L4.8139 7.58521C4.3366 6.92384 4.80917 6 5.62478 6H10.3752C11.1908 6 11.6634 6.92384 11.1861 7.58521L8.81088 10.8764Z' fill='%23383838'/%3E%3C/svg%3E") no-repeat top 50% right 10px;
			background-size:auto 16px;;
		}
		.btn-pdf-close{width: 35px; height: 35px;display: block; border-radius: 6px; background: #FFF; box-shadow: 0px 1.1px 2.2px 0px rgba(190, 190, 197, 0.30), 1.1px 3.3px 1.1px 0px rgba(220, 220, 223, 0.15);
			background:#fff url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.5 4L4.5 11.9447' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M12.5 12.001L4.50004 4.00098' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat 50% 50%;
			background-size:auto 16px;
		}
	}
	.pdf-contet { padding: 30px 18px; background: #D4D6E3;flex:1; }
}


`
export default Contents