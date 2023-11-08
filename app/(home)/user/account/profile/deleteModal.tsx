import {Modal, Button} from 'antd';
import {customerAPI} from "@/util/API/Customer";
import {errorNotification, successNotification} from "@/util/Notification";

const {confirm} = Modal;

interface ShowDeleteConfirmProps {
    customerId: number,
    avatar: string,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>
}

const showDeleteConfirm = ({...props}: ShowDeleteConfirmProps) => {
    const handleClick = async (customerId: number, avatarDelete: string) => {
        await customerAPI.deleteAvatar(customerId, avatarDelete).then(() => {
            successNotification("Xóa ảnh đại diện thành công")
            props.setPreview("https://zuhot-cinema-images.s3.amazonaws.com/avatar-user/default.png");
        }).catch(() => {
            errorNotification("Xóa ảnh đại diện thất bại. Vui lòng thử lại")
        })
    }

    confirm({
        title: 'Xóa ảnh',
        content: 'Bạn có chắc muốn xóa ảnh đại diện hiện tại không?',
        okText: 'Có',
        okType: 'danger',
        cancelText: 'Hủy',
        onOk() {
            handleClick(props.customerId, props.avatar)
        },
        onCancel() {
            () => {
            }
        },
    });
}


export default showDeleteConfirm;