package com.luv2code.springbootlibrary.controller;


import com.luv2code.springbootlibrary.requestmodels.ReviewRequest;
import com.luv2code.springbootlibrary.service.ReviewService;
import com.luv2code.springbootlibrary.utils.ExtractJWT;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://locolhost:3000")   // Allowing requests from a specific origin
@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    private ReviewService reviewService;

    public ReviewController (ReviewService reviewService){this.reviewService = reviewService;}

    // Get the list of reviews by the user for a specific book
    @GetMapping("/secure/user/book")
    public Boolean reviewBookByUser(@RequestHeader(value = "Authorization") String token,
                                    @RequestParam Long bookId) throws Exception{
        // Extract user email from the JWT token's subject claim
        String useEmail = ExtractJWT.payloadJWTExtraction(token,"\"sub\"");

        if(useEmail == null) {
            throw new Exception("User email is missing");
        }

        // Call the review service to check if the user has reviewed the book
        return reviewService.userReviewListed(useEmail, bookId);
    }

    // Handling a POST request to create a review
    @PostMapping("/secure")
    public void postReview(@RequestHeader(value = "Authorization") String token,
                           @RequestBody ReviewRequest reviewRequest) throws Exception {
        // Extract user email from the JWT token's subject claim
        String userEmail = ExtractJWT.payloadJWTExtraction(token,"\"sub\"");
        if (userEmail == null) {
            throw new Exception("User email is missing");
        }

        // Call the review service to create a review
        reviewService.postReview(userEmail, reviewRequest);
    }
}
