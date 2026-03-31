
package main;

import java.util.Scanner;

public class JatekKezelo {
    private Csiga[] csigak;
    
    public JatekKezelo(){
        csigak = new Csiga[3];
        csigak[0] = new Csiga(Szinek.PIROS);
        csigak[1] = new Csiga(Szinek.KEK);
        csigak[2] = new Csiga(Szinek.ZOLD);
    }
    
    public void verseny(){
        String tipp = fogad();
        for (int i = 0; i < 5; i++) {
            for (Csiga csiga : csigak) {
                csiga.lepes();
            }
            
        }
        for (Csiga csiga : csigak) {
                csiga.kiRajzol();
            }
        
        gyoztes(tipp);
    }
    
    private String fogad(){
        Scanner scr = new Scanner(System.in);
        System.out.println("Melyik csigára fogadsz(piros, kek, zold)?");
        String tipp = scr.next();
        return tipp;
    }

    private void gyoztes(String tipp) {
        Csiga nyertes = csigak[0];
        for (Csiga csiga : csigak) {
            if(csiga.getTavolsag() > nyertes.getTavolsag()){
                nyertes = csiga;
            }
        }
        String visszajelzes = "";
        if (tipp.equalsIgnoreCase(nyertes.getSzin().name())) {
            visszajelzes = "Nyertél!";
        } else {
            visszajelzes = "Sajnos vesztettél.";
        }
        System.out.printf("Győztes: %s. %s", nyertes.getSzin(), visszajelzes);
    }
}
