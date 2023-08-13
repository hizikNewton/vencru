import { FC } from "react";
import { Table } from "./DataTable";
import Divider from "@components/divider";
import Icon from "@components/icons/Icons";
import Visa from "@assets/images/Visa.png";
import Mastercard from "@assets/images/Mastercard.png";
import Button from "@components/button";

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
    <div className="flex flex-col p-10 gap-y-8">
      <header className="flex flex-col gap-y-6">
        <div>
          <h3 className="text-3xl font-medium text-gray-900">Settings</h3>
          <p className="text-base font-normal leading-normal text-gray-500 ">
            Manage your team and preference here
          </p>
        </div>
        <nav className="bg-white border border-gray-300 rounded-lg shadow w-fit">
          {options.map((name) => (
            <button className="px-4 py-2.5 border-r leading-tight">
              <span className="text-sm font-medium leading-tight text-slate-700">
                {name}
              </span>
            </button>
          ))}
        </nav>
      </header>
      <section className="flex flex-col w-full ">
        <header className="payment-header">
          <h4 className="text-lg font-medium leading-7 text-gray-900">
            Payment Method
          </h4>
          <p className="text-sm font-normal leading-tight text-gray-500">
            Update your billing details and address
          </p>
        </header>
        <Divider className="mt-5 mb-6" />
        <form>
          <div className="flex gap-8 contact-email">
            <legend className="w-1/4">
              <h4 className="text-sm font-medium leading-tight text-slate-700">
                Contact email
              </h4>
              <p className="text-sm font-normal leading-tight text-gray-500">
                Where should invoice be sent?
              </p>
            </legend>

            <div className="flex flex-col w-2/4 flex-shrink-1 gap-y-4 ">
              <div className="flex w-full gap-x-2">
                <input className="w-4 h-4" type="radio" />
                <label>
                  <p className="text-sm font-medium leading-tight text-slate-700">
                    Send to my account
                  </p>
                  <p className="text-sm font-normal text-gray-500">
                    olivia@untitledui.com
                  </p>
                </label>
              </div>
              <div className="input-group">
                <div className="flex gap-x-2">
                  <input className="w-4 h-4" type="radio" />
                  <label>
                    <p className="text-sm font-medium leading-tight text-slate-700">
                      Send to an alternative email
                    </p>
                    <p className="text-sm font-normal text-gray-500">
                      olivia@untitledui.com
                    </p>
                  </label>
                </div>
                <div className="relative pl-6 mt-3">
                  <Icon name="mail" className="absolute top-4 left-10 " />
                  <input
                    className="rounded border w-full pr-3.5 pl-10 py-2.5"
                    placeholder="billing@untitledui.com"
                  ></input>
                </div>
              </div>
            </div>
            <div className="w-1/4 empty"></div>
          </div>
          <Divider className="my-5" />
          <div className="flex gap-4 card-details">
            <legend className="border flex-shrink-1 basis-1/4">
              <h4 className="text-sm font-medium leading-tight text-slate-700">
                Card details
              </h4>
              <p className="text-sm font-normal leading-tight text-gray-500">
                Select default payment method
              </p>
            </legend>
            <div className="flex flex-col flex-grow gap-y-4">
              <div className="checkbox-group-item visa-card">
                <input type="checkbox" className="checkbox" name="card" />
                <label className="flex gap-x-3 h-fit" htmlFor="card">
                  <div className="cardImg">
                    <img src={Visa} alt="visa-card" />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-tight text-slate-700">
                      Mastercard ending in 1234
                    </p>
                    <p className="text-sm font-normal leading-tight text-gray-500">
                      Expiry 06/2024
                    </p>
                    <Button className="text-gray-500 " label="Set as default" />
                    <Button className="ml-3 text-violet-700" label="Edit" />
                  </div>
                </label>
                <span>icon</span>
              </div>
              <div className="checkbox-group-item mastercard">
                <input type="checkbox" className="checkbox" name="card" />
                <label className="flex gap-x-3 h-fit" htmlFor="card">
                  <div className="cardImg">
                    {" "}
                    <img src={Mastercard} />{" "}
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-tight text-slate-700">
                      Mastercard ending in 1234
                    </p>
                    <p className="text-sm font-normal leading-tight text-gray-500">
                      Expiry 06/2024
                    </p>
                    <Button className="text-gray-500 " label="Set as default" />
                    <Button className="ml-3 text-violet-700" label="Edit" />
                  </div>
                </label>
                <span>icon</span>
              </div>

              <div className="add-payment">
                <Button
                  iconName="plus"
                  className="text-gray-500"
                  label="Add new payment Method"
                />
              </div>
            </div>
          </div>
        </form>
      </section>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="h-fit text-gray-900 text-lg font-medium leading-7">
            Billing History
          </h3>
          <Button
            className="bg-white rounded-lg shadow border border-gray-300 px-4 py-2.5"
            iconName="download"
            label="Download all"
          />
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Settings;
