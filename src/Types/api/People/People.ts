import Person from "./Person";

interface People {
    message: string
    total_records: number
    total_pages: number
    results: Person[]
    previous: string
    next: string
}

export default People;