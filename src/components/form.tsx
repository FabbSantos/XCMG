// import { component$, useStyles$, useStore } from '@builder.io/qwik';
import { component$, useStyles$ } from '@builder.io/qwik';


// export function handleName(e: Event, data: any) {
//     if ((e.target as HTMLInputElement).value.length > 60) {
//         (e.target as HTMLInputElement).value = data.name
//     } else {
//         data.name = (e.target as HTMLInputElement).value
//     }
//     // console.log (name, data)
// }


export default component$(() => {

    // const data = useStore({
    //     name: '',
    //     lastname: '',
    //     email: '',
    //     tel: '',
    //     cidade: ''
    // })

    useStyles$(form)


    return (
        <form action="/form.php" method="POST" class="lg:max-w-[70%] mx-auto" >
            <h3 class="font-extrabold text-white text-lg pb-6"> Faça seu cadastro e receba mais informações! </h3 >

            <div class="flex flex-row gap-2">
                <fieldset class="min-w-[50%]">
                    <input required id="name" type="text" placeholder='Nome' maxLength={20} /> 
                    {/* onInput$={(e) => (data.name = (e.target as HTMLInputElement).value)} /> */}
                </fieldset>
                <fieldset class="min-w-[48%]">
                    <input required id="lastname" type="text" placeholder='Sobrenome' maxLength={30} /> 
                    {/* onInput$={(e) => (data.lastname = (e.target as HTMLInputElement).value)} /> */}
                </fieldset>
            </div>

            <fieldset>
                <input required id="tel" type="tel" placeholder='Telefone de contato Whatsapp' maxLength={20} />
                {/* onInput$={(e) => (data.tel = (e.target as HTMLInputElement).value)} /> */}
            </fieldset>

            <fieldset>
                <input required id="email" type="email" placeholder='E-mail' maxLength={100} />
                {/* onInput$={(e) => (data.email = (e.target as HTMLInputElement).value)} /> */}
            </fieldset>

            <fieldset>
                <input required id="cidade" type="text" placeholder='Cidade' maxLength={50} />
                {/* onInput$={(e) => (data.cidade = (e.target as HTMLInputElement).value)} /> */}
            </fieldset>

            <button id="submit" type="submit" value="submit">Enviar</button>
        </form>
    )
})

export const form = `
  form {
    padding: 2em; 
    text-align: center;
  }
  fieldset {
    background-color: white;
    border: 1px solid white;
    border-radius: 10px;
    padding: 7px 10px !important;
    min-width: 45%;
    max-width: 100%;
    margin-bottom: 15px !important;
  }

  form button {
    width: 100%;
    border-radius: 5px;
    background-color: #004C96 !important;
    transition: background-color .2s ease-in-out;
    border: 1px solid white;
    padding: 7px 0;
    color:white;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 1em;

    cursor: pointer;
  }

  form button:hover,  {
    background-color: rgb(30, 58, 138);
    outline:none;
  }
  select {
    width: 100%;
    border-radius: 10px;
    padding: 10px 10px 10px 10px; 
  }

  input {
    font-family: "Montserrat", sans-serif;
    font-size: .8em;
    border-radius: 5px;
    width: 95%;
  }
  input:invalid {
    border-color: #900;
  }

  input:focus:invalid {
    outline: none;
  }
`