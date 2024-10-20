import React from 'react';

function Sidenews() {
    const styles = [
        {
            title: 'Hydrogen VS Electric Cars',
            description: 'Will Hydrogen fueled cars ever catch up to EVs?'
        }, 
        {
            title: 'Quantum Computing vs AI',
            description: 'Will Quantum Computing revolutionize AI?'
        },
        {
            title: 'Artificial Intelligence vs Robotics',
            description: 'Will AI replace Robotics? What are the possible adverse effects on the future?'
        }
    ];

    return (
        <div className='w-full bg-gray-800 text-white p-4'>
            <h1 className='text-2xl font-bold mb-6 text-yellow-400'>Latest News</h1>
            {styles.map((item, index) => (
                <div key={index} className="p-4 mb-4 border-b border-gray-600 hover:bg-gray-700 transition-all duration-300">
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="text-sm text-gray-300">{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Sidenews;
