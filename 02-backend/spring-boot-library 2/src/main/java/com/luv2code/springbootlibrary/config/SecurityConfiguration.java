package com.luv2code.springbootlibrary.config;

import com.okta.spring.boot.oauth.Okta;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.accept.ContentNegotiationStrategy;
import org.springframework.web.accept.HeaderContentNegotiationStrategy;
import org.springframework.web.cors.CorsConfiguration;

import java.util.Arrays;


@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        // Disable Cross Site Request Forgery
        http.csrf().disable();

        // Protect endpoints at /api/<type>/secure
        http.authorizeRequests(configurer ->
                        configurer
                                .antMatchers("/api/books/secure/**",
                                        "/api/reviews/secure/**",
                                        "/api/messages/secure/**",
                                        "/api/admin/secure/**")
                                .authenticated())

                .oauth2ResourceServer()
                .jwt();




        // Add CORS filters
        http.cors().configurationSource(request -> {
            CorsConfiguration cors = new CorsConfiguration();
            cors.setAllowedOrigins(Arrays.asList("http://localhost:3000")); // Add any other allowed origins
            cors.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS")); // Adjust allowed HTTP methods
            cors.setAllowedHeaders(Arrays.asList("*")); // Adjust allowed headers
            cors.setAllowCredentials(true); // Allow cookies and authentication headers
            cors.setMaxAge(3600L); // Cache preflight responses for 1 hour
            return cors;
        });


        // Add content negotiation strategy
        http.setSharedObject(ContentNegotiationStrategy.class,
                new HeaderContentNegotiationStrategy());

        // Force a non-empty response body for 401's to make the response friendly
        Okta.configureResourceServer401ResponseBody(http);

        return http.build();
    }

}









