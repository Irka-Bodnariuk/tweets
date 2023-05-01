import { Container, Link } from "./NavBar.styled";

const NavBar = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/tweets">Tweets</Link>
    </Container>
  );
};

export default NavBar;
