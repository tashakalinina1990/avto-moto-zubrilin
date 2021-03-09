import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../footer/footer';
import Header from '../header/header';
import OfferInfo from '../offer-info/offer-info';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';
import Modal from '../modal/modal';

const MainPage = ({ isModalOpen }) => {
  return (
    <React.Fragment>
      <Header />
      <section className="offer">
        <div className="offer__wrapper">
          <Slider />
          <OfferInfo />
        </div>
      </section>
      <Tabs />
      <Footer />
      <Modal isOpen={isModalOpen} />
    </React.Fragment>
  );
};

MainPage.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ isModalOpen }) => {
  return { isModalOpen };
};

export { MainPage };
export default connect(mapStateToProps)(MainPage);
