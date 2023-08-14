import { create } from "zustand";
import { getAge } from "../logic";

export const useCalculator = create((set) => ({
  day: "--",
  month: "--",
  year: "--",
  dayError: "",
  monthError: "",
  yearError: "",
  calculateAge: ({ day, month, year }) => {
    const {numDay, numMonth, numYear} = getAge({ day, month, year })
    set({
      day: numDay,
      month: numMonth,
      year: numYear,
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
