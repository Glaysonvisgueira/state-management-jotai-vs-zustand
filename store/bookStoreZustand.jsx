import { create } from "zustand";
//import { persist, createJSONStorage } from "zustand/middleware";

const initialState = 0;

export const useBookStore = create((set, get) => ({
  amount: initialState,
  updateAmount: (newAmount) => {
    set((state) => ({ amount: newAmount + state.amount }));
  },

  reset: () => {
    set(initialState);
  },
}));

// export const useBookStore = create()(
//   persist(
//     (set) => ({
//       ...initialState,
//       reset: () => {
//         set(initialState);
//       },
//       amount: 0,
//       updateAmount: (newAmount) => {
//         set((state) => ({ amount: newAmount + state.amount }));
//       },
//     }),
//     {
//       name: "book",
//     }
//   )
// );
