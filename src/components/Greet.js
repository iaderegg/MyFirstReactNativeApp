import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Greet({ firstname = "DefaultName", lastname = "DefaultLastname" }) {
  return <Text>Hello {firstname} {lastname}!</Text>
}

Greet.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};