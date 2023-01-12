import * as React from 'react';
import { Helmet } from "react-helmet";
import { SimpleGrid, Box, Image, Show, Text, FormControl, FormLabel, InputGroup, Input, InputRightElement, Button, Checkbox, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { loginMockup, LogoWhite, showPasswordIcon, hidePasswordIcon } from '../../assets/images';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';

const Login = () => {

  //password input state
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  function myFunction() {
    return (<img src="../assets/images/hide-password-ic.svg" alt="" />);
  }


  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section className="login-wrapper">
        <SimpleGrid columns={{ base: 1, lg: 2 }} className='login-container'>
          <Box className="login-hero">
            <div className="login-content">
              <Link to="#" className="login-logo" title='Company'>
                <Image src={LogoWhite} alt="Company" />
              </Link>
              <Show above='lg'>
                <div className="login-mockup">
                  <img src={loginMockup} alt="Mockup" />
                </div>
                <Text className="copyright-text"> © 2021 Company. All Rights Reserved. </Text>
              </Show>
            </div>
          </Box>
          <Box className='login-main'>
            <div className="form-wrapper">
              <form>
                <Text as='h2'>Welcome Back!</Text>
                <Text as='h5'>Login into your account</Text>
                <InputGroup>
                  <Input
                    type='text'
                    placeholder='Username'
                  />
                </InputGroup>

                <InputGroup>
                  <Input
                    type={show ? 'text' : 'password'}
                    placeholder='Password'
                  />
                  <InputRightElement width='4.5rem'>
                    <IconButton aria-label='Password Icon' onClick={handleClick} variant='ghost' size='md' />
                  </InputRightElement>
                </InputGroup>
                <div className="forgot-password">
                  <Checkbox>Remember me</Checkbox>
                  <Link to="#" title='forgot password' className='custom-link'>Forgot password</Link>
                </div>
                <Button variant='primary' maxW='452px' w='100%' as={Link} to='/dashboard' className='btn-dark' title='Login'>Login</Button>
                <Text className='sign-up-link'>Don’t have an account? <Link to="#">Sign up </Link></Text>
              </form>
              <div className="other-links">
                <Link to="#" title='Privacy Policy' className='custom-link'>Privacy Policy</Link>
                <Link to="#" title='Terms and Condition' className='custom-link'>Terms and Condition</Link>
                <Link to="#" title='Help' className='custom-link'>Help</Link>
              </div>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              <Show below='lg'>
                <Text className="copyright-text"> © 2021 Company. All Rights Reserved. </Text>
              </Show>
            </div>
          </Box>
        </SimpleGrid>
      </section>
    </>
  );
};

export default Login;
