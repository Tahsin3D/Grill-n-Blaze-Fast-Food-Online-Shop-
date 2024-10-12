import { Col, Container, Row } from "react-bootstrap"
import Burger from '../../assets/hero/hero-2.png'
import { Link } from "react-router-dom"


export default function Section1() {
  return (
    <section className="hero-section">
        <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} className="img-fluid" alt="Hero" />
              <div className="price-badge">
                <div className="badge-text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">600/-</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero-text text-center">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">With Onion</h2>
              <p className="text-white pt-2 pb-4">
                Feugiat primis ligula risus auctor laoreet augue egestas mauris
                viverra tortor in iaculis pretium at magna mauris ipsum primis
                rhoncus feugiat
              </p>
              <Link to="/" className="btn order_now">
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
