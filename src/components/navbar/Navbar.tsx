import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { AiOutlineMenu } from "react-icons/ai";



const Navbar = () => {
  return (
    <header className="py-4 px-10 shadow-md ">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <div className="text-xl font-bold">
          <Link href="/">News Portal</Link>
        </div>

        {/* desktop menu */}
        <NavigationMenu className=" hidden mx-auto items-center  lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink href="/news" className=" hover:text-blue-500">News</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className=" hover:text-blue-500">
              <NavigationMenuTrigger className=" text-gray-700 cursor-pointer" >Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className=" text-gray-600 shadow-md rounded-md px-4 py-3  ">
                  <li>
                <NavigationMenuLink href="/services/web">Web Development</NavigationMenuLink>
                  </li>
                  <li>
                <NavigationMenuLink href="/services/apps">Mobile Apps</NavigationMenuLink>
                  </li>
                  <li>
                <NavigationMenuLink href="/services/seo">Seo</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink href="/about" className=" hover:text-blue-500">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink href="/contact" className=" hover:text-blue-500">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* color switcher and login button */}
        <div className=" hidden lg:flex items-center ">
          <div className=" flex items-center space-x-4">
            <span className="mr-2">Dark Mode</span>
            <Switch />

            <Button variant="default" className=" cursor-pointer">Login</Button>
          </div>
        </div>

        {/* mobile hamber menu */}
        <div className=" lg:hidden">
          <button variant="outline" size="icon">
            <AiOutlineMenu size={28}/>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
