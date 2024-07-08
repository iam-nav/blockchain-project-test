"use client"
import { useState, useEffect } from 'react';
import {colorUpdate,updateNumber,formatNumber,getIcon,totalChange} from "../../utils/common"

export default function TableContainer() {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/blockchain/list');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setAssets(data?.data); // Assuming the API response is an array similar to `tableArray`
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle errors (e.g., show error message, retry logic, etc.)
            }
        };
        fetchData();
    }, []); // Empty dependency array means this effect runs only once (on mount)

    return (
        <>
            <div className="container mt-[3.125rem] mx-auto relative z-30 2xl:max-w-[1280px]">
                <div className="tableCard p-[1.875rem] mx-4">
                    <table className="w-full">
                        <thead>
                            <tr className="text-white text-left text-xl">
                                <th className="lg:w-[24%]">ASSETS</th>
                                <th className="lg:w-[24%]">LAST TRADE</th>
                                <th className="lg:w-[24%]">24H %</th>
                                <th className="lg:w-[24%]">24H CHANGE</th>
                                <th className="text-right cursor-pointer text-[#3980FF]">{`MORE>`}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assets?.length>0 && assets?.map((item, i) => (
                                <tr key={i} className="font-medium text-[#FAFAFA]">
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <img src={getIcon(item.name)} alt={item.name} />
                                            <p className="mb-0 text-lg font-medium">{item.name}
                                                <span className="text-[#666666]">/USD</span>
                                            </p>
                                        </div>
                                    </td>
                                    <td>${formatNumber(item.lastTrade)}</td>
                                    <td style={{ color: colorUpdate(item.hours) }}>{updateNumber(item.hours)}%</td>
                                    <td style={{ color: colorUpdate(item.totalChange) }}>{totalChange(item.totalChange)}</td>
                                    <td className="text-right">
                                        <button className="text-[#00554B] bg-[#6DFF8B] text-lg p-[0.625rem]">
                                            Trade
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
