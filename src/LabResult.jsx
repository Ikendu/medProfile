import DownloadIcon from "./assets/DownloadIcon";

function LabResult({ patientData }) {
  return (
    <div className="bg-white p-3 rounded-2xl max-h-[310px] overflow-y-scroll">
      <h3 className="text-2xl font-bold">Lab Results</h3>
      <div>
        {patientData?.lab_results?.map((item, idx) => (
          <ul key={idx}>
            <li className="p-2 py-6 flex justify-between">
              {item} <DownloadIcon />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
export default LabResult;
