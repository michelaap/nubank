import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation
} from './styles';

export default function Card() {
  return (
    <CardContainer>
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
  )
}