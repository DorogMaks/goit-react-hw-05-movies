import { Notification } from 'components/Notification/Notification';
import { Container } from 'components/Shared/Container.styled';
import { Section } from 'components/Shared/Section.styled';
import notFound from '../images/notFound.jpg';

const NotFound = () => {
  return (
    <Section>
      <Container>
        <Notification message="Sorry, we couldn't find that page :(">
          <img src={notFound} alt="not found" width="280px" />
        </Notification>
      </Container>
    </Section>
  );
};

export default NotFound;
