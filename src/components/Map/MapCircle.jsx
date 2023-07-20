import React, { useRef } from "react";
import { Circle as GoogleMapCircle, Marker } from "react-google-maps";

const defaultProps = {
  center: { lat: -19.9322014, lng: -43.9246216 },
  radius: 50,
  options: {
    fillColor: "#ee430e",
    strokeColor: "#ee430e",
    strokeWeight: 1,
    fillOpacity: 0.3,
    strokeOpacity: 0.5,
  },
};

const MapCircle = ({
  center,
  draggable,
  editable,
  onCenterChanged,
  onClick,
  onDragEnd,
  onMouseOut,
  onMouseOver,
  onRadiusChanged,
  options,
  radius,
  removeMarker,
}) => {
  const circleRef = useRef(null);

  const handleCenterChanged = () => {
    if (circleRef.current && onCenterChanged) {
      onCenterChanged(circleRef.current.getCenter());
    }
  };

  const handleDragEnd = () => {
    if (circleRef.current && onDragEnd) {
      onDragEnd(circleRef.current.getCenter());
    }
  };

  const handleRadiusChanged = () => {
    if (circleRef.current && onRadiusChanged) {
      onRadiusChanged(circleRef.current.getRadius());
    }
  };

  return (
    <>
      <GoogleMapCircle
        ref={circleRef}
        center={center}
        radius={radius}
        options={options}
        draggable={draggable}
        editable={editable}
        onCenterChanged={handleCenterChanged}
        onDragEnd={handleDragEnd}
        onRadiusChanged={handleRadiusChanged}
        onClick={onClick}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
      />
      {!removeMarker && <Marker position={center} visible={false} />}
    </>
  );
};

MapCircle.defaultProps = defaultProps;

export default MapCircle;
