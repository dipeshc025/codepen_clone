import axios from 'axios';

// Fetch all pens
export const fetchPen = (penId) => async (dispatch) => {
  try {
      const response = await axios.get(`/api/pens/${penId}`);
      dispatch({ type: 'FETCH_PEN_SUCCESS', payload: response.data });
  } catch (error) {
      dispatch({ type: 'FETCH_PEN_ERROR', payload: error.message });
  }
};

// Create a new pen
export const createPen = (penData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/pens', penData);
        dispatch({ type: 'CREATE_PEN_SUCCESS', payload: response.data });
    } catch (error) {
        console.error('Error creating pen:', error);
    }
};

// Update an existing pen
export const updatePen = (penId, penData) => async (dispatch) => {
    try {
        const response = await axios.put(`/api/pens/${penId}`, penData);
        dispatch({ type: 'UPDATE_PEN_SUCCESS', payload: response.data });
    } catch (error) {
        console.error('Error updating pen:', error);
    }
};

// Delete a pen
export const deletePen = (penId) => async (dispatch) => {
    try {
        await axios.delete(`/api/pens/${penId}`);
        dispatch({ type: 'DELETE_PEN_SUCCESS', payload: penId });
    } catch (error) {
        console.error('Error deleting pen:', error);
    }
};
