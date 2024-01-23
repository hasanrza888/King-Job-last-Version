import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  import { useState,useEffect } from "react";
  import { getapplyerlevelinterval } from "../../../../../services/api/company_api";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  // Data

  
  const ApplyingLevelCart = () => {
    const [applyerdata,setApplyerData] = useState([]);
    useEffect(()=>{
        const ftch = async () => {
            try {
                const {data} = await getapplyerlevelinterval();
                setApplyerData(data.data)
            } catch (error) {
                handleApiError(error)
            }
        }
        ftch();
    },[])
    const labels = applyerdata?.map(applyinfo=>applyinfo.persentageInterval+" %");
    const data1 = applyerdata?.map(applyinfo=>applyinfo.numberofapplyers);
    const data = {
        labels: labels,
        datasets: [
          {
            label: "Müraciətçilərin sayı",
            data: data1, // Replace this with the actual data
            backgroundColor: "#1967d2", // You can choose a different color
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
        scales: {
          x: {
            type: 'category',
          },
          y: {
            beginAtZero: true,
            max: 350, // Adjust the max value based on your data
          },
        },
      };
    return (
      <div className="tabs-box">
        <div className="widget-title">
          <h4>Müraciətçi sayı</h4>
        </div>
  
        <div className="widget-content">
          <Bar options={options} data={data} />
        </div>
      </div>
    );
  };
  
  export default ApplyingLevelCart;
  