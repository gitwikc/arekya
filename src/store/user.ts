import { onAuthStateChanged, User } from "firebase/auth";
import create from "zustand/react";
import { auth } from "../firebase";

const useCurrentUser = create((set) => ({
  user: auth.currentUser,
  setUser: (user: User | null) => set(() => ({ user })),
}));

const currentUser = useCurrentUser();
onAuthStateChanged(auth, (user) => {
  currentUser.setUser(user);
});
