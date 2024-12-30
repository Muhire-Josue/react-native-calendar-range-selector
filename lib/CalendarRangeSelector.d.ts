import React from 'react';
import { type Moment } from 'moment';
interface handleResetSelectedDays {
    handleShowCalendar: (value: boolean) => void;
    handleResetSelectedDays: () => void;
    handleOkPress: () => void;
    startDate: Moment | null;
    endDate: Moment | null;
    setStartDate: (day: Moment | null) => void;
    setEndDate: (day: Moment | null) => void;
}
declare const CalendarRangeSelector: React.FC<handleResetSelectedDays>;
export default CalendarRangeSelector;
