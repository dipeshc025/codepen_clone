// src/pages/Editor.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PenForm from '../components/PenForm';
import { fetchPen, createPen, updatePen } from '../redux/actions/penActions';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector

const Editor = () => {
  const { penId } = useParams();
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPenData = async () => {
      if (penId) {
        try {
          await dispatch(fetchPen(penId));
        } catch (err) {
          setError('Error fetching pen data. Please try again.');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchPenData();
  }, [penId, dispatch]);

  // Fetch pen from the Redux store after the data is loaded
  const penData = useSelector((state) => state.pen); // Access pen data from the store

  // Update state with fetched pen data
  useEffect(() => {
    if (penData) {
      setHtml(penData.html || '');
      setCss(penData.css || '');
      setJs(penData.js || '');
    }
  }, [penData]);

  const handleSave = async () => {
    const penData = { html, css, js };
    try {
      if (penId) {
        await dispatch(updatePen(penId, penData));
        alert('Pen updated successfully!');
      } else {
        await dispatch(createPen(penData));
        alert('Pen created successfully!');
      }
    } catch (err) {
      alert('Error saving pen. Please try again.');
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="p-4">
      <PenForm
        html={html}
        setHtml={setHtml}
        css={css}
        setCss={setCss}
        js={js}
        setJs={setJs}
        onSave={handleSave}
      />
    </div>
  );
};

export default Editor;
