import { FC } from "react";
import { Table } from "./DataTable";

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
    <div className="p-10">
      <div>
        <h3>Settings</h3>
        <p>Manage your team and preference here</p>
      </div>
      <div>
        {options.map((name) => (
          <button className="border p-2">{name}</button>
        ))}
      </div>
      <div className="flex w-full flex-col gap-x-4 gap-y-2">
        <div className="border">
          <h4>Payment Method</h4>
          <p>Update your billing details and address</p>
        </div>
        <div className="flex border">
          <div className="flex-shrink border">
            <h4>Contact email</h4>
            <p>Where should invoice be sent?</p>
          </div>

          <div className="flex-grow-0 border">
            <div className="flex">
              <input type="radio" />
              <div>
                <p>Send to my account</p>
                <p>olivia@untitledui.com</p>
              </div>
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
      </div>
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
