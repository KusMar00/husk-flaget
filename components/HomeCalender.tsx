import React from 'react';
import { Circle, H2, XStack, View, Text, Separator, YStack, ScrollView } from 'tamagui';
import { FlagDayType } from '~/utils';

interface HomeCalenderProps {
  flagDays: Array<FlagDayType>;
}

const HomeCalender = ({ flagDays }: HomeCalenderProps) => {
  return (
    <View>
      <H2 p="$3" mb="$2">
        <Text col="black">Kalender</Text>
      </H2>
      <ScrollView p="$3" gap="$3">
        {flagDays.map((flagDay, index) => (
          <View key={index} gap="$3">
            <XStack alignItems="center" justifyContent="space-between" borderStyle={'solid'}>
              <View
                flex={1}
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
                gap="$2">
                <Circle bc="$blue7" size="$1" />
                <Text fontSize={'$8'} fontWeight="400">
                  {flagDay.title}
                </Text>
              </View>
              <View flexDirection="row" gap="$4">
                <Text fontSize={'$6'} col="$gray10">
                  {flagDay.date.getDate()}/{flagDay.date.getMonth()}
                </Text>
                <Text fontSize={'$6'}>Officiel</Text>
              </View>
            </XStack>
            <Separator borderColor={'$gray10'} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeCalender;
