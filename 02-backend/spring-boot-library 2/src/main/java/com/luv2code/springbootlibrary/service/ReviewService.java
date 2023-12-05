package com.luv2code.springbootlibrary.service;

import com.luv2code.springbootlibrary.dao.BookRepository;
import com.luv2code.springbootlibrary.dao.ReviewRepository;
import com.luv2code.springbootlibrary.entity.Review;
import com.luv2code.springbootlibrary.requestmodels.ReviewRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Date;
import java.time.LocalDate;
import java.util.Objects;

@Service
@Transactional
public class ReviewService {



    private ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(BookRepository bookRepository,
                         ReviewRepository reviewRepository){

        this.reviewRepository = reviewRepository;   // Dependency for accessing reviews
    }

    public void postReview(String userEmail, ReviewRequest reviewRequest) throws Exception {
        // Check if a review already exists for the user and book
        Review validateReview = reviewRepository.findByUserEmailAndBookId(userEmail, reviewRequest.getBookId());
        if(validateReview !=null){
            throw new Exception("Review already created");
        }

        Review review = new Review();
        review.setBookId(reviewRequest.getBookId());    // Set the book ID
        review.setRating(reviewRequest.getRating());    // Set the review rating
        review.setUserEmail(userEmail);                 // Set the user email

        // Set the review description if provided in the request
        if(reviewRequest.getReviewDescription().isPresent()){
            review.setReviewDescription(reviewRequest.getReviewDescription().map(
                    Objects::toString
            ).orElse(null));
        }
        review.setDate(Date.valueOf(LocalDate.now()));  // Set the current date
        reviewRepository.save(review);                  // Save the review in the repository
    }

    public Boolean userReviewListed(String userEmail, Long bookId){
        // Check if a review exists for the user and book
        Review validateReview = reviewRepository.findByUserEmailAndBookId(userEmail,bookId);
        if (validateReview !=null) {
            return true;
        }else {
            return false; // Return true if a review exists, false otherwise
        }
    }
}
