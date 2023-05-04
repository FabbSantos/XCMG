import { component$ } from "@builder.io/qwik";
import Finder from "./Finder";
import find from '../img/find.webp'
import logo from '../img/logoxcmg.png'

export default component$(() => {
    return (
        <div id="onde" class="relative flex flex-col justify-evenly items-start min-h-[100vh] py-[2em]  gap-4 px-[5%] bg-[#D1D1D1]">
            <div class="flex flex-col max-w-[80%]">
                <h2 class="uppercase font-bold text-[#003E88] text-2xl lg:text-[40px] lg:leading-[60px]">
                    ENCONTRE O PONTO DE REVENDA MAIS PRÓXIMO                
                </h2>
                <p class="text-[#003E88] lg:text-2xl lg:max-w-[50%] my-12">
                    A XCMG tem uma ampla Rede de Distribuição que garante o atendimento com qualidade em todo o território nacional.
                </p>
                <Finder/>
            </div>
            <img src={find} alt="ENCONTRE O PONTO DE VENDA MAIS PRÓXIMO!" loading="lazy"  height="800px" width="929px" 
                class=" absolute right-[-10%] bottom-[-5%] hidden lg:block"
            />
            <div>
                <img src={logo} alt="Consórcio XCMG" width="280px" loading="lazy"  height="60px"/>
                <p class="font-bold text-[1.3rem] md:text-[1.6rem] text-[#003E88] mt-3">
                    Vantagens de peso que só o consórcio tem!
                </p>
            </div>
        </div>
    ) 
})