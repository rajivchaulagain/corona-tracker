import { Container } from "react-bootstrap"
import { Heart } from "react-bootstrap-icons"

const Footer = () => {
    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <ul className="d-flex">
                        <li className="pe-2">
                            <a>
                                Github
                            </a>
                        </li>
                        <li className="pe-2">
                            <a>
                                Facebook
                            </a>
                        </li>
                        <li className="pe-2">
                            <a>
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    code with <Heart /> by rajiv chaulagain
                </div>
            </div>
        </Container>
    )
}

export default Footer