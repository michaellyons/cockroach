import React from 'react';
import { FaMoneyBill } from 'react-icons/fa';

interface StatCardProps {
  title: string;
  mainValue: React.ReactNode;
  icon: React.ReactNode;
  secondaryValue?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
}

// StatCard component with props for title, main value, and secondary value
const StatCard: React.FC<StatCardProps> = ({
  title = 'Total Funds',
  icon = <FaMoneyBill fill="#000" />,
  mainValue = '420,696,420',
  secondaryValue,
  backgroundColor = '#F9F041',
  textColor = '#F9F041',
}) => {
  return (
    <div className={`rounded-xl p-0 shadow-md overflow-hidden border border-solid`} style={{borderColor: backgroundColor}}>
      <div className="flex justify-center items-center mb-2 p-2" style={{ backgroundColor }}>
      {icon}
        <span className={`ml-2 text-lg`} style={{ color: '#000' }}>{title}</span>
        {/* Icon placeholder */}
      </div>
      <div className="flex flex-col items-center p-4">
        <span className={`text-4xl font-bold`} style={{ color: textColor }}>{mainValue}</span>
        {
          secondaryValue ?
          <span className={`text-xl`} style={{ color: '#fff' }}>{secondaryValue}</span>
          : null
        }
      </div>
    </div>
  );
};

export default StatCard;
