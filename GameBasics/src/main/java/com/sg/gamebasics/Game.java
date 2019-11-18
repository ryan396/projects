/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.gamebasics;

import javax.swing.JFrame;

/**
 *
 * @author rianu
 */
public class Game {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Mini Tennis");
        frame.setSize(300, 300);
        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}
