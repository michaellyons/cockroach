import { PieChart, ResponsiveContainer, Customized, Pie, Cell, LabelList } from 'recharts';

// Define the data for the pie chart
const data = [
  { name: '3%', value: 3, fill: '#8D43FF' },
  { name: '1%', value: 1, fill: '#FFF' },
  { name: '1%', value: 1, fill: '#A12952' },
];

// Define the colors for the gradient fills
const COLORS = [
  'url(#colorA)',
  'url(#colorB)',
  'url(#colorC)',
];

// Define the gradient definitions
const GradientDefs = () => (
  <defs>
    <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#83a6ed" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#83a6ed" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorC" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8dd1e1" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8dd1e1" stopOpacity={0}/>
    </linearGradient>
  </defs>
);

const CustomPieChart: React.FC = () => {
  return (
    <div className='relative w-full'>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={'60%'}
            outerRadius={'100%'}
            fill="#8884d8"
            dataKey="value"
            labelLine={false}
          >
            <GradientDefs />
            <LabelList fill="#000" stroke="#000" dataKey="name" position="inside" />
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry?.fill || COLORS[index % COLORS.length]} />
              ))
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    <div className="absolute inset-0 flex justify-center text-center justify-center items-center">
      <div>
        <div className="font-bold">
        5%
      </div>
      <div className='text-xs'>
      Transfer<br/>Fee
      </div>
      </div>
    </div>
    </div>
  );
};

export default CustomPieChart;
