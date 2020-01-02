/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.adventofcode.implementation;

import java.util.List;

/**
 *
 * @author rianu
 */
public class SolutionsImp {

    public int getFuelRequirements(int mass) {
        
        /*
            See link below for problem description: 
            https://adventofcode.com/2019/day/1
        */
        
        return (int) (Math.floor(mass / 3) - 2);
        
    }
    
    public List<Integer> intCode(List<Integer> opcode) {
        
        /*
            See link below for problem description: 
            https://adventofcode.com/2019/day/2 
        */
        
        int opcodeFunction = opcode.get(0);
        int opCodePositionOne = opcode.get(1);
        int opCodePositionTwo = opcode.get(2);
        int opCodeOutputPosition = opcode.get(3);
        
        int opCodeOutput = 0;
        
        if (opcodeFunction == 1) {
            opCodeOutput = opcode.get(opCodePositionOne) + opcode.get(opCodePositionTwo);
            opcode.set(opCodeOutputPosition, opCodeOutput);
            
        } else if (opcodeFunction == 2) {
            opCodeOutput = opcode.get(opCodePositionOne) * opcode.get(opCodePositionTwo);
            opcode.set(opCodeOutputPosition, opCodeOutput);
        }
        
        return opcode;
        
    }
    
    
    
}
