import {
  Button,
  Card,
  CardBackground,
  YStack,
  H1,
  H2,
  H3,
  Paragraph,
  ScrollView,
  Spinner,
} from 'tamagui';
import FlagCalender from '~/components/FlagCalender';
import { Container, Main } from '~/tamagui.config';
import { scrapeAndGetNextFlagDay, FlagDayType } from '~/lib/utils';
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
    <Main>
      <ScrollView>
        <YStack flex={1} alignItems="center" justifyContent="center" space>
          {nextFlagDay === undefined ? (
            <Spinner />
          ) : (
            <Container
              enterStyle={{
                scale: 1.5,
                y: -10,
                opacity: 0,
              }}
              animation="quick"
              elevation="$4"
              style={{
                backgroundColor: 'maroon',
                borderRadius: '35px',
                width: '90%',
                marginTop: 50,
              }}>
              <H2>Næste flagdag er</H2>
              <H1>{nextFlagDay.title}</H1>
              <H3>Om {numberOfDays} dage.</H3>
            </Container>
          )}
          <Card size={'$12'}>
            <Card.Header p={50}>
              <H2>Flagkalender</H2>
              <Paragraph>Få et overblik over kommende flagdage eller tilføj dine egne </Paragraph>
            </Card.Header>
            <YStack px={20}>
              <FlagCalender />
            </YStack>
            <Card.Footer padded alignItems="center" justifyContent="center">
              <Button theme="blue" w={300}>
                Tilføj
              </Button>
            </Card.Footer>
          </Card>
        </YStack>
      </ScrollView>
    </Main>
  );
};

export default Home;
