import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import First from '~/components/first';
import Fourth from '~/components/fourth';
import Second from '~/components/second';
import Third from '~/components/third';
import Title from '~/components/title';

export default component$(() => {
  return (
    <>
      <First />
      <Title t="Benefícios do Consórcio XCMG"/>
      <Second/>
      <Title t="Nossos Produtos"/>
      <Third/>
      <Title t="Sobre a XCMG:"/>
      <Fourth/>
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
