package com.luv2code.springbootlibrary.service;

import com.luv2code.springbootlibrary.dao.BookRepository;
import com.luv2code.springbootlibrary.dao.CheckoutRepository;
import com.luv2code.springbootlibrary.dao.ReviewRepository;
import com.luv2code.springbootlibrary.entity.Book;
import com.luv2code.springbootlibrary.requestmodels.AddBookRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class AdminService {

    private BookRepository bookRepository;
    private ReviewRepository reviewRepository;
    private CheckoutRepository checkoutRepository;

    public AdminService(BookRepository bookRepository,
                        ReviewRepository reviewRepository,
                        CheckoutRepository checkoutRepository){
        this.bookRepository = bookRepository;
        this.reviewRepository = reviewRepository;
        this.checkoutRepository = checkoutRepository;
    }

    public void increaseBookQuantity(Long bookId) throws Exception {

        // Retrieve the book with the given ID from the repository
        Optional<Book> book = bookRepository.findById(bookId);

        // Check if the book exists
        if(!book.isPresent()){
            throw new Exception("Book not found");
        }

        // Increase both available copies and total copies of the book
        book.get().setCopiesAvailable(book.get().getCopiesAvailable()+1);
        book.get().setCopies(book.get().getCopies()+1);

        // Save the updated book back to the repository
        bookRepository.save(book.get());
    }

    public void decreaseBookQuantity(Long bookId) throws Exception{

        // Retrieve the book with the given ID from the repository
        Optional<Book> book = bookRepository.findById(bookId);

        // Check if the book is not found or if the available quantity is already zero
        if(!book.isPresent() || book.get().getCopiesAvailable() <= 0 || book.get().getCopies() <=0) {
            throw new Exception("Book not found or quantity locked");
        }

        // Decrease the available quantity and total quantity of the book by 1
        book.get().setCopiesAvailable(book.get().getCopiesAvailable()-1);
        book.get().setCopies(book.get().getCopies() -1);

        // Save the updated book information back to the repository
        bookRepository.save(book.get());
    }

    public void postBook(AddBookRequest addBookRequest) {

        // Create a new Book instance
        Book book = new Book();

        // Set book properties based on the data from the request
        book.setTitle(addBookRequest.getTitle());
        book.setAuthor(addBookRequest.getAuthor());
        book.setDescription(addBookRequest.getDescription());
        book.setCopies(addBookRequest.getCopies());
        book.setCopiesAvailable(addBookRequest.getCopies());
        book.setCategory(addBookRequest.getCategory());
        book.setImg(addBookRequest.getImg());

        // Save the new book to the repository
        bookRepository.save(book);
    }

    public void deleteBook(Long bookId) throws Exception{

        // Find the book by its ID
        Optional<Book> book = bookRepository.findById(bookId);

        // Check if the book exists
        if(!book.isPresent()) {
            throw new Exception("Book not found");
        }

        // Delete the book
        bookRepository.delete(book.get());

        // Delete all checkouts associated with the book
        checkoutRepository.deleteAllByBookId(bookId);

        // Delete all reviews associated with the book
        reviewRepository.deleteAllByBookId(bookId);
    }
}
