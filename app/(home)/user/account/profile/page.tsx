'use client'

import ChangeAvatar from "./changeAvatar";
import EditProfile from "./editProfile";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {customerAPI} from "@/util/API/Customer";

const Profile = () => {
    const {data: session} = useSession();
    const [customer, setCustomer] = useState<customer>();

    const customerId = Number(session?.user.id);

    useEffect(() => {
        if (session) {
            const init = async () => {
                const customerFromAPI = await customerAPI.findId(customerId);
                setCustomer(customerFromAPI);
            }

            init();
        }
    }, [customerId]);

    return (
        <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4"}>
            {/* C1: EditProfile */}
            <div className="col-span-1 sm:col-span-1 md:col-span-5">
                <div className="p-4">
                    <EditProfile editCustomer={customer}/>
                </div>
            </div>

            {/* C2: ChangeAvatar */}
            <div className="col-span-1 sm:col-span-1 md:col-span-2">
                <div className="p-4">
                    <ChangeAvatar customerId={customerId} keyfacebook={customer?.keyfacebook}
                                  avatar={customer?.avatar || ''}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;