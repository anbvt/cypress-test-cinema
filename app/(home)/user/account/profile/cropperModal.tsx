import React, {useEffect, useRef, useState} from "react";
import AvatarEditor from "react-avatar-editor";
import {Modal, Slider, Button, Input} from "antd";
import {customerAPI} from "@/util/API/Customer";
import {errorNotification, successNotification} from "@/util/Notification";

interface CropperModalProps {
    src: string | null;
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setPreview: React.Dispatch<React.SetStateAction<string | null>>;
    avatar: string;
    userId: number
}

const CropperModal = ({...props}: CropperModalProps) => {
    const [slideValue, setSlideValue] = useState<number>(10);
    const cropRef = useRef<AvatarEditor | null>(null);
    const formData = new FormData();

    // handle save
    const handleSave = async () => {
        if (cropRef.current) {
            const dataUrl = cropRef.current.getImage().toDataURL();
            const result = await fetch(dataUrl);
            const blob = await result.blob();

            props.setPreview(URL.createObjectURL(blob));
            props.setModalOpen(false);
            console.log(URL.createObjectURL(blob))

            const options = {type: blob.type, lastModified: Date.now()};
            const file = new File([blob], props.avatar, options);

            formData.append('customerId', `${props.userId}`);
            formData.append('multipartFile', file);

            await customerAPI.updateAvatar(formData).then(() => {
                successNotification("Thay đổi ảnh đại diện thành công!")
            }).catch(() => {
                errorNotification("Không lưu được ảnh!");
            });
        }
    };

    return (
        <Modal
            open={props.modalOpen}
            title="Cắt ảnh mới cho hồ sơ của bạn"
            centered={true}
            maskClosable={false}
            okText="Lưu"
            cancelText="Hủy"
            okButtonProps={{className: "bg-black"}}
            onOk={handleSave}
            onCancel={() => props.setModalOpen(false)}
        >
            <div className="w-full h-full flex flex-col items-center justify-center">
                <AvatarEditor
                    ref={cropRef}
                    image={props.src || ""}
                    style={{width: "100%", height: "100%"}}
                    border={50}
                    borderRadius={150}
                    color={[0, 0, 0, 0.72]}
                    scale={slideValue / 10}
                    rotate={0}
                    className="rounded-sm"
                />

                {/* Ant Design Slider */}
                <Slider
                    min={10}
                    max={50}
                    defaultValue={slideValue}
                    value={slideValue}
                    className="m-10 w-96"
                    onChange={(value: number) => setSlideValue(value)}
                />
            </div>
        </Modal>
    );
};

export default CropperModal;