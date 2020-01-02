/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.adventofcode;

import com.sg.adventofcode.implementation.SolutionsImp;
import java.util.Arrays;
import java.util.List;

/**
 *
 * @author rianu
 */


public class DayOne {
    
    public static void main(String[] args) {
        
        SolutionsImp sol = new SolutionsImp();
        
        List<Integer> opcode = Arrays.asList(1, 2, 0, 2);
        System.out.println(sol.intCode(opcode));
        
    }
    
    
}
