import React, { useState, useEffect, useContext } from 'react';
import BASE_URL from '@/components/config/apiConfig';
import Sidebar from '@/components/Sidebar';
import { useRouter } from 'next/router';
import { UserContext } from '@/context/UserContext';

const SliderPage = () => {
  const [sliders, setSliders] = useState([]);
  const [message, setMessage] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editImageId, setEditImageId] = useState(null);

  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else if (user.role !== 'headmaster') {
      router.push('/unauthorized');
    }
  }, [user]);

  useEffect(() => {
    if (user && user.role === 'headmaster') {
      fetchSliderImages();
    }
  }, [user]);

  const fetchSliderImages = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/slider/sliders`);
      const data = await response.json();
      const sliderUrls = data.map(slider => ({
        id: slider.id,
        image: `${BASE_URL}${slider.image}`,
      }));
      setSliders(sliderUrls);
    } catch (error) {
      console.error('Error fetching slider images:', error);
      setMessage({ type: 'error', text: 'Failed to fetch slider images' });
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (!newImage) {
      setMessage({ type: 'error', text: 'Please select an image to upload' });
      return;
    }
    const formData = new FormData();
    formData.append('image', newImage);

    try {
      const response = await fetch(`${BASE_URL}/api/slider/sliders`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setMessage({ type: 'success', text: data.message });
        fetchSliderImages();
        setNewImage(null);
        setImagePreview(null);
      } else {
        setMessage({ type: 'error', text: data.message });
      }
    } catch (error) {
      console.error('Error uploading slider image:', error);
      setMessage({ type: 'error', text: 'Failed to upload slider image' });
    }
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleUpdate = async () => {
    if (!newImage || editImageId === null) {
      setMessage({ type: 'error', text: 'Please select an image to update' });
      return;
    }
    const formData = new FormData();
    formData.append('image', newImage);
    formData.append('id', editImageId);

    try {
      const response = await fetch(`${BASE_URL}/api/slider/sliders`, {
        method: 'PUT',
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setMessage({ type: 'success', text: data.message });
        fetchSliderImages();
        setNewImage(null);
        setImagePreview(null);
        setEditMode(false);
        setEditImageId(null);
      } else {
        setMessage({ type: 'error', text: data.message });
      }
    } catch (error) {
      console.error('Error updating slider image:', error);
      setMessage({ type: 'error', text: 'Failed to update slider image' });
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/api/slider/sliders/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (response.ok) {
        setMessage({ type: 'success', text: data.message });
        fetchSliderImages();
      } else {
        setMessage({ type: 'error', text: data.message });
      }
    } catch (error) {
      console.error('Error deleting slider image:', error);
      setMessage({ type: 'error', text: 'Failed to delete slider image' });
    }
  };

  return (
    user && user.role === 'headmaster' && (
      <div className="slider-page">
        <Sidebar />
        <div className="slider-container">
          <h1 className="slider-title">Slider Management</h1>
          {message && (
            <div className={`alert alert-${message.type}`}>
              {message.text}
            </div>
          )}
          <div className="card">
            <div className="card-body">
              <div className="add-slider-form">
                <h2>{editMode ? 'Edit Image' : 'Add New Image'}</h2>
                <input type="file" onChange={handleImagePreview} />
                {imagePreview && <img src={imagePreview} alt="Preview" />}
                <button onClick={editMode ? handleUpdate : handleImageUpload}>
                  {editMode ? 'Update Image' : 'Upload Image'}
                </button>
              </div>
              <div className="slider-list">
                {sliders.map((slider) => (
                  <div key={slider.id} className="slider-item">
                    <img src={slider.image} alt={`Slider ${slider.id}`} />
                    <div className="actions">
                      <button onClick={() => handleDelete(slider.id)}>Delete</button>
                      <button onClick={() => {
                        setEditMode(true);
                        setEditImageId(slider.id);
                        setImagePreview(slider.image);
                      }}>Edit</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SliderPage;
