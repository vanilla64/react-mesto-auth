import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import logoPath from '../images/logo.svg'

function Header(props) {
  return (
    <Switch>
      <Route path="/404" exact></Route>
      <Route path="*">
        <header className="header">
          <img
            className="header__logo"
            src={logoPath}
            alt="Логотип" />
          <Switch>
            <Route path="/" exact>
              <div className="header__info">
              <div className="header__email">
                { props.email }
              </div>
                <Link
                  to="/sign-in"
                  className="header__navlink"
                  onClick={props.handleClick}>
                  Выйти
                </Link>
              </div>
            </Route>
            <Route path="/sign-up">
              <Link
                to="/sign-in"
                className="header__navlink">
                Войти
              </Link>
            </Route>
            <Route path="/sign-in">
              <Link
                to="/sign-up"
                className="header__navlink">
                Зарегистрироваться
              </Link>
            </Route>
          </Switch>
        </header>
      </Route>
    </Switch>
  )
}

export default Header