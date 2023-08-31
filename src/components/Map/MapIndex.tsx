import _ from "lodash";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import PropTypes from "prop-types";
import { MapCircle } from "./MapCircle";
import { MapPolygon } from "./MapPolygon";
import { map } from "../../theme/theme";
import { InputOnly } from "../Input/InputOnly";
import { Spacing } from "../Spacing/Spacing";
import { useEffect, useRef, useState } from "react";

const propTypes = {
  children: PropTypes.any,
  defaultZoom: PropTypes.number,
  defaultCenter: PropTypes.object,
  defaultClickableIcons: PropTypes.bool,
  editMode: PropTypes.bool,
  isCenterMarkerVisible: PropTypes.bool,
  places: PropTypes.bool,
  removeMarkers: PropTypes.bool,
  shapes: PropTypes.array,
  shapesToEnframe: PropTypes.array,
};

const defaultProps = {
  defaultZoom: 5,
  defaultCenter: { lat: -19.932231, lng: -43.9266687 },
  isCenterMarkerVisible: false,
  defaultOptions: {
    streetViewControl: false,
    scaleControl: false,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    rotateControl: false,
    fullscreenControl: false,
    clickableIcons: false,
    disableDefaultUI: true,
    styles: map,
  },

  defaultClickableIcons: false,
};

const shapeOptions = {
  fillColor: "#ee430e",
  strokeColor: "#ee430e",
  strokeWeight: 1,
  fillOpacity: 0.3,
  strokeOpacity: 0.5,
};

