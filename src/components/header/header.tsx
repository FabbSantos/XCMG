import { component$, useStylesScoped$ } from '@builder.io/qwik';
import Logo from '../../img/logo.jpg'
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
          <img src={Logo} alt=" XCMG logo" height="40px" width="180px"/>
      </div>
      <ul class="hidden lg:block">
        <li>
          <a href="#consorcio">
            Consócio
          </a>
        </li>
        <li>
          <a href="#maquinas">
            Maquinários
          </a>
        </li>
        <li>
          <a href="#onde">
            Onde estamos
          </a>
        </li>
      </ul>
      
    </header>
  );
});
