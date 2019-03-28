module.exports = {
    getPlanes: (req, res, next) => {
        req.app.get('db').getPlanes([25])
            .then(planes => res.status(200).send(planes))
            .catch(err => res.status(500).send(console.log(`u got a error: ${err}`)))
    }
}