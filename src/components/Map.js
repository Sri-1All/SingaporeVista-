import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function SingaporeMap() {
  const singapore = [1.3521, 103.8198];

  const places = [
    {
      name: "Marina Bay Sands",
      position: [1.2834, 103.8607],
      description: "A famous Singapore landmark with stunning city views.",
    },
    {
      name: "Gardens by the Bay",
      position: [1.2816, 103.8636],
      description: "A beautiful nature park famous for its Supertrees.",
    },
    {
      name: "Little India",
      position: [1.3066, 103.8518],
      description: "A vibrant neighbourhood rich in Indian culture and heritage.",
    },
    {
      name: "Sentosa Island",
      position: [1.2494, 103.8303],
      description: "A popular destination for beaches and entertainment.",
    },
  ];

  return (
    <section id="singapore-map" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
            Plan Your Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Find your way around Singapore
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-5">
            Discover the locations of popular attractions and plan your
            Singapore adventure with ease.
          </p>
        </div>

        {/* Main Map Card */}
        <div className="bg-gray-50 rounded-[2rem] border border-gray-200 shadow-lg overflow-hidden">

          <div className="grid lg:grid-cols-3">

            {/* Places List */}
            <div className="p-7 md:p-8 bg-white">

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Places to Visit
              </h3>

              <p className="text-gray-500 text-sm mb-7">
                Click a location on the map to learn more.
              </p>

              <div className="space-y-4">

                {places.map((place, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:bg-green-50 transition"
                  >
                    <div className="flex items-start gap-3">

                      <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-green-700 font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900">
                          {place.name}
                        </h4>

                        <p className="text-gray-500 text-sm mt-1 leading-5">
                          {place.description}
                        </p>
                      </div>

                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-2 min-h-[500px]">

              <MapContainer
                center={singapore}
                zoom={12}
                scrollWheelZoom={false}
                style={{
                  height: "100%",
                  minHeight: "500px",
                  width: "100%",
                }}
              >

                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {places.map((place, index) => (
                  <Marker key={index} position={place.position}>

                    <Popup>
                      <div className="p-1">
                        <h3 className="font-bold text-lg text-gray-900">
                          {place.name}
                        </h3>

                        <p className="text-sm text-gray-600 mt-1">
                          {place.description}
                        </p>
                      </div>
                    </Popup>

                  </Marker>
                ))}

              </MapContainer>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default SingaporeMap;