import { YStack, H1, H2, Text, Spinner, View, Separator, Circle, XStack } from 'tamagui';
import { scrapeAndGetNextFlagDay, FlagDayType } from '~/utils';
import { useEffect, useState } from 'react';
import CountdownCircle from '~/components/CountdownCircle';
import HomeCalender from '~/components/HomeCalender';

const Home = () => {
  const [flagDays, setFlagDays] = useState<Array<FlagDayType>>([]);
  const [numberOfDays, setNumberOfDays] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await scrapeAndGetNextFlagDay();
      let sliceIndex = 0;
      let today = new Date();
      data.allDays.forEach((day, index) => {
        if (day.date < today) {
          sliceIndex = index;
        }
      });

      setFlagDays(data.allDays.slice(sliceIndex + 1));
      setNumberOfDays(data.days);
    };

    fetchData();
  }, []);

  return (
    <View>
      {flagDays === undefined ? (
        <Spinner />
      ) : (
        <YStack bc={'white'} w={'100%'} h={'100%'}>
          <CountdownCircle numberOfDays={numberOfDays} />
          <HomeCalender flagDays={flagDays} />
        </YStack>
      )}
    </View>
  );
};

export default Home;
