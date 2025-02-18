export const checkPhoneNumber = (phoneNumber: string) => {
    const phoneNumberRegex = /^\+?(?:\d{1,3})?[-.\s]?(\d{9,12})$/;

    return phoneNumberRegex.test(phoneNumber);
}
