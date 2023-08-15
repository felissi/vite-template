import { useQuery } from "@tanstack/react-query";
import { ApiPaginatedMetaData } from '@/data/commonType'
import { camelCase } from '@/data/keyCaseTransform.ts'
interface PlantsData extends ApiPaginatedMetaData {
    results: Plant[]
}
interface Plant {
    "name": string
    "rotationPeriod": number
    "orbitalPeriod": number
    "diameter": number
    "climate": string
    "gravity": string
    "terrain": string
    "surfaceWater": number
    "population": number
    "residents": string[]
    "films": string[]
    "created": string
    "edited": string
    "url": string
}
const fetchPlants = async () => {
    const res = await fetch('https://swapi.dev/api/planets/')
    if (!res.ok) {
        throw new Error('Network response was not ok')
    }
    const data = await res.json()
    // console.log(data)
    // console.log(camelCase(data))
    return camelCase(data) as PlantsData
}
export default function T1() {
    const { data, isLoading, isError, isSuccess, error } = useQuery(['plants'], fetchPlants)
    return (
        <div>
            <h2>Plants</h2>
            {isLoading && (
                <div>loading data ...</div>
            )}
            {isError && (
                <div>{JSON.stringify(error)}</div>
            )}
            {isSuccess && data && (
                <div>
                    <div>
                        {JSON.stringify(data)}
                        {data.results.map(plant => (
                            <div key={plant.name}>{plant.name}</div>
                        ))}
                        {/* {data.results.map} */}
                    </div>
                </div>
            )}
        </div>
    )
}