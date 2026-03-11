// src/hooks/useTeamMembers.js
// Custom hook pour charger la liste des membres de l'équipe depuis l'API

import { useState, useEffect } from 'react';

export const useTeamMembers = () => {
  const [state, setState] = useState({ loading: true, error: null, data: null });
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/team_members`)
      .then(res => {
        if (!res.ok) throw new Error('Erreur lors du chargement des membres');
        return res.json();
      })
      .then(data => setState({ loading: false, error: null, data }))
      .catch(err => setState({ loading: false, error: err, data: null }));
  }, []);

  return state;
};