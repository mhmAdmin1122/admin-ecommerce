import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "./Nav";
import { AiFillGoogleCircle } from "react-icons/ai";
const Layout = ({ children }) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="flex bg-blue-900">
          <Nav />
          <div className="bg-white text-black flex flex-col flex-grow my-4 mr-4 rounded-lg p-6">
            { children }
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex items-center bg-blue-900 h-screen w-screen">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg hover:bg-black hover:text-white transition ease-in-out duration-1000"
          >
            <b className="flex items-center">
              <AiFillGoogleCircle className="text-2xl font-bold mr-1" />
              <b>Login With Google</b>
            </b>
          </button>
        </div>
      </div>
    </>
  );
};

export default Layout;
