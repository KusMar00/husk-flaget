import { Calendar } from 'react-native-calendars';
import React from 'react';

const FlagCalender = () => {
  return (
    <Calendar
      style={{
        borderRadius: 25,
        height: 375,
        width: '100%',
      }}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        textSectionTitleDisabledColor: '#d9e1e8',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: 'orange',
        disabledArrowColor: '#d9e1e8',
        monthTextColor: 'blue',
        indicatorColor: 'blue',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
      }}
      onDayPress={(day) => {
        console.log('selected day', day);
      }}
    />
  );
};

export default FlagCalender;
