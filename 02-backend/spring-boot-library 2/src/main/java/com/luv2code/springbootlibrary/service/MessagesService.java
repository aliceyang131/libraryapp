package com.luv2code.springbootlibrary.service;

import com.luv2code.springbootlibrary.dao.MessageRepository;
import com.luv2code.springbootlibrary.entity.Message;
import com.luv2code.springbootlibrary.requestmodels.AdminQuestionRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class MessagesService {

    private MessageRepository messageRepository;

    @Autowired
    public MessagesService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public void postMessage(Message messageRequest, String userEmail) {

        // Create a new Message object using the title and question from the messageRequest
        Message message = new Message(messageRequest.getTitle(), messageRequest.getQuestion());

        // Set the user email for the message
        message.setUserEmail(userEmail);

        // Save the message to the database using the messageRepository
        messageRepository.save(message);
    }

    public void putMessage(AdminQuestionRequest adminQuestionRequest, String userEmail) throws Exception {

        // Retrieve the message by its ID from the repository
        Optional<Message> message =messageRepository.findById(adminQuestionRequest.getId());

        // Check if the message exists
        if(!message.isPresent()){
            throw new Exception("Message not found");
        }

        // Update the retrieved message with administrative information
        message.get().setAdminEmail(userEmail);
        message.get().setResponse(adminQuestionRequest.getResponse());
        message.get().setClosed(true);

        // Save the updated message back to the repository
        messageRepository.save(message.get());
    }
}
