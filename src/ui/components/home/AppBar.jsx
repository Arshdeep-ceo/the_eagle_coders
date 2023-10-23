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
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className="z-40  text-gray-200 bg-transparent "
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
          <p className="font-bold text-inherit text-lg sm:text-2xl dark:text-gray-200  tracking-tighter">
            The Eagle Coders
          </p>
        </NavbarBrand>
      </NavbarContent>

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
        {/* <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color=""
              name="Jason Hughes"
              size="sm"
              src="/images/logo.png"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">theeaglecoders@gmail.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            // key={`${item}-${index}`}
            key={index}
            onClick={() => setCurrentTab(index)}
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
