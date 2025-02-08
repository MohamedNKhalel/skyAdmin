export interface Project {
    _id: string
    name: string
    description: string
    location: string
    startDate: string
    endDate: string
    category: Category
    status: string
    projectCover: string,
    visible: boolean,
    images: string[],
    createdAt: string,
}

export interface Category {
    _id: string,
    name: string,
}
