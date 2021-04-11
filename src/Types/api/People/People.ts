import Person from "./Person";

interface People {
    message: string
    total_records: number
    total_pages: number
    results: Person[]
}

export default People;