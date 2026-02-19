import React, { useState } from 'react';
import './GiveReviews.css'; // Importation du CSS

const GiveReviews = () => {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("0");

    return (
        <div className="review-container">
            <h2>Give Your Review</h2>
            <div className="form-group">
                <label>Your Review:</label>
                <textarea 
                    className="form-control" 
                    rows="4"
                    value={review} 
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Tell us about your consultation..."
                />
            </div>
            <div className="form-group">
                <label>Rating:</label>
                <select className="form-control" value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="0">Select Stars</option>
                    <option value="5">5 Stars - Excellent</option>
                    <option value="4">4 Stars - Very Good</option>
                    <option value="3">3 Stars - Good</option>
                </select>
            </div>
            <button 
                className="btn-submit" 
                disabled={!review || rating === "0"}
            >
                Submit Review
            </button>
        </div>
    );
};

export default GiveReviews;