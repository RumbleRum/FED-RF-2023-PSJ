
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function DateRangePicker (){

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };
    
    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    return(
    <>
        <label style={{ fontSize: "20px" }}>체크인: </label>
            <DatePicker className='stardate' selected={startDate} onChange={handleStartDateChange} dateFormat="yyyy-MM-dd"/>
        <label style={{ fontSize: "20px" }}>체크아웃: </label>
            <DatePicker className='endate' selected={endDate} onChange={handleEndDateChange} dateFormat="yyyy-MM-dd"/>
    </>
    );
};