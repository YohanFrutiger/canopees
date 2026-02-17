import { useState, useEffect } from 'react';

export const useRealizations = () => {
  const [state, setState] = useState({ loading: true, error: null, data: null });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/realizations')
      .then(res => {
        if (!res.ok) throw new Error('Erreur lors du chargement des prestations');
        return res.json();
      })
      .then(data => setState({ loading: false, error: null, data }))
      .catch(err => setState({ loading: false, error: err, data: null }));
  }, []);

  return state;
};