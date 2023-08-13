import { FC } from "react";
import { Table } from "./DataTable";
import Divider from "@components/divider";

const Settings: FC = () => {
  const options: Array<string> = [
    "My details",
    "Profile",
    "Password",
    "Team",
    "Plan",
    "Billing",
    "Notification",
    "integration",
    "Api",
  ];
  return (
    <div className="p-10 flex flex-col gap-y-8">
      <header className='flex flex-col gap-y-6'>
        <div>
          <h3 className="text-gray-900 text-3xl font-medium">Settings</h3>
          <p className=" text-gray-500 text-base font-normal leading-normal">Manage your team and preference here</p>
        </div>
        <nav className=" w-fit bg-white rounded-lg border border-gray-300 shadow ">
          {options.map((name) => (
            <button className="px-4 py-2.5 border-r leading-tight">
              <span className="text-slate-700 text-sm font-medium leading-tight">
                {name}
              </span>
            </button>
          ))}
        </nav>
      </header>
      <section className="flex w-full flex-col ">
        <header className="payment-header">
          <h4 className="text-gray-900 text-lg font-medium leading-7">Payment Method</h4>
          <p className="text-gray-500 text-sm font-normal leading-tight">Update your billing details and address</p>
        </header>
        <Divider className='mt-5 mb-6' />
        <form>
          <div className="flex gap-8">
            <legend className="flex-shrink-0 w-1/5 border">
              <h4>Contact email</h4>
              <p>Where should invoice be sent?</p>
            </legend >

            <div className=" flex-shrink-0 w-2/5 border">
              <div className="flex">
                <input type="radio" />
                <label>
                  <p>Send to my account</p>
                  <p>olivia@untitledui.com</p>
                </label>
              </div>
              <div className="flex">
                <input type="radio" />
                <label>
                  <p>Send to an invitation email</p>
                  <p>olivia@untitledui.com</p>
                </label>
              </div>
            </div>
          </div>
          <div className="card-details flex w-full border">
            <div className="w-1/4 border">
              <h4>Card details</h4>
              <p>Select default payment method</p>
            </div>
            <div className="flex flex-grow flex-col gap-y-4">
              <div className="border ">
                <div className="relative flex w-full justify-between">
                  <input
                    type="checkbox"
                    className="absolute h-full w-full"
                    name="card"
                  ></input>
                  <label className="flex " htmlFor="card">
                    <div>visa</div>
                    <div>
                      <p>Visa ending in 1234</p>
                      <p>Expiry 06/2024</p>
                      <p>
                        Set as default <span>Edit</span>
                      </p>
                    </div>
                  </label>
                  <span>icon</span>
                </div>
              </div>
              <div className="border ">
                <div className="relative flex w-full justify-between">
                  <input
                    type="checkbox"
                    className="absolute h-full w-full"
                    name="card"
                  ></input>
                  <label className="flex " htmlFor="card">
                    <div>visa</div>
                    <div>
                      <p>Visa ending in 1234</p>
                      <p>Expiry 06/2024</p>
                      <p>
                        Set as default <span>Edit</span>
                      </p>
                    </div>
                  </label>
                  <span>icon</span>
                </div>
              </div>
              <div className="border">
                <button>
                  <span>+</span>
                  Add new payment Method
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
      <div>
        <div className="flex justify-between">
          <h3>Billing History</h3>
          <button>
            <span>cloud</span>
            Download all
          </button>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Settings;
