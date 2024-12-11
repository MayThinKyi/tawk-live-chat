"use client";
import React from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
const TawkWidget = () => {
  const onLoad = () => {
    console.log("Tawk Chat Widget Loaded!");
  };
  return (
    <div className="flex items-center justify-center mb-20">
      <TawkMessengerReact
        onLoad={onLoad}
        // propertyId="675918ccaf5bfec1dbda21cb"
        // widgetId="1ieq0ho00"
        propertyId="6707825b02d78d1a30ef607e"
        widgetId="1i9qladue"
      />
    </div>
  );
};

export default TawkWidget;
