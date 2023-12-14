import React from "react";

const DonorCardComponent = ({
  data,
  image,
  donorName,
  donorAddress,
  description,
  bloodGroup,
  age,
  weight,
  height,
  extraColumnLeft,
  extraColumnRight,
}) => {
  return (
    <div>
      <div className="w-[310px] h-[460px] bg-white rounded-xl shadow-bottom-left-right">
        <div className="w-full h-[90px] bg-[#E11B22B2] rounded-tl-xl rounded-tr-xl flex items-center px-6 gap-6">
          <div>
            <img src={image || data?.image} alt="" className="w-12 h-12 rounded-full" />
          </div>
          <div className="">
            <p className="text-base font-bold text-white">{donorName}</p>
            <p className="mt-2 text-xs text-white">{donorAddress}</p>
          </div>
        </div>

        <div className="mx-6 mt-3">
          <table className="w-full">
            <tbody>
              <tr>
                <td colSpan={3}>
                  <div>
                    <p className="text-[12px] text-justify">{description}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="w-36 text-sm">
                  <div className="mt-2 text-[#444]">
                    <p>Blood Group</p>
                  </div>
                </td>
                <td className="w-2">
                  <div className="mt-2">:</div>
                </td>
                <td>
                  <div>
                    <p className="font-bold text-sm text-[#444] ml-4 mt-2">
                      {bloodGroup}
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="w-36 text-sm">
                  <div className="mt-2 text-[#444]">
                    <p>Age(Years)</p>
                  </div>
                </td>
                <td className="w-2">
                  <div className="mt-2">:</div>
                </td>
                <td>
                  <div>
                    <p className="font-bold text-sm text-[#444] ml-4 mt-2">
                      {age}
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="w-36 text-sm">
                  <div className="mt-2 text-[#444]">
                    <p>Weight(Kg)</p>
                  </div>
                </td>
                <td className="w-2">
                  <div className="mt-2">:</div>
                </td>
                <td>
                  <div>
                    <p className="font-bold text-sm text-[#444] ml-4 mt-2">
                      {weight}
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="w-36 text-sm">
                  <div className="mt-2 text-[#444]">
                    <p>Height(feet)</p>
                  </div>
                </td>
                <td className="w-2">
                  <div className="mt-2">:</div>
                </td>
                <td>
                  <div>
                    <p className="font-bold text-sm text-[#444] ml-4 mt-2">
                      {height}
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="w-36 text-sm">
                  <div className="mt-2 text-[#444]">
                    <p>{extraColumnLeft}</p>
                  </div>
                </td>
                <td className="w-2">
                  <div className="mt-2">:</div>
                </td>
                <td>
                  <div>
                    <p className="font-bold text-sm text-[#444] ml-4 mt-2">
                      {extraColumnRight}
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonorCardComponent;
