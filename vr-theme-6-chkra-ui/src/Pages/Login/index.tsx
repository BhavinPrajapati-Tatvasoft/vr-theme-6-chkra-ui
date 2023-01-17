import * as React from "react";
import { Helmet } from "react-helmet";
import {
  Image,
  Show,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Checkbox,
  IconButton,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  loginMockup,
  LogoWhite,
  showPasswordIcon,
  hidePasswordIcon,
} from "../../assets/images";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";

const { useLayoutEffect } = React;

const Login = () => {
  //password input state
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  //GSAP Animations
  useLayoutEffect(() => {
    let loginText = gsap.timeline();
    loginText.fromTo(
      ".login-wrapper h5",
      { y: "-40px", opacity: 0 },
      { y: 0, opacity: 1, delay: 0.5 }
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section className="login-wrapper">
        <Grid templateColumns="repeat(12, 1fr)" className="login-container">
          {/* Login Hero Banner Start */}
          <GridItem colSpan={{ base: 12, lg: 7 }} className="login-hero">
            <div className="login-content">
              <Link to="#" className="login-logo" title="Company">
                <Image src={LogoWhite} alt="Company" />
              </Link>
              <Show above="lg">
                <div className="login-mockup">
                  <Image
                    src={loginMockup}
                    alt="Mockup"
                    onLoad={(e) => {
                      let loginImg = gsap.timeline();
                      loginImg.fromTo(
                        ".login-wrapper .login-mockup img",
                        { scale: 0, opacity: 0 },
                        { scale: 1, opacity: 1 },
                        "<"
                      );
                    }}
                  />
                </div>
                <Text className="copyright-text">
                  © 2021 Company. All Rights Reserved.
                </Text>
              </Show>
            </div>
          </GridItem>
          {/* Login Hero Banner End */}

          {/* Login Content Start */}
          <GridItem
            colStart={{ base: 1, lg: 8 }}
            colEnd={13}
            className="login-main"
          >
            <div className="form-wrapper">
              <form>
                <Text as="h2" fontSize="xl">
                  <Typewriter
                    words={["Welcome Back!"]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={100}
                    delaySpeed={1000}
                  />
                </Text>
                <Text as="h5">Login into your account</Text>
                <InputGroup>
                  <Input type="text" placeholder="Username" />
                </InputGroup>
                <InputGroup>
                  <Input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label="Password Icon"
                      onClick={handleClick}
                      icon={
                        <Image
                          src={show ? showPasswordIcon : hidePasswordIcon}
                        />
                      }
                      className="password-iconbutton"
                    />
                  </InputRightElement>
                </InputGroup>
                <div className="forgot-password">
                  <Checkbox>Remember me</Checkbox>
                  <Link to="#" title="forgot password" className="custom-link">
                    Forgot password
                  </Link>
                </div>
                <Button
                  variant="primary"
                  maxW="452px"
                  w="100%"
                  as={Link}
                  to="/dashboard"
                  className="btn-primary"
                  title="Login"
                >
                  Login
                </Button>
                <Text className="sign-up-link">
                  Don’t have an account?
                  <Link to="#" title="Sign up">
                    Sign up
                  </Link>
                </Text>
              </form>
              <div className="other-links">
                <Link to="#" title="Privacy Policy" className="custom-link">
                  Privacy Policy
                </Link>
                <Link
                  to="#"
                  title="Terms and Condition"
                  className="custom-link"
                >
                  Terms and Condition
                </Link>
                <Link to="#" title="Help" className="custom-link">
                  Help
                </Link>
              </div>
              <Show below="lg">
                <Text className="copyright-text">
                  © 2021 Company. All Rights Reserved.
                </Text>
              </Show>
            </div>
          </GridItem>
          {/* Login Content End */}
        </Grid>
      </section>
    </>
  );
};

export default Login;
