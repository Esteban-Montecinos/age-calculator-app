"use client";

import { useCalculator } from "./store/calculatorStore";

export default function HomeClient() {
  //zustand store states
  const { day, month, year, dayError, monthError, yearError } = useCalculator();
  //zustand store functions
  const { calculateAge, checkEmpty, checkDate} =
    useCalculator();

  function handleSubmit(event) {
    event.preventDefault();
    //obtiene los datos del formulario
    const { day, month, year } = Object.fromEntries(new FormData(event.target));

    //valida que los datos sean correctos
    if (
      day &&
      month &&
      year &&
      year < new Date().getFullYear() &&
      month <= 12 &&
      day <= new Date(year, month, 0).getDate()
    ) {
      //correcto
      calculateAge({ day, month, year });
      
    }
      //incorrecto
      checkEmpty({day, month, year});
      checkDate({day, month, year});
    
  }

  return (
    <section className="bg-white sm:max-w-[39rem] max-w-xs drop-shadow-sm w-full flex flex-col items-center justify-center rounded-3xl sm:rounded-br-[10rem] rounded-br-[5rem] sm:px-10 py-10  px-5">
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <div className="flex items-start text-gris-200/80 sm:gap-6 gap-4 w-full ">
          <div className="flex flex-col gap-2">
            <label
              className={`text-xs font-semibold tracking-wider ${dayError ? " text-rojo" : " text-gris-200/80"}`}
              htmlFor="day"
            >
              DAY
            </label>
            <input
              type="number"
              placeholder="DD"
              name="day"
              id="day"
              className={`placeholder:text-gris-200/80 text-offBlack border caret-morado focus:border-morado hover:border-morado outline outline-1 ${dayError ? " outline-rojo" : " outline-gris-100"}  outline-gris-100 rounded-md sm:w-[7.5rem] w-20 py-2 px-4 sm:text-2xl text-lg font-bold`}
            />
            {dayError ? (<p className="sm:text-xs text-[0.5rem] text-rojo">{dayError}</p>) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label
              className={`text-xs font-semibold tracking-wider ${monthError ? " text-rojo" : " text-gris-200/80"}`}
              htmlFor="month"
            >
              MONTH
            </label>
            <input
              type="number"
              placeholder="MM"
              name="month"
              id="month"
              className={`placeholder:text-gris-200/80 text-offBlack border caret-morado focus:border-morado hover:border-morado outline outline-1 ${monthError ? " outline-rojo" : " outline-gris-100"}  outline-gris-100 rounded-md sm:w-[7.5rem] w-20 py-2 px-4 sm:text-2xl text-lg font-bold`}
            />
            {monthError ? (<p className="sm:text-xs text-[0.5rem] text-rojo">{monthError}</p>) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label
              className={`text-xs font-semibold tracking-wider ${yearError ? " text-rojo" : " text-gris-200/80"}`}
              htmlFor="year"
            >
              YEAR
            </label>
            <input
              type="number"
              placeholder="YYYY"
              name="year"
              id="year"
              className={`placeholder:text-gris-200/80 text-offBlack border caret-morado focus:border-morado hover:border-morado outline outline-1 ${yearError ? " outline-rojo" : " outline-gris-100"}  outline-gris-100 rounded-md sm:w-[7.5rem] w-20 py-2 px-4 sm:text-2xl text-lg font-bold`}
            />
            {yearError ? (<p className="sm:text-xs text-[0.5rem] text-rojo">{yearError}</p>) : null}
          </div>
        </div>
        <div className="flex w-full items-center sm:flex-row flex-col sm:p-0 p-5">
          <hr className="flex-1 z-0 w-full sm:translate-y-0 translate-y-7" />
          <button
            className="bg-morado z-10 hover:bg-offBlack transition-colors hover:scale-110 duration-300 ease-in-out text-white rounded-full sm:p-3 p-1 justify-self-end"
            type="submit"
            aria-label="Submit"
          >
            <svg
              className="sm:scale-75 scale-50"
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="44"
              viewBox="0 0 46 44"
            >
              <g fill="none" stroke="#FFF" strokeWidth="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </button>
        </div>
      </form>
      <footer className="flex flex-col items-start sm:text-7xl text-5xl italic font-extrabold justify-center w-full sm:gap-4 gap-2">
        <p className="text-offBlack">
          <span className="text-morado tracking-widest">{year}</span> years
        </p>
        <p className="text-offBlack">
          <span className="text-morado tracking-widest">{month}</span> months
        </p>
        <p className="text-offBlack">
          <span className="text-morado tracking-widest">{day}</span> days
        </p>
      </footer>
    </section>
  );
}
