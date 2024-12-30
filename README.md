# react-native-calendar-range-selector

[react-native-calendar-range-selector](https://www.npmjs.com/package/react-native-calendar-range-selector) is an npm library for selecting date ranges with a user-friendly calendar interface. It uses `moment.js` and `react-native-vector-icons` to offer a seamless and customizable experience, allowing users to select either two dates (start and end) or a single date. Perfect for booking systems, scheduling apps, and any date-related functionality, this library is easy to integrate and visually appealing, enhancing date input in any React Native project.

## Dependencies

- `moment.js`
- `react-native-vector-icons`
- `react-native`

## Requirements

- React Native 0.64 or higher

## Installation

To install the library, run the following command using npm or yarn:

```bash
npm install react-native-calendar-range-selector
```

```bash
yarn add react-native-calendar-range-selector
```

## Usage
Here is a simple example of how to use the react-native-calendar-range-selector 

```ts
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { type Moment } from 'moment';
import { CalendarRangeSelector } from 'react-native-calendar-range-selector';

const App = (): React.ReactNode => {
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const handleResetSelectedDays = (): void => {
    setStartDate(null);
    setEndDate(null);
  };

  const handleShowCalendar = (value: boolean): void => {
    setShowCalendar(value);
  };

  const handleOnPress = (): void => {
    handleShowCalendar(true);
  };

  return (
    <View>
      <Button title="Show Calendar" onPress={handleOnPress} />
      {showCalendar && (
        <CalendarRangeSelector
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          handleResetSelectedDays={handleResetSelectedDays}
          handleShowCalendar={handleShowCalendar}
        />
      )}
    </View>
  );
};

export default App;


```

## Parameters
---
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| startDate | `Moment | null` | The starting date of the selected range. |
| endDate | `(day: Moment | null) => void` | The ending date of the selected range. |
| setStartDate | `Moment | null` | Function to set the starting date. |
| setEndDate | `(day: Moment | null) => Function to set the ending date. |
| handleResetSelectedDays | `() => void` | Function to reset the selected days. |
| handleShowCalendar | `(value: boolean) => void` | Function to show or hide the calendar. |
| handleOkPress | `() => void` | Function to handle when the  `Ok` button is clicked|

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contributor
[Muhire Josué](https://github.com/Muhire-Josue)
