'use client';

import { ChangeEvent, useRef, useState } from "react";
import { List } from "@/app/list";

export default function App() {
  const [technologies, setTechnologies] = useState(['React.js', 'Angular']);
  const [controlledInputText, setControlledInputText] = useState('');
  const uncontrolledInputRef = useRef<HTMLInputElement>(null);

  function handleSetControlledInputText(event: ChangeEvent<HTMLInputElement>) {
    setControlledInputText(event.currentTarget.value);
  }

  function handleAddTechControlledInput() {
    if (controlledInputText) {
      setTechnologies(currentValues => [
        ...currentValues,
        controlledInputText,
      ])
    }
  }

  function handleAddTechUncontrolledInput() {
    const techName = uncontrolledInputRef.current?.value || ''
    if (techName) {
      setTechnologies(currentValues => [
        ...currentValues,
        techName,
      ])
    }
  }

  return (
    <main className="flex flex-col gap-5 p-7 w-full md:w-[32rem]">
      <div>
        <label htmlFor="controlledInput"
               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Input Controlado
        </label>
        <div className="flex items-center gap-3">
          <input type="text"
                 id="controlledInput"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 value={controlledInputText}
                 onChange={handleSetControlledInputText}
          />
          <button type="button"
                  className="text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600"
                  onClick={handleAddTechControlledInput}
          >
            Adicionar
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="uncontrolledInput"
               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Input Não Controlado
        </label>
        <div className="flex items-center gap-3">
          <input type="text"
                 id="uncontrolledInput"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 ref={uncontrolledInputRef}
          />
          <button type="button"
                  className="text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600"
                  onClick={handleAddTechUncontrolledInput}
          >
            Adicionar
          </button>
        </div>
      </div>

      <List technologies={technologies} />
    </main>
  )
}
