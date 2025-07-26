import { Header } from "../Components/Header";

export const Home = () => {
    return (
        <div style={{ backgroundImage: "url('/background.jpg')" }} className="bg-cover bg-center h-screen ">
            <div>
                <Header />
            </div>
        </div>
    );
}   