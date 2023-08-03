import { create } from "zustand";

export const useCalculator = create((set) => ({
  day: "--",
  month: "--",
  year: "--",
  dayError: "",
  monthError: "",
  yearError: "",
  calculateAge: ({ day, month, year }) => {
    const birthDate = new Date(year, month - 1, day);
    const date = new Date();
    const numDay = date.getDate() - birthDate.getDate();
    const numMonth = date.getMonth() - birthDate.getMonth();
    var numYear = date.getFullYear() - birthDate.getFullYear();

    if (
      numMonth < 0 ||
      (numMonth === 0 && date.getDate() < birthDate.getDate())
    ) {
      numYear--;
    }
    set({
      day: Math.abs(numDay),
      month: Math.abs(numMonth),
      year: Math.abs(numYear),
    });
  },
  checkEmpty: ({ day, month, year }) => {
    Number(day) == 0
      ? set({ dayError: "This fild is required" })
      : set({ dayError: "" });
    Number(month) == 0
      ? set({ monthError: "This fild is required" })
      : set({ monthError: "" });
    Number(year) == 0
      ? set({ yearError: "This fild is required" })
      : set({ yearError: "" });
  },
  checkDate: ({ day, month, year }) => {
    day > new Date(year, month, 0).getDate() || day < 0
      ? set({ dayError: "Must be a valid day" })
      : set({ dayError: "" });
    month > 12 || month < 0
      ? set({ monthError: "Must be a valid month" })
      : set({ monthError: "" });
    year < 0 || year > new Date().getFullYear()
      ? set({ yearError: "Must be in the past" })
      : set({ yearError: "" });
  },
}));
