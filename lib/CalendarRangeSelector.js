"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var moment_1 = __importDefault(require("moment"));
var MaterialIcons_1 = __importDefault(require("react-native-vector-icons/MaterialIcons"));
var styles_1 = __importDefault(require("./styles"));
var CalendarRangeSelector = function (_a) {
    var handleResetSelectedDays = _a.handleResetSelectedDays, startDate = _a.startDate, endDate = _a.endDate, setStartDate = _a.setStartDate, setEndDate = _a.setEndDate, handleShowCalendar = _a.handleShowCalendar;
    var _b = (0, react_1.useState)((0, moment_1.default)()), currentDate = _b[0], setCurrentDate = _b[1];
    var _c = (0, react_1.useState)(false), dropdownVisible = _c[0], setDropdownVisible = _c[1];
    var _d = (0, react_1.useState)(true), isSelectingYear = _d[0], setIsSelectingYear = _d[1];
    var handleDayPress = function (day) {
        if (startDate === null || endDate !== null) {
            setStartDate(day);
            setEndDate(null);
        }
        else if (startDate !== null && endDate === null) {
            if (day.isBefore(startDate, 'day')) {
                setEndDate(startDate);
                setStartDate(day);
            }
            else {
                setEndDate(day);
            }
        }
    };
    var generateCalendar = function () {
        var startDay = currentDate.clone().startOf('month').startOf('week');
        var endDay = currentDate.clone().endOf('month').endOf('week');
        var calendar = [];
        var date = startDay.clone().subtract(1, 'day');
        while (date.isBefore(endDay, 'day')) {
            calendar.push(Array(7).fill(0).map(function () { return date.add(1, 'day').clone(); }));
        }
        return calendar;
    };
    var calendar = generateCalendar();
    var onMonthSelect = function (monthIndex) {
        var newDate = currentDate.clone().month(monthIndex);
        setCurrentDate(newDate);
        setIsSelectingYear(true);
        setDropdownVisible(false);
    };
    var onYearSelect = function (year) {
        var newDate = currentDate.clone().year(year);
        setCurrentDate(newDate);
        setIsSelectingYear(false);
    };
    var getMonths = function () {
        return currentDate.year() === (0, moment_1.default)().year()
            ? moment_1.default.months().slice(0, (0, moment_1.default)().month() + 1)
            : moment_1.default.months();
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles_1.default.container },
        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function () { setDropdownVisible(true); }, style: styles_1.default.monthSelectorButton },
            react_1.default.createElement(react_native_1.Text, { style: styles_1.default.monthSelectorText },
                "Select Date: ",
                currentDate.format('MMMM YYYY')),
            react_1.default.createElement(MaterialIcons_1.default, { name: "arrow-drop-down", size: 24, color: "black" })),
        react_1.default.createElement(react_native_1.Modal, { animationType: "fade", transparent: true, visible: dropdownVisible, onRequestClose: function () { setDropdownVisible(false); } },
            react_1.default.createElement(react_native_1.View, { style: styles_1.default.modalView },
                react_1.default.createElement(react_native_1.ScrollView, { style: styles_1.default.dropdown }, isSelectingYear
                    ? (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(react_native_1.Text, { style: styles_1.default.dropdownLabel }, "Select Year"),
                        Array.from({ length: 10 }, function (_, i) { return (0, moment_1.default)().year() - i; }).map(function (year, index) { return (react_1.default.createElement(react_native_1.TouchableOpacity, { key: index, style: styles_1.default.dropdownItem, onPress: function () { onYearSelect(year); } },
                            react_1.default.createElement(react_native_1.Text, null, year))); })))
                    : (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(react_native_1.Text, { style: styles_1.default.dropdownLabel }, "Select Month"),
                        getMonths().map(function (month, index) { return (react_1.default.createElement(react_native_1.TouchableOpacity, { key: index, style: styles_1.default.dropdownItem, onPress: function () { onMonthSelect(index); } },
                            react_1.default.createElement(react_native_1.Text, null, month))); })))),
                react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles_1.default.closeButton, onPress: function () { setDropdownVisible(false); } },
                    react_1.default.createElement(react_native_1.Text, { style: styles_1.default.closeButtonText }, "CLOSE")))),
        react_1.default.createElement(react_native_1.View, { style: styles_1.default.weekdays }, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(function (day) { return (react_1.default.createElement(react_native_1.Text, { key: day, style: [styles_1.default.weekday, { color: '#7BB2BE', fontSize: 16, fontWeight: 'bold' }] }, day)); })),
        calendar.map(function (week, index) { return (react_1.default.createElement(react_native_1.View, { key: index, style: styles_1.default.week }, week.map(function (day) { return (react_1.default.createElement(react_native_1.TouchableOpacity, { key: day.format('DD MM YYYY'), style: [
                styles_1.default.day,
                (day.isSame(startDate, 'day') || day.isSame(endDate, 'day')) ? styles_1.default.selectedDay : {},
                ((startDate != null) && (endDate != null) && day.isAfter(startDate, 'day') && day.isBefore(endDate, 'day')) ? styles_1.default.inRangeDay : {}
            ], onPress: function () { handleDayPress(day); } },
            react_1.default.createElement(react_native_1.Text, { style: [
                    styles_1.default.dayText,
                    (day.isSame(startDate, 'day') || day.isSame(endDate, 'day')) ? styles_1.default.selectedDayText : {},
                    day.isSame((0, moment_1.default)(), 'day') ? styles_1.default.currentDayText : {}
                ] }, day.format('D')))); }))); }),
        react_1.default.createElement(react_native_1.View, { style: styles_1.default.actionContainer },
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles_1.default.actionButton, onPress: handleResetSelectedDays },
                react_1.default.createElement(react_native_1.Text, { style: styles_1.default.actionText }, "CLEAR")),
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles_1.default.actionButton, onPress: function () { handleShowCalendar(false); } },
                react_1.default.createElement(react_native_1.Text, { style: styles_1.default.actionText }, "OK")))));
};
exports.default = CalendarRangeSelector;
