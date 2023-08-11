import DashboardAvatars from "@components/dasboardAvatar";
import { FC } from "react";

export const Table: FC = () => {
  return (
    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 xl:col-span-8">
      <div className="rounded-lg">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto dark:text-slate-300">
            {/* Table header */}
            <thead className="rounded-sm bg-slate-50 text-xs text-slate-400 dark:bg-slate-700 dark:bg-opacity-50 dark:text-slate-500">
              <tr>
                <th className="">
                  <div className="text-left font-semibold">
                    <input type="checkbox" className="pl-2" />
                    Invoice
                  </div>
                </th>
                <th className="">
                  <div className="text-left font-semibold">Amount</div>
                </th>
                <th className="">
                  <div className="text-left font-semibold">Date</div>
                </th>
                <th className="">
                  <div className="text-left font-semibold">Status</div>
                </th>
                <th className="">
                  <div className="text-left font-semibold">Users on plan</div>
                </th>
                <th className="">
                  <div className="text-left font-semibold">Action</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="divide-y divide-slate-100 text-sm font-medium dark:divide-slate-700">
              {/* Row */}
              <tr>
                <td className="">
                  <div className="flex items-center">
                    <input type="checkbox" />
                    <div className="text-slate-800 dark:text-slate-100">
                      Basic Plan - Dec 2022
                    </div>
                  </div>
                </td>
                <td className="">
                  <div>USD $10.00</div>
                </td>
                <td className="">
                  <div className="text-left">Dec 1, 2022</div>
                </td>
                <td className="">
                  <div className="text-left">Paid</div>
                </td>
                <td className="">
                  <div className="text-left text-sky-500">
                    <DashboardAvatars />
                  </div>
                </td>
                <td className="">
                  <div className="text-center">Download</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
