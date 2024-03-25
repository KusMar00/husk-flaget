import { YStack, H1, H2, Text, Spinner, View, Separator, Circle, XStack, Paragraph } from 'tamagui';
import { scrapeAndGetNextFlagDay, FlagDayType } from '~/utils';
import { useEffect, useState } from 'react';

const Home = () => {
  const [nextFlagDay, setNextFlagDay] = useState<FlagDayType>();
  const [numberOfDays, setNumberOfDays] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await scrapeAndGetNextFlagDay();
      setNextFlagDay(data.flagDay);
      setNumberOfDays(data.days);
    };

    fetchData();
  }, []);

  return (
    <View alignItems="center">
      {nextFlagDay === undefined ? (
        <Spinner />
      ) : (
        <YStack bc={'$blue2'} p={'$5'} w={'100%'} h={'100%'} space={'$5'}>
          <H1>Godmorgen ☀️</H1>
          <Paragraph fontSize="$7">Her finder du information om den kommende flagdag</Paragraph>
          <Separator borderColor={'white'} />
          <YStack alignItems="center" space={'$5'}>
            <XStack
              mt="$10"
              separator={<Separator alignSelf="stretch" vertical borderColor={'white'} />}
              gap={'$4'}
              alignItems="center"
              justifyContent="center"
              borderColor={'white'}
              borderWidth={'$1.5'}
              borderRadius={'$7'}
              bc={'$blue3'}
              p={'$3'}
              borderStyle={'solid'}>
              <Text fontSize={'$8'} col={'white'}>
                {nextFlagDay.title}
              </Text>
              <Text fontSize={'$8'} col={'white'}>
                {nextFlagDay.date.getDate()}/{nextFlagDay.date.getMonth()}
              </Text>
              <Text fontSize={'$8'}>🏳️‍🌈</Text>
            </XStack>
            <Circle
              mt="$5"
              size={170}
              backgroundColor="$blue3"
              bordered
              borderWidth={'$1.5'}
              borderColor={'white'}
              elevation="$3">
              <Text textAlign="center" col={'white'} fontSize={'$12'}>
                {numberOfDays}
              </Text>
              <Text textAlign="center" col={'white'} fontSize={'$7'}>
                Dage
              </Text>
            </Circle>
          </YStack>
        </YStack>
      )}
    </View>
  );
};

export default Home;
