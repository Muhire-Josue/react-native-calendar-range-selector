"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    monthSelectorButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    monthSelectorText: {
        fontSize: 16,
        marginRight: 5,
        color: 'black'
    },
    modalView: {
        marginTop: 150,
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    dropdown: {
        maxHeight: 300,
        width: 250
    },
    dropdownLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    closeButton: {
        marginTop: 10
    },
    closeButtonText: {
        fontSize: 16,
        color: '#7BB2BE'
    },
    weekdays: {
        flexDirection: 'row',
        marginBottom: 10
    },
    weekday: {
        flex: 1,
        textAlign: 'center'
    },
    week: {
        flexDirection: 'row'
    },
    day: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
        borderRadius: 8
    },
    dayText: {
        textAlign: 'center'
    },
    currentDayText: {
        color: '#7BB2BE',
        fontWeight: 'bold'
    },
    selectedDay: {
        backgroundColor: '#7BB2BE',
        borderRadius: 8
    },
    selectedDayText: {
        color: 'white'
    },
    inRangeDay: {
        backgroundColor: '#B2E0F8'
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 20,
        width: '93%'
    },
    actionButton: {
        marginLeft: '10%'
    },
    actionText: {
        fontSize: 18,
        color: '#7BB2BE'
    }
});
exports.default = styles;
