import {Validation} from "@/common/validation/page/registration";
import Input from "@/components/Input/page";
import {customerAPI} from "@/util/API/Customer";
import {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ConfigProvider, Form, Select} from 'antd';
import {checkStatus} from "@/common/validation/status";
import {errorNotification, successNotification} from "@/util/Notification";
import {Option} from "rc-select";
import {theme} from "@/app/(home)/theme";
import {SessionProvider} from "next-auth/react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

/**
 * Object of Register
 */
type EditProfileProps = {
    name: string,
    email: string,
    phone: string,
    address: string,
    gender: boolean
}

interface EditProfileCustomer {
    editCustomer?: customer
}

const EditProfile = (props: EditProfileCustomer) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue
    } = useForm<EditProfileProps>();

    const [gender, setGender] = useState<boolean>();

    useEffect(() => {
        if (props.editCustomer) {
            setValue("name", props.editCustomer.name);
            setValue("phone", props.editCustomer.phone);
            setValue("address", props.editCustomer?.address)
            setGender(props.editCustomer.gender);
        }
    }, [props.editCustomer]);

    const onSubmit: SubmitHandler<EditProfileProps> = async (data) => {
        const newCustomer = {
            id: props.editCustomer?.id,
            ...data,
            gender: gender
        }

        if (checkStatus(await customerAPI.editProfile(newCustomer))) {
            successNotification("Cập nhật thành công!");
        }
    };

    const handleGenderChange = (value: boolean) => {
        setGender(value);
    };

    return (
        <ConfigProvider theme={theme}>
            <Form
                name="basic"
                labelCol={{span: 7}}
                wrapperCol={{span: 17}}
                labelAlign="left"
                initialValues={{remember: true}}
                onFinish={handleSubmit(onSubmit)}
                onFinishFailed={() => {
                }}
                autoComplete="off"
            >
                <section className="mb-10 text-white text-left">
                    <h2 className="font-bold text-2xl">Hồ Sơ Của Tôi</h2>
                    <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                </section>

                <Form.Item
                    label={<span className="text-white">Email</span>}
                    colon={false}
                >
                    <Input
                        type="email"
                        className="w-full bg-inherit border-none rounded-sm text-white"
                        disabled={true}
                        value={props.editCustomer?.email}
                    />
                </Form.Item>

                <Form.Item
                    label={<span className="text-white">Tên</span>}
                    colon={false}
                    className={"relative z-0 w-full mb-6 group"}
                >
                    <Input
                        type="text"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        register={register("name", Validation.name)}
                    />
                    <div className="text-red-600 mt-1">{errors.name?.message}</div>
                </Form.Item>

                <Form.Item
                    label={<span className="text-white">Số điện thoại</span>}
                    colon={false}
                >
                    <Input
                        type="text"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        register={register("phone", Validation.phone)}
                    />
                    <div className="text-red-600 mt-1">{errors.phone?.message}</div>
                </Form.Item>

                <Form.Item
                    label={<span className="text-white">Địa chỉ</span>}
                    colon={false}
                >
                    <Input
                        type="text"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        register={register("address", Validation.address)}
                    />
                    <div className="text-red-600 mt-1">{errors.address?.message}</div>
                </Form.Item>

                <Form.Item
                    label={<span className="text-white">Giới tính</span>}
                    // name="gender"
                    colon={false}
                >
                    <Select
                        value={gender} onChange={handleGenderChange}
                    >
                        <Option value={true}>Nam</Option>
                        <Option value={false}>Nữ</Option>
                    </Select>
                    <div className="text-red-600 mt-1">{errors.gender?.message}</div>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}} className={"mt-8"}>
                    <button
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
  <span
      className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Cập nhật
  </span>
                    </button>
                </Form.Item>
            </Form>
        </ConfigProvider>
    );
}

export default EditProfile;