import { signIn } from "next-auth/client";
import Image from "next/image";

function Login() {
    return (
        <div className="grid place-items-center">
            <Image
            src="https://pngimage.net/wp-content/uploads/2018/05/f-logo-png-1.png"
            height={500}
            width={400}
            objectFit="contain"
            />
            <h1 onClick={signIn} className="cursor-pointer p-5 bg-blue-600 rounded-full text-white text-center">Login with Facebook</h1>
        </div>
    )
}

export default Login
