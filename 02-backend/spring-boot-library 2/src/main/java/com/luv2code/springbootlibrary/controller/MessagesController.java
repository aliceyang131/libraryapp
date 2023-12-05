package com.luv2code.springbootlibrary.controller;

import com.luv2code.springbootlibrary.entity.Message;
import com.luv2code.springbootlibrary.requestmodels.AdminQuestionRequest;
import com.luv2code.springbootlibrary.requestmodels.ReviewRequest;
import com.luv2code.springbootlibrary.service.MessagesService;
import com.luv2code.springbootlibrary.utils.ExtractJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/messages")
public class MessagesController {

    private MessagesService messagesService;

    @Autowired
    public MessagesController(MessagesService messagesService) {
        this.messagesService = messagesService;
    }

    @PostMapping("/secure/add/message")
    public void postMessage(@RequestHeader(value = "Authorization") String token,
                            @RequestBody Message messageRequest) throws Exception{
        String userEmail = ExtractJWT.payloadJWTExtraction(token,"\"sub\"");
        messagesService.postMessage(messageRequest, userEmail);
    }

    @PutMapping("/secure/admin/message")
    public void putMessage(@RequestHeader(value = "Authorization") String token,
                           @RequestBody AdminQuestionRequest adminQuestionRequest) throws Exception{

        // Extract user email from the JWT token
        String userEmail = ExtractJWT.payloadJWTExtraction(token,"\"sub\"");

        // Extract user type from the JWT token
        String admin = ExtractJWT.payloadJWTExtraction(token,"\"userType\"");

        // Check if the user is an admin
        if (admin == null || !admin.equals("admin")) {
            throw new Exception("Administration page only");
        }

        // Call the service to handle updating the message with administrative details
        messagesService.putMessage(adminQuestionRequest,userEmail);
    }
}
