import React from 'react';
import MovieCard from 'components/MovieCard';
import { Col, Row } from 'antd';

const MovieList = () => {
  return (
    <div style={{ marginTop: 'auto', marginBottom: '3%' }}>    
    
    <Row>
      <Col span={6}> </Col>
      {Array.from(Array(3)).map((_, index) => (
        <>
        <Col span={4} style={{ marginLeft: '1%' }}>
            <MovieCard id={index} title='Movie Title' description='description' actors={[]} showActor={false} image={''} />
        </Col>
        </>
      ))}
      <Col span={5}></Col>
    </Row>
    <br />
    <Row>
      <Col span={6}> </Col>
      {Array.from(Array(3)).map((_, index) => (
        <>
        <Col span={4} style={{ marginLeft: '1%' }}>
            <MovieCard id={index} title='Movie Title' description='description' actors={[]} showActor={false} image={''} />
        </Col>
        </>
      ))}
      <Col span={5}></Col>
    </Row>
    
    </div>
  );
};

export default MovieList;
