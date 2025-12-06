import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IGroup} from "@/views/ProductsPage/model/types";
import {ProductImage1} from "@/widgets/Products/assets";
import {RootState} from "@/app/store";


interface ProductsState {
    edit: boolean
    checked: boolean;
    groups: IGroup[]
}

const initialState: ProductsState = {
    edit: false,
    checked: false,
    groups: [
        {
            id: "123",
            checked: false,
            products: [
                {
                    id: "1",
                    productName: "Перфоратор универсальный Wander X645-46 GF 1450W 32532 4йцвафы а323 5фцау не435выпу ык ке32 5е3цаыва",
                    productModel: "Смеситель Kludi E2 492440575 для раковины",
                    categoryId: "12",
                    imageUrl: ProductImage1.src,
                    group_id: ["123", "5412"],
                    characteristics: ["124", "5353"],
                    manufacturer: "KLUDI",
                    checked: false
                },
                {
                    id: "2",
                    productName: "Смеситель Faris G-120 для раковины",
                    productModel: "Смеситель Kludi E2 492440575 для раковины",
                    categoryId: "12",
                    imageUrl: ProductImage1.src,
                    group_id: ["123", "5412"],
                    characteristics: ["124", "5353"],
                    manufacturer: "Faris",
                    checked: false
                },
            ]
        },
        {
            id: "1243",
            checked: false,
            products: [
                {
                    id: "4",
                    productName: "Перфоратор универсальный Wander X645-46 GF 1450W",
                    productModel: "Смеситель Kludi E2 492440575 для раковины",
                    categoryId: "12",
                    imageUrl: ProductImage1.src,
                    group_id: ["123", "5412"],
                    characteristics: ["124", "5353"],
                    manufacturer: "KLUDI",
                    checked: false
                },
                {
                    id: "3",
                    productName: "Смеситель Faris G-120 для раковины",
                    productModel: "Смеситель Kludi E2 492440575 для раковины",
                    categoryId: "12",
                    imageUrl: ProductImage1.src,
                    group_id: ["123", "5412"],
                    characteristics: ["124", "5353"],
                    manufacturer: "Faris",
                    checked: false
                },
            ]
        },
    ]
} satisfies ProductsState as ProductsState

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setGroups(state, action) {
            state.groups = action.payload;
        },
        setCheckedAll: (state, action: PayloadAction<boolean>) => {
            state.checked = action.payload;
            state.groups.forEach(group => {
                group.checked = action.payload;
                group.products.forEach(product => {
                    product.checked = action.payload;
                });
            });

        },
        setCheckedGroup: (state, action: PayloadAction<{ id: string, checked: boolean }>) => {
            const group = state.groups.find(group => group.id === action.payload.id);
            if(group) {
                group.checked = action.payload.checked;
                group.products.forEach(product => {
                    product.checked = action.payload.checked;
                })
            }
            if(state.groups.every(group => group.checked === true)) {
                state.checked = true;
            } else {
                state.checked = false;
            }
        },
        setCheckedItem: (state, action: PayloadAction<{ groupId: string, id: string, checked: boolean }>) => {
            const group = state.groups.find(group => group.id === action.payload.groupId);
            if(group) {
                const item = group.products.find(product => product.id === action.payload.id);
                if(item) {
                    item.checked = action.payload.checked;
                }
                if(group.products.every(product => product.checked === true)) {
                    group.checked = true;
                } else {
                    group.checked = false;
                }
            }
            if(state.groups.every(group => group.checked === true)) {
                state.checked = true;
            } else {
                state.checked = false;
            }

        },


        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

export const { setCheckedAll, setCheckedGroup, setCheckedItem, setGroups } = productsSlice.actions

export default productsSlice.reducer

