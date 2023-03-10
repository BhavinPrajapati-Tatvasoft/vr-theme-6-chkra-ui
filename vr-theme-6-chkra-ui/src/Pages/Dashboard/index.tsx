import * as React from "react";
import {
  AspectRatio,
  Card,
  Grid,
  GridItem,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Progress,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import {
  barChartIcon,
  keyIcon,
  moneyCoinIcon,
  threeDots,
  user1,
  user2,
  user3,
  user4,
  walletIcon,
  worldMap,
} from "../../assets/images";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import CountUp from "react-countup";
import WeeklyReport from "../../Components/Charts/weeklyReport";
import gsap from "gsap";
const { useLayoutEffect } = React;

const Dashboard: React.FC = () => {
  //GSAP Animation
  useLayoutEffect(() => {
    let statisticsSvg = gsap.timeline();
    statisticsSvg.fromTo(
      ".statistic-card .img-block img",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 }
    );

    let pageText = gsap.timeline();
    pageText.fromTo(
      ".page-title",
      { y: "-40px", opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    pageText.fromTo(
      ".data-info",
      { y: "20px", opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3 }
    );
    pageText.fromTo(
      "h5",
      { y: "20px", opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3 }
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <Sidebar />
        {/* Main content Start */}
        <div className="main-content">
          <Text as="h3" className="page-title">
            Dashboard
          </Text>
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={{ base: "16px", lg: "20px", xl: "30px" }}
          >
            {/* Statistics Cards Start */}
            <GridItem colSpan={{ base: 12, xl: 3, sm: 6 }}>
              <a href="#" title="Property Sold" className="statistic-card blue">
                <div>
                  <Text as="h3">
                    <CountUp end={6387} />
                  </Text>
                  <Text as="p" className="data-info">
                    Property Sold
                  </Text>
                </div>
                <div className="img-block">
                  <Image src={barChartIcon} alt="Property Sold" />
                </div>
              </a>
            </GridItem>
            <GridItem colSpan={{ base: 12, xl: 3, sm: 6 }}>
              <a href="#" title="Income" className="statistic-card pink">
                <div>
                  <Text as="h3">
                    <CountUp end={9712} prefix="$" separator="," />
                  </Text>
                  <Text as="p" className="data-info">
                    Income
                  </Text>
                </div>
                <div className="img-block">
                  <Image src={walletIcon} alt="Income" />
                </div>
              </a>
            </GridItem>
            <GridItem colSpan={{ base: 12, xl: 3, sm: 6 }}>
              <a href="#" title="Expense" className="statistic-card orange">
                <div>
                  <Text as="h3">
                    <CountUp end={965} />
                  </Text>
                  <Text as="p" className="data-info">
                    Expense
                  </Text>
                </div>
                <div className="img-block">
                  <Image src={moneyCoinIcon} alt="Expense" />
                </div>
              </a>
            </GridItem>
            <GridItem colSpan={{ base: 12, xl: 3, sm: 6 }}>
              <a
                href="#"
                title="Property Rented"
                className="statistic-card red"
              >
                <div>
                  <Text as="h3">
                    <CountUp end={8723} prefix="$" separator="," />
                  </Text>
                  <Text as="p" className="data-info">
                    Property Rented
                  </Text>
                </div>
                <div className="img-block">
                  <Image src={keyIcon} alt="Property Rented" />
                </div>
              </a>
            </GridItem>
            {/* Statistics Cards End */}

            {/* Weekly Report Card Start */}
            <GridItem colSpan={{ base: 12, xl: 7 }}>
              <Card className="custom-card weekly-report-card">
                <div className="card-heading">
                  <Text as="h5">Weekly Report</Text>
                  <div className="graph-notation">
                    <Text as="p">This week</Text>
                    <Text as="p">last week</Text>
                  </div>
                </div>
                <AspectRatio ratio={16 / 9}>
                  <WeeklyReport />
                </AspectRatio>
              </Card>
            </GridItem>
            {/* Weekly Report Card End */}

            {/* Transaction Card Start */}
            <GridItem colSpan={{ base: 12, xl: 5 }}>
              <Card className="custom-card transaction-card">
                <div className="card-heading">
                  <Text as="h5">Transaction</Text>
                  <a href="#" title="View more" className="header-link">
                    View more
                  </a>
                </div>
                <ul>
                  <li>
                    <a href="#" title="Transaction-info">
                      <Image
                        src={user1}
                        alt="User Name"
                        className="user-profile"
                      />
                      <span className="user-details">
                        <Text as="p" className="user-name">
                          Devon Lane
                        </Text>
                        <Text as="p" className="transaction-date">
                          March 23, 2013
                        </Text>
                      </span>
                      <span className="transaction-amount success">
                        +<CountUp end={600} prefix="$" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Transaction-info">
                      <Image
                        src={user2}
                        alt="User Name"
                        className="user-profile"
                      />
                      <span className="user-details">
                        <Text as="p" className="user-name">
                          Bessie Cooper
                        </Text>
                        <Text as="p" className="transaction-date">
                          May 31, 2015
                        </Text>
                      </span>
                      <span className="transaction-amount danger">
                        -<CountUp end={400} prefix="$" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Transaction-info">
                      <Image
                        src={user3}
                        alt="User Name"
                        className="user-profile"
                      />
                      <span className="user-details">
                        <Text as="p" className="user-name">
                          Guy Hawkins
                        </Text>
                        <Text as="p" className="transaction-date">
                          October 31, 2017
                        </Text>
                      </span>
                      <span className="transaction-amount success">
                        +<CountUp end={200} prefix="$" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Transaction-info">
                      <Image
                        src={user4}
                        alt="User Name"
                        className="user-profile"
                      />
                      <span className="user-details">
                        <Text as="p" className="user-name">
                          Kathryn Murphy
                        </Text>
                        <Text as="p" className="transaction-date">
                          December 2, 2018
                        </Text>
                      </span>
                      <span className="transaction-amount success">
                        +<CountUp end={450} prefix="$" />
                      </span>
                    </a>
                  </li>
                </ul>
              </Card>
            </GridItem>
            {/* Transaction Card End */}

            {/* Table Start */}
            <GridItem colSpan={{ base: 12, xl: 7 }}>
              <Card className="custom-card">
                <div className="card-heading">
                  <Text as="h5">Table</Text>
                  <a href="#" title="View more" className="header-link">
                    View more
                  </a>
                </div>
                <TableContainer>
                  <Table>
                    <Thead>
                      <Tr>
                        <Th>SKU</Th>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Action</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>50364</Td>
                        <Td>Floyd Miles</Td>
                        <Td>tparisian@gmail.com</Td>
                        <Td>
                          <Menu>
                            <MenuButton
                              as={IconButton}
                              aria-label="Options"
                              icon={<Image src={threeDots} />}
                              variant="outline"
                              className="custom-table-menu"
                            />
                            <MenuList>
                              <MenuItem>New Row</MenuItem>
                              <MenuItem>New Data</MenuItem>
                              <MenuItem>Delete Log</MenuItem>
                            </MenuList>
                          </Menu>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>50364</Td>
                        <Td>Jane Cooper</Td>
                        <Td>altenwerth.ansel@sawayn.com</Td>
                        <Td>
                          <Menu>
                            <MenuButton
                              as={IconButton}
                              aria-label="Options"
                              icon={<Image src={threeDots} />}
                              variant="outline"
                              className="custom-table-menu"
                            />
                            <MenuList>
                              <MenuItem>New Row</MenuItem>
                              <MenuItem>New Data</MenuItem>
                              <MenuItem>Delete Log</MenuItem>
                            </MenuList>
                          </Menu>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>50364</Td>
                        <Td>Esther Howard</Td>
                        <Td>rebeka.jacobi@carroll.org</Td>
                        <Td>
                          <Menu>
                            <MenuButton
                              as={IconButton}
                              aria-label="Options"
                              icon={<Image src={threeDots} />}
                              variant="outline"
                              className="custom-table-menu"
                            />
                            <MenuList>
                              <MenuItem>New Row</MenuItem>
                              <MenuItem>New Data</MenuItem>
                              <MenuItem>Delete Log</MenuItem>
                            </MenuList>
                          </Menu>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>50364</Td>
                        <Td>Jane Cooperr</Td>
                        <Td>eramy.bogan@gmail.com</Td>
                        <Td>
                          <Menu>
                            <MenuButton
                              as={IconButton}
                              aria-label="Options"
                              icon={<Image src={threeDots} />}
                              variant="outline"
                              className="custom-table-menu"
                            />
                            <MenuList>
                              <MenuItem>New Row</MenuItem>
                              <MenuItem>New Data</MenuItem>
                              <MenuItem>Delete Log</MenuItem>
                            </MenuList>
                          </Menu>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>50364</Td>
                        <Td>Leslie Alexander</Td>
                        <Td>jeramy.bogan@gmail.com</Td>
                        <Td>
                          <Menu>
                            <MenuButton
                              as={IconButton}
                              aria-label="Options"
                              icon={<Image src={threeDots} />}
                              variant="outline"
                              className="custom-table-menu"
                            />
                            <MenuList>
                              <MenuItem>New Row</MenuItem>
                              <MenuItem>New Data</MenuItem>
                              <MenuItem>Delete Log</MenuItem>
                            </MenuList>
                          </Menu>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>50364</Td>
                        <Td>Jane Cooper</Td>
                        <Td>trantow.crystal@zulauf.com</Td>
                        <Td>
                          <Menu>
                            <MenuButton
                              as={IconButton}
                              aria-label="Options"
                              icon={<Image src={threeDots} />}
                              variant="outline"
                              className="custom-table-menu"
                            />
                            <MenuList>
                              <MenuItem>New Row</MenuItem>
                              <MenuItem>New Data</MenuItem>
                              <MenuItem>Delete Log</MenuItem>
                            </MenuList>
                          </Menu>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>50364</Td>
                        <Td>Robert Fox</Td>
                        <Td>magdalen39@langosh.com</Td>
                        <Td>
                          <Menu>
                            <MenuButton
                              as={IconButton}
                              aria-label="Options"
                              icon={<Image src={threeDots} />}
                              variant="outline"
                              className="custom-table-menu"
                            />
                            <MenuList>
                              <MenuItem>New Row</MenuItem>
                              <MenuItem>New Data</MenuItem>
                              <MenuItem>Delete Log</MenuItem>
                            </MenuList>
                          </Menu>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>50364</Td>
                        <Td>Jane Cooper</Td>
                        <Td>roman.russel@nikolaus.biz</Td>
                        <Td>
                          <Menu>
                            <MenuButton
                              as={IconButton}
                              aria-label="Options"
                              icon={<Image src={threeDots} />}
                              variant="outline"
                              className="custom-table-menu"
                            />
                            <MenuList>
                              <MenuItem>New Row</MenuItem>
                              <MenuItem>New Data</MenuItem>
                              <MenuItem>Delete Log</MenuItem>
                            </MenuList>
                          </Menu>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>50364</Td>
                        <Td>Jacob Jones</Td>
                        <Td>rebeka.jacobi@carroll.org</Td>
                        <Td>
                          <Menu>
                            <MenuButton
                              as={IconButton}
                              aria-label="Options"
                              icon={<Image src={threeDots} />}
                              variant="outline"
                              className="custom-table-menu"
                            />
                            <MenuList>
                              <MenuItem>New Row</MenuItem>
                              <MenuItem>New Data</MenuItem>
                              <MenuItem>Delete Log</MenuItem>
                            </MenuList>
                          </Menu>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>50364</Td>
                        <Td>Jane Cooper</Td>
                        <Td>tevin44@gmail.com</Td>
                        <Td>
                          <Menu>
                            <MenuButton
                              as={IconButton}
                              aria-label="Options"
                              icon={<Image src={threeDots} />}
                              variant="outline"
                              className="custom-table-menu"
                            />
                            <MenuList>
                              <MenuItem>New Row</MenuItem>
                              <MenuItem>New Data</MenuItem>
                              <MenuItem>Delete Log</MenuItem>
                            </MenuList>
                          </Menu>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Card>
            </GridItem>
            {/* Table End */}

            {/* Sales by Locations Card Start */}
            <GridItem colSpan={{ base: 12, xl: 5 }}>
              <Card className="custom-card">
                <div className="card-heading">
                  <Text as="h5">Sales by Locations</Text>
                  <a href="#" title="View more" className="header-link">
                    View more
                  </a>
                </div>
                <Image src={worldMap} alt="Map" />
                <ul className="sales-progress">
                  <li>
                    <span className="city-info">
                      <Text as="em">USA</Text>
                      <CountUp
                        end={75}
                        suffix="%"
                        duration={1}
                        enableScrollSpy
                        scrollSpyOnce
                      >
                        {({ countUpRef, start }) => (
                          <>
                            <span ref={countUpRef} />
                          </>
                        )}
                      </CountUp>
                    </span>
                    <Progress colorScheme="green" size="sm" value={75} />
                  </li>
                  <li>
                    <span className="city-info">
                      <Text as="em">India</Text>
                      <CountUp
                        end={86}
                        suffix="%"
                        enableScrollSpy
                        scrollSpyOnce
                      >
                        {({ countUpRef, start }) => (
                          <>
                            <span ref={countUpRef} />
                          </>
                        )}
                      </CountUp>
                    </span>
                    <Progress colorScheme="green" size="sm" value={86} />
                  </li>
                  <li>
                    <span className="city-info">
                      <Text as="em">Russia</Text>
                      <CountUp
                        end={62}
                        suffix="%"
                        enableScrollSpy
                        scrollSpyOnce
                      >
                        {({ countUpRef, start }) => (
                          <>
                            <span ref={countUpRef} />
                          </>
                        )}
                      </CountUp>
                    </span>
                    <Progress colorScheme="green" size="sm" value={62} />
                  </li>
                </ul>
              </Card>
            </GridItem>
            {/* Sales by Locations Card End */}
          </Grid>
        </div>
        {/* Main content End */}
      </div>
    </>
  );
};
export default Dashboard;
