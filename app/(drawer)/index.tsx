import { YStack, H1, H2, Text, Spinner, View, Separator, Circle, XStack } from 'tamagui';
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
    <View>
      {nextFlagDay === undefined ? (
        <Spinner />
      ) : (
        <YStack bc={'white'} w={'100%'} h={'100%'} space={'$5'}>
          <YStack mx="$4" space="$5">
            <Circle
              alignSelf="center"
              mt="$5"
              size={275}
              backgroundColor="white"
              bordered
              borderWidth={'$2'}
              borderColor={'$blue7'}
              elevation="$1">
              <Text textAlign="center" col="$blue7" fontSize={'$12'}>
                {numberOfDays}
              </Text>
              <Text textAlign="center" col="$gray10" fontSize={'$5'}>
                Dage til næste flagdag
              </Text>
            </Circle>
            <H2>
              <Text col="black">Kalender</Text>
            </H2>
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
          </YStack>
        </YStack>
      )}
    </View>
  );
};

export default Home;
