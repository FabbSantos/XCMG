import { component$, useStylesScoped$ } from '@builder.io/qwik';
import Logo from '../../img/logo.png'
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="self-center max-w-[90%]">
      <div class="logo">
          <img src={Logo} alt=" XCMG logo" height="40px" width="180px"/>
      </div>

      <ul class="hidden lg:flex lg:justify-end gap-12 uppercase">
        <li>
          <a href="#maquinas">
            Maquinários
          </a>
        </li>
        <li>
          <a href="#consorcio">
            Consórcio
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
