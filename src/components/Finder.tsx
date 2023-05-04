import { component$, useBrowserVisibleTask$, useStore, QwikChangeEvent } from "@builder.io/qwik";
// import { ChevronRightIcon } from "qwik-feather-icons";
import type { ParseResult } from 'papaparse'
import { parse } from 'papaparse';

export default component$(() => {
    const data = useStore({
        statesAbbr: new Array<string>,
        stateCities: {},
        cityDealers: {},
        selectedState: '',
        selectedCity: '',
        foundDealers: new Array<any> //[{ name: "Yamadiesel (RJ)", address: "Av Dr Jefferson G. Bruno, 1290, Paraiso II, Resende/RJ Tel (24) 33818485" }]
    })

    useBrowserVisibleTask$(() => {
        //console.log('Rodou!')
        async function readCSV() {
            const url = `${window.location.protocol}//${window.location.host}/Endereços Dealers.csv`
            // const response = await fetch('Endereços Dealers.csv')
            // const csvText = await response.text()
            parse(url, {
                download: true,
                worker: true,
                skipEmptyLines: true,
                complete: function (result: ParseResult<string[]>) {
                    //console.log(result)

                    const stateCities = {}
                    const cityDealers = {}
                    let currentDealer = ''
                    for (const row of result.data) {
                        //console.log(row)

                        if (row[0])
                            currentDealer = row[0]

                        const regex = /,\s*([^,]+)\/(\w+)/
                        const matches = row[1].match(regex)

                        if (!matches) continue

                        const cityName = matches[1]
                        const stateAbbreviation = matches[2]

                        stateAbbreviation in stateCities
                            ? (stateCities[stateAbbreviation] as Array<string>).push(cityName)
                            : stateCities[stateAbbreviation] = [cityName]

                        cityName in cityDealers
                            ? (cityDealers[cityName] as Array<string>).push(currentDealer)
                            : cityDealers[cityName] = [{ name: currentDealer, address: row[1] }]
                    }

                    data.cityDealers = cityDealers
                    data.stateCities = stateCities
                    data.statesAbbr = Object.keys(stateCities).sort()

                    //console.log(data)

                    //console.log("All done!")
                }
            })
        }

        readCSV()
    })

    return (
        <div class="ml-0">
            <h3 class="text-[#003E88] text-left text-2xl mt-5">Encontre os pontos de venda de sua cidade:</h3>

            <form class="pl-0 w-[80%] flex flex-col gap-4 justify-center items-center min-w-full md:min-w-[550px] md:flex-row md:justify-between" preventdefault:submit>
                <select name="estado" id="estado" class="border border-[#003E88] rounded-2xl py-3 pl-4 md:basis-[50%]" onChange$={(e: QwikChangeEvent<HTMLSelectElement>) => {
                        data.selectedState = e.target.value
                        data.selectedCity = ""
                        data.foundDealers = []
                        document.querySelector('#cidade')!.selectedIndex = 0
                    }
                }>
                    <option selected disabled>Estado</option>
                    {data.statesAbbr.map((state: string) => <option value={state}>{state}</option>)}
                </select>
                <select name="cidade" id="cidade" class="border border-[#003E88] rounded-2xl py-3 pl-4 md:basis-[50%]" onChange$={(e: QwikChangeEvent<HTMLSelectElement>) => {
                        data.selectedCity = e.target.value
                        data.foundDealers = data.stateCities[data.selectedState].some((city: string) => city === data.selectedCity)
                                            ? data.cityDealers[data.selectedCity]
                                            : []
                    }
                }>
                    <option value="" selected disabled>Cidade</option>
                    {data.stateCities[data.selectedState]?.map((city: string) => <option value={city}>{city}</option>)}
                </select>
                {/* <input list="cities" placeholder="Cidade" class="rounded-3xl py-3 pl-4 md:basis-[50%] md:ml-4" onChange$={(e: QwikChangeEvent<HTMLInputElement>) => data.selectedCity = e.target.value} />

                <datalist id="cities">
                    {data.stateCities[data.selectedState]?.map((city: string) => <option value={city}></option>)}
                </datalist> */}

                {/* <button class="p-3 bg-[#248DF2] rounded-full flex-grow-0 w-14 md:basis-[10%] md:ml-4" onClick$={() => 
                                                                                                                        data.foundDealers = data.stateCities[data.selectedState].some((city: string) => city === data.selectedCity)
                                                                                                                        ? data.cityDealers[data.selectedCity]
                                                                                                                        : []
                                                                                                                }>
                    <ChevronRightIcon size={30} />
                </button> */}

            </form>

            {
                data.foundDealers?.length
                ?
            <div class="w-full text-white p-10 pl-0 rounded-3xl max-w-[70%] bg-transparent mt-20">
                <table class="w-full text-center rounded-xl">
                    <thead class="border-y-4 border-x-4">
                        <tr>
                            <th class="p-2">Dealer</th>
                            <th class="w-[70%]">Endereço</th>
                        </tr>
                    </thead>
                    <tbody class="border-y-2 border-x-4">
                        {data.foundDealers.map(dealer => {
                            return (
                                <tr>
                                    <td class="p-5">{dealer.name}</td>
                                    <td>{dealer.address}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
                : 
                    data.selectedCity
                        ?
                            <div class="text-white p-10 pl-0 bg-transparent mt-20">Nenhum resultado encontrado para o Estado <span class="font-bold italic">{data.selectedState}</span> e Cidade <span class="font-bold italic">{data.selectedCity}</span></div>
                        :
                            <></>
            }
    </div>
    )
})
