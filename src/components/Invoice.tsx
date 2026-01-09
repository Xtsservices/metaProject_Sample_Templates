import React from 'react';
import { Save, Printer, CreditCard } from 'lucide-react';

interface InvoiceItem {
  id: number;
  description: string;
  serial: string;
  quantity: number;
  unitCost: number;
  subtotal: number;
}

const Invoice: React.FC = () => {
  const invoiceData = {
    invoiceNumber: '#0154879',
    orderID: 'FC12548',
    paymentDue: '14/08/2018',
    account: '00215487541296',
    date: '22 April 2018',
    from: {
      name: 'Coup Admin',
      address: '124 Lorem Ipsum, Suite 478, Dummy, USA 123456',
      phone: '(00) 123-456-7890',
      email: 'info@example.com'
    },
    to: {
      name: 'Doe Shina',
      address: '124 Lorem Ipsum, Suite 478, Dummy, USA 123456',
      phone: '(00) 789-456-1230',
      email: 'contact@example.com'
    },
    items: [
      { id: 1, description: 'Milk Powder', serial: '123456789I2514', quantity: 2, unitCost: 26.00, subtotal: 52.00 },
      { id: 2, description: 'Air Conditioner', serial: '123456789I2514', quantity: 1, unitCost: 1500.00, subtotal: 1500.00 },
      { id: 3, description: 'TV', serial: '123456789I2514', quantity: 2, unitCost: 540.00, subtotal: 1080.00 },
      { id: 4, description: 'Mobile', serial: '123456789I2514', quantity: 3, unitCost: 320.00, subtotal: 960.00 }
    ] as InvoiceItem[],
    subTotal: 3592.00,
    tax: 646.56,
    shipping: 110.44,
    total: 4349.00
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
        {/* Header */}
        <div className="border-b border-gray-200 p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Invoice</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>🏠</span>
                <span>Invoice</span>
                <span>-</span>
                <span>Invoice Sample</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition">
                <Save size={16} />
                Save
              </button>
              <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition">
                <Printer size={16} />
                Print
              </button>
            </div>
          </div>

          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-semibold text-gray-700">Invoice Sample</h2>
            <p className="text-gray-600">{invoiceData.date}</p>
          </div>
        </div>

        {/* From/To Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">From</p>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{invoiceData.from.name}</h3>
              <p className="text-sm text-gray-600">{invoiceData.from.address}</p>
              <p className="text-sm text-gray-600">Phone: {invoiceData.from.phone}</p>
              <p className="text-sm text-gray-600">Email: {invoiceData.from.email}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 mb-1">To</p>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{invoiceData.to.name}</h3>
              <p className="text-sm text-gray-600">{invoiceData.to.address}</p>
              <p className="text-sm text-gray-600">Phone: {invoiceData.to.phone}</p>
              <p className="text-sm text-gray-600">Email: {invoiceData.to.email}</p>
            </div>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-500">Invoice</p>
              <p className="font-semibold text-gray-800">{invoiceData.invoiceNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Order ID</p>
              <p className="font-semibold text-gray-800">{invoiceData.orderID}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Payment Due</p>
              <p className="font-semibold text-gray-800">{invoiceData.paymentDue}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Account</p>
              <p className="font-semibold text-gray-800">{invoiceData.account}</p>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">#</th>
                <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Description</th>
                <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Serial #</th>
                <th className="text-right py-3 px-2 text-sm font-semibold text-gray-600">Quantity</th>
                <th className="text-right py-3 px-2 text-sm font-semibold text-gray-600">Unit Cost</th>
                <th className="text-right py-3 px-2 text-sm font-semibold text-gray-600">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-2 text-gray-600">{item.id}</td>
                  <td className="py-4 px-2 text-gray-800">{item.description}</td>
                  <td className="py-4 px-2 text-gray-600">{item.serial}</td>
                  <td className="py-4 px-2 text-right text-gray-600">{item.quantity}</td>
                  <td className="py-4 px-2 text-right text-gray-600">${item.unitCost.toFixed(2)}</td>
                  <td className="py-4 px-2 text-right text-gray-800 font-semibold">${item.subtotal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals Section */}
          <div className="flex justify-end mt-8">
            <div className="w-80">
              <div className="flex justify-between py-2 text-gray-600">
                <span>Payment Due:</span>
                <span className="text-red-500">{invoiceData.paymentDue}</span>
              </div>
              <div className="flex justify-between py-2 text-gray-600">
                <span>Sub - Total amount:</span>
                <span>${invoiceData.subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 text-gray-600">
                <span>Tax (18%):</span>
                <span>${invoiceData.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 text-gray-600 border-b border-gray-200 pb-4">
                <span>Shipping:</span>
                <span>${invoiceData.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-4 text-xl font-bold text-gray-800">
                <span>Total:</span>
                <span>${invoiceData.total.toFixed(2)}</span>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded mt-4 transition">
                <CreditCard size={20} />
                Submit Payment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 bg-yellow-500 hover:bg-yellow-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition">
        <span className="text-2xl">💬</span>
      </button>
    </div>
  );
};

export default Invoice;