import React, { useRef } from "react";
import { Polygon, Marker } from "react-google-maps";

export interface DefaultProps {
  path: { lat: number; lng: number }[];
  options: {
    fillColor: string;
    strokeColor: string;
    strokeWeight: number;
    fillOpacity: number;
    strokeOpacity: number;
  };
}

export interface MapPolygonProps extends DefaultProps {
  draggable?: boolean;
  editable?: boolean;
  onEdit?: (path: any) => void;
  onClick?: () => void;
  onMouseOut?: () => void;
  onMouseOver?: () => void;
  removeMarker?: boolean;
}

const defaultProps: DefaultProps = {
  path: [{ lat: -19.9322014, lng: -43.9246216 }],
  options: {
    fillColor: "#ee430e",
    strokeColor: "#ee430e",
    strokeWeight: 1,
    fillOpacity: 0.3,
    strokeOpacity: 0.5,
  },
};

export const MapPolygon: React.FC<MapPolygonProps> = ({
  draggable,
  editable,
  path,
  onEdit,
  options,
  removeMarker,
  onMouseOut,
  onMouseOver,
  onClick,
}) => {
  const polygonRef = useRef<any | null>(null);

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
