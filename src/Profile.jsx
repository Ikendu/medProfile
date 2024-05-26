/* eslint-disable react/prop-types */

import BirthIcon from "./assets/BirthIcon";
import ContactIcon from "./assets/ContactIcon";
import { GenderIcon } from "./assets/GenderIcon";
import InsuranceIcon from "./assets/InsuranceIcon";

/* eslint-disable no-unused-vars */
function Profile({ patientData }) {
  return (
    <div className="bg-white rounded-2xl p-4">
      <div className="flex justify-center">
        <img
          src={patientData?.profile_picture}
          className="w-48"
          alt="profile image"
        />
      </div>
      <p className="text-center my-10 font-bold text-xl">{patientData?.name}</p>
      <div className="flex flex-col gap-7">
        <div className="flex gap-3 items-center">
          <BirthIcon />
          <div>
            <p>Date Of Birth</p>
            <p className="font-bold">{patientData?.date_of_birth}</p>
          </div>
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <GenderIcon />
            <div>
              <p>Gender</p>
              <p className="font-bold">{patientData?.gender}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <ContactIcon />
            <div>
              <p>Contact Info.</p>
              <p className="font-bold">{patientData?.phone_number}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <ContactIcon />
            <div>
              <p>Emergency Contacts</p>
              <p className="font-bold">{patientData?.emergency_contact}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <InsuranceIcon />
            <div>
              <p>Insurance Provider</p>
              <p className="font-bold">{patientData?.insurance_type}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 font-semibold">
        <button className="bg-[#01F0D0] p-2 px-6 rounded-full">
          Show All Information
        </button>
      </div>
    </div>
  );
}
export default Profile;
