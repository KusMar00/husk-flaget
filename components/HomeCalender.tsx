import React from 'react';
import { StyleSheet } from 'react-native';
import { Circle, H2, XStack, View, Text, Separator, YStack, ScrollView } from 'tamagui';
import { FlagDayType } from '~/utils';

interface HomeCalenderProps {
  flagDays: Array<FlagDayType>;
}

const HomeCalender = ({ flagDays }: HomeCalenderProps) => {
  return (
    <View p="$4">
      <H2 mb="$2" h={'$6'}>
        <Text col="black">Kalender</Text>
      </H2>
      <ScrollView>
        {flagDays.map((flagDay, index) => (
          <View key={index} mb="$4">
            <XStack alignItems="center" justifyContent="space-between" borderStyle={'solid'}>
              <View
                flex={1}
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
                gap="$3">
                <Circle bc="$red7" size="$1" />
                <Text fontSize={'$6'} fontWeight="600">
                  {flagDay.title}
                </Text>
              </View>
              <View flexDirection="row" w={'20%'} justifyContent="flex-end">
                <Text fontSize={'$4'} col="$gray10">
                  {flagDay.date.getDate()}/{flagDay.date.getMonth()}
                </Text>
              </View>
            </XStack>
            <Separator borderColor={'$gray12'} mt="$4" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeCalender;
