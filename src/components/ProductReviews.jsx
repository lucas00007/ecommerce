import React, { useState } from 'react';
import { Star, User } from 'lucide-react';
import Button from './Button';
import { useResponsive } from '../hooks/useResponsive';

const ProductReviews = ({ productId, user }) => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      userName: 'Sarah M.',
      rating: 5,
      comment: 'Absolutely love this! The quality is amazing and it keeps me so warm.',
      date: '2024-01-15'
    },
    {
      id: 2,
      userName: 'John D.',
      rating: 4,
      comment: 'Great product, fits perfectly. Shipping was fast too!',
      date: '2024-01-10'
    }
  ]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const { isMobile } = useResponsive();

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please login to leave a review');
      return;
    }
    const review = {
      id: Date.now(),
      userName: user.name || 'Anonymous',
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };
    setReviews([review, ...reviews]);
    setNewReview({ rating: 5, comment: '' });
    setShowReviewForm(false);
  };

  const StarRating = ({ rating, onRate, interactive = false }) => (
    <div style={{ display: 'flex', gap: '5px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={interactive ? 24 : 18}
          fill={star <= rating ? '#ffc107' : 'none'}
          color={star <= rating ? '#ffc107' : '#ddd'}
          style={{ cursor: interactive ? 'pointer' : 'default' }}
          onClick={() => interactive && onRate(star)}
        />
      ))}
    </div>
  );

  return (
    <div style={{ marginTop: '30px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '15px' : '0'
      }}>
        <div>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>Customer Reviews</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <StarRating rating={Math.round(averageRating)} />
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{averageRating}</span>
            <span style={{ color: '#666', fontSize: '14px' }}>({reviews.length} reviews)</span>
          </div>
        </div>
        {!showReviewForm && (
          <Button 
            onClick={() => setShowReviewForm(true)}
            style={{ fontSize: isMobile ? '14px' : '16px' }}
          >
            Write a Review
          </Button>
        )}
      </div>

      {showReviewForm && (
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '10px',
          marginBottom: '20px'
        }}>
          <h4 style={{ margin: '0 0 15px 0' }}>Write Your Review</h4>
          <form onSubmit={handleSubmitReview}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Rating
              </label>
              <StarRating 
                rating={newReview.rating} 
                onRate={(rating) => setNewReview({ ...newReview, rating })}
                interactive
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Your Review
              </label>
              <textarea
                required
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                placeholder="Share your experience with this product..."
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  minHeight: '100px',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Button type="submit">Submit Review</Button>
              <Button 
                type="button" 
                variant="secondary" 
                onClick={() => setShowReviewForm(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {reviews.map((review) => (
          <div
            key={review.id}
            style={{
              padding: '15px',
              border: '1px solid #e0e0e0',
              borderRadius: '10px',
              backgroundColor: 'white'
            }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginBottom: '10px',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '10px' : '0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#007bff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <User size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '600' }}>{review.userName}</div>
                  <StarRating rating={review.rating} />
                </div>
              </div>
              <div style={{ color: '#666', fontSize: '14px' }}>
                {new Date(review.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
            <p style={{ margin: 0, color: '#333', lineHeight: '1.6' }}>
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
