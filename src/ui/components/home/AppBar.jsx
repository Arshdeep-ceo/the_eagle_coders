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
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const menuItems = ["Home", "About", "Testimonials", "Contact Us", "Explore"];
  const menuPaths = ["/", "/about", "testimonials", "/contact", "/explore"];

  const handleClick = (key) => {
    setCurrentTab(key);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className="z-30"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit sm:text-lg">TheEagleCoders</p>
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
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <Dropdown placement="bottom-end">
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
        </Dropdown>
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
