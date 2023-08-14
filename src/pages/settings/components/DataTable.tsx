import DashboardAvatars from "@components/dasboardAvatar";
import Icon from "@components/icons/Icons";
import { FC } from "react";
import { tableData } from "../data";
import useSortableData from "../useSortableData";

const SortButton = ({ direction, id, onClick, sortBy }) => {
  const arrows = { ascending: "↓", descending: "↑" };
  const arrow = sortBy === id ? arrows[direction] : "↕︎";

  return (
    <button id={id} onClick={onClick}>
      {arrow}
      <span className="">Sort {direction}</span>
    </button>
  );
};

export const Table: FC = () => {
  const config = { direction: "ascending", key: "invoice" };
  const { requestSort, sortConfig } = useSortableData({
    items: tableData,
    config,
  });

  const handleSortBy = (name: string) => {
    console.log(name);
  };
  return (
    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 xl:col-span-8">
      <div className="rounded-lg">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto dark:text-slate-300">
            {/* Table header */}
            <thead className="rounded-sm ">
              <tr className=" bg-gray-50 text-gray-500 text-xs font-medium leading-[18px]">
                <th
                  className="px-6 py-3"
                  onClick={() => handleSortBy("invoice")}
                >
                  <div className="text-left flex items-center gap-x-3">
                    <input type="checkbox" className="pl-2 w-5 h-5" />
                    Invoice
                    <SortButton
                      direction={sortConfig?.direction}
                      id="description"
                      onClick={() => requestSort("description")}
                      sortBy={sortConfig?.key}
                    />
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
              {tableData.map(
                ({ invoice, amount, date, status, usersOnPlan }) => (
                  <tr key={status}>
                    <th className="px-6 py-3">
                      <div className="text-left flex items-center gap-x-3">
                        <input type="checkbox" className="pl-2 w-5 h-5" />
                        {invoice}
                      </div>
                    </th>
                    <td className="">
                      <div>{`USD $${amount}`}</div>
                    </td>
                    <td className="">
                      <div className="text-left">{date}</div>
                    </td>
                    <td className="">
                      <div className="text-left">{status}</div>
                    </td>
                    <td className="">
                      <div className="text-left text-sky-500">
                        <DashboardAvatars count={usersOnPlan} />
                      </div>
                    </td>
                    <td className="">
                      <div className="text-center">
                        <Icon name="download" />
                      </div>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
