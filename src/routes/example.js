import exampleFunction from '../utils/';

export default {
  async asyncExample(req, res) {
    if (!req.example) return res.status(403).send({ success: false, message: 'Example not supplied' });
    const data = {
      example: req.example,
    };

    try {
      let result = await exampleFunction('do this 1');
      data.exampleUtil = result;
      result = await exampleFunction('then this 2');
      data.exampleUtil1 = result;
      result = await exampleFunction('then this 3');
      data.exampleUtil2 = result;
      return res.status(200).send({ success: true, data });
    } catch (err) {
      return res.status(500).send({ success: false, err });
    }
  },

  promiseExample(req, res) {
    if (!req.example) return res.status(403).send({ success: false, message: 'Example not supplied' });
    const data = {
      example: req.example,
    };

    // Do something async
    exampleFunction('do this 1').then((result) => {
      data.exampleUtil = result;
      return exampleFunction('then this 2');
    })
    .then((result) => {
      data.exampleUtil1 = result;
      return exampleFunction('then this 3');
    })
    .then((result) => {
      data.exampleUtil2 = result;
      return res.status(200).send({ success: true, data });
    })
    .catch((err) => res.status(500).send({ success: false, err }));

    return this;
  },
};



