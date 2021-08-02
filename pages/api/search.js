// Next.js API route support: https://nextjs.org/docs/api-routes/
import axios from 'axios';

const handler = async (req, res) => {
  try {
    const { location } = req.query;

    const response = await axios({
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}&units=imperial`,
    });

    const { lon, lat } = response.data.coord;

    const secondResponse = await axios({
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${process.env.API_KEY}&units=imperial`,
    });

    res.status(200).json({
      currentWeather: response.data,
      oneCall: secondResponse.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default handler;
