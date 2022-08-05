import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { name: '', gravatarEmail: '', btnDisable: true };
  }

  fetchToken = async () => {
    const { history } = this.props;
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const json = await response.json();
    localStorage.setItem('token', json.token);
    history.push('/game');
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
    this.fetchToken();
  }

  render() {
    const { name, gravatarEmail, btnDisable } = this.state;
    const { history } = this.props;
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
          <button
            type="button"
            onClick={ () => history.push('/settings') }
            data-testid="btn-settings"
          >
            Settings
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
