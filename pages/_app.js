import "../styles/globals.scss";
import "semantic-ui-css/semantic.min.css";
import PropTypes from "prop-types";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
MyApp.propTypes = {
  pageProps: PropTypes.shape({}),
  Component: PropTypes.elementType,
};

export default MyApp;
