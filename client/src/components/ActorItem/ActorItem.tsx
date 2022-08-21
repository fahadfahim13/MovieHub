import React from 'react'
import { Avatar, Col, Row } from 'antd'

const ActorItem = () => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
        <Col className="gutter-row" span={4}><Avatar size={50} /></Col>
        <Col className="gutter-row" span={4}></Col>
        <Col className="gutter-row" span={16}><Row>Actor Name</Row> <Row>Character Name</Row></Col>
    </Row>
  )
}

export default ActorItem