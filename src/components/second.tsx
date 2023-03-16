import { component$ } from "@builder.io/qwik";
import cofrinho from '../img/cofrinho.png'
import lances from '../img/lances.png'
import planos from '../img/planos.png'
import seg from '../img/seg.png'

export default component$(() => {
    return (
        <div id="consorcio" class="flex flex-col md:flex-row justify-center md:justify-around align-center bg-bg-3 bg-cover py-[2em]">
            <div class="flex flex-col justify-start items-center gap-2 text-white basis-[20%]">
                <h2 class="text-xl min-h-[2.5em] text-center font-extrabold">Menor custo do mercado</h2>
                <img src={cofrinho} alt="Menor custo do mercado" loading="lazy" width="130px" height="130px"/>
                <ul class="max-w-[80%]">
                    <li>Sem Juros</li>
                    <li>Sem Taxa de Adesão</li>
                    <li>Maior economia na renovação e ampliação da sua linha amarela</li>
                </ul>
            </div>

            <div class="flex flex-col justify-start items-center gap-2 text-white basis-[20%]">
                <h2 class="text-xl min-h-[2.5em] text-center font-extrabold">Lances facilitados</h2>
                <img src={lances} alt="Lances facilitados" loading="lazy" width="130px" height="130px" />
                <ul class="max-w-[80%]">
                    <li>Rapidez na formação de grupos</li>
                    <li>Assembléias imediatas</li>
                    <li>Lances facilitados</li>
                </ul>
            </div>

            <div class="flex flex-col justify-start items-center gap-2 text-white basis-[20%]">
                <h2 class="text-xl min-h-[2.5em] text-center font-extrabold">Planos diferenciados</h2>
                <img src={planos} alt="Planos diferenciados" loading="lazy" width="130px" height="130px" />
                <ul class="max-w-[80%]">
                    <li>Parcelas lineares</li>
                    <li>Parcelas diferenciadas</li>
                </ul>
            </div>

            <div class="flex flex-col justify-start items-center gap-2 text-white basis-[20%]">
                <h2 class="text-xl xl:min-h-[2.5em] text-center font-bold">Transparência, segurança e credibilidade</h2>
                <img class="max-w-[100px]" src={seg} alt="Transparência, segurança e credibilidade" loading="lazy" width="130px" height="130px" />
                <ul class="max-w-[80%]">
                    <li>Sem Juros</li>
                    <li>Sem Taxa de Adesão</li>
                </ul>
            </div>
        </div>
    ) 
})