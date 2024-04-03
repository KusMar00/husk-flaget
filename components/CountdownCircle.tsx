import React from 'react';
import { Circle, Text } from 'tamagui';

interface CountdownCircleProps {
  numberOfDays: number;
}

const CountdownCircle = ({ numberOfDays }: CountdownCircleProps) => {
  return (
    <Circle
      alignSelf="center"
      size={275}
      backgroundColor="white"
      bordered
      borderWidth={'$2'}
      borderColor={'$blue7'}
      elevation="$0.5">
      <Text textAlign="center" col="$blue7" fontSize={'$12'}>
        {numberOfDays}
      </Text>
      <Text textAlign="center" col="$gray10" fontSize={'$5'}>
        Dage til næste flagdag
      </Text>
    </Circle>
  );
};

export default CountdownCircle;
