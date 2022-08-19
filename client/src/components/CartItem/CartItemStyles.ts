import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CartItemImageContainer = styled(motion.div)`
    width: 112px;
    height: 112px;
    background-color: #E8F0D6;
    border-radius: 5px;
    border: 2px solid #E8F0D6;
    display: flex;
    justify-content: center;
`;

export const CartItemImage = styled(motion.img)`
    width: 72px;
    height: 72px;
    background-color: #E8F0D6;
`;

export const CartItemTitle = styled(motion.p)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
	color: #161D25;
`;

export const CartItemCategoryTitle = styled(motion.p)<{color?: string; fontSize?: string, fontWeight?: number}>`
	font-family: 'Inter';
	font-style: normal;
	font-weight: ${(props) => props.fontWeight? props.fontWeight: 400};
	font-size: ${(props) => props.fontSize? props.fontSize: '14px'};
	line-height: 22px;
	color: ${(props) => props.color? props.color: '#959EAD'};
`;