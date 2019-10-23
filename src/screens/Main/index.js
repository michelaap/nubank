import React from 'react';
import { Animated } from 'react-native';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs'; 
import Card from '../../components/Card';
import Menu from '../../components/Menu';

import { Container, Content } from './styles';

export default function Main() {
  const translateY = new Animated.Value(0);

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />
        <Card translateY={translateY} />
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}