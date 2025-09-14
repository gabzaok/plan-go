import { Header } from "../Components/Header";

export const Home = () => {
  return (
    <div
      style={{ backgroundImage: "url('/background.jpg')" }}
      className="h-screen bg-cover bg-center"
    >
      <Header />
      <div
        className="flex h-[calc(100vh-66px)] flex-col items-center justify-center gap-48"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="flex gap-10">
          <div className="flex">
            <div className="flex items-center gap-6">
              <img className="h-[125px] w-[122px]" src="/logo.svg" alt="" />

              <h1
                className="text-5xl text-white"
                style={{
                  fontWeight: "200",
                }}
              >
                PLAN & <br /> GO
              </h1>
            </div>
          </div>

          <div className="h-[125px] w-1 bg-[#FFA53B]" />

          <div className="flex items-center justify-center">
            <p className="text-[20px] text-white" style={{ fontWeight: "200" }}>
              SEU ROTEIRO <br />
              SEU DESTINO <br />
              SEU TEMPO <br />
              SEU JEITO
            </p>
          </div>
        </div>

        {/* <button className="ml-35 rounded-3xl bg-[#FFA53B] px-11 py-3 text-xl font-normal text-black">
          CRIAR ROTEIRO
        </button> */}

        <button
          type="submit"
          class="group relative isolate z-10 ml-35 flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-gray-50 px-4 py-2 text-lg shadow-xl before:absolute before:inset-0 before:-z-10 before:-translate-x-full before:bg-[#FFA53B] before:transition-transform before:duration-500 before:ease-in-out before:content-[''] hover:text-black hover:before:translate-x-0 lg:font-normal"
        >
          Criar Roteiro
          <svg
            class="h-8 w-8 rotate-45 justify-end rounded-full border border-gray-700 p-2 text-gray-50 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-50"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              class="fill-gray-800 group-hover:fill-gray-800"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
