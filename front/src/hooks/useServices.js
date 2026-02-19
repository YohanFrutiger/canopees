import { useState, useEffect } from 'react';

export const useServices = () => {
  const [state, setState] = useState({ loading: true, error: null, data: null });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/services')  // Ajuste endpoint à ton Entity\Service
      .then(res => {
        if (!res.ok) throw new Error('Erreur lors du chargement des services');
        return res.json();
      })
      .then(data => setState({ loading: false, error: null, data }))
      .catch(err => setState({ loading: false, error: err, data: null }));
  }, []);

  // Méthode pour filtrer services par catégorie (assume category est l'ID ou IRI ; ajuste si objet)
const getServicesByCategory = (categoryId) => {
  return state.data?.member?.filter(item => item.category === `/api/categories/${categoryId}`) || [];  // Match IRI string
};

  return { ...state, getServicesByCategory }; 
};