import { component$ } from "@builder.io/qwik";
import Form from "./form";

export default component$(() => {
    return (
        <div class=" w-full bg-blue-900 bg-cover bg-bg-1m flex justify-between min-h-[90vh] sm:bg-bg-1">
            <div class="flex flex-col gap-4 pt-10 lg:pt-5 px-2 md:max-w-[80%] mx-auto text-left justify-center align-center">
                <h1 class="text-white lg:text-[28px] font-black mx-auto lg:leading-[50px]">
                    <span class="text-3xl lg:text-5xl">Maquinário pesado, com parcelas levíssimas.</span><br/>
                    Adquira os seus maquinários com o <span class="text-[#FFC700]"> Consórcio XCMG</span>
                </h1>
                <h2 class="font-medium text-2xl text-white">
                    A terceira maior empresa de maquinários de construção do mundo.
                </h2>
                <Form />
            </div>
        </div>
    )
})
