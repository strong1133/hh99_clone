package com.hh99_clone.hh99_clone.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class CorsConfig {


   @Bean
   public CorsFilter corsFilter() {
      UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
      CorsConfiguration config = new CorsConfiguration();
      config.setAllowCredentials(true);
      config.addAllowedOrigin("http://localhost:3000");
      config.addAllowedOrigin("http://localhost:8080");
      config.addAllowedOrigin("http://localhost:3306");
      config.addAllowedOrigin("http://strong1133.shop");
      config.addAllowedOrigin("http://**");
      config.addAllowedOrigin("https://**");

      config.addAllowedHeader("*");
      config.addAllowedMethod("*");

      source.registerCorsConfiguration("/api/**", config);
      source.registerCorsConfiguration("/**", config);
      return new CorsFilter(source);
   }

}
