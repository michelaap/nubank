import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import {
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation
} from './styles';

export default function Card({ translateY }) {
  let offset = 0;
  
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: { 
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true },
  )

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;        
        translateY.setOffset(offset);
        translateY.setValue(0);
      });

    }
  }

  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <CardContainer       
        style={{
          transform: [{
            translateY: translateY.interpolate({
              inputRange: [-350, 0, 380],
              outputRange: [-50, 0, 380],
              extrapolate: 'clamp'
            })
          }]
        }}
      >
        <CardHeader>
          <Icon name='attach-money' size={28} color='#666' />
          <Icon name='visibility-off' size={28} color='#666' />
        </CardHeader>
        <CardContent>
          <Title>Saldo disponível</Title>
          <Description>R$ 235.611,00</Description>
        </CardContent>
        <CardFooter>
          <Annotation>
            Transferência de R$ 20,00 recebida de Michel A A Pereira hoje às 6:30
          </Annotation>
        </CardFooter>
      </CardContainer>
    </PanGestureHandler>
  )
}
