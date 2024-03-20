import { YStack, H2, Theme } from 'tamagui';

const Home = () => {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>Home</H2>
      </YStack>
    </Theme>
  );
};

export default Home;
