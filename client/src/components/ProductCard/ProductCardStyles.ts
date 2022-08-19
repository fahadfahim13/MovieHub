import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProductColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: #FFFFFF;
	padding: 10px;
	border: 1px solid #F1F1F1;
	border-radius: 8px;
`;

export const SaleButton = styled(motion.button)`
	padding: 5px;
	width: 49px;
	height: 24 px;
	background: #FADBD8;
	mix-blend-mode: normal;
	border: 1px solid #FADBD8;
	border-radius: 4px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 18px;
	text-align: center;
	color: #DE3618;
`;

export const ProdImgWrapper = styled(motion.div)`
	display: flex;
	justify-content: 'flex-end';
	max-height: 500px;
	justify-content: center;
	background-color: #E8F0D6;
`;

export const ProdImage = styled(motion.img)`
	padding-right: 0;
	border: 0;
	max-width: 170px;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	max-height: 500px;
	background-color: #fff;
`;

export const ProdImageColumn = styled(motion.div)`
	margin-top: 15px;
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`;

export const CategoryTitle = styled(motion.p)`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 22px;
	color: #959EAD;
`;

export const ProductTitle = styled(motion.p)`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 26px;
	color: #161D25;
`;