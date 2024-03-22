import { View, Text } from 'react-native';
import React from 'react';
import { Button, Card, CardFooter, H2, XStack } from 'tamagui';
import { Subtitle } from '~/tamagui.config';
import { Paragraph } from 'tamagui';

const InfoCard = () => {
  return (
    <Card bordered size="$7" elevate>
      <Card.Header padded>
        <H2>Lorem Ipsum</H2>
      </Card.Header>
      <Paragraph px={40}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores tempora magni
        corrupti, illo architecto ipsa vitae quidem nesciunt, deleniti porro. Voluptate, iusto
        eaque! Obcaecati explicabo vero ex fugit molestiae?
      </Paragraph>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button>Læs mere..</Button>
      </Card.Footer>
    </Card>
  );
};

export default InfoCard;
