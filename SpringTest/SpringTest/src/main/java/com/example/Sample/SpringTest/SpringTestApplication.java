package com.example.Sample.SpringTest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// application.properties added to .gitignore

@SpringBootApplication
public class SpringTestApplication {

	public static void main(String[] args) {
		
		SpringApplication.run(SpringTestApplication.class, args);
	}

<<<<<<< Updated upstream
	@Bean
	public WebMvcConfigurer corsConfigurer(){
		return new WebMvcConfigurer() {
			public void addCorsMappings(CorsRegistry corsRegistry){
				corsRegistry.addMapping("/**")
						.allowedMethods("*")						// allow all methods get, put, post
						.allowedOrigins("http://localhost:3000");
			}
		};
	}
=======


>>>>>>> Stashed changes
}
