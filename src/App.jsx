import Chanels from "./components/chanels";
import Main from "./components/main";
import Sidebar from "./components/sidebar";


export default function App() {
    return (
        <div class='bg-DSbg1 w-screen h-screen text-gray-200 flex'>

            <Sidebar />
            <Chanels />
            <Main />
        </div>
    );
}


