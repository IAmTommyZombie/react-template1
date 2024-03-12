import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const Booking = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
      <form className="lg:flex lg:justifiy-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2">
            <option value="grande_antigua">Grande Antigua</option>
            <option value="key_west">Key West</option>
            <option value="maldives">Maldives</option>
            <option value="cozumel">Cozumel</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-In</label>
            <div>
              <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-Out</label>
            <div className="flex items-center">
              <DatePicker
                className="mr-2"
                selected={date}
                onChange={(date) => setDate(date)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col my-2 p-2 w-full">
          <label>Search</label>
          <button className="w-full">Rates & Availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
