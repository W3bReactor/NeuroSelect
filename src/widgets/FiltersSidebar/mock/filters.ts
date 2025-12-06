interface IFilter {
    id: string;
    name: string;
    characteristics: IChar[];
}


interface IChar {
    id: string;
    title: string;
}

export const filters: IFilter[] = [
    {
        id: "1",
        name: "Тип товара",
        characteristics: [
            {
                id: "1",
                title: "Набор"
            },
            {
                id: "2",
                title: "Стойка"
            }
        ]
    }
]