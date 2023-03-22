import { component$, useStylesScoped$ } from '@builder.io/qwik';
import Logo from '../../img/logo.jpg'
import styles from './headerty.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
          <img src={Logo} alt=" XCMG logo" height="40px" width="180px"/>
      </div>
      <ul class="hidden lg:flex lg:justify-center">
        <li>
          <a href="#consorcio">
            Consórcio
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
        <li>
          <div class="flex flex-col text-center">
            <span class="text-[#004C96] font-bold text-sm">WhatsApp Vendas</span>
            <a href="https://wa.me/551621033505" target="_blank" rel='noopener noreferrer'>
              (16) 2103-3505
            </a>
          </div>
        </li>
      </ul>
      
    </header>
  );
});
