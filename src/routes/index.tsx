import { component$ } from '@builder.io/qwik';
import Footer from '~/components/footer';
// import Header from '../components/header/header';
import type { DocumentHead } from '@builder.io/qwik-city';
import First from '~/components/first';
import Fourth from '~/components/fourth';
import Second from '~/components/second';
import Third from '~/components/third';


export default component$(() => {
  // const serverTime = useServerTimeLoader();
  return (
    <>
      <main>
        <header>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
          {/* <!-- Google Tag Manager --> */}
          <script dangerouslySetInnerHTML={
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W4ND5ZX');`
          }/>
          {/* <!-- End Google Tag Manager --> */}
          {/* <!-- Meta Pixel Code --> */}
          <script dangerouslySetInnerHTML={
            `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '588003766572965');
            fbq('track', 'PageView');
            `
          }/>
          <noscript dangerouslySetInnerHTML={
            `<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=588003766572965&ev=PageView&noscript=1"
            />`
          }/>
          {/* <!-- End Meta Pixel Code --> */}
        </header>
        <section class="drop-shadow subpixel-antialiased">
          <>
          <First />
          <Third/>
          <Second/>
          <Fourth/>
          </>
        </section>

<script dangerouslySetInnerHTML={
  `
function isValidBrazilianMobileNumber(number) {
  const validDdd = /^((1[1-9])|(2[12478])|(3[1-5]|[37-8])|(4[1-9])|(5[134]|[1-9])|(6[1-9])|(7[1-35-79])|(8[1-9])|(9[1-9]))/;

  // Remove non-numeric characters
  const cleanedNumber = number.replace(/\\D+/g, '');

  // Regular expression to validate Brazilian mobile numbers
  // Assumes the number starts with 9 and has a total length of 11 digits (including the area code)
  const brMobileNumber = /^(\\d{2})9\\d{8}$/;

  // Check if all digits are the same
  const allDigitsSame = /^(\\d)\\1+$/;

  const allDigitsSame2 = /^(?:\\d{2})(\\d)\\1+$/;
  
  // Check for repeating 2-digit patterns
  const repeatingPattern = /^(\\d{2})\\1+$/;

  return (
    validDdd.test(cleanedNumber) &&
    brMobileNumber.test(cleanedNumber) &&
    !allDigitsSame.test(cleanedNumber) &&
    !allDigitsSame2.test(cleanedNumber) &&
    !repeatingPattern.test(cleanedNumber.slice(2)) // Ignore the area code for this check
  );
}

function checkTel() {
    const telInput = event.currentTarget
    if (!isValidBrazilianMobileNumber(telInput.value)) {
        telInput.setCustomValidity('Telefone inválido.')
    } else {
        telInput.setCustomValidity('')
    }
    telInput.reportValidity()
}

function checkForm() {
    const form = event.currentTarget
    if (!form.checkValidity()) {
        alert('Dados inválidos. Por favor reveja as informações do formulário.')
        return false
    }
    return true
}

function mobileNumberOnInput() {
  let value = event.currentTarget.value.replace(/\\D/g, ''); // Remove non-numeric characters

  // Apply the mask
  value = value.replace(/^(\\d{2})(\\d)/g, '($1) $2'); // Add area code parentheses
  value = value.replace(/(\\d{5})(\\d)/, '$1-$2'); // Add a dash after the 5th digit

  // Limit the input length
  value = value.slice(0, 15);

  event.currentTarget.value = value;
}

function mobileNumberOnBlur() {
  if (event.currentTarget.value.length === 2) {
    event.currentTarget.value = '';
  }
}

const frm = document.querySelector('.frm')
frm.addEventListener('submit', checkForm)

const tel = frm.querySelector('input[type="tel"]')
tel.addEventListener('change', checkTel)
tel.addEventListener('input', mobileNumberOnInput)
tel.addEventListener('blur', mobileNumberOnBlur)
  `
}/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: 'XCMG Consórcio',
  meta: [
    {
      name: 'description',
      content: 'Página do Consórcio XCMG',
    },
  ],
};
