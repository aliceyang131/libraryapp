package com.luv2code.springbootlibrary.dao;

import com.luv2code.springbootlibrary.entity.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CheckoutRepository extends JpaRepository<Checkout,Long> {

    Checkout findByUserEmailAndBookId(String userEmail, Long bookId);

    List<Checkout> findBookByUserEmail(String userEmail);

    // Indicate that this method is performing a modifying operation (e.g., delete)
    // Define a JPQL (Java Persistence Query Language) query for deletion
    // Method to delete records in the Checkout entity based on the provided bookId
    @Modifying
    @Query("delete from Checkout where book_id in :book_id")
    void deleteAllByBookId(@Param("book_id") Long bookId);
}
