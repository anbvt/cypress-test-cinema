'use client'

import OrderDetail from "./orderdetail";
import Seat from "./seat";

const Order = () => {
    return (
        <div className="flex flex-row">
            <div className="basis-3/4"><Seat /></div>
            <div className="basis-1/4 flex items-center justify-center"><OrderDetail /></div>
        </div>
    );
}

export default Order;