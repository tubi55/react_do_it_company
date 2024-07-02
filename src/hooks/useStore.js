import { create } from "zustand";

const useStoreOpen = create(set => ({
	IsOpen: false,
	setOpen: () => set({ IsOpen: true }),
	setClose: () => set({ IsOpen: false }),
	setToggle: () => set(state => ({ IsOpen: !state.IsOpen }))
}));

export default useStoreOpen;
