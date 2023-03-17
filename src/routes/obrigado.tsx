import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import FirstTP from "../components/firstTP"
import Footer from "../components/footer"

export default component$(() => {
    return(
        <>
            <FirstTP/>
            <Footer/>
        </>
    )
})

export const head: DocumentHead = {
    title: 'XCMG Consórcio',
    meta: [
      {
        name: 'description',
        content: 'Página do Consórcio XCMG',
      },
    ],
  };
  