import { component$ } from "@builder.io/qwik";
import cofrinho from '../img/money.png'
import lances from '../img/like.png'
import planos from '../img/pen.png'
import seg from '../img/security.png'

export default component$(() => {
    return (
        <div id="consorcio" class="flex flex-col items-center justify-center bg-bg-3 bg-cover">
            <h2 class="uppercase text-white text-[1.3rem] font-bold md:text-[1.8rem] pt-10">BENEFÍCIOS DO CONSÓRCIO XCMG</h2>
            <div class=" flex flex-row justify-evenly w-full py-20">
                <div class="md:max-w-[320px] flex flex-col justify-start items-center gap-2  basis-[23%] bg-white text-[#003E88] rounded-xl pt-5">
                    <img src={cofrinho} alt="Menor custo do mercado" loading="lazy" width="80px" height="80px"/>
                    <h2 class="text-xl min-h-[1.5em] text-left font-bold mx-2">MENOR CUSTO DO MERCADO</h2>
                    <ul class="max-w-[90%] text-center flex flex-col items-center p-0">
                        <li>• sem juros</li>
                        <li>• sem taxa de adesão</li>
                        <li>• maior economia na renovação
                            e ampliação da sua linha amarela</li>
                    </ul>
                </div>

                <div class="md:max-w-[320px] flex flex-col justify-start items-center gap-2  basis-[23%] bg-white text-[#003E88] rounded-xl pt-5">
                    <img src={lances} alt="Lances facilitados" loading="lazy" width="80px" height="80px" />
                    <h2 class="text-xl min-h-[1.5em] text-left font-bold mx-2">LANCES FACILITADOS</h2>
                    <ul class="max-w-[90%] text-center flex flex-col items-center p-0">
                        <li>• rapidez na formação de grupos</li>
                        <li>• lances facilitados</li>
                        <li>• participação imediata em
                            assembleias</li>
                    </ul>
                </div>

                <div class="md:max-w-[320px] flex flex-col justify-start items-center gap-2  basis-[23%] bg-white text-[#003E88] rounded-xl pt-5">
                    <img src={planos} alt="Planos diferenciados" loading="lazy" width="80px" height="80px" />
                    <h2 class="text-xl min-h-[1.5em] text-left font-bold mx-2">PLANOS EXCLUSIVOS</h2>
                    <ul class="max-w-[90%] text-center flex flex-col items-center p-0">
                        <li>• parcelas lineares</li>
                        <li>• planos em até 100 meses</li>
                        <li>• liberação de crédito mais
                            rápido do mercado</li>
                    </ul>
                </div>

                <div class="md:max-w-[320px] flex flex-col justify-start items-center gap-2  basis-[23%] bg-white text-[#003E88] rounded-xl pt-5">
                    <img class="max-w-[100px]" src={seg} alt="Transparência, segurança e credibilidade" loading="lazy" width="80px" height="80px" />
                    <h2 class="text-xl xl:min-h-[1.5em] text-center font-bold mx-1">TRANSPARÊNCIA, SEGURANÇA E CREDIBILIDADE</h2>
                    <ul class="max-w-[90%] text-center flex flex-col items-center p-0">
                        <li>• atuação em território nacional</li>
                        <li>• uma das melhores
                            administradoras de Consórcio do Brasil</li>
                        <li>• assembleias transmitidas
                            ao vivo, via internet</li>
                    </ul>
                </div>
            </div>
        </div>
    ) 
})