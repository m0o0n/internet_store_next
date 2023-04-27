import { IconTrash } from "../../components/global/Icons/IconTrash";
import style from "./admin.module.scss";
export const ImagePreview = (props) => {
    return (
        <div className={style.image_preview}>
            <img src={URL.createObjectURL(props.file)} />
            <button onClick={() => props.clear()}>{props.galery ? <IconTrash /> : 'Clear'}</button>
        </div>
    );
};