import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  // Link,
  Button,
  // DropdownItem,
  // DropdownTrigger,
  // Dropdown,
  // DropdownMenu,
  // Avatar,
} from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function AppBar({ currentTab, setCurrentTab }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Internship",
    "Contact Us",
    "Explore",
    "Our Projects",
  ];
  const menuPaths = [
    "/",
    "/about",
    "/internship",
    "/contact",
    "/explore",
    "/projects",
  ];

  const handleClick = (key) => {
    setIsMenuOpen(false);
    setCurrentTab(key);
  };
  const handleContactButton = () => {
    navigate("/contact");
    setCurrentTab(3);
  };
  const handleLogoClick = () => {
    navigate("/");
    setCurrentTab(0);
  };

  const navigate = useNavigate();

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className="z-40  text-gray-200  bg-transparent"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand
          onClick={() => handleLogoClick()}
          className="cursor-pointer"
        >
          {/* <AcmeLogo /> */}
          <img src="/appbarlogo.png" alt="" className="h-10 mr-2" />
          <p className="font-bold text-inherit text-lg sm:text-xl dark:text-gray-200 font-mono ">
            CodeRippleX
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar menu for screens above mobile, not visible for mobile screens */}
      <NavbarContent className="hidden sm:flex gap-4 " justify="">
        {menuItems.map((element, index) => (
          <NavbarItem
            isActive={currentTab === index ? true : false}
            className="  animate-drip-expand"
            key={index}
            onClick={() => handleClick(index)}
          >
            {
              <Link
                className={
                  currentTab === index ? "  text-blue-700" : "foreground"
                }
                to={menuPaths[index]}
              >
                {menuItems[index]}
              </Link>
            }
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          {/* <Link to={"/contact"}> */}
          <Button
            color="primary"
            variant="flat"
            onPress={() => handleContactButton()}
          >
            Contact
          </Button>
          {/* </Link> */}
        </NavbarItem>
      </NavbarContent>

      {/* Navbar menu for mobile screens */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            // key={`${item}-${index}`}
            key={index}
            onClick={() => handleClick(index)}
          >
            <Link
              style={{}}
              className={
                currentTab === index
                  ? "  text-blue-700 font-semibold"
                  : "text-stone-800"
              }
              to={menuPaths[index]}
            >
              {menuItems[index]}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
