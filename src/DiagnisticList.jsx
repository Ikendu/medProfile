/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function DiagnisticList({ patientData }) {
  return (
    <div className="bg-white p-5 mt-10 rounded-2xl max-h-[250px] overflow-y-scroll">
      <div>
        <h3 className="text-2xl font-semibold m-5">Diagnostic List</h3>
        <ul className="grid grid-cols-3 gap-28 w-full font-semibold text-lg p-3 px-6 rounded-full bg-[#F6F7F8]">
          <li>Problem/Diagnosis</li>
          <li className="w-80 -ml-20">Description</li>
          <li>Status</li>
        </ul>
        <div>
          {patientData?.diagnostic_list?.map((items, idx) => {
            return (
              <ul
                key={idx}
                className="grid grid-cols-3 gap-28  w-full  text-xs mt-10 mx-5"
              >
                <li>{items?.name}</li>
                <li className="w-80 -ml-24">{items?.description}</li>
                <li className="-ml-7">{items?.status}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default DiagnisticList;
