import React from 'react';
import { Shield, Lock, Cpu } from 'lucide-react';

const PrizePool = () => {
  const prizes = [
    {
      position: '1ST',
      amount: '$25,000',
      color: 'bg-yellow-400'
    },
    {
      position: '2ND',
      amount: '$15,000',
      color: 'bg-purple-500'
    },
    {
      position: '3RD',
      amount: '$10,000',
      color: 'bg-green-500'
    }
  ];

  const features = [
    {
      title: 'Blockchain Focus',
      description: 'Dive deep into the world of web3 challenges and innovations.',
      icon: <Shield className="h-6 w-6" />,
      color: 'bg-coral-500'
    },
    {
      title: '24-Hour Hack',
      description: 'Push your limits in an intense 24-hour coding and problem-solving marathon.',
      icon: <Lock className="h-6 w-6" />,
      color: 'bg-yellow-400'
    },
    {
      title: 'Tech Playground',
      description: 'Experiment with web3 tools and technologies.',
      icon: <Cpu className="h-6 w-6" />,
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="py-12 spacefont">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prize Pool Section */}
        <div className="mb-20 relative transform rotate-1 border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-3xl font-bold text-center mb-10">PRIZE POOL</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
            {prizes.map((prize, index) => (
              <div 
                key={index} 
                className={`${prize.color} border-4 border-black p-6 w-full md:w-64 transform transition-all duration-300 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center`}
              >
                <div className="font-bold text-xl">{prize.position}</div>
                <div className="font-bold text-2xl">{prize.amount}</div>
              </div>
            ))}
          </div>
          
          <p className="text-center font-medium">Plus exciting swag and sponsor prizes!</p>
        </div>
        
        {/* Why Sandbox Section */}
        <div className="mb-10">
          <div className="inline-block bg-purple-500 border-4 border-black p-4 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-10">
            <h2 className="text-3xl font-bold">WHY LAYER 3.0?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`${feature.color} border-4 border-black p-6 transform transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizePool;