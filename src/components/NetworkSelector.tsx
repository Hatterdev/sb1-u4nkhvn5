import React from 'react';
import { useNetworkStore } from '../store/useNetworkStore';
import { SUPPORTED_NETWORKS } from '../config/networks';

export const NetworkSelector: React.FC = () => {
  const { currentNetwork, setNetwork } = useNetworkStore();

  return (
    <div className="relative">
      <select
        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        value={currentNetwork.id}
        onChange={(e) => {
          const network = SUPPORTED_NETWORKS.find(
            (n) => n.id === Number(e.target.value)
          );
          if (network) setNetwork(network);
        }}
      >
        {SUPPORTED_NETWORKS.map((network) => (
          <option key={network.id} value={network.id}>
            {network.name}
          </option>
        ))}
      </select>
    </div>
  );
};