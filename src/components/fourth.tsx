import { component$ } from "@builder.io/qwik";
// import Finder from "./Finder";

export default component$(() => {
    return (
        <div id="onde" class="bg-blue-900 flex flex-col justify-evenly items-center min-h-[100vh] py-[2em] bg-bg-4 bg-cover bg-no-repeat gap-4 px-[5%]">
            <div class="flex flex-col max-w-[80%]">
                <h2 class="uppercase text-white text-2xl lg:text-[60px] lg:leading-[60px]">
                    <span class="font-bold"> ENCONTRE</span> O PONTO
                    DE VENDA MAIS PRÓXIMO
                </h2>
                <p class="text-[#7ABDED] lg:text-2xl lg:max-w-[50%] my-12">
                    A XCMG tem uma ampla Rede de Distribuição que garante o atendimento com qualidade em todo o território nacional. Encontre os pontos de venda de sua cidade:
                </p>
                {/* <Finder/> */}
            </div>
        </div>
    ) 
})