package com.mahmoudabdelazimportfolio.controllers;

import com.mahmoudabdelazimportfolio.model.Social;
import com.mahmoudabdelazimportfolio.services.SocialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/social")
public class SocialController {

    private final SocialService socialService;

    @Autowired
    public SocialController(SocialService socialService) {
        this.socialService = socialService;
    }

    @GetMapping
    public ResponseEntity<List<Social>> getSocial() {
        return ResponseEntity.ok(socialService.getSocial());
    }

    @PostMapping
    public ResponseEntity<Boolean> addSocial(@RequestBody Social social) {
        socialService.addSocial(social);
        return ResponseEntity.ok(true);
    }

    @DeleteMapping
    public ResponseEntity<Boolean> deleteSocial(@RequestBody Social social) {
        socialService.deleteSocial(social);
        return ResponseEntity.ok(true);
    }

    @PutMapping
    public ResponseEntity<Boolean> updateSocial(@RequestBody Social social) {
        socialService.updateSocial(social);
        return ResponseEntity.ok(true);
    }
}
