"use client"

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
import { usePathname } from "next/navigation";
import MobileMenu from "./shared/MobileiiMenu";





const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="py-4 md:px-20 shadow-md ">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <div className="text-xl tracking-wide font-bold">
          <Link href="/">News Portal</Link>
        </div>

        {/* desktop menu */}
        <NavigationMenu className=" hidden mx-auto items-center  lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink href="/news" className={`${pathname === '/news' ? 'text-rose-600 font-semibold cursor-pointer' : ""} hover:text-rose-600`}>News</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/services" className={`${pathname === '/services' ? 'text-rose-600 font-semibold cursor-pointer' : ""} hover:text-rose-600`}>
              <NavigationMenuTrigger className=" font-normal ">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className=" text-gray-600 shadow-md rounded-md px-4 py-3   ">
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
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink href="/about" className={`${pathname === '/about' ? 'text-rose-600 font-semibold cursor-pointer' : ""} hover:text-rose-600`}>About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink href="/contact" className={`${pathname === '/contact' ? 'text-rose-600 font-semibold cursor-pointer' : ""} hover:text-rose-600`}>Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* color switcher and login button */}
        <div className=" hidden lg:flex items-center ">
          <div className=" flex items-center space-x-4">
            <span className="mr-2">Dark Mode</span>
            <Switch className=" cursor-pointer"/>

            <Button variant="default" className=" cursor-pointer">Login</Button>
          </div>
        </div>

        {/* mobile hamber menu */}
       <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
