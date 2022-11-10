request
   .get(`users/search`, {
      params: { q: userDebound, type: 'less' },
   })
   .then((res) => {
      setSearchResults(res.data.data);
      setLoading(false);
   })
   .catch(() => {
      setLoading(false);
   });
