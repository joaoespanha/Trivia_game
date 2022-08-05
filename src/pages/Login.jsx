import React from 'react';

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
    console.log('BRASIL');
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

export default Login;
