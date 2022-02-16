import { toast } from "react-toastify";

interface Props {
  msg: string;
  id?: number;
}
export const customToast = ({msg, id}: Props) => {
  toast.info(msg, {
    toastId: id ?? 1,
    style: {
      backgroundColor: 'gold',
    },
    icon: false,
    // autoClose: false,
    position: "bottom-center",
    progressStyle: {
      backgroundColor: 'white'
    }
  })
}
