import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

function GraphicRateBallInSweepstakes({
    data
}){
    return (
      <BarChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ball" />
        <YAxis />
        <Bar dataKey="rate" fill="#0C6666" label={{ position: 'top' }} radius={[10,10,0,0]}>
        </Bar>
      </BarChart>
    );
  }

export default GraphicRateBallInSweepstakes;