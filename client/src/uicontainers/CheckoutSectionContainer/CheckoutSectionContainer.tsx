import React from 'react';
import { Col, Row, Section, SimpleButton } from 'styles/global';
import { CheckoutDiscountText } from './ChekoutSectionStyles';
import { CheckoutProps } from './types';

const CheckoutSectionContainer = (props: CheckoutProps) => {
  const { cartTotal } = props;
  return (
    <Section smPadding="10px 10px" position="relative" inverse id="about" width="610px">
      <CheckoutDiscountText>Hey get Free shipping on order over 250$</CheckoutDiscountText>
      <Row style={{ width: '95%' }}>
        <Col>
          <p style={{ fontSize: '14px', color: '#959EAD', marginBottom: '0px' }}>Sub-total: </p>
          <p style={{ fontSize: '16px', marginTop: '0px' }}>${cartTotal.toFixed(2)}</p>
        </Col>
        <Col>
          <SimpleButton background="#5C6AC4" color="#fff" borderColor="#5C6AC4">
            Checkout
          </SimpleButton>
        </Col>
      </Row>
    </Section>
  );
};

export default CheckoutSectionContainer;
