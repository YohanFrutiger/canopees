// src/hooks/useRealizations.js
// Custom hook pour charger les réalisations depuis l'API

import { useState, useEffect } from 'react';

export const useRealizations = () => {
  const [state, setState] = useState({ loading: true, error: null, data: null });

  useEffect(() => {
    // fetch('http://127.0.0.1:8000/api/realizations')
    fetch('https://yohanfrutiger.alwaysdata.net/api/realizations')
      .then(res => {
        if (!res.ok) throw new Error('Erreur lors du chargement des prestations');
        return res.json();
      })
      .then(data => setState({ loading: false, error: null, data }))
      .catch(err => setState({ loading: false, error: err, data: null }));
  }, []);

  // Méthode pour filtrer services par catégorie
  const getRealizationsByCategory = (categoryId) => {
    return state.data?.member?.filter(item => item.category === `/api/categories/${categoryId}`) || [];
  };

  return { ...state, getRealizationsByCategory };

};