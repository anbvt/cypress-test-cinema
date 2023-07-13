import Image from "next/image";

const Specical = () => {
    return (
        <nav className="navbar bg-opacity justify-content-around">
            <Image src="/assert/img/logo.png" width={"150"} height={"50"} alt=""/>
            <section className="d-flex justify-content-between align-items-center w-50">
                <a className="nav-link fw-bold">Phim</a>
                <a className="nav-link fw-bold">Lịch chiếu</a>
                <a className="nav-link fw-bold">Liên hệ</a>
                <a className="nav-link fw-bold">Về chúng tôi</a>
                <button className="btn btn-danger">Đăng nhập</button>
            </section>
        </nav>
    );
}

const Default = () =>{
    return (
        <nav className="navbar justify-content-around">
            <Image src="/assert/img/logo.png" width={"150"} height={"50"} alt=""/>
            <section className="d-flex justify-content-between align-items-center w-50">
                <a className="nav-link fw-bold">Phim</a>
                <a className="nav-link fw-bold">Lịch chiếu</a>
                <a className="nav-link fw-bold">Liên hệ</a>
                <a className="nav-link fw-bold">Về chúng tôi</a>
                <button className="btn btn-danger">Đăng nhập</button>
            </section>
        </nav>
    );
}


export const Navbar={
    Specical,
    Default
};