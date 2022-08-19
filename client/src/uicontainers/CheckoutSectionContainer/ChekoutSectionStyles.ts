import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CheckoutDiscountText = styled(motion.p)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  margin-left: 5%;
  width: 90%;
  background: #e8f0d6;
  border-radius: 4px;
  text-align: center;
  padding-top: 2%;
  padding-bottom: 2%;
`;

export const SubtotalSubtitle = styled(motion.p)<{ color?: string; fontSize?: string }>`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  line-height: 22px;
  color: ${(props) => (props.color ? props.color : '#959EAD')};
`;

export const CartTotalTitle = styled(motion.p)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #161d25;
`;
