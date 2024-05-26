/* eslint-disable react/prop-types */
import respiratoryImage from "./assets/respiratory.png";
import temperatureImage from "./assets/temperature.png";
import HeartBPMImage from "./assets/HeartBPM.png";
import PatientChart from "./PatientChart";

function DiagnisticHistory({ patientData }) {
  return (
    <div className="bg-white p-5 rounded-2xl">
      <div className=" p-5">
        <h3>Diagnosis History</h3>
      </div>
      <div>
        <div className="bg-[#F4F0FE] rounded-2xl">
          <p className="text-2xl font-semibold p-3">Blood Pressure</p>
          <div className="grid grid-cols-6 items-center justify-between p-3">
            <div className=" col-span-5">
              <PatientChart patientData={patientData} />
            </div>
            <div className=" col-span-1">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex gap-2 items-center">
                    <div className="w-3 h-3 bg-[#E66FD2] rounded-full"></div>
                    Systolic
                  </div>

                  <p className="text-2xl font-semibold">
                    {
                      patientData?.diagnosis_history?.[0]?.blood_pressure
                        ?.systolic?.value
                    }
                  </p>
                  <div>
                    {
                      patientData?.diagnosis_history?.[0]?.blood_pressure
                        ?.systolic?.levels
                    }
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-slate-300"></div>
                <div>
                  <div className="flex gap-2 items-center">
                    <div className="w-3 h-3 bg-[#8C6FE6] rounded-full"></div>
                    Diastolic
                  </div>

                  <p className="text-2xl font-semibold">
                    {
                      patientData?.diagnosis_history?.[0]?.blood_pressure
                        ?.diastolic?.value
                    }
                  </p>
                  <div>
                    {
                      patientData?.diagnosis_history?.[0]?.blood_pressure
                        ?.diastolic?.levels
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-between pt-5">
          <div className="bg-[#E0F3FA] w-[200px] p-3 rounded-xl">
            <img src={respiratoryImage} />

            <p className="mt-4">Respiratory Rate</p>
            <p className="mb-6 text-4xl font-bold">
              {patientData?.diagnosis_history?.[0]?.respiratory_rate?.value}
              &nbsp;bpm
            </p>
            <p>
              {patientData?.diagnosis_history?.[0]?.respiratory_rate?.levels}
            </p>
          </div>
          <div className="bg-[#FFE6E9] w-[200px] p-3 rounded-xl">
            <img src={temperatureImage} />
            <p className="mt-4">Temperature</p>
            <p className="mb-6 text-4xl font-bold">
              {patientData?.diagnosis_history?.[0]?.temperature?.value}
              °F
            </p>
            <p>{patientData?.diagnosis_history?.[0]?.temperature?.levels}</p>
          </div>
          <div className="bg-[#FFE6F1] w-[200px] p-3 rounded-xl">
            <img src={HeartBPMImage} />
            <p className="mt-4">Heart Rate</p>
            <p className="mb-6 text-4xl font-bold">
              {patientData?.diagnosis_history?.[0]?.heart_rate?.value}
              &nbsp;bpm
            </p>
            <p>{patientData?.diagnosis_history?.[0]?.heart_rate?.levels}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DiagnisticHistory;
