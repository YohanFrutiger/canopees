// src/hooks/useConentSections.js
// Custom hook pour charger le contenu des sections depuis l'API

import { useState, useEffect } from 'react';

export const useContentSections = () => {
  const [state, setState] = useState({ loading: true, error: null, data: null });
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/content_sections`)
      .then(res => {
        if (!res.ok) throw new Error('Erreur lors du chargement du contenu');
        return res.json();
      })
      .then(data => setState({ loading: false, error: null, data }))
      .catch(err => setState({ loading: false, error: err, data: null }));
  }, []);

  // Fonction utilitaire pour filtrer une section par key (réutilisable)
  const getSectionByKey = (key) => {
    return state.data?.member?.find(item => item.section_key === key) || null;
  };

  return { ...state, getSectionByKey };
};