import {RootState} from "@/app/store";

export const selectGroups = (state: RootState) => state.products.groups
export const selectChecked = (state: RootState) => state.products.groups.filter(group => group.products.filter(product => product.checked).length > 0)
export const selectGlobalChecked = (state: RootState) => state.products.checked;
