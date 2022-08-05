import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import generateGravatarSrcPic from '../helpers/generateGravatarSrcPic';

class Header extends React.Component {
    generateSrc =() => {
      const { email } = this.props;
      const src = generateGravatarSrcPic(email);
      return src;
    }

    render() {
      const { score, name } = this.props;
      return (
        <div>
          <img
            data-testid="header-profile-picture"
            src={ this.generateSrc() }
            alt="profile-pic"
          />
          <span data-testid="header-player-name">
            Player Name:
            {name}
          </span>
          <span data-testid="header-score">
            Score:
            {score}
          </span>

        </div>
      );
    }
}

Header.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

const mapStateToProps = (store) => ({
  email: store.player.gravatarEmail,
  score: store.player.score,
  name: store.player.name,
});

export default connect(mapStateToProps)(Header);
