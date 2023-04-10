import React, { useState } from "react";
import { Fragment } from 'react';
import {Link} from 'react-router-dom';

import ChartBar from "../../components/layout/charts/BarCharts"; // importando o componente ColumnChart
import { layout } from "@chakra-ui/react";

import Dropdown from 'react-dropdown';


const DashboardDesligamentos = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="relative p-3">
      <div className="p-2 z-50">
        <button
          id="multiLevelDropdownButton"
          data-dropdown-toggle="dropdown"
          className="flex items-center justify-between px-4 py-2 text-white rounded-md w-60 h-8 rigth-0 text-white bg-custom_cor-verde-5 hover:bg-custom_cor-verde-5 focus:ring-4 focus:outline-none focus:ring-custom_cor-verde-4 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-custom_cor-verde-5 dark:hover:bg-custom_cor-verde-5 dark:focus:ring-custom_cor-verde-5"
          type="button"
          onClick={toggleMenu}
        >
          Coelba{' '}
          <svg
            className="w-4 h-4 ml-28"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <div
            id="dropdown"
            className="absolute z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            style={{ top: "55px" }}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="multiLevelDropdownButton"
            >
              <li>
                <a
                  href="#"
                  className="h-6 block px-4 py-0 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sup. Norte
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="h-6 block px-4 py-0 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sup. Sul
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="h-6 block px-4 py-0 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sup. Oeste
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <h1 className="text-custom_cor-verde-5 text-center text-2xl">
          Acompanhamento Mensal
        </h1>
        <ChartBar />
      </div>
    </div>
  );
}

export default DashboardDesligamentos;