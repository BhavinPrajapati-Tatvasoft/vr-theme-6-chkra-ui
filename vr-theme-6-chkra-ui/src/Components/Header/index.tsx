import {
  Avatar,
  Button,
  Hide,
  IconButton,
  Image,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import {
  adminUser,
  hamburgerIcon,
  LogoBlack,
  messageIcon,
  mobileLogo,
  notificationIcon,
  profileDownArrowIcon,
  searchIcon,
} from "../../assets/images";

const Header: React.FC = () => {
  return (
    <>
      <div
        className="overlay"
        onClick={(e) =>
          document.body.classList.remove("open-sidebar", "show-searchbar")
        }
      ></div>
      <header className="header">
        <IconButton
          variant="outline"
          aria-label="toggle-menu"
          className="toggle-button icon-btn"
          icon={<Avatar name="Hamburger" src={hamburgerIcon} />}
          onClick={(e) => document.body.classList.toggle("open-sidebar")}
        />
        <Link href="#" title="Company" className="logo">
          <Hide below="lg">
            <Image src={LogoBlack} alt="Company" />
          </Hide>
          <Show below="lg">
            <Image src={mobileLogo} alt="Company" />
          </Show>
        </Link>
        <div className="right-content">
          <div className="search-wrapper">
            <div>
              <Input type="text" placeholder="Search" />
              <IconButton
                variant="outline"
                aria-label="Search"
                icon={<Avatar name="Search" src={searchIcon} />}
              />
            </div>
          </div>
          <Show below="lg">
            <IconButton
              variant="outline"
              aria-label="Search"
              className="search-toggle icon-btn"
              icon={<Avatar name="Search" src={searchIcon} />}
              onClick={(e) => document.body.classList.toggle("show-searchbar")}
            />
          </Show>
          <IconButton
            variant="outline"
            aria-label="Message"
            className="icon-btn"
            icon={<Avatar name="Message" src={messageIcon} />}
          />
          <IconButton
            variant="outline"
            aria-label="Notification"
            className="icon-btn"
            icon={<Avatar name="Notification" src={notificationIcon} />}
          />
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<Image src={profileDownArrowIcon} alt="Down Arrow" />}
            >
              <Image src={adminUser} alt="User" className="user-profile-pic" />
              <Hide below="lg">
                <span>Jhon Doe</span>
              </Hide>
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>My Account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </header>
    </>
  );
};
export default Header;
