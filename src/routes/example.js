import exampleUtil from '../utils/';

export default {
    example(req, res) {
        if (!req.example) return res.status(403).send({ success: false, message: 'Example not supplied' });
        const data = {
            example: req.example,
        };
        // Do something async
        exampleUtil.exampleFunction('do this').then((result) => {
            data.exampleUtil = result;
            return exampleUtil.exampleFunction('then this');
        })
        .then((result) => {
            data.exampleUtil1 = result;
            res.status(200).send({ success: true, data });
        })
        .catch((err) => {
            console.error(err);
        });
    },
};
