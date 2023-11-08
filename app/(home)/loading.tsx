import { ClipLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <ClipLoader size={50} color="#ff0000" />
        </div>
    );
}