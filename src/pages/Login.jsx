import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { name: '', gravatarEmail: '', btnDisable: true };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.id]: target.value,
    }, () => {
      const btnDisable = this.formValidation();
      this.setState({ btnDisable });
    });
  }

  formValidation = () => {
    const { name, gravatarEmail } = this.state;
    return !(name.length > 0 && gravatarEmail.length > 0);
  }

  handleClick = () => {
    const { gravatarEmail, name } = this.state;
    const { saveUser } = this.props;
    saveUser({ name, gravatarEmail });
  }

  render() {
    const { name, gravatarEmail, btnDisable } = this.state;
    return (
      <main>
        <form>
          <label htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="name"
              data-testid="input-player-name"
              onChange={ this.handleChange }
              value={ name }
            />
          </label>
          <label htmlFor="email">
            <input
              id="gravatarEmail"
              name="gravatarEmail"
              type="text"
              placeholder="email"
              data-testid="input-gravatar-email"
              onChange={ this.handleChange }
              value={ gravatarEmail }
            />
          </label>
          <button
            type="button"
            disabled={ btnDisable }
            onClick={ this.handleClick }
            data-testid="btn-play"
          >
            Play
          </button>
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  saveUser: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  saveUser: (userData) => dispatch(login(userData)),
});

export default connect(null, mapDispatchToProps)(Login);
