import { FC } from "react";
import { routes } from "../../../routes";
import Icon from "@components/icons/Icons";
import Logo from "@assets/images/Logo.png"
import Image from "@assets/images/Image.png"
import Avatar from '@assets/images/Avatar.png'
import Divider from "@components/divider";

const SideBar: FC = () => {
  const { main, others } = routes;
  return (
    <div className='h-screen w-72 border flex flex-col gap-y-6 flex-shrink-0 px-4 py-6'>
      <div className='px-4 sidebar-logo'>
        <div><img src={Logo} /></div>
        <label className='relative pl-2'>
          <Icon name='bar' className='absolute top-7 left-2 ' />
          <input className="rounded border w-full pr-3.5 pl-8 py-2.5" placeholder="Search"></input>
        </label>
      </div>
      <div className="sidebar-main-nav">
        {main.map(({ name, icon }) => (
          <div className="flex py-2 px-3">
            <Icon name={icon} />
            <span className='ml-3'>{name}</span></div>
        ))}
      </div>
      <div className="sidebar-other-nav">
        {others.map(({ name, icon }) => (
          <div className="flex py-2 px-3">
            <Icon name={icon} />
            <span className='ml-3'>{name}</span></div>
        ))}
      </div>
      <div className="sidebar-feature-alert">
        <header>
          <h4>New feature available!</h4>
          <p>Check out the new dashboard view. Pages now load faster.</p>
        </header>
        <div>
          <img src={Image} />
        </div>
        <p>Dismiss <span>What's New?</span></p>
      </div>
      <div className="divider">
        <Divider />
      </div>
      <div className="flex justify-between sidebar-footer">
        <div className="flex">
          <img src={Avatar} className='flex-shrink-0 w-12 h-full mr-3' />
          <div>
            <p>Olivia Rhye</p>
            <p>olivia@untitledui.com</p>
          </div>
        </div>
        <button>
          <Icon name='logout' />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
