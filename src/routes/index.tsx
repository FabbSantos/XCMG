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
