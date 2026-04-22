import { useState } from "react";
import {
  ORDER_OPTIONS,
  CHANNEL_OPTIONS,
  YEAR_OPTIONS,
} from "../constants/filters.js";
import { ChevronDown, ChevronUp } from "lucide-react";
const groupedChannels = {
  hindi: CHANNEL_OPTIONS.filter((c) => c.language === "hindi"),
  english: CHANNEL_OPTIONS.filter((c) => c.language === "english"),
  other: CHANNEL_OPTIONS.filter((c) => c.language === "other"),
};

const Filters = ({ orderBy, setOrderBy, setChannel, year, setYear }) => {
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-wrap gap-3  py-4">
      {/* Order Buttons */}
      <div className="flex gap-2">
        {ORDER_OPTIONS.map((item) => {
          const isActive = orderBy === item.value;

          return (
            <button
              key={item.label}
              onClick={() => setOrderBy(item.value)}
              className={`
                px-4 py-2 border text-sm font-medium cursor-pointer
                ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Channel Dropdown */}
      <div className="relative">
        {/* Button */}
        <button
          onClick={() => setIsOpen(true)}
          className={`px-4 py-2 border bg-white text-sm font-medium flex items-center`}
        >
          Channel ({selectedChannels.length})
          <span className={`transition ${isOpen ? "rotate-180" : ""}`}><ChevronDown size={16} /></span>
        </button>

        {/* Drawer */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-end z-50">
            <div className="bg-white w-full max-w-md max-h-[80vh] rounded-t-lg p-4 overflow-y-auto">
              {/* Hindi */}
              <h3 className="text-xs font-semibold text-gray-500 mb-2">
                HINDI CHANNELS
              </h3>
              {groupedChannels.hindi.map((item) => {
                const isSelected = selectedChannels.includes(item.value);

                return (
                  <div
                    key={item.value}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedChannels(
                          selectedChannels.filter((c) => c !== item.value),
                        );
                      } else {
                        setSelectedChannels([...selectedChannels, item.value]);
                      }
                    }}
                    className="flex items-center justify-between py-3 border-b cursor-pointer"
                  >
                    <span>{item.label}</span>

                    {/* Right icon */}
                    {isSelected && (
                      <span className="text-black text-lg">✔</span>
                    )}
                  </div>
                );
              })}

              {/* English */}
              <h3 className="text-xs font-semibold text-gray-500 mt-4 mb-2">
                ENGLISH CHANNELS
              </h3>
              {groupedChannels.english.map((item) => {
                const isSelected = selectedChannels.includes(item.value);

                return (
                  <div
                    key={item.value}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedChannels(
                          selectedChannels.filter((c) => c !== item.value),
                        );
                      } else {
                        setSelectedChannels([...selectedChannels, item.value]);
                      }
                    }}
                    className="flex items-center justify-between py-3 border-b cursor-pointer hover:bg-gray-100 px-2"
                  >
                    <span>{item.label}</span>

                    {/* Right tick */}
                    {isSelected && (
                      <span className="text-black text-lg">✔</span>
                    )}
                  </div>
                );
              })}
              <h3 className="text-xs font-semibold text-gray-500 mt-4 mb-2">
                OTHER CHANNELS
              </h3>
              {groupedChannels.other.map((item) => {
                const isSelected = selectedChannels.includes(item.value);

                return (
                  <div
                    key={item.value}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedChannels(
                          selectedChannels.filter((c) => c !== item.value),
                        );
                      } else {
                        setSelectedChannels([...selectedChannels, item.value]);
                      }
                    }}
                    className="flex items-center justify-between py-3 border-b cursor-pointer hover:bg-gray-100 px-2"
                  >
                    <span>{item.label}</span>

                    {/* Right tick */}
                    {isSelected && (
                      <span className="text-black text-lg">✔</span>
                    )}
                  </div>
                );
              })}

              {/* Actions */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => {
                    setSelectedChannels([]);
                    setChannel([]);
                  }}
                  className="flex-1 border py-2"
                >
                  Clear
                </button>

                <button
                  onClick={() => {
                    setChannel(selectedChannels);
                    setIsOpen(false);
                  }}
                  className="flex-1 bg-gray-700 text-white py-2"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Year Dropdown */}
      <div className="relative">
        {/* Button */}
        <button
          onClick={() => setIsYearOpen(!isYearOpen)}
          className=" px-4 py-2 border text-sm bg-white flex items-center gap-2 font-medium"
        >
          {year || "Year"}
          <span className={`transition ${isYearOpen ? "rotate-180" : ""}`}>
            <ChevronDown size={16} />
          </span>
          
        </button>

        {/* Dropdown */}
        {isYearOpen && (
          <div className="absolute mt-2 w-40 max-h-60 overflow-y-auto bg-[#1F2022] text-white shadow-lg z-50">
            {YEAR_OPTIONS.map((item) => (
              <div
                key={item.value}
                onClick={() => {
                  setYear(item.value);
                  setIsYearOpen(false);
                }}
                className={`px-4 py-3 border-b cursor-pointer flex flex-row items-center justify-between`}
              >
                {item.label}
                {year === item.value && (
                      <span className="text-white text-lg ">✔</span>
                    )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
