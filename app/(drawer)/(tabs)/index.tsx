import { YStack, H2, Separator, Theme, Button } from 'tamagui';

import EditScreenInfo from '../../../components/edit-screen-info';

export default function TabOneScreen() {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>Tab Uno</H2>
        <Separator />
        <Button>Press Me</Button>
        <EditScreenInfo path="app/(drawer)/(tabs)/index.tsx" />
      </YStack>
    </Theme>
  );
}
