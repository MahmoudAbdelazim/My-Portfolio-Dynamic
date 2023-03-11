package com.mahmoudabdelazimportfolio.controllers;

import com.mahmoudabdelazimportfolio.model.About;
import com.mahmoudabdelazimportfolio.services.AboutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/about")
public class AboutController {
    private final AboutService aboutService;

    @Autowired
    public AboutController(AboutService aboutService) {
        this.aboutService = aboutService;
    }

    @GetMapping
    public ResponseEntity<About> getAbout() {
        return ResponseEntity.ok().body(aboutService.getAbout());
    }

    @PostMapping
    public ResponseEntity<Boolean> updateAbout(@RequestBody About about) {
        aboutService.updateAbout(about);
        return ResponseEntity.ok().body(true);
    }
}
