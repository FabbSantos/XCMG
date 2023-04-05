import { component$ } from "@builder.io/qwik";


export default component$((props:t) => {
    const title = props.t
    return (
        <div class="lg:min-h-[100px] w-full bg-bg-Title bg-yellow-200 bg-blend-multiply  bg-repeat bg-left-top font-extrabold text-center text-3xl lg:text-5xl p-4 text-[#004C96]">
            <h2 class="pt-2">{title}</h2>
        </div>
    )
})