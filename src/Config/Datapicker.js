import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const  DataPicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker className="crm-datapicker mx-2"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        popperClassName="some-custom-class"
        popperPlacement="top-end"
        popperModifiers={[
          {
            name: "offset",
            options: {
              offset: [5, 10],
            },
          },
          {
            name: "preventOverflow",
            options: {
              rootBoundary: "viewport",
              tether: false,
              altAxis: true,
            },
          },
        ]}
      />
    );
  };

  export default DataPicker;