import React, { useState } from "react";
import PropTypes from "prop-types";
import { get } from "lodash";

const ImageControl = ({ value, forID, onChange }) => {
  const [scale, setScale] = useState(1);
  const imageUrl = get(value, "publicURL");

  const handleScaleChange = (event) => {
    setScale(event.target.value);
  };

  const handleResetScale = () => {
    setScale(1);
  };

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <div>
        <img src={imageUrl} alt="" width={300 * scale} />
      </div>
      <div>
        <label htmlFor={`${forID}_scale`}>Scale:</label>
        <input
          id={`${forID}_scale`}
          type="number"
          min="0.1"
          max="5"
          step="0.1"
          value={scale}
          onChange={handleScaleChange}
        />
        <button type="button" onClick={handleResetScale}>
          Reset Scale
        </button>
      </div>
      <div>
        <label htmlFor={`${forID}_input`}>Image:</label>
        <input
          id={`${forID}_input`}
          type="file"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

ImageControl.propTypes = {
    value: PropTypes.object,
    forID: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default ImageControl;
