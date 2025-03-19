import React from 'react'
import { useState } from 'react'
import { forwardRef } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

 
// {startDate, endDate} FilterDatani ichiga
const FilterData = () => {
    const [startDate, setStartDate] = useState(new Date());
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
                selected={startDate}
                onChange={date => setStartDate(date)}
                customInput={<ExampleCustomInput className="border-2 border-gray-400 w-full px-4 py-2 text-sm rounded-md focus:outline-none" />}
                dateFormat="yyyy-MM-dd"
                calendarClassName='bg-base-100'
            />
          </div>
        </div>
    )
}

export default FilterData
