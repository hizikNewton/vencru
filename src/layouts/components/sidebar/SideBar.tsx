import { FC } from "react";
import { routes } from "../../../routes";

const SideBar: FC = () => {
  const { main, others } = routes;
  return (
    <div className="h-screen w-72 border">
      <div>Untitled UI</div>
      <input className="rounded border"></input>
      <div>
        {main.map(({ name }) => (
          <div>{name}</div>
        ))}
      </div>
      <div>
        {others.map(({ name }) => (
          <div>{name}</div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
