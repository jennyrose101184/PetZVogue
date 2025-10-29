import React, { useEffect, useState } from 'react';
import './Reviews.css';

const GOOGLE_PLACE_ID = 'ChIJLfvqq3HTlzMRRvydG91RgMk';
const GOOGLE_API_KEY = 'AIzaSyBc8Y1X6d23SkHztVIi6qQcmNlyqxow0uc';

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(true);
	const sliderRef = React.useRef(null);

	useEffect(() => {
		async function fetchReviews() {
			try {
				const res = await fetch('https://petzvoguegrooming.com/api/reviews');
				const data = await res.json();
				setReviews(data.slice(0, 15)); // Show top 15 reviews only
			} catch (err) {
				setReviews([]);
			} finally {
				setLoading(false);
			}
		}
		fetchReviews();
	}, []);

	// Auto-scroll slider
	useEffect(() => {
		if (!reviews.length) return;
		const slider = sliderRef.current;
		let scrollAmount = 0;
		const slideWidth = slider ? slider.firstChild?.offsetWidth || 350 : 350;
		const interval = setInterval(() => {
			if (slider) {
				scrollAmount += slideWidth;
				if (scrollAmount >= slider.scrollWidth - slider.offsetWidth) {
					scrollAmount = 0;
				}
				slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
			}
		}, 3000); // Change slide every 3 seconds
		return () => clearInterval(interval);
	}, [reviews]);

	if (loading) return <div>Loading reviews...</div>;
	if (!reviews.length) return <div>No reviews found.</div>;

	return (
		<section id="reviews" className="reviews-section">
			<h2 className="reviews-title">Customer Reviews</h2>
			<div className="reviews-slider" ref={sliderRef}>
				{reviews.map((review, idx) => (
					<div className="review-slide" key={idx}>
						<div className="review-author">
							<img src={review.profile_photo_url} alt={review.author_name} className="review-avatar" />
							<span className="review-name">{review.author_name}</span>
							<span className="review-rating">{'★'.repeat(review.rating)}</span>
						</div>
						<div className="review-text">{review.text}</div>
						<div className="review-date">{new Date(review.time * 1000).toLocaleDateString()}</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Reviews;
