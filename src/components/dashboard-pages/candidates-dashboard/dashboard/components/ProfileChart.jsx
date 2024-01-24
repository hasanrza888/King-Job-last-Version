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
import { faker } from "@faker-js/faker";
import './blur.css'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
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

const labels = ["January", "February", "March", "April", "May", "June"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 400 })),
      borderColor: "#1967d2",
      backgroundColor: "#1967d2",
      data: [196, 132, 215, 362, 210, 252],
      fill: false,
    },
  ],
};

const ProfileChart = () => {
  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(255, 255, 200, 0.8)",
    backdropFilter: "blur(10px)", // Adjust the blur radius as needed
    pointerEvents: "none", // Allow interaction with elements behind the overlay
  };
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Profilə baxış</h4>
        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Son 1 ay</option>
            <option>Son 3 ay</option>
            <option>Son 5 ay</option>
            <option>Son 7 ay</option>
            <option>Son 9 ay</option>
          </select>
        </div>
      </div>
      {/* End widget top bar */}

      <div className="widget-content chart-container" >
      <button title="Profil analizi üçün premium hesab almalısız" className="premium-button">Abunə ol</button>
        <Line options={options} data={data} />
      </div>
      {/* End  profile chart */}
    </div>
  );
};

export default ProfileChart;
