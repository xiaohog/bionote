import birthdayImage from "../images/myIcon/birthday.png";
import addressImage from "../images/myIcon/address.png";
import phoneImage from "../images/myIcon/phone.png";
import emailImage from "../images/myIcon/email.png";
import salaryImage from "../images/myIcon/salary.png";
import { StaticImageData } from "next/image";
interface imgProp{
    [key:string]: StaticImageData;
}
const images:imgProp = {
    birthdayImage,
    addressImage,
    phoneImage,
    emailImage,
    salaryImage,
}
export const imageSrc = (src:string) => {
    if(images[src]){
        return images[src]
    }
    else{
        return '';
    }
}