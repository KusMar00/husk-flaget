import { Button, Card, CardBackground, Paragraph, ScrollView } from 'tamagui';
import { YStack, H2 } from 'tamagui';
import FlagCalender from '~/components/FlagCalender';
import { Container, Main } from '~/tamagui.config';

const Home = () => {
  return (
    <Main>
      <ScrollView>
        <YStack flex={1} alignItems="center" justifyContent="center">
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
