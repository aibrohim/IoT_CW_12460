import React, { useState, useEffect } from "react";
import { ref, onValue, off } from "firebase/database";
import { database } from "./firebase"; // Import the database object
import GaugeChart from "react-gauge-chart";

export const App = () => {
  const [temperature, setTemperature] = useState("");

  useEffect(() => {
    const temperatureRef = ref(database, "temp");

    // const humidityListener = onValue(humidityRef, (snapshot) => {
    //   setHumidity(snapshot.val());
    // });

    const temperatureListener = onValue(temperatureRef, (snapshot) => {
      setTemperature(snapshot.val());
    });

    // const openingIDListener = onValue(openingIDRef, (snapshot) => {
    //   setOpeningID(snapshot.val());
    // });

    // Cleanup function
    return () => {
      // off(humidityRef, "value", humidityListener);
      off(temperatureRef, "value", temperatureListener);
      // off(openingIDRef, "value", openingIDListener); // Clean up openingID listener
    };
  }, []);

  return (
    <div>
      <h1>Smart office</h1>
      <h2>Temperature at the room: {temperature || 0}C</h2>
      <div style={{ display: "flex" }}>
        <GaugeChart
          id="gauge-chart3"
          nrOfLevels={30}
          colors={["#FF5F6D", "#FFC371"]}
          arcWidth={0.3}
          percent={temperature ? temperature / 100 : 0}
        />
      </div>
    </div>
  );
};
