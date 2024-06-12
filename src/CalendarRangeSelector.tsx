import React, { useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView, Modal } from 'react-native';
import moment, { type Moment } from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface handleResetSelectedDays {
  handleShowCalendar: (value: boolean) => void
  handleResetSelectedDays: () => void
  startDate: Moment | null
  endDate: Moment | null
  setStartDate: (day: Moment | null) => void
  setEndDate: (day: Moment | null) => void
}

const CalendarRangeSelector: React.FC<handleResetSelectedDays> = ({
  handleResetSelectedDays,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  handleShowCalendar

}) => {
  const [currentDate, setCurrentDate] = useState<Moment>(moment());
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [isSelectingYear, setIsSelectingYear] = useState<boolean>(true);

  const handleDayPress = (day: Moment): void => {
    if (startDate === null || endDate !== null) {
      setStartDate(day);
      setEndDate(null);
    } else if (startDate !== null && endDate === null) {
      if (day.isBefore(startDate, 'day')) {
        setEndDate(startDate);
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    }
  };

  const generateCalendar = (): Moment[][] => {
    const startDay = currentDate.clone().startOf('month').startOf('week');
    const endDay = currentDate.clone().endOf('month').endOf('week');
    const calendar: Moment[][] = [];
    const date = startDay.clone().subtract(1, 'day');
    while (date.isBefore(endDay, 'day')) {
      calendar.push(
        Array(7).fill(0).map(() => date.add(1, 'day').clone())
      );
    }
    return calendar;
  };
  const calendar = generateCalendar();

  const onMonthSelect = (monthIndex: number): void => {
    const newDate = currentDate.clone().month(monthIndex);
    setCurrentDate(newDate);
    setIsSelectingYear(true);
    setDropdownVisible(false);
  };

  const onYearSelect = (year: number): void => {
    const newDate = currentDate.clone().year(year);
    setCurrentDate(newDate);
    setIsSelectingYear(false);
  };

  const getMonths = (): string[] => {
    return currentDate.year() === moment().year()
      ? moment.months().slice(0, moment().month() + 1)
      : moment.months();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { setDropdownVisible(true); }} style={styles.monthSelectorButton}>
        <Text style={styles.monthSelectorText}>Select Date: {currentDate.format('MMMM YYYY')}</Text>
        <Icon name="arrow-drop-down" size={24} color="black" />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={dropdownVisible}
        onRequestClose={() => { setDropdownVisible(false); }}
      >
        <View style={styles.modalView}>
          <ScrollView style={styles.dropdown}>
            {isSelectingYear
              ? (
              <>
                <Text style={styles.dropdownLabel}>Select Year</Text>
                {Array.from({ length: 10 }, (_, i) => moment().year() - i).map((year, index) => (
                  <TouchableOpacity key={index} style={styles.dropdownItem} onPress={() => { onYearSelect(year); }}>
                    <Text>{year}</Text>
                  </TouchableOpacity>
                ))}
              </>
                )
              : (
              <>
                <Text style={styles.dropdownLabel}>Select Month</Text>
                {getMonths().map((month, index) => (
                  <TouchableOpacity key={index} style={styles.dropdownItem} onPress={() => { onMonthSelect(index); }}>
                    <Text>{month}</Text>
                  </TouchableOpacity>
                ))}
              </>
                )}
          </ScrollView>
          <TouchableOpacity style={styles.closeButton} onPress={() => { setDropdownVisible(false); }}>
            <Text style={styles.closeButtonText}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.weekdays}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <Text key={day} style={[styles.weekday, { color: '#7BB2BE', fontSize: 16, fontWeight: 'bold' }]}>{day}</Text>
        ))}
      </View>
      {calendar.map((week, index) => (
        <View key={index} style={styles.week}>
          {week.map(day => (
            <TouchableOpacity
              key={day.format('DD MM YYYY')}
              style={[
                styles.day,
                (day.isSame(startDate, 'day') || day.isSame(endDate, 'day')) ? styles.selectedDay : {},
                ((startDate != null) && (endDate != null) && day.isAfter(startDate, 'day') && day.isBefore(endDate, 'day')) ? styles.inRangeDay : {}
              ]}
              onPress={() => { handleDayPress(day); }}
            >
              <Text style={[
                styles.dayText,
                (day.isSame(startDate, 'day') || day.isSame(endDate, 'day')) ? styles.selectedDayText : {},
                day.isSame(moment(), 'day') ? styles.currentDayText : {}
              ]}>{day.format('D')}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <View style={styles.actionContainer}>
      <TouchableOpacity style={styles.actionButton} onPress={handleResetSelectedDays}>
          <Text style={styles.actionText}>CLEAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => { handleShowCalendar(false); }}>
          <Text style={styles.actionText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CalendarRangeSelector;
