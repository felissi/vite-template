import { useInfiniteQuery } from '@tanstack/react-query'
import { ApiPaginatedMetaData } from '@/data/commonType'
import InfiniteScroll from 'react-infinite-scroller'
interface People extends ApiPaginatedMetaData {
    results: Person[]
}
interface Person {
    name: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string
}
async function fetchPage(pageUrl: string) {
    const res = await fetch(pageUrl)
    if (!res.ok) throw Error('not ok')
    return await res.json() as People
}
export function InfinitePeople() {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError } = useInfiniteQuery(
        ['people'],
        ({ pageParam = 'https://swapi.dev/api/people/?page=1' }: { pageParam?: string }) => fetchPage(pageParam),
        {
            getNextPageParam: (lastPage: People, allPages: People[]) => lastPage.next,
            getPreviousPageParam: (firstPage: People, allPages: People[]) => firstPage.previous,
            cacheTime: 10 * 60 * 1000,
            staleTime: 5 * 60 * 1000
        })
    // if (data) const { pages, pageParams } = data
    if (data) {
        return (
            <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage} >
                <SomeRender pages={data.pages} />
            </InfiniteScroll >
        )
    }
    if (isFetchingNextPage) {
        return <div>Loading</div>
    }
    if (isError) {
        return <div>Error</div>
    }

}
export function SomeRender({ pages }: { pages: People[] }) {
    return (
        <div>
            {
                pages.map(({ results }) => (
                    <>
                        {
                            results.map((property) => (
                                <>
                                    {
                                        Object.entries(property).map(([k, val]) =>
                                        (
                                            <ul>
                                                <ul>
                                                    <li>{k}</li>
                                                    <li>{val}</li>
                                                </ul>
                                            </ul>
                                        )
                                        )
                                    }
                                </>
                            )
                            )
                        }
                    </>
                ))
            }
        </div>
    )
}