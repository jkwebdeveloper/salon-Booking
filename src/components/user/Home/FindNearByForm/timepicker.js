import React from 'react'
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from 'moment';

function TimePickerInput({ defaultValue }) {
    const value = defaultValue && moment().hour(defaultValue.split(':')[0]).minute(defaultValue.split(':')[1]) || '';
    return (
        <TimePicker format={"HH:mm"} clearIcon={""} showMinute={true} showSecond={false} placeholder="Time" className="text-sm text-black timePicker" name="Hour" id="Hour" style={{ maxWidth: "120px" }} defaultValue={value} />
    )
}

export default TimePickerInput