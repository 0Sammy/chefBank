import { create } from "zustand";

type transactionStore = {
  amount: number;
  accountName: string;
  accountNumber: string;
  depositMethod: string;
  bankName: string;
  routingNumber: string;
  bankAddress: string;
  swiftCode: string;
  description: string;
  iban: string;
  isSavebox: boolean;
  doneByAdmin: boolean;
  adminEmail: string;
  userId: string;
  customDate: string;
  updateAmount: (newAmount: number) => void;
  updateAccountName: (newName: string) => void;
  updateAccountNumber: (newAccountNumber: string) => void;
  updateDepositMethod: (newMethod: string) => void;
  updateBankName: (newName: string) => void;
  updateRoutingNumber: (newNumber: string) => void;
  updateBankAddress: (newAddress: string) => void;
  updateSwiftCode: (newCode: string) => void;
  updateDescription: (newDescription: string) => void;
  updateIban: (newIban: string) => void;
  updateSaveBox: (newSaveBox: boolean) => void;
  updateAdminEmail: (newEmail: string) => void;
  updateUserId: (newId: string) => void;
  updateCustomDate: (newDate: string) => void;
  reset: () => void;
};

export const useTransactionStore = create<transactionStore>((set) => ({
  amount: 0,
  accountName: "",
  accountNumber: "",
  depositMethod: "",
  bankName: "",
  routingNumber: "",
  bankAddress: "",
  swiftCode: "",
  description: "",
  iban: "",
  isSavebox: false,
  doneByAdmin: true,
  adminEmail: "",
  userId: "",
  customDate: "",
  updateAmount: (newAmount: number) => set({ amount: newAmount }),
  updateAccountName: (newName: string) => set({ accountName: newName }),
  updateAccountNumber: (newAccountNumber: string) =>
    set({ accountNumber: newAccountNumber }),
  updateDepositMethod: (newMethod: string) => set({ depositMethod: newMethod }),
  updateBankName: (newName: string) => set({ bankName: newName }),
  updateRoutingNumber: (newRoutingNumber: string) => set({ routingNumber: newRoutingNumber }),
  updateBankAddress: (newAddress: string) => set({ bankAddress: newAddress }),
  updateSwiftCode: (newCode: string) => set({ swiftCode: newCode }),
  updateDescription: (newDescription: string) =>
    set({ description: newDescription }),
  updateIban: (newIban: string) => set({ iban: newIban }),
  updateSaveBox: (newSaveBox: boolean) => set({ isSavebox: newSaveBox }),
  updateAdminEmail: (newEmail: string) => set({ adminEmail: newEmail }),
  updateUserId: (newId: string) => set({ userId: newId }),
  updateCustomDate: (newDate: string) => set({ customDate: newDate }),
  reset: () =>
    set({
      amount: 0,
      accountName: "",
      accountNumber: "",
      depositMethod: "",
      bankName: "",
      routingNumber: "",
      bankAddress: "",
      swiftCode: "",
      description: "",
      iban: "",
      isSavebox: false,
      doneByAdmin: true,
      adminEmail: "",
      userId: "",
    }),
}));
