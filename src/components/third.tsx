import { component$ } from "@builder.io/qwik";
import one from '../img/1.png'
import two from '../img/2.png'
import three from '../img/3.png'
import four from '../img/4.png'
import five from '../img/5.png'

export default component$(() => {
    return (
        <>
            <div id="maquinas" class="flex flex-col md:flex-row flex-wrap max-w-[90vw] mx-auto justify-center text-center text-[#004C96] font-bold gap-[2.3em]">
                <div class="flex flex-col justify-center items-center">
                    <img src={one} alt="Guindaste de Rastelo" loading="lazy" height="250px" width="380px" />
                    <h4>Guindaste de rastelo <br />XGC25T</h4>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <img src={two} alt="Guindaste de Rastelo" loading="lazy" height="250px" width="380px" />
                    <h4>Guindaste de rastelo <br />XGC88000</h4>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <img src={three} alt="Guindaste de caminhão" loading="lazy" height="250px" width="380px" />
                    <h4>Guindaste de caminhão <br />XCT25L5_Y</h4>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <img src={four} alt="Escavadora de minas" loading="lazy" height="250px" width="380px" />
                    <h4>Escavadora de minas<br />XE700D</h4>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <img src={five} alt="Carregador de rotas" loading="lazy" height="250px" width="380px" />
                    <h4>Carregador de rotas<br />LW330FN</h4>
                </div>
            </div>
            <div class="w-full flex justify-center py-[1em]">
                <button class="font-bold text-xl py-1 px-[2em] rounded-xl bg-[#004C96] text-white self-center"> Veja mais </button>
            </div>
        </>
    )
})