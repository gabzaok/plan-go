import { Header } from "../Components/Header";

export const Home = () => {
    return (
        <div style={{ backgroundImage: "url('/background.jpg')" }} className="bg-cover bg-center h-screen ">
            <Header />
            <div className="h-[calc(100vh-66px)] flex flex-col gap-48 justify-center items-center" style={{ fontFamily: "Poppins, sans-serif"}}>




                <div className="flex gap-10" >

                    <div className="flex">
                        <div className="flex gap-6 items-center">
                            <img className="h-[125px] w-[122px]" src="/logo.svg" alt="" />

                            <h1 className="text-white text-5xl"
                                style={{
                                   
                                    fontWeight: "200",
                                }}>PLAN & <br /> GO</h1>
                        </div>

                    </div>

                    <div className="h-[125px] w-1 bg-[#FFA53B]" />

                    <div className="flex items-center justify-center" >
                        <p className="text-white text-[20px]" style={{ fontWeight: "200"}}>
                            SEU ROTEIRO <br />
                            SEU DESTINO <br />
                            SEU TEMPO <br />
                            SEU JEITO
                        </p>
                    </div>


                </div>

                <button className="bg-[#FFA53B] text-white py-3 px-11 rounded-2xl text-2xl font-medium ml-46">CRIAR ROTEIRO</button>

            </div>
        </div>
    );
}   