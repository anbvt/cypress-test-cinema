"use client"
import QRCode from "qrcode.react";
import $ from "jquery";

const QR = (value:any) => {
    const getBlobData = () => {
        const canvas = document.querySelector("canvas");
        const pngUrl = canvas != null ? canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream") : "";
        return pngUrl;
    };
    return (
        <>
            <QRCode id="canvas" size={256} includeMargin={true} className="mx-auto" value={value} renderAs="canvas" />
        </>

    )
}
export default QR;