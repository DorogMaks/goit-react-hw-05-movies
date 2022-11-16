import PropTypes from 'prop-types';
import { Message, Text } from './Notification.styled';
import notFound from '../../images/notFound.jpg';

export const Notification = ({ message }) => {
  return (
    <Message>
      <img src={notFound} alt="not found" width="280px" />
      <Text>{message}</Text>
    </Message>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
