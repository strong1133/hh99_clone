package com.hh99_clone.hh99_clone.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry corsRegistry){
        corsRegistry
                    .addMapping("/api/**")
                    .allowedOrigins("http://localhost:3000")
                    .allowedOrigins("http://localhost:3000")
                    .allowedOrigins("http://localhost:8080")
                    .allowedOrigins("http://localhost:3306")
                    .allowedOrigins("http://strong1133.shop")
                    .allowedOrigins("http://**")
                    .allowedOrigins("https://**")
                .allowedMethods(
                        HttpMethod.GET.name(),
                        HttpMethod.HEAD.name(),
                        HttpMethod.POST.name(),
                        HttpMethod.PUT.name(),
                        HttpMethod.DELETE.name());
        ;
                ;
    }
}
