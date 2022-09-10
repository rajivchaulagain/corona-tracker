import { Col, Container, Row, Card } from "react-bootstrap"
import LineCharts from "../components/charts/LineChart"
import Footer from '../components/footer/Footer'

import Header from "../components/header/Header"
import DashboardNavbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"

const Dashboard = () => {

    return (
        <Container fluid>
            <DashboardNavbar />
            <Row>
                <Col md={3} lg={2}>
                    <Sidebar />
                </Col>
                <Col md={9} lg={10}>
                    <main>
                        <div className="py-4">
                            <p className="text-muted">COVID-19 TRACKER | INDIA</p>
                            <h3>Overall Stats</h3>
                        </div>
                        <Row>
                            <Col md={3}>
                                <Header title="Total cases" totalCase={123400} variant="warning" />
                            </Col>
                            <Col md={3}>
                                <Header title="Total recovered" totalCase={12340} variant="success" />
                            </Col>
                            <Col md={3}>
                                <Header title="Total deaths" totalCase={1230} variant="danger" />
                            </Col>
                            <Col md={3}>
                                <Header title="Total deaths" totalCase={1230} variant="danger" />
                            </Col>
                        </Row>
                        <Row className="my-5">
                            <Col md={6}>
                                <Card>
                                    <Card.Body>
                                        <LineCharts />
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card>
                                    <Card.Body>
                                        <LineCharts />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </main>
                    <Footer />
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard