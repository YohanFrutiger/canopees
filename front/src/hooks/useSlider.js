// src/hooks/useSlider.js
// Custom hook pour charger les images du slider depuis l'API

import { useState, useEffect } from 'react';

export const useSlider = () => {
  const [state, setState] = useState({ loading: true, error: null, data: null });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/slider_images')
      .then(res => {
        if (!res.ok) throw new Error('Erreur lors du chargement des images du slider');
        return res.json();
      })
      .then(data => setState({ loading: false, error: null, data }))
      .catch(err => setState({ loading: false, error: err, data: null }));
  }, []);

  return state;
};