// import LogoIcon from "./assets/LogoIcon";
import logo from "./assets/TestLogo.svg";
import moreIcon from "./assets/moreIcon.svg";
import setting from "./assets/setting.png";
import docImage from "./assets/doctorImage.png";
import axios from "axios";
import HomeIcon from "./assets/HomeIcon";
import PatientIcon from "./assets/PatientIcon";
import CalenderIcon from "./assets/CalenderIcon";
import MessageIcon from "./assets/MessageIcon";
import CardIcon from "./assets/CardIcon";
import { useState } from "react";

import DiagnisticHistory from "./DiagnisticHistory";
import SideBar from "./SideBar";
import DiagnisticList from "./DiagnisticList";
import Profile from "./Profile";
import LabResult from "./LabResult";

function App() {
  const [allPatients, setAllPatients] = useState([]);
  const [selectedPBg, setSelectedPbg] = useState(0);
  const [selectedNav, setSelectedNav] = useState(0);
  const [patientData, setPatientData] = useState(null);
  const [index, setIndex] = useState(null);

  const credentials = btoa(`coalition:skills-test`);
  const headers = {
    Authorization: `Basic ${credentials}`,
    "Content-Type": "application/json",
  };

  const openAllPatient = async (idx) => {
    setSelectedNav(idx);
    if (idx === 1) {
      const response = await axios.get(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        { headers }
      );
      setAllPatients(response.data);
    } else {
      setAllPatients([]);
    }
  };

  const selectPatient = (idx, patient) => {
    setSelectedPbg(idx);
    setPatientData(patient);
    setIndex(idx);
  };

  const navbarItems = [
    { name: "Overview", icon: <HomeIcon /> },
    { name: "Patients", icon: <PatientIcon /> },
    { name: "Schedule", icon: <CalenderIcon /> },
    { name: "Message", icon: <MessageIcon /> },
    { name: "Transactions", icon: <CardIcon /> },
  ];

  console.log("RESPONSE", allPatients);
  return (
    <div className="bg-[#F6F7F8]">
      <header className="flex gap-16 justify-between items-center py-3 bg-white rounded-full px-8">
        <div>
          <img src={logo} />
        </div>
        <div className="flex gap-6">
          {navbarItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openAllPatient(idx)}
              className={`rounded-full px-4 py-2 flex gap-2 items-center ${
                selectedNav == idx && "bg-[#01F0D0]"
              }`}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
        <div className="flex gap-3 items-center ">
          <div className="flex gap-3 items-center">
            <img src={docImage} />
            <div>
              <p>Dr. Jose Simmons</p>
              <p>General Practitioner</p>
            </div>
          </div>
          <div className="flex gap-2">
            <img src={setting} alt="setting" />
            <img src={moreIcon} alt="more button" />
          </div>
        </div>
      </header>
      <section className="grid grid-cols-10 my-8 gap-4">
        {/* The Side bar list of patients */}
        <div className=" col-span-2">
          <SideBar
            allPatients={allPatients}
            selectPatient={selectPatient}
            selectedPBg={selectedPBg}
            selectedNav={selectedNav}
          />
        </div>

        <div className=" col-span-6 ">
          <DiagnisticHistory patientData={patientData} index={index} />
          <DiagnisticList patientData={patientData} index={index} />
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-5">
            <Profile patientData={patientData} />
            <LabResult patientData={patientData} />
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
