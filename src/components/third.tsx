import { component$ } from "@builder.io/qwik";
import one from '../img/maquina1.png'
import two from '../img/maquina2.png'
import three from '../img/maquina3.png'

export default component$(() => {
    return (
        <>
            <div id="maquinas" class="flex flex-col md:flex-row flex-wrap max-w-[90vw] mx-auto justify-around text-center text-[#004C96] font-bold my-16">
                <div class="flex flex-col justify-center items-center">
                    <img src={one} alt="Guindaste de Rastelo" loading="lazy" height="250px" width="300px" />
                    <h4 class="font-bold text-3xl my-4">XE17U</h4>
                    <p class="font-medium text-xl my-4">R$210.000,00</p>
                    <p class="font-medium text-2xl text-center">Plano Normal<br/>100 meses - R$2519,90</p>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <img src={two} alt="Guindaste de Rastelo" loading="lazy" height="250px" width="300px" />
                    <h4 class="font-bold text-3xl my-4">XCB-P25/L25</h4>
                    <p class="font-medium text-xl my-4">R$220.000,00</p>
                    <p class="font-medium text-2xl text-center">Plano Normal<br />100 meses - R$2639,90</p>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <img src={three} alt="Guindaste de caminhão" loading="lazy" height="250px" width="300px" />
                    <h4 class="font-bold text-3xl my-4">XCB-P30/L30</h4>
                    <p class="font-medium text-xl my-4">R$230.000,00</p>
                    <p class="font-medium text-2xl text-center">Plano Normal<br />100 meses - R$2759,89</p>
                </div>
            </div>
            <div class="w-full flex justify-center py-[1em]">
                <button class="font-bold text-xl py-1 px-[2em] rounded-xl bg-[#004C96] text-white self-center"> Veja mais </button>
            </div>
        </>
    )
})