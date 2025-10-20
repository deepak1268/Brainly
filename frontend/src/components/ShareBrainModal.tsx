import { InputBox } from "./InputBox";
import { CrossIcon } from "../icons/CrossIcon";
import { FRONTEND_URL } from "../config";

interface ShareProps {
  onClose: () => void;
  link: string;
}

export const ShareBrainModal = ({ onClose, link }: ShareProps) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-xl">
        <div className="flex justify-end cursor-pointer" onClick={onClose}>
          <CrossIcon />
        </div>
        <InputBox text="Share This Link" value={`${FRONTEND_URL}/brain/share/${link}`}></InputBox>
      </div>
    </div>
  );
};
