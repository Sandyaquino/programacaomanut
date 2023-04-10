import React from "react";
import { useState, useEffect } from 'react';
import {Link, Outlet, useLocation} from 'react-router-dom';

import { changeMenuDash } from "../../redux/navbardashSlice";
import { useDispatch, useSelector } from 'react-redux';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DashboardHeader = () => {

  const dispatch = useDispatch()
  const menudash = useSelector(state => state.navbardash.dash)
  const [navigation, setNavigation] = useState(menudash);
  const location = useLocation();
  const [estado, setEstado] = useState(null);

  useEffect(() => {

    if (location.pathname === '/Dashboard/DashboardManutencao') {
      setNavigation(
        navigation.map((item) =>
          item.name === 'Programação da Manutenção'
            ? { ...item, current: true }
            : { ...item, current: false }
        )
      );
    } else if (location.pathname === '/Dashboard/DashboardDesligamentos') {
      setNavigation(
        navigation.map((item) =>
          item.name === 'Desligamentos Programados'
            ? { ...item, current: true }
            : { ...item, current: false }
        )
      )
    } else if (location.pathname === '/Sobre') {
      setNavigation(
        navigation.map((item) =>
          item.name === 'Sobre'
            ? { ...item, current: true }
            : { ...item, current: false }
        )
      )
    }
  }, [location.pathname]);

  useEffect(() => {
    try {
      const dataItem = window.sessionStorage.getItem("navbarItemDash");
      if (JSON.parse(dataItem).name !== null) {
        setNavigation(navigation.map((item) =>
          item.name === JSON.parse(dataItem).name
            ? { ...item, current: true }
            : { ...item, current: false }
        )
      )
      ;}
    } catch (error) {
      // código para tratar o erro
    }
  }, []);


  useEffect(()=> {
    const currentMenuItem = navigation.find(item => item.current === true)
    window.sessionStorage.setItem("navbarItemDash", removeCircularReferences(currentMenuItem))
  },[navigation])

  function removeCircularReferences(obj) {
    const seenObjects = new WeakSet();
    function replacer(key, value) {
      if (typeof value === 'object' && value !== null) {
        if (seenObjects.has(value)) {
          return '[Circular]';
        }
        seenObjects.add(value);
      }
      return value;
    }
    return JSON.stringify(obj, replacer);
  }

  const handleItemClick = (itemName) => {
    setNavigation(navigation.map((item) =>
    item.name === itemName
        ? { ...item, current: true  }
        : { ...item, current: false }
    ))
    dispatch(changeMenuDash(itemName))
  }

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <div className={`ml-10 flex items-baseline space-x-4`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? `inline-flex p-4 border-b-2 border-custom_cor-verde-5 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group text-custom_cor-verde-5`
                      : `inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group`,
                      `inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-custom_cor-verde-5 hover:border-gray-300 dark:hover:text-gray-300 group`
                  )}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => handleItemClick(item.name)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
              </div>
            </ul>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default DashboardHeader;
