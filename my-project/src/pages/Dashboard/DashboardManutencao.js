import React from "react";
import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const DashboardManutencao = () => {

  return (
    <>
      <div className="flex p-2">
        <div className="p-2">
          <div className="flex w-150 h-80 p-20 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <h1> Dash Manutenção </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardManutencao;
