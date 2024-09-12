import React from "react";
import DaumPostcode from "react-daum-postcode";
import "../assets/css/AddressSearch.css";

function AddressSearch() {
  const handleComplete = (data) => {
    const fullAddress = data.address;

    window.opener.handleAddressSelect(fullAddress);
    window.close();
  };

  return (
    <div className="address-search-container">
      <div className="daum-postcode">
        <DaumPostcode onComplete={handleComplete} />
      </div>
    </div>
  );
}

export default AddressSearch;
