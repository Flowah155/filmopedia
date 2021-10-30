export interface BusquedaInterface {
    "results": Array<
    {   
        "id": number,
        "poster_path": string,
        "title": string,
        "release_date": string,
        "genre_ids": Array<
        {
            "genre_id": number
        }
        >,
        "overview": string,
    }
    >,
    "total_results": number,
}
