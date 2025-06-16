
import WalletConnection from "@/components/WalletConnection";
import CryptoMiningDashboard from "@/components/CryptoMiningDashboard";
import TokenRewards from "@/components/TokenRewards";
import SmartContractMonitor from "@/components/SmartContractMonitor";
import NFTCertificates from "@/components/NFTCertificates";
import CryptoPayments from "@/components/CryptoPayments";

const BlockchainTab = () => {
  return (
    <div className="space-y-6">
      {/* Top Row - Wallet and Payments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WalletConnection />
        <CryptoPayments />
      </div>
      
      {/* Second Row - Mining and Tokens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CryptoMiningDashboard />
        <TokenRewards />
      </div>
      
      {/* Third Row - Smart Contracts */}
      <SmartContractMonitor />
      
      {/* Bottom Row - NFT Certificates */}
      <NFTCertificates />
    </div>
  );
};

export default BlockchainTab;
