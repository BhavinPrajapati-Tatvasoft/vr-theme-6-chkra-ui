import * as React from 'react';
import { Alert, AlertDescription, AlertIcon, Box, Button, Card, Checkbox, CloseButton, Grid, GridItem, HStack, IconButton, Image, Input, InputGroup, InputRightElement, Radio, RadioGroup, Select, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { hidePasswordIcon, showPasswordIcon, uploadIcon, alertErrorIcon, alertInfoIcon, alertWarningIcon, alertSuccessIcon } from "../../assets/images";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

const Innerpage = () => {

  //password input state
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Helmet>
        <title>Inner</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <section className="main-content inner">
          <Text as="h3" className="page-title">Users</Text>
          <Card>

            {/* -------- first column start ---------  */}
            <Text as="h5">One Column</Text>
            <InputGroup >
              <Input
                type='text'
                placeholder='Username'
              />
            </InputGroup>
            <InputGroup>
              <Select placeholder='Dropdown'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </InputGroup>
            <Textarea placeholder='Multiple  line' rows={4} />


            {/* -------- Two column start ---------  */}
            <Text as="h5">Two Column</Text>
            <Grid templateColumns='repeat(6, 1fr)' columnGap={{base: '16px', md: '30px'} } rowGap='10px'>
              <GridItem colSpan={{ base: 12, md: 3, }}>
                <InputGroup >
                  <Input
                    type='text'
                    placeholder='Username'
                  />
                </InputGroup>
              </GridItem>

              <GridItem colSpan={{ base: 12, md: 3, }}>
                <InputGroup>
                  <Input
                    type={show ? 'text' : 'password'}
                    placeholder='Password'
                  />
                  <InputRightElement>
                    <IconButton aria-label='Password Icon' onClick={handleClick} icon={<Image src={show ? showPasswordIcon : hidePasswordIcon} />} className='custom-iconbutton' />
                  </InputRightElement>
                </InputGroup>
              </GridItem>

              <GridItem colSpan={{ base: 12, md: 3, }}>
                <InputGroup >
                  <Input
                    type='text'
                    placeholder='Name'
                  />
                </InputGroup>
              </GridItem>

              <GridItem colSpan={{ base: 12, md: 3, }}>
                <InputGroup >
                  <Input
                    type='text'
                    placeholder='Error'
                    isInvalid
                    focusBorderColor='blue'
                  />
                </InputGroup>
              </GridItem>
            </Grid>

            {/* -------- Three column start ---------  */}
            <Text as="h5">Three Column</Text>
            <Grid templateColumns='repeat(12, 1fr)' columnGap={{base: '16px', md: '30px'} } rowGap='10px'>
              <GridItem colSpan={{ base: 12, lg: 4, md: 6 }}>
                <InputGroup >
                  <Input
                    type='text'
                    placeholder='Focus'
                  />
                </InputGroup>
              </GridItem>

              <GridItem colSpan={{ base: 12, lg: 4, md: 6 }}>
                <InputGroup >
                  <Input
                    type='text'
                    placeholder='Disabled'
                    disabled
                  />
                </InputGroup>
              </GridItem>

              <GridItem colSpan={{ base: 12, lg: 4, md: 6 }}>
                <InputGroup>
                  <Select placeholder='Dropdown'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </Select>
                </InputGroup>
              </GridItem>
            </Grid>

            {/* -------- Four column start ---------  */}
            <Text as="h5">Four Column</Text>
            <Grid templateColumns='repeat(12, 1fr)' columnGap={{base: '16px', md: '30px'} } rowGap='10px'>
              <GridItem colSpan={{ base: 12, lg: 3, md: 6 }}>
                <InputGroup >
                  <Input
                    type='text'
                    placeholder='Username'
                  />
                </InputGroup>
              </GridItem>

              <GridItem colSpan={{ base: 12, lg: 3, md: 6 }}>
                <InputGroup>
                  <Input
                    type={show ? 'text' : 'password'}
                    placeholder='Password'
                  />
                  <InputRightElement>
                    <IconButton aria-label='Password Icon' onClick={handleClick} icon={<Image src={show ? showPasswordIcon : hidePasswordIcon} />} className='custom-iconbutton' />
                  </InputRightElement>
                </InputGroup>
              </GridItem>

              <GridItem colSpan={{ base: 12, lg: 3, md: 6 }}>
                <InputGroup>
                  <Select placeholder='Dropdown'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                  </Select>
                </InputGroup>
              </GridItem>

              <GridItem colSpan={{ base: 12, lg: 3, md: 6 }}>
                <InputGroup >
                  <Input
                    type='text'
                    placeholder='Error'
                  />
                </InputGroup>
              </GridItem>
            </Grid>

            {/* -------- Other Design start ---------  */}
            <Text as="h5">Other Design elements</Text>

            <Text as="h6">File Upload</Text>
            <div className="file-upload-main">
              <div className='file-upload-wrapper'>
                <input
                  type="file"
                  name="Upload"
                  id="upload"
                  placeholder="Upload"
                />
                <div className="file-content">
                  <img src={uploadIcon} alt="Upload Icon" />
                  <h4>Upload</h4>
                </div>
              </div>
              <p>No item Selected</p>
            </div>

            <Text as="h6">Check Box</Text>
            <div className="check-group">
              <HStack spacing='24px'>
                <Checkbox>Selected</Checkbox>
                <Checkbox>Not Yet Selected</Checkbox>
              </HStack>
            </div>

            <Text as="h6">Radio Button</Text>
            <RadioGroup defaultValue='Selected' className='radio-group'>
              <HStack spacing='24px'>
                <Radio value='Selected'>Selected</Radio>
                <Radio value='Not Selected'>Not Yet Selected</Radio>
              </HStack>
            </RadioGroup>

            <Text as="h6">Snack Bar</Text>
            <SimpleGrid gap={6} columns={{ base: 1, lg: 2 }} className='snackbar-group'>
              <Alert status='error' className='alert-error'>
                <Image src={alertErrorIcon} />
                <Box>
                  <AlertDescription>
                    This is an error Message
                  </AlertDescription>
                </Box>
                <CloseButton
                  alignSelf='flex-start'
                  position='relative'
                  right={-1}
                  ml='auto'
                />
              </Alert>

              <Alert status='info' className='alert-info'>
                <Image src={alertInfoIcon} />
                <Box>
                  <AlertDescription>
                    This is an information message!
                  </AlertDescription>
                </Box>
                <CloseButton
                  alignSelf='flex-start'
                  position='relative'
                  right={-1}
                  ml='auto'
                />
              </Alert>
              <Alert status='warning' className='alert-warning'>
                <Image src={alertWarningIcon} />
                <Box>
                  <AlertDescription>
                    This is a warning message!
                  </AlertDescription>
                </Box>
                <CloseButton
                  alignSelf='flex-start'
                  position='relative'
                  right={-1}
                  ml='auto'
                />
              </Alert>
              <Alert status='success' className='alert-success'>
                <Image src={alertSuccessIcon} />
                <Box>
                  <AlertDescription>
                    This is a Success message!
                  </AlertDescription>
                </Box>
                <CloseButton
                  alignSelf='flex-start'
                  position='relative'
                  right={-1}
                  ml='auto'
                />
              </Alert>

            </SimpleGrid>

            <Text as="h6">CTA</Text>
            <HStack spacing='20px'>
              <Button variant='primary'>Primary</Button>
              <Button variant='outline'>Secondary</Button>
            </HStack>

            <div className="secondary-section tab-wrapper">
              <Text as="h5">Tabs</Text>
              <Tabs>
                <TabList>
                  <Tab>Tab 1</Tab>
                  <Tab>Tab 2</Tab>
                  <Tab>Tab 3</Tab>
                  <Tab>Tab 4</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and
                    web page editors now use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their infancy.
                  </TabPanel>
                  <TabPanel>
                    Many desktop publishing packages and
                    web page editors now use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their infancy.
                  </TabPanel>
                  <TabPanel>
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and
                    web page editors now use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their infancy.
                  </TabPanel>
                  <TabPanel>
                    It is a long established fact that a reader will be distracted.
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </Card>
        </section>
      </div>
    </>
  );
};

export default Innerpage;
