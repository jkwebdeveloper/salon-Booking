import React from 'react'
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

function TimePickerInput() {
    return (
        <TimePicker format={"HH:mm"} clearIcon={""} showMinute={true} showSecond={false} placeholder="Time" className="text-sm text-black timePicker" name="Hour" id="Hour" style={{ maxWidth: "120px" }} defaultValue={''} />
    )
}

export default TimePickerInput