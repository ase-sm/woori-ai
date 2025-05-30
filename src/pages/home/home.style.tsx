import styled from '@emotion/styled'
import { COLOR, Thumb} from '@/shared'

const Contents = styled.div`
	 .main-notice-area{position:relative;
			
		.bg {
				img{width:100%;height:100%;}
			}	
				.conts{position:absolute;top:0;left:0;width:100%;height:100%;padding:01.6rem;}		
			.name{font-size:1.6rem;font-weight:500; color:#fff;display:flex;align-items:center;position:relative;
				&:before{content:'';display:block;width:1.6rem;height:1.6rem;background:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.51979 6.40126C2.20979 6.68126 2.02979 7.08126 2.02979 7.50126V12.6313C2.02979 13.4513 2.68978 14.1113 3.50978 14.1113H12.4898C13.3098 14.1113 13.9698 13.4513 13.9698 12.6313V7.44126C13.9698 7.02126 13.7898 6.62126 13.4698 6.34126L8.98978 2.37126C8.42978 1.87126 7.57979 1.88126 7.02979 2.37126L2.51979 6.40126Z' stroke='white' stroke-width='1.5' stroke-miterlimit='10'/%3E%3Cpath d='M4.65979 11.1113H11.3398' stroke='white' stroke-width='1.5' stroke-miterlimit='10'/%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;margin-right:0.6rem;}
			}
			.user-desc{position:relative;
				margin-top:2.5rem;
				.img{ width:3.2rem;height:3.2rem; ${Thumb}; }
					.desc{margin-top:1rem; color:#fff;
						> *{display:block;font-size:2rem;}
						 b{font-size:2.6rem;line-height:1.2;}
					}
			}
			.noti-alarm{display:flex;justify-content:center;align-items:center;padding:0 2.6rem; position:absolute;bottom:5%;left:1.6rem;right:1.6rem; border:1px solid #F5F6FA; background:#fff;height:4rem;border-radius:4rem;font-weight:500;font-size:1.6rem; color:${COLOR.primary};}
	 }

	 .main-content{
	 	background:#F5F6FA;padding:2.4rem 1.6rem;
		h3{font-size: 18px; font-weight: 600;
			em{font-weight: 700; color:${COLOR.primary};vertical-align:baseline;}
		}
		.main-menu{display:grid;grid-template-columns: repeat(3, 1fr);grid-gap: 1.6rem;
			margin-top:1.6rem;
			li { position:relative;
				&:after{
				 display: block;
					content: "";
					padding-bottom: 100%;
				}
				.menu{
					position:absolute;top:0;left:0;
					width:100%;height:100%;
					background: #FFFFFF;
					box-shadow: 0px 1px 2px rgba(190, 190, 197, 0.3), 1px 3px 1px rgba(220, 220, 223, 0.15);
					border-radius: 20px;

					b{font-width:600;fot-size:1.4rem;display:block;position:absolute;top:1.2rem;left:1.2rem;}
					[class*=ico-]{
						position:absolute;bottom:0.5rem;right:0.52rem;
					}
				}			
			}
		}

		.main-sub-menu{
			margin-top:3.2rem;padding:1rem 2rem;
			border: 1px solid #FFFFFF;background:#fff;border-radius:1rem;
			li{
				~ li{border-top:1px dashed #D4D6E3;}
				.menu{
					 [class*=ico-]{margin-left:-0.8rem;}
					height:5.8rem;width:100%;text-align:left;
					display:flex;align-items:center;justify-content:flex-start;
					b{font-size:1.4rem;font-weight:600;margin-left:0.8rem; color:#000;}
					.view{height:2.6rem; margin-left:auto;display:flex;align-items:center; color:#fff;background:${COLOR.primary};border-radius:0.5rem;padding:0 0.8rem;font-size:1.2rem;}
				}
			}
		}

	}


`
export default Contents