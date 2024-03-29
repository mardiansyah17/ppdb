import {create} from "zustand";

interface SidebarState {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useSidebar = create<SidebarState>()((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
}))

export default useSidebar;