import Layout from "./components/Layout";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { RiLogoutCircleRFill } from "react-icons/ri";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <div>
        <Layout>
          <div className="dashboard-content">
            <div className="flex items-center justify-between">
              <h1>Hello, {session?.user?.name}</h1>
              <div
                className="flex items-center bg-slate-200 text-blue-900 w-fit pr-3 rounded-lg overflow-hidden cursor-pointer"
                title={session?.user?.email}
              >
                <Image
                  src={session?.user?.image}
                  title={session?.user?.name}
                  alt="user-pic"
                  width={40}
                  height={40}
                />
                <h1 className="ml-2 font-bold hover:text-blue-600">{session?.user?.name}</h1>
                <b
                  onClick={() => signOut()}
                  className="text-2xl ml-2"
                  title="logout"
                >
                  <RiLogoutCircleRFill />
                </b>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
