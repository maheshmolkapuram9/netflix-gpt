import React, { useRef } from "react";
import { languesOptions } from "./languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguageCode } from "../store/gptSlice";

const SelectElement = () => {
  const language = useSelector((store) => store.gpt.languageCode);
  const dispatch = useDispatch();
  const languageCode = useRef(null);

  const handleChange = (e) => {
    dispatch(changeLanguageCode(e.target.value));
  };

  return (
    <select
      ref={languageCode}
      name="languages"
      className="bg-white px-6 rounded-md py-2 text-2xl font-bold"
      onChange={handleChange}
      value={language}
    >
      {languesOptions.map((language) => (
        <option key={language.code} value={language.code}>
          {language.code}
        </option>
      ))}
    </select>
  );
};

export default SelectElement;
