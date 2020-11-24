const Validate = (values) => {
    let errors = {};

    //name validation
    if(!values.name){
        errors.name = 'Name required.'
    }
    
    //email validation
    if(!values.email){
        errors.email = 'Email required.'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    
    //email phone
    if(!values.phone){
        errors.phone = 'Phone number required.'
    }else if(!/^[0-9-]*$$/.test(values.phone)){
        errors.phone = 'Invalid phone number.'
    }else if (values.phone.length <= 9 || values.phone.length >= 13 || values.phone.length === 11){
        errors.phone = 'Phone number must be 10 digits such as 000-000-0000.'
    }

    //dob
    if(!values.dob){
        errors.dob = 'Your date of birth is required.'
    }else if(!/^(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)\d{2}$/.test(values.dob)){
        errors.dob = 'Please enter in format MM/DD/YYYY.'
    }

    return errors;
}

export default Validate;