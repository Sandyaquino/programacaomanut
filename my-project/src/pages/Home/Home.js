import React from "react";
import logoProg from "./LogoProgamacao.png";

const Home = () => {
  return (
    <section>
      <div className="p-10">
        <h1 className="p-10 text-center text-4xl text-custom_cor-verde-5 dark:text-white"> Sejam Bem-Vindos
        </h1>
        <a href="#" className="flex p-10 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={logoProg} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-custom_cor-verde-5 dark:text-white">Programação e Controle da Manutenção de Redes</h5>
                  <p className="mb-3 font-normal text-justify  text-gray-700 dark:text-gray-400">Conheça um pouco mais sobre a Programação e Controle da Manutenção de Redes.</p>
          </div>
        </a>
      </div>
    </section> 

  );
};

export default Home;
