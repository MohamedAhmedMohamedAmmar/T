import Link from 'next/link';
import LogoutButton from '../../../../components/ui/LogoutButton';

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Customer Dashboard</h1>
        <LogoutButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">My Tickets</h2>
          <p className="text-gray-600 mb-4">
            View and manage your support tickets.
          </p>
          <Link href="/dashboard/customer/tickets">
            <span className="text-blue-500 hover:underline">Go to My Tickets</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
