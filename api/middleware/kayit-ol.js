
const kayitOlValidation = (req, res, next) => {
    console.log('Sample middleware triggered');
    const { username, password } = req.body;
    if (username && password) {
        next();
    } else {
        res.status(401).json({ error: 'Eksik giriş bilgileri' });
    }
};

module.exports = kayitOlValidation;