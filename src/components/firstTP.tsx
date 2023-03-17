import { component$ } from "@builder.io/qwik";
import check from '../img/check.svg'

export default component$(() => {
    return (
        <div class=" w-full bg-blue-900 bg-cover bg-bg-3m flex justify-between min-h-[90vh] sm:bg-bg-3">
            <div class="flex flex-col gap-4 pt-10 lg:pt-0 px-2 md:max-w-[80%] mx-auto text-center justify-center align-center">
                <div class="p-4 bg-transparent border border-solid border-white rounded-full mx-auto max-w-[80px] max-h-[80px] mb-8">
                    <img src={check} alt="check"  class="w-12 fill-white mx-auto"/>
                </div>
                <h1 class="text-white lg:text-[28px] font-black text-center mx-auto lg:leading-[50px]">
                    <span class="text-3xl lg:text-[70px]">Muito obrigado!</span><br/>
                </h1>
                <h2 class="font-medium text-2xl text-white">
                    Nós entraremos em contato bem em breve!
                </h2>
            </div>
        </div>
    )
})
