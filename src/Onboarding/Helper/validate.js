export const checkValidation = (key,value) => {
    let isValid = true;
    switch (key) {
        case "Name":
            if (value.length) {
                isValid = false
            }

            break;
        case "phone":
            if(value.length==13 && 
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)){
                isValid=false
            }
            break;
        case "email":
            if(value.length && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
                isValid=false
            }
            break;
        case "password":
            if(value.length && /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value)){
                isValid=false
            }
            break;
        case "emailphone":
            if(value.length && /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$/.test(value)){
                isValid = false
            }
            break;
        default:
            break;
    }
  return  isValid;

}