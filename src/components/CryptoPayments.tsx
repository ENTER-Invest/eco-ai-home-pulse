
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Bitcoin, Wallet, ArrowUpRight, ArrowDownLeft, CreditCard } from "lucide-react";

const CryptoPayments = () => {
  const paymentMethods = [
    { name: "Bitcoin", symbol: "BTC", balance: "0.0234", usdValue: "$1,203" },
    { name: "Ethereum", symbol: "ETH", balance: "1.45", usdValue: "$2,891" },
    { name: "EcoToken", symbol: "ECO", balance: "1,250", usdValue: "$312" }
  ];

  const recentTransactions = [
    { type: "received", amount: "0.0012 BTC", from: "Solar Mining", time: "2h ago" },
    { type: "sent", amount: "25 ECO", to: "Energy Purchase", time: "5h ago" },
    { type: "received", amount: "0.15 ETH", from: "Carbon Credits", time: "1d ago" }
  ];

  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 dark:text-white">
          <Bitcoin className="h-5 w-5 text-orange-500" />
          Crypto Payments
        </CardTitle>
        <CardDescription className="dark:text-gray-300">
          Manage cryptocurrency payments and transactions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Payment Methods */}
        <div className="space-y-4">
          <h4 className="font-medium dark:text-white">Available Currencies</h4>
          {paymentMethods.map((method, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                  <Bitcoin className="h-4 w-4 text-orange-500" />
                </div>
                <div>
                  <p className="font-medium dark:text-white">{method.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{method.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium dark:text-white">{method.balance} {method.symbol}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{method.usdValue}</p>
              </div>
            </div>
          ))}
        </div>

        <Separator />

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button className="flex items-center gap-2">
            <ArrowUpRight className="h-4 w-4" />
            Send Payment
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowDownLeft className="h-4 w-4" />
            Request Payment
          </Button>
        </div>

        {/* Recent Transactions */}
        <div className="space-y-4">
          <h4 className="font-medium dark:text-white">Recent Transactions</h4>
          {recentTransactions.map((tx, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  tx.type === 'received' 
                    ? 'bg-green-100 dark:bg-green-900/20' 
                    : 'bg-red-100 dark:bg-red-900/20'
                }`}>
                  {tx.type === 'received' ? (
                    <ArrowDownLeft className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-red-600" />
                  )}
                </div>
                <div>
                  <p className="font-medium dark:text-white">{tx.amount}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {tx.type === 'received' ? `From ${tx.from}` : `To ${tx.to}`}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{tx.time}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoPayments;
