import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPencilSquare,
  BsPeopleFill,
  BsFillBellFill,
  BsBuildingFillCheck,
  BsListCheck,
  BsGrid1X2Fill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
0;
function Home() {
  const dataOpen = [
    {
      openName: "JAN",
      completedApplications: 50,
      openListings: 200,
    },
    {
      openName: "FEB",
      completedApplications: 100,
      openListings: 300,
    },
    {
      openName: "MAR",
      completedApplications: 150,
      openListings: 400,
    },
    {
      openName: "APR",
      completedApplications: 200,
      openListings: 500,
    },
    {
      openName: "MAY",
      completedApplications: 250,
      openListings: 600,
    },
    {
      openName: "JUN",
      completedApplications: 300,
      openListings: 450,
    },
    {
      openName: "JUL",
      completedApplications: 350,
      openListings: 600,
    },
    {
      openName: "AUG",
      completedApplications: 400,
      openListings: 700,
    },
    {
      openName: "SEP",
      completedApplications: 450,
      openListings: 900,
    },
    {
      openName: "OCT",
      completedApplications: 500,
      openListings: 1000,
    },
    {
      openName: "NOV",
      completedApplications: 550,
      openListings: 1100,
    },
    {
      openName: "DEC",
      completedApplications: 600,
      openListings: 1200,
    },
  ];
  const dataClose = [
    {
      name: "JAN",
      applied: 4000,
      open: 2400,
    },
    {
      name: "FEB",
      applied: 3000,
      open: 1398,
    },
    {
      name: "MAR",
      applied: 2000,
      open: 9800,
    },
    {
      name: "APR",
      applied: 2780,
      open: 3908,
    },
    {
      name: "MAY",
      applied: 1890,
      open: 4800,
    },
    {
      name: "JUN",
      applied: 2390,
      open: 3800,
    },
    {
      name: "JUL",
      applied: 3490,
      open: 6300,
    },
    {
      name: "AUG",
      applied: 3490,
      open: 4500,
    },
    {
      name: "SEP",
      applied: 3490,
      open: 4000,
    },
    {
      name: "OCT",
      applied: 3490,
      open: 8300,
    },
    {
      name: "NOV",
      applied: 3490,
      open: 2300,
    },
    {
      name: "DEC",
      applied: 3490,
      open: 3300,
    },
  ];
  const approvComp = [
    {
      openName: "JAN",
      ApprovedCompanies: 10,
      openBar: 2400,
    },
    {
      openName: "FEB",
      ApprovedCompanies: 15,
      openBar: 1398,
    },
    {
      openName: "MAR",
      ApprovedCompanies: 20,
      openBar: 9800,
    },
    {
      openName: "APR",
      ApprovedCompanies: 25,
      openBar: 3908,
    },
    {
      openName: "MAY",
      ApprovedCompanies: 29,
      openBar: 4800,
    },
    {
      openName: "JUN",
      ApprovedCompanies: 34,
      openBar: 3800,
    },
    {
      openName: "JUL",
      ApprovedCompanies: 35,
      openBar: 6300,
    },
    {
      openName: "AUG",
      ApprovedCompanies: 43,
      openBar: 4500,
    },
    {
      openName: "SEP",
      ApprovedCompanies: 50,
      openBar: 4000,
    },
    {
      openName: "OCT",
      ApprovedCompanies: 59,
      openBar: 8300,
    },
    {
      openName: "NOV",
      ApprovedCompanies: 65,
      openBar: 2300,
    },
    {
      openName: "DEC",
      ApprovedCompanies: 75,
      openBar: 3300,
    },
  ];
  const dataOpenVsClosed = [
    {
      openName: "JAN",
      closedListings: 50,
      openListings: 200,
    },
    {
      openName: "FEB",
      closedListings: 75,
      openListings: 300,
    },
    {
      openName: "MAR",
      closedListings: 75,
      openListings: 400,
    },
    {
      openName: "APR",
      closedListings: 100,
      openListings: 500,
    },
    {
      openName: "MAY",
      closedListings: 150,
      openListings: 600,
    },
    {
      openName: "JUN",
      closedListings: 100,
      openListings: 450,
    },
    {
      openName: "JUL",
      closedListings: 125,
      openListings: 600,
    },
    {
      openName: "AUG",
      closedListings: 150,
      openListings: 700,
    },
    {
      openName: "SEP",
      closedListings: 300,
      openListings: 900,
    },
    {
      openName: "OCT",
      closedListings: 250,
      openListings: 1000,
    },
    {
      openName: "NOV",
      closedListings: 150,
      openListings: 1100,
    },
    {
      openName: "DEC",
      closedListings: 200,
      openListings: 1200,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>ADMIN DASHBOARD</h3>
        <BsGrid1X2Fill className="card_icon" />
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>OPEN LISTINGS</h3>
            <BsPencilSquare className="card_icon" />
          </div>
          <h1>1200</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CLOSED LISTINGS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>123</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Completed Applications</h3>
            <BsListCheck className="card_icon" />
          </div>
          <h1>700</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>APPROVED COMPANY</h3>
            <BsBuildingFillCheck className="card_icon" />
          </div>
          <h1>75</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={dataOpen}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="openName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="openListings" fill="#8884d8" />
            <Bar dataKey="completedApplications" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={dataOpenVsClosed}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="openName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="openListings" fill="#8884d8" />
            <Bar dataKey="closedListings" fill="orange" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={dataOpen}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="openName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="openListings"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="completedApplications"
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={approvComp}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="openName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="ApprovedCompanies" fill="skyblue" label />
            {/* <Bar dataKey="appliedBar" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
