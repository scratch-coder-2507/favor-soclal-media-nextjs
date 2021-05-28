import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/client";
import { delBasePath } from "next/dist/next-server/lib/router/router";
import Image from "next/image";
import { useRef, useState } from "react";
import firebase from "firebase";
import {db, storage} from "../firebase";

function InputBox() {
    const [session] = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imagetoPost, setImagetoPost] = useState();

    const sendPost = (e) => {
        e.preventDefault();

        if (!inputRef.current.value) return;

        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then((doc) => {
            const uploadTask =  storage.ref(`posts/${doc.id}`).putString(imagetoPost,
                'data_url');
                removeImage();

                uploadTask.on(
                    "state_change",
                    null,
                    (error) => console.log(error),
                    () => {
                        //When the upload completes
                        storage.ref('posts').child(doc.id).getDownloadURL().then(
                            (url) => {
                                db.collection('posts').doc(doc.id).set({
                                    postImage: url
                                }, {merge: true })
                            }
                        )
                    }
                )
        });

        inputRef.current.value = "";
    };

    const addImagetoPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImagetoPost(readerEvent.target.result);
        }
    };

    const removeImage = () => {
        setImagetoPost(null);
    }

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image
                className="rounded-full"
                src={session.user.image}
                width={40}
                height={40}
                layout="fixed"
                />
                <form className="flex flex-1">
                    <input 
                    className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                    type="text"
                    ref={inputRef}
                    placeholder={`What's on your mind, ${session.user.name} ?`}
                    />
                    <button hidden type="submit" onClick={sendPost}>Submit</button>
                </form>
                {imagetoPost && (
                    <div onClick={removeImage} className="flex flex-col hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                        <img className="h-10 object-contain" src={imagetoPost} alt=""/>
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}
            </div>
            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500"/>
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>

                <div onClick={() => filePickerRef.current.click()} className="inputIcon">
                    <CameraIcon className="h-7 text-green-400"/>
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                    <input hidden onChange={addImagetoPost} ref={filePickerRef} type="file"/>
                </div>

                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300"/>
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox
