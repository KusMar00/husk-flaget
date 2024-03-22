import { Main, ScrollView, YStack } from 'tamagui';
import React from 'react';
import { Container } from '~/tamagui.config';
import InfoCard from '~/components/InfoCard';

const info = () => {
  return (
    <ScrollView>
      <Container>
        <YStack space>
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </YStack>
      </Container>
    </ScrollView>
  );
};
export default info;
