import { AiFillGoogleCircle } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Head from "next/head";

export default function SignInOut() {
    const { data: session } = useSession();
    if (session) {
      return (
        <>
          Signed in as {session.user.name} <br />
          Signed in as {session.user.email} <br />
          Signed in as <Image src={session.user.image} alt="img-user" width={80} height={80} className="rounded-lg"/> <br />
          <button
            onClick={() => signOut()}
            className="bg-white p-2 px-4 rounded-lg hover:bg-black hover:text-white transition ease-in-out duration-1000"
          >
            <b className="flex items-center">
              <AiFillGoogleCircle className="text-2xl font-bold mr-1" />
              <b>Signout With Google</b>
            </b>
          </button>
        </>
      );
    }
    return (
      <>
        <Head>
          <title>ecommerce-admin || Admin Login</title>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <div className="flex items-center bg-blue-900 h-screen w-screen">
          <div className="text-center w-full">
            <button
              onClick={() => signIn('google')}
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
}
