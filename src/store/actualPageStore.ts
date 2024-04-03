import create from "zustand";

interface pageState{
    url: string
    changeUrl: (value: string) => void
}

export const usePageStore = create<pageState>((set)=>({
    url: "",
    changeUrl: (value: string) => set(state =>({
        url: value
    }))
}))