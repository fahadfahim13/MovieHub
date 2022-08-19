import React from 'react'
import { Col, Row, Section, SimpleButton } from 'styles/global';
import airpods from 'media/images/airpods.jpg';
import { CartItemCategoryTitle, CartItemImage, CartItemTitle, CartItemImageContainer } from './CartItemStyles';
import { Delete } from '@styled-icons/material-outlined/Delete';
import {Minus} from '@styled-icons/boxicons-regular/Minus';
import {Plus} from '@styled-icons/boxicons-regular/Plus';
import { CartProps } from './types';

const CartItem = (cartItem: CartProps) => {
    const { id, product, amount, addToCart, decreaseFromCart } = cartItem;
  return (
    <Section smPadding="10px 10px" position="relative" inverse id="about">
        <Row style={{ marginTop: '2%', width: '98%', paddingLeft: '20px' }}>
            <Col style={{ alignItems: 'self-start', maxWidth: '112px' }}><CartItemImageContainer style={{alignItems: 'center'}}><CartItemImage src={product.image} /></CartItemImageContainer></Col>
            <Col>
                <Row style={{ paddingLeft: '10px' }}>
                    <Col style={{ alignItems: 'self-start'}}><CartItemTitle style={{marginBottom: '0px'}}> {product.name} </CartItemTitle></Col>
                    <Col style={{ maxWidth: '30px'}} onClick={() => decreaseFromCart(product, true)}> 
                        <Delete style={{ alignItems: 'self-end', width: '30px', cursor: 'pointer' }} /> 
                    </Col>
                </Row>
                <Row style={{ paddingLeft: '10px' }}>
                    <CartItemCategoryTitle color='#161D25'>Size: </CartItemCategoryTitle> 
                    <CartItemCategoryTitle style={{ paddingLeft: '1%' }}>Medium</CartItemCategoryTitle>
                </Row>
                <Row style={{ paddingLeft: '10px' }}>
                    <Col style={{ padding: '0px' }}>
                        <CartItemCategoryTitle color='#161D25' fontSize='16px' fontWeight={700}> ${(product.curPrice * amount).toFixed(2)} </CartItemCategoryTitle>
                    </Col>
                    <Col style={{ padding: '0px' }}><s><CartItemCategoryTitle style={{ paddingLeft: '1%' }} fontSize='16px'> ${((product.prevPrice ?? product.curPrice) * amount).toFixed(2)} </CartItemCategoryTitle></s></Col>
                    <Col></Col>
                    <Col>
                        <SimpleButton>
                            <Row style={{ alignItems: 'center' }}>
                                <Col onClick={() => decreaseFromCart(product, false)} style={{ alignItems: 'center' }}> <Minus style={{width: '16px', alignItems: 'self-start' }} /> </Col>
                                <Col style={{alignItems: 'center' }}> {amount} </Col>
                                <Col onClick={() => addToCart(product)} style={{ alignItems: 'center' }}><Plus style={{width: '16px'}} /></Col>
                            </Row>
                        </SimpleButton>
                    </Col>
                </Row>
            </Col>
        </Row>
        <hr style={{ width: '92%', border: '1px solid #E9E9E9' }} />
    </Section>
  )
}

export default CartItem;