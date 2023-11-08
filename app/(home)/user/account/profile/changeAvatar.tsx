import React, {useEffect, useRef, useState} from "react";
import CropperModal from './cropperModal';
import {Button, Input, InputRef} from "antd";
import "./index.css";
import {FaUpload} from "react-icons/fa6";
import {RiDeleteBin6Line} from "react-icons/ri";
import showDeleteConfirm from "@/app/(home)/user/account/profile/deleteModal";
import Image from "next/image";

interface ChangeAvatarProps {
    customerId: number,
    keyfacebook?: string,
    avatar: string
}

const ChangeAvatar = ({...props}: ChangeAvatarProps) => {
    // image src
    const [src, setSrc] = useState<string | null>(null);

    // preview
    const [preview, setPreview] =
        useState<string | null>
        (() => {
            if (props.keyfacebook) {
                return props.avatar;
            }

            return `https://zuhot-cinema-images.s3.amazonaws.com/avatar-user/${props.avatar}`;
        });

    // modal state
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    // ref to control input element
    const inputRef = useRef<HTMLInputElement | null>(null);

    // file name
    const [fileName, setFileName] = useState<string | null>(null);

    useEffect(() => {
        if (props.avatar)
            setPreview(`https://zuhot-cinema-images.s3.amazonaws.com/avatar-user/${props.avatar}`);
        else
            setPreview("https://zuhot-cinema-images.s3.amazonaws.com/avatar-user/default.png");
    }, [props.avatar]);

    // handle Click
    const handleInputClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    // handle Change
    const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSrc(URL.createObjectURL(e.target.files[0]));
            setFileName(e.target.files[0].name);
            setModalOpen(true);
        }
    };

    return (
        <section className={"flex justify-center items-center md:block"}>
            <CropperModal
                modalOpen={modalOpen}
                src={src || ''}
                setPreview={setPreview}
                setModalOpen={setModalOpen}
                avatar={fileName || ''}
                userId={props.customerId}
            />
            <div className="relative mb-10">
                <Image
                    src={
                        preview ||
                        "https://zuhot-cinema-images.s3.amazonaws.com/avatar-user/default.png"
                    }
                    alt=""
                    width="200"
                    height="200"
                    className={"rounded-full"}
                />

                <Button
                    className="border-0 bottom-0 bg-neutral-900 text-white left-36 absolute w-50 h-50 rounded-full"
                    onClick={() => showDeleteConfirm({
                        customerId: props.customerId,
                        avatar: props.avatar,
                        setPreview: setPreview
                    })}
                >
                    <RiDeleteBin6Line/>
                </Button>
            </div>

            <div className="mt-3">
                <Input type="file"
                       id={"uploadBtn"}
                       accept="image/*"
                       ref={inputRef as React.MutableRefObject<InputRef | null>}
                       bordered={false}
                       onChange={handleImgChange}
                />
                <label
                    className={`lblUpload d-inline-block text-sm text-center px-16 py-2
                        flex items-center w-fit hover:scale-105`}
                    htmlFor={"uploadBtn"}
                >
                    <FaUpload/><span className={"ms-3 hidden lg:block"}>Tải ảnh lên</span>
                </label>

                <br/>
                <small>
                    Dung lượng file tối đa 10 MB <br/>
                    Định dạng:.JPEG, .PNG, .JPG
                </small>
            </div>
        </section>
    );
};

export default ChangeAvatar;
