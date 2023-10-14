export const validateHotelData = (data: any): boolean => {
    const titlePattern = /.+/; 
    const descriptionPattern = /.+/; 
    const locationPattern = /.+/; 
    const addressPattern = /.+/; 
    const ratingPattern = /^\d+(\.\d+)?$/;
    const pricePattern = /^\d+(\.\d+)?$/;
    const imgPattern = /.+/; 

    return (
        titlePattern.test(data.title) &&
        descriptionPattern.test(data.description) &&
        locationPattern.test(data.location) &&
        addressPattern.test(data.address) &&
        ratingPattern.test(data.rating) &&
        pricePattern.test(data.price) &&
        imgPattern.test(data.img)
    );
}