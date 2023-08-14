import { NUM_DAYS, NUM_MONTHS, YEAR_IN_MS } from "../constants";

export const getAge = ({ day, month, year }) =>{
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    const diff = today - birthDate;

    const age = diff / YEAR_IN_MS;

    const numYear = Math.floor(age)
    const remainingYear = age - numYear

    const monthDiff = remainingYear * NUM_MONTHS
    const numMonth = Math.floor(monthDiff)

    const remainingMonth = monthDiff - numMonth
    const numDay = Math.floor(remainingMonth * NUM_DAYS)

    return {numDay, numMonth, numYear}
}