package com.example.WorldBankData.controller;

import com.example.WorldBankData.model.ViewData;
import com.example.WorldBankData.repo.ViewDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
public class ViewDataController {

    @Autowired
    ViewDataRepository viewDataRepository;

    @GetMapping("/")
    public ResponseEntity<String> helloWorld() {
        try {
            return new ResponseEntity<>("Hello World", HttpStatus.OK);
        } catch(Exception ex) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/view")
    public ResponseEntity<List<ViewData>> getAllViews() {
        try {
            List<ViewData> viewsList = new ArrayList<>();
            viewDataRepository.findAll().forEach(viewsList::add);
            return new ResponseEntity<>(viewsList, HttpStatus.OK);
        } catch(Exception ex) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/view/{id}")
    public ResponseEntity<ViewData> getViewById(@PathVariable Long id) {
        Optional<ViewData> viewDataObj = viewDataRepository.findById(id);
        try{
            if (viewDataObj.isPresent()) {
                return new ResponseEntity<>(viewDataObj.get(), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch(Exception ex) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/view")
    public ResponseEntity<ViewData> addView(@RequestBody ViewData viewData) {
        try {
            if (viewData.getName() != null && viewData.getIndicator() != null && viewData.getEndDate() != null
                    && viewData.getStartDate() != null && viewData.getChartType() != null) {
                ViewData viewDataObj = viewDataRepository.save(viewData);
                return new ResponseEntity<>(viewDataObj, HttpStatus.CREATED);
            }

            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/view/{id}")
    public ResponseEntity<ViewData> updateView(@PathVariable Long id, @RequestBody ViewData newViewData) {
        try {
            Optional<ViewData> oldViewData = viewDataRepository.findById(id);

            if (oldViewData.isPresent()) {
                System.out.println("THE OLD DATA IS PRESENT \n\n\n");
                ViewData viewToBeUpdated = oldViewData.get();
                boolean dataFormatIsValid =  viewToBeUpdated.getName() != null && viewToBeUpdated.getIndicator() != null && viewToBeUpdated.getEndDate() != null
                        && viewToBeUpdated.getStartDate() != null && viewToBeUpdated.getChartType() != null;

                if (dataFormatIsValid) {
                    // update all the fields
                    viewToBeUpdated.setName(newViewData.getName());
                    viewToBeUpdated.setCountry(newViewData.getCountry());
                    viewToBeUpdated.setChartType(newViewData.getChartType());
                    viewToBeUpdated.setIndicator(newViewData.getIndicator());
                    viewToBeUpdated.setStartDate(newViewData.getStartDate());
                    viewToBeUpdated.setEndDate(newViewData.getEndDate());

                    ViewData updatedViewData = viewDataRepository.save(viewToBeUpdated);
                    return new ResponseEntity<>(updatedViewData, HttpStatus.OK);
                }
            }
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/view/{id}")
    public ResponseEntity<HttpStatus> deleteView(@PathVariable Long id) {

        Optional<ViewData> viewDataObj = viewDataRepository.findById(id);
        try{
            if (viewDataObj.isPresent()) {
                viewDataRepository.deleteById(id);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch(Exception ex) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
