const About = () => {
    return (
        <>
            <div className="bg-fixed bg-cover" style={{ backgroundImage: `url('https://i.pinimg.com/originals/00/9e/5a/009e5a183303fe4cad23d8e236407c9a.jpg')` }}>
                <div className="h-fit py-10 flex items-center">
                    <section className="mx-auto w-full py-32 backdrop-blur-md rounded-lg">
                        <div className="mx-auto w-4/5 text-center">
                            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold mb-6">Welcome to Zuhot Cinema</h1>
                            <p className="text-md mb-12">&quot;Chào mừng bạn đến với Zuhot Cinema - Nơi bạn có thể tận hưởng những bộ phim và chương trình truyền hình chất lượng cao với mức giá phải chăng.&quot;</p>
                            <a href="#" className="from-black to-sky-900 bg-gradient-to-br border-2 border-blue-300 text-white py-4 px-8 rounded-full hover:from-black hover:to-sky-900 hover:bg-gradient-to-tl">Xem thêm</a>
                        </div>
                    </section>
                </div>
                <div className="mt-4 mb-8 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 backdrop-blur-lg">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="lg:mb-0 lg:max-w-lg lg:pr-5 p-10">
                            <div className="max-w-xl mb-6">
                                <h2 className="text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                                    Hưng Thịnh
                                </h2>
                                <p className="text-white text-base md:text-lg text-justify">
                                    Chi nhánh bán vé phim tại &quot;78, Bình Hưng Hòa, quận Bình Thạnh&quot; - Nơi bạn có thể tìm thấy tất cả những bộ phim và chương trình truyền hình yêu thích của mình.
                                </p>
                            </div>
                            <div className='space-x-4'>
                                <button className="text-white  text-lg font-medium inline-flex items-center">
                                    <span className="border-b-2">Xem thêm</span>
                                </button>
                            </div>
                        </div>
                        <div className="max-w-sm mt-8">
                            <iframe className="w-full h-60" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62716.00439126934!2d106.63273896171268!3d10.75371961805993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a613e61c0f%3A0x7693223c6cc5a100!2sCGV%20Pearl%20Plaza!5e0!3m2!1svi!2s!4v1695751490892!5m2!1svi!2s" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                <div className="mt-4 px-4 mb-8 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 rounded-lg backdrop-blur-lg">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="max-w-sm my-8">
                            <iframe className="w-full h-60" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62716.00439126934!2d106.63273896171268!3d10.75371961805993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a613e61c0f%3A0x7693223c6cc5a100!2sCGV%20Pearl%20Plaza!5e0!3m2!1svi!2s!4v1695751490892!5m2!1svi!2s" loading="lazy"></iframe>
                        </div>

                        <div className="lg:mb-0 lg:max-w-lg lg:pr-5 p-10">
                            <div className="max-w-xl mb-6">

                                <h2 className="text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                                    Bình Tân
                                </h2>
                                <p className="text-white text-base md:text-lg text-justify">
                                    Chi nhánh bán vé phim tại &quot;90, Phạm Ngũ Lão, quận Bình Tân&quot; - Nơi bạn có thể tìm thấy tất cả những bộ phim và chương trình truyền hình yêu thích của mình.
                                </p>
                            </div>
                            <div className='space-x-4'>
                                <button className="text-white  text-lg font-medium inline-flex items-center">
                                    <span className="border-b-2">Xem thêm</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 px-4 mb-8 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 backdrop-blur-lg">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="lg:mb-0 lg:max-w-lg lg:pr-5 p-10">
                            <div className="max-w-xl mb-6">

                                <h2 className="text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                                    Tân Phú
                                </h2>
                                <p className="text-white text-base md:text-lg text-justify">
                                    Chi nhánh bán vé phim tại &quot;178, Lý Thường Kiệt, quận Tân Phú&quot; - Nơi bạn có thể tìm thấy tất cả những bộ phim và chương trình truyền hình yêu thích của mình.
                                </p>
                            </div>
                            <div className='space-x-4'>
                                <button className="text-white  text-lg font-medium inline-flex items-center">
                                    <span className="border-b-2">Xem thêm</span>
                                </button>
                            </div>
                        </div>
                        <div className="max-w-sm mt-8">
                            <iframe className="w-full h-60" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62716.00439126934!2d106.63273896171268!3d10.75371961805993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a613e61c0f%3A0x7693223c6cc5a100!2sCGV%20Pearl%20Plaza!5e0!3m2!1svi!2s!4v1695751490892!5m2!1svi!2s" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                <div className="mt-4 px-4 mb-8 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 rounded-lg backdrop-blur-lg">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="max-w-sm my-8">
                            <iframe className="w-full h-60" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62716.00439126934!2d106.63273896171268!3d10.75371961805993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a613e61c0f%3A0x7693223c6cc5a100!2sCGV%20Pearl%20Plaza!5e0!3m2!1svi!2s!4v1695751490892!5m2!1svi!2s" loading="lazy"></iframe>
                        </div>

                        <div className="lg:mb-0 lg:max-w-lg lg:pr-5 p-10">
                            <div className="max-w-xl mb-6">

                                <h2 className="text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                                    Cộng Hòa
                                </h2>
                                <p className="text-white text-base md:text-lg text-justify">
                                    Chi nhánh bán vé phim tại &quot;60, Cộng Hòa, quận Tân Bình&quot; - Nơi bạn có thể tìm thấy tất cả những bộ phim và chương trình truyền hình yêu thích của mình.
                                </p>
                            </div>
                            <div className='space-x-4'>
                                <button className="text-white  text-lg font-medium inline-flex items-center">
                                    <span className="border-b-2">Xem thêm</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4 px-4 mb-8 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 backdrop-blur-lg">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="lg:mb-0 lg:max-w-lg lg:pr-5 p-10">
                            <div className="max-w-xl mb-6">

                                <h2 className="text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                                    Quang Trung
                                </h2>
                                <p className="text-white text-base md:text-lg text-justify">
                                    Chi nhánh bán vé phim tại &quot;199, Quang Trung, quận Gò Vấp&quot; - Nơi bạn có thể tìm thấy tất cả những bộ phim và chương trình truyền hình yêu thích của mình.
                                </p>
                            </div>
                            <div className='space-x-4'>
                                <button className="text-white  text-lg font-medium inline-flex items-center">
                                    <span className="border-b-2">Xem thêm</span>
                                </button>
                            </div>
                        </div>
                        <div className="sm:max-w-sm md:max-w-md mt-8">
                            <iframe className="w-full h-60" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62716.00439126934!2d106.63273896171268!3d10.75371961805993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a613e61c0f%3A0x7693223c6cc5a100!2sCGV%20Pearl%20Plaza!5e0!3m2!1svi!2s!4v1695751490892!5m2!1svi!2s" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;