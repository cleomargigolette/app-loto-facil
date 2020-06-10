import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';


function GraphicPeriodBall({
    data
}) {
    return (
      <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 20, right: 50, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine x="period" stroke="red" label="Max PV PAGE" />
        <ReferenceLine y={9800} label="Max" stroke="red" />
        <Line type="monotone" dataKey="period" stroke="#8884d8" />
        <Line type="monotone" dataKey="" stroke="#82ca9d" />
      </LineChart>
    );
}
export default GraphicPeriodBall;