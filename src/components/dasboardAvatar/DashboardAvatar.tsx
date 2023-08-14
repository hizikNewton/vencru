import User0 from "@assets/images/Avatar.png";
import User1 from "@assets/images/Avatar1.png";
import User2 from "@assets/images/Avatar2.png";
import User3 from "@assets/images/Avatar3.png";
import User4 from "@assets/images/Avatar4.png";
import { FC } from "react";
import { Link } from "react-router-dom";

interface DashboardAvatarProps {
  count: number;
}

export const DashboardAvatar: FC<DashboardAvatarProps> = ({ count }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const UserObj: { [x: number]: any } = {
    0: User0,
    1: User1,
    2: User2,
    3: User3,
    4: User4,
  };
  return (
    <>
      <ul className="-ml-px mb-8 flex justify-center -space-x-3 sm:mb-0 sm:justify-start">
        {Array(count)
          .fill(0)
          .map((i, idx) => {
            const rand = Math.floor(Math.random() * 5);
            return (
              <li key={`user${i}${rand}${idx}`}>
                <Link className="block" to="#0">
                  <img
                    className="h-9 w-9 rounded-full"
                    src={UserObj[rand]}
                    width="36"
                    height="36"
                    alt="User 01"
                  />
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};
