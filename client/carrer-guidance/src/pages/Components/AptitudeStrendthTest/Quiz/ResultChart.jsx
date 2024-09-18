import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const ResultChart = ({ score, total }) => {
  const data = [
    { name: 'Correct', value: score },
    { name: 'Incorrect', value: total - score },
  ];

  const COLORS = ['#0088FE', '#FF8042'];

  return (
    <div className="w-full h-64">
      <PieChart width={400} height={250}>
        <Pie
          data={data}
          cx={200}
          cy={120}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ResultChart;