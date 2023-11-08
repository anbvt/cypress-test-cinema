import {fetchAPI} from "./axios"

const getToppingByBranch = async (id: any) => {
    return (await fetchAPI.get("/topping/toppingofbranch?branchid=" + id)).data;
}

export const toppingAPI = {
    getToppingByBranch
}