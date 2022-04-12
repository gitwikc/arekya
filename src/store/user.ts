import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";
import create from "zustand";

interface ICurrentUserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useCurrentUser = create<ICurrentUserStore>((set) => ({
  user: auth.currentUser,
  setUser: (user: User | null) => set((state) => ({ user })),
}));
