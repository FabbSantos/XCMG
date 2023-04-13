import { component$ } from "@builder.io/qwik";
import cofrinho from '../img/cofrinho.png'
import lances from '../img/lances.png'
import planos from '../img/planos.png'
import seg from '../img/seg.png'

export default component$(() => {
    return (
        <div id="consorcio" class="flex flex-col md:flex-row justify-center md:justify-around align-center bg-bg-3m bg-cover sm:bg-bg-3 py-32 px-5 gap-12 lg:gap-0">
            <div class="flex flex-col justify-start items-center gap-2 text-white basis-[23%] bg-[#004C96] rounded-xl pt-5">
                <h2 class="text-xl min-h-[2.5em] text-center font-extrabold mx-2">Menor custo do mercado:</h2>
                <img src={cofrinho} alt="Menor custo do mercado" loading="lazy" width="130px" height="130px"/>
                <ul class="max-w-[80%] text-center p-0">
                    <li>Sem Juros</li>
                    <li>Sem Taxa de Adesão</li>
                    <li>Maior economia na renovação e ampliação da sua linha amarela</li>
                </ul>
            </div>

            <div class="flex flex-col justify-start items-center gap-2 text-white basis-[23%] bg-[#004C96] rounded-xl pt-5">
                <h2 class="text-xl min-h-[2.5em] text-center font-extrabold mx-2">Lances facilitados:</h2>
                <img src={lances} alt="Lances facilitados" loading="lazy" width="130px" height="130px" />
                <ul class="max-w-[80%] text-center p-0">
                    <li>Rapidez na formação de grupos</li>
                    <li>Lances facilitados</li>
                    <li>Participação imediata em assembleias</li>
                </ul>
            </div>

            <div class="flex flex-col justify-start items-center gap-2 text-white basis-[23%] bg-[#004C96] rounded-xl pt-5">
                <h2 class="text-xl min-h-[2.5em] text-center font-extrabold mx-2">Planos exclusivos:</h2>
                <img src={planos} alt="Planos diferenciados" loading="lazy" width="130px" height="130px" />
                <ul class="max-w-[80%] text-center p-0">
                    <li>Parcelas lineares</li>
                    <li>Planos em até 100 meses</li>
                    <li>Liberação de crédito mais rápido do mercados</li>
                </ul>
            </div>

            <div class="flex flex-col justify-start items-center gap-2 text-white basis-[23%] bg-[#004C96] rounded-xl pt-5">
                <h2 class="text-xl xl:min-h-[2.5em] text-center font-extrabold mx-1">Transparência, segurança e credibilidade:</h2>
                <img class="max-w-[100px]" src={seg} alt="Transparência, segurança e credibilidade" loading="lazy" width="130px" height="130px" />
                <ul class="max-w-[80%] text-center p-0">
                    <li>Atuação em território nacional</li>
                    <li>Uma das melhores administradoras de Consórcio do Brasil</li>
                    <li>Assembleias transmitidas ao vivo, via internet</li>
                </ul>
            </div>
        </div>
    ) 
})