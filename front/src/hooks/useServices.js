// src/hooks/useCServices.js
// Custom hook pour charger les services depuis l'API

import { useState, useEffect } from 'react';

export const useServices = () => {
  const [state, setState] = useState({ loading: true, error: null, data: null });

  useEffect(() => {
    // fetch('http://127.0.0.1:8000/api/services')
    fetch('https://yohanfrutiger.alwaysdata.net/api/services')
      .then(res => {
        if (!res.ok) throw new Error('Erreur lors du chargement des services');
        return res.json();
      })
      .then(data => setState({ loading: false, error: null, data }))
      .catch(err => setState({ loading: false, error: err, data: null }));
  }, []);

  // Méthode pour filtrer services par catégorie
  const getServicesByCategory = (categoryId) => {
    return state.data?.member?.filter(item => item.category === `/api/categories/${categoryId}`) || [];
  };

  return { ...state, getServicesByCategory };
};