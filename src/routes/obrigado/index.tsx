import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city"
import FirstTP from "../../components/firstTP"

export default component$(() => {
    return(
        <>
            <FirstTP/>
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
  