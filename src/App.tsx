import { useEffect, useState } from "react";
import "./App.css";
import { ChargerDataInterface } from "./interfaces/ChargerInterface";
import { DataModule } from "./components/DataModule";

function App() {
  const [data, setData] = useState<ChargerDataInterface>();
  const INTERVAL = 1000;

  useEffect(() => {
    setTimeout(() => {
      fetch("/api")
        .then((res) => res.json() as Promise<ChargerDataInterface>)
        .then((res) => {
          setData(res);
        })
        .catch((error) => {
          if (error instanceof Error) {
            console.error(error);
          }
        });
    }, INTERVAL);
  }, [data]);

  return (
    <>
      <h1>Trydan Status Panel</h1>
      <DataModule title="Versión del firmware:" dataType="v">
        {data?.FirmwareVersion}
      </DataModule>
      <DataModule title="Consumo del hogar:" dataType="w">
        {data?.HousePower}
      </DataModule>
      <DataModule title="Potencia contratada:" dataType="w">
        {data?.ContractedPower}
      </DataModule>
      <DataModule title="Potencia de carga:" dataType="w">
        {data?.ChargePower}
      </DataModule>
      <DataModule title="Energía cargada:" dataType="kwh">
        {data?.ChargeEnergy}
      </DataModule>
      <DataModule title="Tiempo de carga:" dataType="Transcurrido">
        {data?.ChargeTime}
      </DataModule>
      <DataModule title="Carga en Pausa:" dataType="">
        {data?.Paused ? "Si" : "No"}
      </DataModule>
    </>
  );
}

export default App;
