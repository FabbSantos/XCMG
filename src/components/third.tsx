import { component$ } from "@builder.io/qwik";
import one_png from '../img/l25.png'
import two_png from '../img/xe.png'
import three_png from '../img/l30.png'
// 004C96
export default component$(() => {
    return (
        <div class="bg-bg-maq bg-cover pb-4 pt-8 bg-blend-multiply bg-slate-400 flex flex-col items-center justify-center gap-4">
            <h2 class="text-[#003E88] text-[1.3rem] uppercase md:text-[1.9rem] font-bold py-8">Maquinários</h2>
            <div id="maquinas" class="flex flex-col gap-12 lg:gap-0 lg:flex-row flex-wrap max-w-[90vw] mx-auto justify-around text-center text-[#000] font-bold">
                <div class="flex flex-col justify-start items-center bg-white rounded-lg pb-11 p-10  mx-auto lg:w-[calc(100%/4)] shadow-md">
                    <img src={two_png} alt="Guindaste de Rastelo" loading="lazy" height="250px" width="300px" />
                    <h4 class="font-bold uppercase">Empilhadeira </h4>
                    <span class="font-light my-1 uppercase whitespace-nowrap">XCB-P25/L25</span>

                    <span class=" border-solid border-b-[1px] w-full pb-4 border-black"></span>
                    <p class="plan font-light  text-center mt-8">100 meses</p>
                    <p class="price font-bold text-[1.3rem]"> R$ 2.639,90</p>
                    <p class="plan font-light  text-center mt-10">Plano Normal</p>
                    <p class="price-n font-bold  text-center">R$ 220.000,00</p>
                </div>
                <div class="flex flex-col justify-start items-center bg-white rounded-lg pb-4 p-10  mx-auto lg:w-[calc(100%/4)]">
                    <img src={one_png} alt="Guindaste de Rastelo" loading="lazy" height="250px" width="300px" />
                    <h4 class="font-bold uppercase">Mini Escavadeira </h4>
                    <span class="font-normal my-1 uppercase whitespace-nowrap">XE17U</span>
                    <span class=" border-solid border-b-[1px] w-full pb-4 border-black"></span>
                    <p class="plan font-light  text-center mt-8">100 meses</p>
                    <p class="price font-bold ">R$ 2.519,90</p>
                    <p class="plan font-light  text-center mt-10">Plano Normal</p>
                    <p class="price-n font-bold  text-center">R$ 220.000,00</p>
                </div>
                <div class="flex flex-col justify-start items-center bg-white rounded-lg pb-4 p-10  mx-auto lg:w-[calc(100%/4)]">
                    <img src={three_png} alt="Guindaste de caminhão" loading="lazy" height="250px" width="300px" />
                    <h4 class="font-bold uppercase">Empilhadeira </h4>
                    <span class="font-normal my-1 uppercase whitespace-nowrap">XCB-P30/L30</span>
                    <span class=" border-solid border-b-[1px] w-full pb-4 border-black"></span>
                    <p class="plan  font-light  text-center mt-8">100 meses</p>
                    <p class="price font-bold ">R$ 2.759,89</p>
                    <p class="plan font-light  text-center mt-10">Plano Normal</p>
                    <p class="price-n font-bold  text-center">R$ 230.000,00</p>
                </div>
            </div>
            <div class="w-full flex justify-center pt-8 pb-5 my-5">
                <button class="font-bold text-xl py-3 px-[2em] rounded-xl bg-[#004C96] text-white self-center" onClick$={() => document.querySelector('form')?.scrollIntoView()}> Conheça nossos planos </button>
            </div>
        </div>
    )
})