import MoreHoriIcon from "./assets/MoreHoriIcon";
import SearchIcon from "./assets/SearchIcon";

function SideBar({ allPatients, selectPatient, selectedPBg, selectedNav }) {
  return (
    <nav className="p-5 bg-white max-h-[1095px] overflow-y-scroll">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold py-7">Patients</h3>
        <SearchIcon />
      </div>

      <div>
        {allPatients.length > 0 ? (
          allPatients.map((patient, idx) => (
            <div
              key={idx}
              onClick={() => selectPatient(idx, patient)}
              className={`flex items-center py-3 cursor-pointer justify-between pr-3 ${
                selectedPBg === idx && "bg-[#D8FCF7]"
              }`}
            >
              <div className="flex items-center gap-4">
                <div>
                  <img src={patient?.profile_picture} alt="profile image" />
                </div>
                <div>
                  <p className="font-bold">{patient?.name}</p>
                  <p className="text-gray-500">{patient?.gender}</p>
                </div>
              </div>
              <MoreHoriIcon />
            </div>
          ))
        ) : (
          <div>{selectedNav == 1 && "Loading..."}</div>
        )}
      </div>
    </nav>
  );
}
export default SideBar;
