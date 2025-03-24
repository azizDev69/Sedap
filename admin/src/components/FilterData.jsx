import React, { use } from 'react'
import { useState } from 'react'
import { forwardRef } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

 
// {startDate, endDate} FilterDatani ichiga
const FilterData = () => {
    const [value, setValue] = useState({
        startDate: '2024-12-01T00:00:00Z',
        endDate: '2024-12-31T00:00:00Z'
    });
    const [data, setData] = useState([]);
    const [previousData, setPrevuousData] = useState([]);
    const [tempDates, setTempDates] = useState([]);

    const handleDateChange = (dates, openCalendar) => {
        if (!dates || dates.length === 0) {
            console.log('Select dates');
            return;
            
        }

        setTempDates(dates);


        if (dates.length === 2) {
            const formattedStartDate = dates[0]?.fromat('YYYY-MM-DDTHH:mm:ssZ');
            const formattedEndDate = dates[1]?.format('YYYY-MM-DDTHH:mm:ssZ');

            const newValue = {startDate: formattedStartDate, endDate: formattedEndDate};
            setValue(newValue);
            console.log('Selected Dates', newValue);
            
        }
    }

    const ExampleCustomInput = forwardRef(
        ({ value, onClick, className }, ref) => (
            <button className={className} onClick={onClick} ref={ref}>
                {value}
            </button>
        ),
    );
    return (
        <div className='bg-base-100 p-4 rounded-2xl'>
          <div>
            <label className='text-sm font-medium p-5'>Start Date</label>
            <br />
            <DatePicker
                value={tempDates.length > 0 ? tempDates : [value.startDate, value.endDate]}
                onChange={(dates, openCalendar) => handleDateChange(dates, openCalendar)}
                range
                numberOfMonths={2}
                render={(value, openCalendar) => {
                   
                }}
                customInput={<ExampleCustomInput className="border-2 border-gray-400 w-full px-4 py-2 text-sm rounded-md focus:outline-none" />}
                dateFormat="yyyy-MM-dd"
                calendarClassName='bg-base-100'
            />
          </div>
        </div>
    )
}

export default FilterData
