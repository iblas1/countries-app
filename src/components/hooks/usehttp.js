const { default: axios } = require("axios");
const { useState, useCallback } = require("react");

const useHttp = () => {
  const [loading, setLoading] = useState(true);

  const getCountry = useCallback((url, apply, field) => {
    const arg = field ? field : null;
    setLoading(true);
    axios
      .get(url, arg)
      .then((res) => {
        apply(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return {
    loading,
    getCountry,
  };
};

export default useHttp;
