import { component$ } from "@builder.io/qwik";
import Form from "./form";

export default component$(() => {
    return (
        <div class=" w-full bg-blue-900 bg-cover bg-bg-1 flex justify-between min-h-[90vh]">
            <div class="flex flex-col gap-4 pt-10 lg:pt-0 px-2 md:max-w-[80%] mx-auto text-center justify-center align-center">
                <h1 class="text-white lg:text-[28px] font-black text-center mx-auto lg:leading-[50px]">
                    <span class="text-3xl lg:text-[70px]">Adquira os seus maquinários</span><br/> de linha amarela
                    de forma mais facilitada com o <span class="text-[#FFC700]"> Consórcio XCMG</span>
                </h1>
                <h2 class="font-medium text-2xl text-white">
                    A terceira maior empresa de maquinários de construção do mundo.
                </h2>
                <Form />
            </div>
        </div>
    )
})
