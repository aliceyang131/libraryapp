package com.luv2code.springbootlibrary.service;

import com.luv2code.springbootlibrary.dao.BookRepository;
import com.luv2code.springbootlibrary.dao.CheckoutRepository;
import com.luv2code.springbootlibrary.dao.HistoryRepository;
import com.luv2code.springbootlibrary.entity.Book;
import com.luv2code.springbootlibrary.entity.Checkout;
import com.luv2code.springbootlibrary.entity.History;
import com.luv2code.springbootlibrary.responsemodels.ShelfCurrentLoansResponse;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Service
@Transactional
public class BookService {

    private BookRepository bookRepository;

    private CheckoutRepository checkoutRepository;
    private HistoryRepository historyRepository;

    // Constructor to inject dependencies
    public BookService(BookRepository bookRepository, CheckoutRepository checkoutRepository,
                       HistoryRepository historyRepository){
        this.bookRepository = bookRepository;
        this.checkoutRepository = checkoutRepository;
        this.historyRepository = historyRepository;
    }

    // Method to check out a book
    public Book checkoutBook (String userEmail, Long bookId) throws Exception{

        // Retrieve the book by its ID
        Optional<Book> book = bookRepository.findById(bookId);

        // Check if the user has already checked out this book
        Checkout validateCheckout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);

        // Check if the book exists and is available for checkout
        if (!book.isPresent() || validateCheckout != null ||book.get().getCopiesAvailable() <= 0){
            throw new Exception("Book doesn't exist or already checked out by user");
        }

        // Update the available copies of the book
        book.get().setCopiesAvailable(book.get().getCopiesAvailable() - 1);
        bookRepository.save(book.get());

        // Create a new Checkout record
        Checkout checkout = new Checkout(
                userEmail,
                LocalDate.now().toString(),
                LocalDate.now().plusDays(7).toString(),
                book.get().getId()
        );

        // Save the checkout record
        checkoutRepository.save(checkout);

        // Return the book that was checked out
        return book.get();
    }

    // Method to check if a user has already checked out a book
    public Boolean checkoutBookByUser(String userEmail, Long bookId){
        Checkout validateCheckout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);
        if (validateCheckout != null) {
            return true;    // The user has checked out the book
        } else {
            return false;   // The user has not checked out the book
        }
    }

    // Method to get the count of current loans (books checked out) for a user
    public int currentLoansCount(String userEmail) {
        return checkoutRepository.findBookByUserEmail(userEmail).size();
    }

    public List<ShelfCurrentLoansResponse> currentLoans(String userEmail) throws Exception {

        // List to store the response objects
        List<ShelfCurrentLoansResponse> shelfCurrentLoansResponses = new ArrayList<>();

        // Retrieve a list of checkouts for the given user
        List<Checkout> checkoutList = checkoutRepository.findBookByUserEmail(userEmail);

        // Extract book IDs from the checkouts
        List<Long> bookIdList = new ArrayList<>();
        for (Checkout i: checkoutList){
            bookIdList.add(i.getBookId());
        }

        // Retrieve books based on the extracted book IDs
        List<Book> books = bookRepository.findBooksByBookIds(bookIdList);

        // Date format for parsing date strings
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

        // Iterate through the retrieved books
        for(Book book: books) {
            // Find the corresponding checkout for the current book
            Optional<Checkout> checkout = checkoutList.stream()
                    .filter(x -> x.getBookId() == book.getId()).findFirst();

            if(checkout.isPresent()) {

                Date d1 = sdf.parse(checkout.get().getReturnDate());
                Date d2 = sdf.parse(LocalDate.now().toString());

                TimeUnit time = TimeUnit.DAYS;

                // Calculate the difference in time between return date and current date
                long difference_In_Time = time.convert(d1.getTime() - d2.getTime(),
                        TimeUnit.MILLISECONDS);

                // Add a new response object to the list
                shelfCurrentLoansResponses.add(new ShelfCurrentLoansResponse(book,(int) difference_In_Time));
            }
        }

        // Return the list of response objects
        return shelfCurrentLoansResponses;
    }

    public void returnBook (String userEmail, Long bookId) throws Exception {

        Optional<Book> book = bookRepository.findById(bookId);

        Checkout validateCheckout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);

        if(!book.isPresent() || validateCheckout == null) {
            throw new Exception("Book does not exist or not checked out by user");
        }

        book.get().setCopiesAvailable(book.get().getCopiesAvailable() +1);

        bookRepository.save(book.get());
        checkoutRepository.deleteById(validateCheckout.getId());

        History history = new History(
                userEmail,
                validateCheckout.getCheckoutDate(),
                LocalDate.now().toString(),
                book.get().getTitle(),
                book.get().getAuthor(),
                book.get().getDescription(),
                book.get().getImg()
        );

        historyRepository.save(history);

    }

    public void renewLoan(String userEmail,Long bookId) throws Exception {

        Checkout validateCheckedout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);

        if(validateCheckedout == null) {
            throw new Exception("Book does not exist or not checked out by user");
        }

        SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy-MM-dd");

        Date d1 = sdFormat.parse(validateCheckedout.getReturnDate());
        Date d2 = sdFormat.parse(LocalDate.now().toString());

        if(d1.compareTo(d2) > 0 || d1.compareTo(d2) ==0){
            validateCheckedout.setReturnDate(LocalDate.now().plusDays(7).toString());
            checkoutRepository.save(validateCheckedout);
        }
    }
}


