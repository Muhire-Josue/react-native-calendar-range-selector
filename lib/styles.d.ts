declare const styles: {
    container: {
        padding: number;
        backgroundColor: string;
        alignItems: "center";
        justifyContent: "center";
    };
    monthSelectorButton: {
        flexDirection: "row";
        alignItems: "center";
        justifyContent: "center";
        marginBottom: number;
    };
    monthSelectorText: {
        fontSize: number;
        marginRight: number;
        color: string;
    };
    modalView: {
        marginTop: number;
        marginHorizontal: number;
        backgroundColor: string;
        borderRadius: number;
        padding: number;
        alignItems: "center";
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
    };
    dropdown: {
        maxHeight: number;
        width: number;
    };
    dropdownLabel: {
        fontSize: number;
        fontWeight: "bold";
        marginTop: number;
        marginBottom: number;
    };
    dropdownItem: {
        padding: number;
        borderBottomWidth: number;
        borderBottomColor: string;
    };
    closeButton: {
        marginTop: number;
    };
    closeButtonText: {
        fontSize: number;
        color: string;
    };
    weekdays: {
        flexDirection: "row";
        marginBottom: number;
    };
    weekday: {
        flex: number;
        textAlign: "center";
    };
    week: {
        flexDirection: "row";
    };
    day: {
        flex: number;
        padding: number;
        alignItems: "center";
        borderRadius: number;
    };
    dayText: {
        textAlign: "center";
    };
    currentDayText: {
        color: string;
        fontWeight: "bold";
    };
    selectedDay: {
        backgroundColor: string;
        borderRadius: number;
    };
    selectedDayText: {
        color: string;
    };
    inRangeDay: {
        backgroundColor: string;
    };
    actionContainer: {
        flexDirection: "row";
        justifyContent: "flex-end";
        alignItems: "center";
        marginTop: number;
        width: "93%";
    };
    actionButton: {
        marginLeft: "10%";
    };
    actionText: {
        fontSize: number;
        color: string;
    };
};
export default styles;
