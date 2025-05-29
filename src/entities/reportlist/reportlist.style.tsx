import { COLOR } from '@/shared'
import styled from '@emotion/styled'

export const ReportList = styled.div`
	padding-top:2.4rem;
	.menus{display:flex;align-items:center;
		.btn-total{
			display:flex;align-items:center;gap:0.8rem; font-size:1.6rem;
			&:before{content:'';display:block;width:2.4rem;height:2.4rem;border:1px solid #D4D6E3;border-radius:100%;background-color:#fff;}
			&.on:before{ background: ${COLOR.primary} url("data:image/svg+xml,%3Csvg width='14' height='11' viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 5.29883L5.13086 9.49805L13 1.49805' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A") no-repeat 50% 50%; background-size:auto 1.1rem;}
		}
		.btn{font-size:1.6rem; color:${COLOR.primary} !important;background:none !important;opacity:0.5;
			&.on{opacity:1;}
			&-download{
				&:before{content:'';display:block;width:1.6rem;height:1.6rem;margin-right:0.4rem;background:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_4788)'%3E%3Cpath d='M2.00125 12.4551L2.00125 6.12238L2.00553 5.90655C2.0107 5.64588 2.11747 5.39754 2.30309 5.21444L5.20796 2.34914C5.39509 2.16456 5.64736 2.06108 5.9102 2.06108L11.2841 2.06108C12.2346 2.06108 13 2.72768 13 3.55475L13 12L13 12.4551C13 13.2821 12.2346 13.9487 11.2841 13.9487L3.71712 13.9487C2.7666 13.9487 2.00125 13.2821 2.00125 12.4551Z' stroke='%234252E2' stroke-width='1.5' stroke-miterlimit='10'/%3E%3Cpath d='M6.5 2L6.5 5.5C6.5 6.05228 6.05228 6.5 5.5 6.5L2 6.5' stroke='%234252E2' stroke-width='1.5' stroke-miterlimit='10'/%3E%3Cpath d='M7 9L9 11L11 9' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='round'/%3E%3Cpath d='M9 10L9 7' stroke='%234252E2' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_4788'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") no-repeat 0 0;background-size:auto 100%;}
			}
		}
		.right{margin-left:auto;display:flex;align-items:center;gap:0.8rem;
			.bar{display:inline-block;width:1px;height:1.3rem;background:#D4D6E3;}
		}
	}

	.report-list{
		margin-top:0.8rem;
		ul{
			display:flex;flex-direction:column;gap:0.8rem;
			li{
				padding:1rem 1.6rem;
				height:8rem;display:flex;align-items:center;gap:1.6rem;
				border-radius:1rem;border:1px solid #ECEEF5;background:#fff;
				.icon{display:flex;justify-content:center;align-items:center; background:#F5F6FA;border-radius:0.5rem;width:3.6rem;height:3.6rem;}
				.text{display:flex;flex-direction:column;gap:0.4rem;
					.period{font-weight:500; color:#383838;font-size:1.4rem;}
					.date{font-size:1.2rem; color:#878AA1;}
				}
			}
		}
	}

`
