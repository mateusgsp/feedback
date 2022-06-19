import { Fire, Gear, Plus } from "phosphor-react";
import { ReactNode } from "react";
import { Widget } from "../../WidgetFeedback";
import { WidgetForm } from "../../WidgetFeedback/WidgetForm";

const NavBar = () => {
  return (
    <div className="fixed z-50 top-0 left-0 h-16 w-screen flex flex-row justify-end
                  bg-gray-900 shadow-lg px-4">

      <NavBarIcon icon={<Fire size="28" />} text="Testar" />
      <Divider />
      <NavBarIcon icon={<Plus size="32" />} text="Apagar" />
      <Divider />
      <NavBarIcon icon={<Gear size="22" />} text="" />
      <Widget />
    </div>
  );
};

const NavBarIcon = ({ icon, text }: { icon: ReactNode; text: string | null; }) => (
  <div className="relative flex items-center justify-center 
  h-12 w-12 mt-2 mb-2 my-auto  
bg-gray-600 hover:bg-green-600 
text-green-500 hover:text-white
  hover:rounded-xl rounded-3xl
  transition-all duration-500 ease-linear
  cursor-pointer shadow-lg hover:animate-pulse group">
    {icon}
    <span className="absolute w-auto p-2 m-2 min-w-max top-14 rounded-md shadow-md
    text-white bg-gray-900 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="bg-gray-800 
border border-gray-800 rounded-full
mx-2" />;

export default NavBar;
