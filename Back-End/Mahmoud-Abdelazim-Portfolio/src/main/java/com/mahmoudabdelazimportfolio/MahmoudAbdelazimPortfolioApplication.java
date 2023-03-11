package com.mahmoudabdelazimportfolio;

import com.mahmoudabdelazimportfolio.config.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
        FileStorageProperties.class
})
public class MahmoudAbdelazimPortfolioApplication {

    public static void main(String[] args) {
        SpringApplication.run(MahmoudAbdelazimPortfolioApplication.class, args);
    }

}
