// Next.js API route support: https://nextjs.org/docs/api-routes/

import axios from 'axios';
import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const handler = async (req, res) => {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic

  try {
    const response = await axios({
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?q=pleasanton&appid=${process.env.API_KEY}`,
    });
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }

  /*   res.json({ message: 'Hello Everyone!' }); */
};

export default handler;
