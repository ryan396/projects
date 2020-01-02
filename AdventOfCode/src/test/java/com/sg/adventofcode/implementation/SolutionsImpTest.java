/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.adventofcode.implementation;

import java.util.Arrays;
import java.util.List;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author rianu
 */
public class SolutionsImpTest {
    
    public SolutionsImp sol = new SolutionsImp();
    
    public SolutionsImpTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

   @Test
   public void testGetFuelReq() {
       
       
       assertEquals(2, sol.getFuelRequirements(12));
       assertEquals(2, sol.getFuelRequirements(14));
       assertEquals(654, sol.getFuelRequirements(1969));
       assertEquals(33583, sol.getFuelRequirements(100756));
       
   }
   
   @Test
   public void testIntCode() {
       
       //test addition opcode
       List<Integer> opcode = Arrays.asList(1,9,10,3,2,3,11,0,99,30,40,50);
       List<Integer> opcodeExpected = Arrays.asList(1,9,10,70,2,3,11,0,99,30,40,50);
       
       List<Integer> newOpCode = sol.intCode(opcode);
       
       assertEquals(newOpCode, opcodeExpected);
       
       //test multiplication opcode
       
       List<Integer> opcode1 = Arrays.asList(2,3,0,3,99);
       List<Integer> opcodeExpected1 = Arrays.asList(2,3,0,6,99);
       
       List<Integer> newOpCode1 = sol.intCode(opcode1);
       
       assertEquals(newOpCode1, opcodeExpected1);
       
   }
    
}
