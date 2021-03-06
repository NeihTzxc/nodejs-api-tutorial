module.exports = {
    validateEmail(email) { //Validates the email address
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return emailRegex.test(email);
    }, 
    sleep: async (seconds) => {
        return await new Promise((rs, rj) => {
            setTimeout(() => {
                rs(true);
            }, seconds * 1000);
        })
    }
}