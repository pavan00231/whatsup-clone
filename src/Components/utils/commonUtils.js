export const FormateDate = (date) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();

    return `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes}`
}



export const emptyChatImage = 'https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg';
