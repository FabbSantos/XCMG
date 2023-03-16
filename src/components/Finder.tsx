import { component$ } from "@builder.io/qwik";
import { ChevronRightIcon } from "qwik-feather-icons";


export default component$(() => {
    return(
        <div class="ml-0">
            <form class="lg:max-w-[30%] pl-0 flex flex-row justify-between">
                <select name="estado" id="estado" class="rounded-3xl py-3 pl-4 basis-[80%]">
                    <option value="Estado" selected disabled> Estado</option>
                    <option value="rj">Rio de Janeiro</option>
                    <option value="sp">São Paulo</option>
                </select>

                <button class="p-3 bg-[#248DF2] basis-[20%] ml-4 rounded-full">
                    <ChevronRightIcon size={30}/>
                </button>

            </form>
        </div>
    )
})
