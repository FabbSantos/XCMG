import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <div id="sobre" class=" flex flex-col md:flex-row justify-evenly items-center min-h-[70vh] py-[2em] bg-bg-2 bg-cover bg-no-repeat gap-4">
            <div class="flex flex-col justify-center items-center outline-2 outline-double outline-offset-[-10px] outline-black border-2 border-black text-center p-5 min-h-[230px] max-w-[260px] bg-white">
                <h4 class="text-[5em] text-[#FFC700]">
                    1943
                </h4>
                <p class="text-[#004C96]">
                    A XCMG foi fundada em 1943.
                </p>
            </div>

            <div class="flex flex-col justify-center items-center outline-2 outline-double outline-offset-[-10px] outline-black border-2 border-black text-center p-5 min-h-[230px] max-w-[260px] bg-white">
                <h4 class="text-[5em] text-[#FFC700]">
                    65
                </h4>
                <p class="text-[#004C96]">
                    Classificada em 65º lugar na lista das 500 maiores empresas da China.
                </p>
            </div>

            <div class="flex flex-col justify-center items-center outline-2 outline-double outline-offset-[-10px] outline-black border-2 border-black text-center p-5 min-h-[230px] max-w-[260px] bg-white">
                <h4 class="text-[5em] text-[#FFC700]">
                    44
                </h4>
                <p class="text-[#004C96]">
                    Em 44º lugar na lista das 100 melhores da China.
                </p>
            </div>

            <div class="flex flex-col justify-center items-center outline-2 outline-double outline-offset-[-10px] outline-black border-2 border-black text-center p-5 min-h-[230px] max-w-[260px] bg-white">
                <h4 class="text-[5em] text-[#FFC700]">
                    2
                </h4>
                <p class="text-[#004C96]">
                    Em 2º lugar na lista dos 100 maiores fabricantes de máquinas da China.
                </p>
            </div>
        </div>
    ) 
})