import { FC } from "react";

interface DashboardProp {
  name: string;
}
const Dashboard: FC<DashboardProp> = ({ name }) => {
  return <div className="">{name}</div>;
};

export default Dashboard;
