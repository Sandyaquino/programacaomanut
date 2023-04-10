import React from "react";
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, Area, Bar, CartesianGrid } from "recharts";

const ChartComposed = () => {
  const data = [
    { name: "Jan", Aprovadas: 45, Reprovadas: 5, anoAnterior: 40 },
    { name: "Fev", Aprovadas: 52, Reprovadas: 8, anoAnterior: 45 },
    { name: "Mar", Aprovadas: 38, Reprovadas: 12, anoAnterior: 35 },
    { name: "Abr", Aprovadas: 24, Reprovadas: 18, anoAnterior: 30 },
    { name: "Mai", Aprovadas: 22, Reprovadas: 20, anoAnterior: 25 },
    { name: "Jun", Aprovadas: 28, Reprovadas: 15, anoAnterior: 20 },
    { name: "Jul", Aprovadas: 20, Reprovadas: 10, anoAnterior: 15 },
    { name: "Ago", Aprovadas: 18, Reprovadas: 8, anoAnterior: 10 },
    { name: "Set", Aprovadas: 26, Reprovadas: 12, anoAnterior: 15 },
    { name: "Out", Aprovadas: 32, Reprovadas: 15, anoAnterior: 25 },
    { name: "Nov", Aprovadas: 42, Reprovadas: 18, anoAnterior: 35 },
    { name: "Dez", Aprovadas: 55, Reprovadas: 20, anoAnterior: 45 },
  ];

  return (
    <div className="p-2 max-w-full overflow-x-auto flex justify-center items-center bg-custom_cor-verde-1 bg-opacity-10">
    <ComposedChart className="p-2" width={1460} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="transparent"/>
      <XAxis dataKey="name" />
      <YAxis tick={false}/>
      <Tooltip />
      <Legend vertical={true} />

      <Area type="monotone" dataKey="anoAnterior" fill="#C0C0C0" stroke="#C0C0C0" />
      <Bar dataKey="Aprovadas" barSize={30} fill="#5c881a" />
      <Bar dataKey="Reprovadas" barSize={30} fill="#ff5a00" />
    </ComposedChart>
    </div>
  );
};

export default ChartComposed;
