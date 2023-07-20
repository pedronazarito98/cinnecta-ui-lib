import React, { useRef } from "react";
import { Rectangle, Marker } from "react-google-maps";

const defaultProps = {
  options: {
    fillColor: "#ee430e",
    strokeColor: "#ee430e",
    strokeWeight: 1,
    fillOpacity: 0.3,
    strokeOpacity: 0.5,
  },
};

const MapRectangle = ({
  defaultBounds,
  defaultDraggable,
  defaultEditable,
  defaultOptions,
  defaultVisible,
  bounds,
  draggable,
  editable,
  options,
  visible,
  onDblClick,
  onDragEnd,
  onDragStart,
  onMouseDown,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  onRightClick,
  onBoundsChanged,
  onClick,
  onDrag,
  removeMarker,
}) => {
  const rectangleRef = useRef(null);

  const handleDragStart = () => {
    if (rectangleRef.current && onDragStart) {
      onDragStart(rectangleRef.current.getBounds());
    }
  };

  const handleDragEnd = () => {
    if (rectangleRef.current && onDragEnd) {
      onDragEnd(rectangleRef.current.getBounds());
    }
  };

  const handleDrag = () => {
    if (rectangleRef.current && onDrag) {
      onDrag(rectangleRef.current.getBounds());
    }
  };

  const handleBoundsChanged = () => {
    if (rectangleRef.current && onBoundsChanged) {
      onBoundsChanged(rectangleRef.current.getBounds());
    }
  };

  return (
    <>
      <Rectangle
        ref={rectangleRef}
        defaultBounds={defaultBounds}
        defaultDraggable={defaultDraggable}
        defaultEditable={defaultEditable}
        defaultOptions={defaultOptions}
        defaultVisible={defaultVisible}
        bounds={bounds}
        visible={visible}
        options={options}
        draggable={draggable}
        editable={editable}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
        onBoundsChanged={handleBoundsChanged}
        onDblClick={onDblClick}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        onMouseUp={onMouseUp}
        onRightClick={onRightClick}
      />
      {!removeMarker && <Marker position={bounds} visible={false} />}
    </>
  );
};

MapRectangle.defaultProps = defaultProps;

export default MapRectangle;
