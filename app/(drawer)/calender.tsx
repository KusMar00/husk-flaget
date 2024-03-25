import React from 'react';
import { Card, H2, YStack, Paragraph, View, Button, Separator } from 'tamagui';
import FlagCalender from '~/components/FlagCalender';
import { Main } from '~/tamagui.config';

const Page = () => {
  return (
    <Main bc="$blue2" h="100%">
      <YStack px="$5" mt="$5" space="$2">
        <H2>Flagkalender</H2>
        <Paragraph>Få et overblik over kommende flagdage eller tilføj dine egne </Paragraph>
        <Separator borderColor="white" />
        <YStack space mt="$10">
          <FlagCalender />
          <YStack alignItems="center">
            <Button theme="blue" w={300}>
              Tilføj
            </Button>
          </YStack>
        </YStack>
      </YStack>
    </Main>
  );
};

export default Page;
