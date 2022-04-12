export const state = () => (
    {
        countryCode: 'SG',
        locale: 'en-US',
    }
)

export const mutations = {
    setCountryCode(state, payload) {
        state.countryCode = payload.countryCode;
        if (payload.countryCode === 'SG') {
            state.locale = 'en-US';
        } else if (payload.countryCode === 'ID') {
            state.locale = 'id-ID';
        } else {
            console.log('check payload for state mutation');
        }
    }
}