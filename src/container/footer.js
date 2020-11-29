import React from 'react'
import Footer from'../components/footer'
import Icon from'../components/icons'

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About us</Footer.Title>
                    <Footer.Link href="#">Jobs History</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">What I do</Footer.Link>
                    </Footer.Column>

                     <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Web design</Footer.Link>
                    <Footer.Link href="#">Mobile Apps</Footer.Link>
                    <Footer.Link href="#">UI & UX</Footer.Link>
                    <Footer.Link href="#">Design (Graphic)</Footer.Link>
                    </Footer.Column>

                     <Footer.Column>
                    <Footer.Title>Contact us</Footer.Title>
                    <Footer.Link href="">Kenya</Footer.Link>
                    <Footer.Link href="">Nairobi</Footer.Link>
                    <Footer.Link href="">Support</Footer.Link>
                    </Footer.Column>

                     <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href=""><Icon className="fab fa-facebook-f"/>Facebook</Footer.Link>
                    <Footer.Link href=""><Icon className="fab fa-instagram"/>Instagram</Footer.Link>
                    <Footer.Link href=""><Icon className="fab fa-youtube"/>Youtube</Footer.Link>
                    <Footer.Link href=""><Icon className="fab fa-twitter"/>Twitter</Footer.Link>
                    </Footer.Column>
                     </Footer.Row>
                   
                </Footer.Wrapper>
                
            </Footer>
    )
}