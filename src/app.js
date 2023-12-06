import React, { useState, useEffect } from "react";
import { ref, onValue, off } from "firebase/database";
import { database } from "./firebase"; // Import the database object

export const App = () => {
  const [humidity, setHumidity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [openingID, setOpeningID] = useState(null); // For openingID

  useEffect(() => {
    const humidityRef = ref(database, "humid");
    const temperatureRef = ref(database, "temp");
    const openingIDRef = ref(database, "openingID"); // Reference to openingID

    const humidityListener = onValue(humidityRef, (snapshot) => {
      setHumidity(snapshot.val());
    });

    const temperatureListener = onValue(temperatureRef, (snapshot) => {
      setTemperature(snapshot.val());
    });

    const openingIDListener = onValue(openingIDRef, (snapshot) => {
      setOpeningID(snapshot.val());
    });

    // Cleanup function
    return () => {
      off(humidityRef, "value", humidityListener);
      off(temperatureRef, "value", temperatureListener);
      off(openingIDRef, "value", openingIDListener); // Clean up openingID listener
    };
  }, []);

  return (
    <div>
      <h1>Realtime Data from Firebase</h1>
      <p>Humidity: {humidity}</p>
      <p>Temperature: {temperature}°C</p>
      <p>Entering Person ID: {openingID !== null ? openingID : "----"}</p>
    </div>
  );
};
