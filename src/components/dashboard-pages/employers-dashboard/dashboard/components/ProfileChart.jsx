import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getmonthlyvacancydata } from "../../../../../services/api/company_api";
import { useState,useEffect } from "react";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Monthly data




const ProfileChart = () => {
  const [monthlyData,setMonthlyData]= useState([]);
  useEffect(()=>{
    const ftch = async() => {
      try {
        const {data} = await getmonthlyvacancydata();
        setMonthlyData(data.values.monthlyData)
      } catch (error) {
        handleApiError(error)
      }
    }

    ftch();
  },[])
  const labels = monthlyData?.map((data) => data.name);

const data = {
  labels,
  datasets: [
    {
      label: "Adi",
      data: monthlyData?.map((data) => data.Adi),
      borderColor: "#1967d2",
      backgroundColor: "#1967d2",
      fill: false,
    },
    {
      label: "Premium",
      data: monthlyData?.map((data) => data.Premium),
      borderColor: "#ffcc00",
      backgroundColor: "#ffcc00",
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: false,
    },
    tooltips: {
      position: "nearest",
      mode: "index",
      intersect: false,
      yPadding: 10,
      xPadding: 10,
      caretSize: 4,
      backgroundColor: "rgba(72, 241, 12, 1)",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "#1967d2",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 4,
    },
  },
};
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Vakansiya sayı</h4>
        {/* <div className="chosen-outer">
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option>
          </select>
        </div> */}
      </div>

      <div className="widget-content">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default ProfileChart;
