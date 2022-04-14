import transformDate from '../helpers/transformDate';

const date = transformDate();

const url = `https://api.covid19tracking.narrativa.com/api/${date}`;

const handleError = (response) => {
  if (!response.ok) {
    throw Error(response);
  } else {
    return response;
  }
};

const fetchCountriesApi = () => {
  const resultFetch = fetch(url)
    .then(handleError)
    .then((res) => res.json())
    .catch((error) => error);

  return resultFetch;
};

export default fetchCountriesApi;
