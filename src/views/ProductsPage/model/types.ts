export interface IProduct {
    id: string;
    productName: string;
    productModel: string;
    manufacturer: string;
    categoryId: string;
    imageUrl: string
    characteristics: string[]
    group_id: string[]
    checked: boolean
}

export interface IGroups {
    pages: number
    groups: IGroup[]
}

export interface IGroup {
    id: string
    checked: boolean
    products: IProduct[]
}