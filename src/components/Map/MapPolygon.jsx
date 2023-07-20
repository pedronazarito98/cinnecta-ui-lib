import React, { useRef } from 'react';
import { Polygon, Marker } from 'react-google-maps';

const defaultProps = {
  path: [{ lat: -19.9322014, lng: -43.9246216 }],
  options: {
    fillColor: '#ee430e',
    strokeColor: '#ee430e',
    strokeWeight: 1,
    fillOpacity: 0.3,
    strokeOpacity: 0.5
  }
};

const MapPolygon = ({
  draggable,
  editable,
  path,
  onEdit,
  options,
  removeMarker,
  onMouseOut,
  onMouseOver,
  onClick
}) => {
  const polygonRef = useRef(null);

  const handleEdit = () => {
    if (polygonRef.current && onEdit) {
      onEdit(polygonRef.current.getPath());
    }
  };

  return (
    <>
      <Polygon
        draggable={draggable}
        editable={editable}
        ref={polygonRef}
        path={path}
        onMouseUp={handleEdit}
        options={options}
        onClick={onClick}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
      />
      {!removeMarker && <Marker position={path[0]} visible={false} />}
    </>
  );
};

MapPolygon.defaultProps = defaultProps;

export default MapPolygon;
