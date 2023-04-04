import { component$ } from "@builder.io/qwik";
import one_png from '../img/XE17U.png'
import two_png from '../img/XCB-P25.png'
import three_png from '../img/XCB-P30.png'
// 004C96
export default component$(() => {
    return (
        <div class="bg-bg-amarelo bg-cover pb-4 pt-16 bg-blend-multiply bg-slate-400">
            <div id="maquinas" class="flex flex-col gap-12 lg:gap-0 lg:flex-row flex-wrap max-w-[90vw] mx-auto justify-around text-center text-[#000] font-bold">
                <div class="flex flex-col justify-center items-center bg-white rounded-lg pb-11 p-10  mx-auto lg:w-[calc(100%/4)] shadow-md">
                    <picture>
                        <img src={two_png} alt="Guindaste de Rastelo" loading="lazy" height="250px" width="300px" />
                    </picture>
                    <h4 class="font-bold">Empilhadeira <span class="font-normal my-1 mb-10 opacity-60 whitespace-nowrap">XCB-P25/L25</span></h4>
                    <span class=" border-solid border-b-[1px] w-full pb-4 border-black"></span>
                    <p class="plan font-light  text-center mt-8">100 meses</p>
                    <p class="price font-bold "> R$ 2.639,90</p>
                    <p class="plan font-light  text-center mt-10">Plano Normal</p>
                    <p class="price-n font-medium  text-center">R$ 220.000,00</p>
                </div>
                <div class="flex flex-col justify-center items-center bg-white rounded-lg pb-4 p-10  mx-auto lg:w-[calc(100%/4)]">
                    <picture>
                        <img src={one_png} alt="Guindaste de Rastelo" loading="lazy" height="250px" width="300px" />
                    </picture>
                    <h4 class="font-bold">Mini Escavadeira <span class="font-normal my-1 mb-10 opacity-60 whitespace-nowrap">XE17U</span></h4>
                    <span class=" border-solid border-b-[1px] w-full pb-4 border-black"></span>
                    <p class="plan font-light  text-center mt-8">100 meses</p>
                    <p class="price font-bold ">R$ 2.519,90</p>
                    <p class="plan font-light  text-center mt-10">Plano Normal</p>
                    <p class="price-n font-medium  text-center">R$ 210.000,00</p>
                </div>
                <div class="flex flex-col justify-center items-center bg-white rounded-lg pb-4 p-10  mx-auto lg:w-[calc(100%/4)]">
                    <picture>
                        <img src={three_png} alt="Guindaste de caminhão" loading="lazy" height="250px" width="300px" />
                    </picture>
                    <h4 class="font-bold">Empilhadeira <span class="font-normal my-1 mb-10 opacity-60 whitespace-nowrap">XCB-P30/L30</span></h4>
                    <span class=" border-solid border-b-[1px] w-full pb-4 border-black"></span>
                    <p class="plan  font-light  text-center mt-8">100 meses</p>
                    <p class="price font-bold ">R$ 2.759,89</p>
                    <p class="plan font-light  text-center mt-10">Plano Normal</p>
                    <p class="price-n font-medium  text-center">R$ 230.000,00</p>
                </div>
            </div>
            <div class="w-full flex justify-center pt-8 pb-5 my-5">
                <button class="font-bold text-xl py-3 px-[2em] rounded-xl bg-[#004C96] text-white self-center" onClick$={() => document.querySelector('form')?.scrollIntoView()}> Conheça nossos planos </button>
            </div>
        </div>
    )
})