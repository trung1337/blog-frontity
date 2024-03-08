import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const Footer = () => {
  return (
    <FooterContainer>
      <Link href="/about-us">About Us</Link>
    </FooterContainer>
  );
};

export default connect(Footer);

const FooterContainer = styled.footer`
  background-color: #f0f0f0;
  padding: 20px;
`;