function Map({
  apiKey,
  children,
  defaultCenter,
  isCenterMarkerVisible,
  editMode,
  highlightShape,
  onClickShape,
  onMouseOutShape,
  onMouseOverShape,
  places,
  removeMarkers,
  shapes,
  ...rest
}) {
  const shapesRef = useRef({});
  const [google, setGoogle] = useState(null);
  const [pristine, setPristine] = useState(true);
  const mapRef = useRef(null);

  useEffect(() => {
    if (shapesToEnframe) {
      centerOnShapes(shapesToEnframe);
    }
  }, [shapesToEnframe]);

  useEffect(() => {
    if (!_.isEqual(prevProps.shapesToEnframe, shapesToEnframe)) {
      centerOnShapes(shapesToEnframe);
    }
  }, [shapesToEnframe]);

  const mapLoaded = (ref) => {
    if (ref && pristine) {
      mapRef.current = ref;
      const google = ref.props.google;
      onMapLoaded && onMapLoaded(google);
      if (google !== google) {
        setGoogle(google);
        setPristine(false);
        centerOnShapes(shapesRef.current);
      }
    }
  };

  const centerOnShapes = (shapes: any) => {
    if (shapes && shapes.length > 0 && google) {
      let bounds = new google.maps.LatLngBounds();
      shapes.forEach((shape: any) => {
        if (shape.type === "circle") {
          const { lat, lng } = shape.center;
          const latLng = new google.maps.LatLng(lat, lng);
          const latOffset = shape.radius / 111320;
          const lngOffset = shape.radius / ((40075000 * Math.cos(lat)) / 360);
          const leftLatLng = new google.maps.LatLng(lat - latOffset, lng);
          const rightLatLng = new google.maps.LatLng(lat + latOffset, lng);
          const topLatLng = new google.maps.LatLng(lat, lng - lngOffset);
          const bottomLatLng = new google.maps.LatLng(lat, lng + lngOffset);
          bounds.extend(latLng);
          bounds.extend(leftLatLng);
          bounds.extend(rightLatLng);
          bounds.extend(topLatLng);
          bounds.extend(bottomLatLng);
        } else {
          shape.path.forEach((node) => {
            const { lat, lng } = node;
            const latLng = new google.maps.LatLng(lat, lng);
            bounds.extend(latLng);
          });
        }
      });

      mapRef.current.fitBounds(bounds);
    }
  };

  const mapMoved = () => {
    onMapMoved && onMapMoved(mapRef.current.getCenter());
  };

  const zoomChanged = () => {
    onZoomChanged && onZoomChanged(mapRef.current.getZoom());
  };

  const placesChanged = (places) => {
    if (places && places[0]) {
      mapRef.current.fitBounds(places[0].geometry.viewport);
    }
    onPlacesChanged && onPlacesChanged(places);
  };

  return (
    //google &&
    <MapComponent
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&language=pt-BR&v=3.exp&libraries=geometry,drawing,places`}
      defaultCenter={defaultCenter}
      mapMoved={() => mapMoved()}
      zoomChanged={() => zoomChanged()}
      mapLoaded={(ref) => mapLoaded(ref)}
      {...rest}
    >
      {isCenterMarkerVisible && <Marker position={defaultCenter} />}
      {editMode && google && (
        <DrawingManager
          defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
          defaultOptions={{
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_RIGHT,
              drawingModes: [
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
              ],
            },
            circleOptions: {
              fillColor: `#68A7F0`,
              strokeWeight: 0,
              clickable: false,
              editable: true,
              zIndex: 1,
            },
            polygonOptions: {
              fillColor: `#68A7F0`,
              strokeWeight: 0,
              clickable: false,
              editable: true,
              zIndex: 1,
            },
          }}
        />
      )}
      {places && google && (
        <SearchBox
          ref={(mapRef) => (searchBox = mapRef)}
          controlPosition={google.maps.ControlPosition.TOP_LEFT}
          onPlacesChanged={() =>
            searchBox && placesChanged(searchBox.getPlaces())
          }
          onClose={() => {}}
          showSearchBox={true}
          onSelectStory={() => {}}
        >
          <div style={{ maxWidth: 540, width: "100%", opacity: 0.9 }}>
            <Spacing top={1} left={1}>
              <InputOnly
                floating
                type="text"
                placeholder="Pesquise no mapa..."
                name="googlePlaces"
              />
            </Spacing>
          </div>
        </SearchBox>
      )}
      <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={60}
        maxZoom={13}
        minimumClusterSize={1}
      >
        {shapes &&
          shapes.map((shape) => {
            if (shape.type === "circle") {
              return (
                <MapCircle
                  key={shape.id}
                  //ref={ref => shapes[shape.id] = ref}
                  center={shape.center}
                  radius={shape.radius}
                  editable={shape.editable}
                  draggable={shape.draggable}
                  options={{
                    ...shapeOptions,
                    ...(shape.color && { fillColor: shape.color }),
                    ...(highlightShape === shape.id && { fillColor: "yellow" }),
                    ...(shape.color && { strokeColor: shape.color }),
                    ...(shape.strokeColor && {
                      strokeColor: shape.strokeColor,
                    }),
                    ...(shape.opacity && {
                      fillOpacity: shape.opacity,
                      strokeOpacity: shape.opacity,
                    }),
                    ...(shape.strokeOpacity && {
                      strokeOpacity: shape.strokeOpacity,
                    }),
                  }}
                  removeMarker={removeMarkers}
                  onClick={() => onClickShape && onClickShape(shape)}
                  onMouseOver={() =>
                    onMouseOverShape && onMouseOverShape(shape)
                  }
                  onMouseOut={() => onMouseOutShape && onMouseOutShape(shape)}
                />
              );
            } else {
              return (
                <MapPolygon
                  key={shape.id}
                  //ref={ref => shapes[shape.id] = ref}
                  path={shape.path}
                  options={{
                    ...shapeOptions,
                    ...(shape.color && { fillColor: shape.color }),
                    ...(highlightShape === shape.id && { fillColor: "yellow" }),
                    ...(shape.color && { strokeColor: shape.color }),
                    ...(shape.strokeColor && {
                      strokeColor: shape.strokeColor,
                    }),
                    ...(shape.opacity && {
                      fillOpacity: shape.opacity,
                      strokeOpacity: shape.opacity,
                    }),
                    ...(shape.strokeOpacity && {
                      strokeOpacity: shape.strokeOpacity,
                    }),
                  }}
                  removeMarker={removeMarkers}
                  onClick={() => onClickShape && onClickShape(shape)}
                  onMouseOver={() =>
                    onMouseOverShape && onMouseOverShape(shape)
                  }
                  onMouseOut={() => onMouseOutShape && onMouseOutShape(shape)}
                />
              );
            }
          })}
        {children}
      </MarkerClusterer>
    </MapComponent>
  );
}

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;

const MapComponent = withScriptjs(
  withGoogleMap(
    ({ defaultCenter, mapMoved, mapLoaded, zoomChanged, ...props }) => {
      return (
        <GoogleMap
          defaultCenter={defaultCenter}
          onIdle={mapMoved}
          ref={mapLoaded}
          onZoomChanged={zoomChanged}
          google={window.google}
          {...props}
        >
          {props.children}
        </GoogleMap>
      );
    }
  )
);

export default Map;
