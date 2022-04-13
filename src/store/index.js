const address = {
    SG: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.798167640012!2d103.85689231444971!3d1.2956953990549809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c4401f071f%3A0x3ce0fafa822c08f6!2sReal%20Estate%20Analytics!5e0!3m2!1sen!2ssg!4v1635401278030!5m2!1sen!2ssg",
    ID: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.282841808727!2d106.80657751476916!3d-6.226389795492856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1505affffff%3A0x301b8a0f5d2c33ed!2sEquity%20Tower!5e0!3m2!1sen!2ssg!4v1636442773957!5m2!1sen!2ssg",
}

export const state = () => (
    {
        countryCode: 'SG',
        locale: 'en-US',
        googleMapsEmbed: address['SG'],
    }
)

export const mutations = {
    setCountryCode(state, payload) {
        state.countryCode = payload.countryCode;
        state.googleMapsEmbed = address[payload.countryCode];
        if (payload.countryCode === 'SG') {
            state.locale = 'en-US';
        } else if (payload.countryCode === 'ID') {
            state.locale = 'id-ID';
        } else {
            console.log('check payload for state mutation');
        }
    }
}