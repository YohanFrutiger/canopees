// src/hooks/useCatgories.js
// Custom hook pour charger les catégories depuis l'API

import { useState, useEffect } from 'react';

export const useCategories = () => { 
  const [state, setState] = useState({ loading: true, error: null, data: null }); 

  useEffect(() => {
    // fetch('http://127.0.0.1:8000/api/categories')
    fetch('https://yohanfrutiger.alwaysdata.net/api/categories') // à remplacer par VITE_API_URL=https://yohanfrutiger.alwaysdata.net/api
      .then(res => {
        if (!res.ok) throw new Error('Erreur lors du chargement des catégories');
        return res.json();
      })
      .then(data => setState({ loading: false, error: null, data })) 
      .catch(err => setState({ loading: false, error: err, data: null }));
  }, []);

  return state;
};